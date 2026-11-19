(() => {
  const currentRevision = document.querySelector('meta[name="app-revision"]').content;
  const updateDialog = document.getElementById("updateDialog");
  const updateSessionKey = "quiz_update_session";
  let updateSession = {};
  try {
    updateSession = JSON.parse(sessionStorage.getItem(updateSessionKey)) || {};
  } catch {} // Keep updates usable when browser storage is unavailable.

  let availableRelease;
  let checkingRelease = false;

  function saveUpdateSession() {
    try {
      sessionStorage.setItem(updateSessionKey, JSON.stringify(updateSession));
    } catch {} // The in-memory decision still applies until navigation.
  }

  function showAvailableUpdate() {
    if (!availableRelease || updateSession.applied || updateDialog.open
      || updateSession.dismissed === availableRelease.revision || document.body.dataset.updateReady !== "true") return;

    document.getElementById("updateVersion").textContent = `Version ${availableRelease.version}`;
    const notes = availableRelease.notes.map(note => {
      const item = document.createElement("li");
      item.textContent = note;
      return item;
    });
    document.getElementById("updateNotes").replaceChildren(...notes);
    updateDialog.showModal();
  }

  async function checkForUpdate() {
    if (checkingRelease || updateSession.applied || updateDialog.open || document.hidden) return;

    checkingRelease = true;
    try {
      const manifestUrl = new URL("release.json", window.location.href);
      manifestUrl.searchParams.set("check", Date.now());
      const response = await fetch(manifestUrl, { cache: "no-store" });
      if (!response.ok) return;
      const release = await response.json();
      if (typeof release.revision !== "string" || !/^[a-f0-9]{40}$/.test(release.revision)
        || typeof release.version !== "string" || !/^\d+\.\d+\.\d+$/.test(release.version) || !Array.isArray(release.notes)
        || !release.notes.every(note => typeof note === "string")) return;

      availableRelease = release.revision === currentRevision ? undefined : release;
      showAvailableUpdate();
    } catch {
      // Keep the current app available if the deployment check fails.
    } finally {
      checkingRelease = false;
    }
  }

  function cancelUpdate() {
    updateSession.dismissed = availableRelease.revision;
    saveUpdateSession();
    updateDialog.close();
  }

  updateDialog.addEventListener("cancel", event => {
    event.preventDefault();
    cancelUpdate();
  });
  document.getElementById("cancelUpdateBtn").addEventListener("click", cancelUpdate);
  document.getElementById("applyUpdateBtn").addEventListener("click", () => {
    if (!availableRelease || document.body.dataset.updateReady !== "true" || updateSession.applied) return;

    updateSession.applied = true;
    saveUpdateSession();
    const url = new URL(window.location.href);
    url.searchParams.set("release", availableRelease.revision);
    window.location.replace(url);
  });

  if (!/^[a-f0-9]{40}$/.test(currentRevision)) return;
  for (const link of document.querySelectorAll("a[data-release-link]")) {
    const url = new URL(link.href);
    url.searchParams.set("release", currentRevision);
    link.href = url.href;
  }

  checkForUpdate();
  window.setInterval(checkForUpdate, 60_000);
  document.addEventListener("visibilitychange", checkForUpdate);
  document.addEventListener("quiz:view-changed", showAvailableUpdate);
})();

# Quiz site releases

GitHub Pages publishes the root of `main` after a successful build. Validate changes before pushing to `main`. Every deployed commit gets its own revision from GitHub Pages. The public app version and the revision serve different purposes.

- The first public app version is `1.0.0`. For each significant bug fix, UI or UX change, or app integration, increase only the patch component in `_data/release.json` by one. Releases that only add or edit lessons, questions, or study guide content keep the app version.
- Update the notes in `_data/release.json` with short, user-facing bullets for the deployment. Use one sentence per bullet and describe what students or teachers can do or what was fixed. For maintenance with no visible changes, use a brief maintenance note. Keep commit hashes, implementation details, and internal discussions out of the notes.
- Keep `release.json`, both pages’ revision metadata, and the versioned script URLs tied to the same GitHub Pages build revision. Detect deployments by revision so lesson-only releases can reach students at the same app version.
- Offer Update or Cancel on the landing page or quiz dashboard after checking the deployed manifest. Never reload the app automatically or interrupt a quiz. Cancel dismisses that release for the current tab session. Apply at most one accepted update per tab session and preserve the current page, selected topic, attempts, and scores.
- Before publication, verify the affected quiz flows and simulate receiving a new manifest while a quiz is open. Confirm the dashboard shows the new version and notes, Cancel leaves the page in place, and Update loads the new revision with progress intact. After publication, check that the deployed manifest and HTML agree.

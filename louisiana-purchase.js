// Chapter 1 student reader, pp. 2–14, and adapted Teacher Guide assessment, pp. 37–40.
// Based on an original work of the Core Knowledge® Foundation and the additions
// from the Louisiana Department of Education, under CC BY-NC-SA 4.0.
// The adaptations use the same license: https://creativecommons.org/licenses/by-nc-sa/4.0/
// Neither organization endorses this quiz.
const LOUISIANA_PURCHASE_PARTS = [
  { id: 1, title: "Part 1: Moving West" },
  { id: 2, title: "Part 2: The Louisiana Purchase" },
  { id: 3, title: "Part 3: The Expedition" },
  { id: 4, title: "Part 4: Sacagawea" },
  { id: 5, title: "Part 5: Reaching the West" },
  { id: 6, title: "Part 6: The Return Trip" }
];

const LOUISIANA_PURCHASE_QUESTIONS = [
  {
    part: 1,
    q: "How did some settlers travel west around 1800?",
    options: ["By train or bus", "On foot or by flatboat", "By car or truck", "By plane or helicopter"],
    correct: 1,
    rationale: "Some settlers walked along trails. Others floated down rivers on flatboats."
  },
  {
    part: 1,
    q: "Which river marked the western edge of the United States around 1800?",
    options: ["Columbia River", "Missouri River", "Yellowstone River", "Mississippi River"],
    correct: 3,
    rationale: "Around 1800, the United States stretched from the Atlantic coast to the Mississippi River."
  },
  {
    part: 1,
    q: "Who already lived in much of the land that European countries claimed in North America?",
    options: ["French army officers", "American settlers from New Orleans", "Many different Native American peoples", "British traders from the Atlantic coast"],
    correct: 2,
    rationale: "Many Native American peoples already lived on the land that European governments claimed."
  },
  {
    part: 2,
    q: "Why was the port of New Orleans important to farmers?",
    options: ["They shipped goods down the Mississippi River through the port.", "They grew all their crops in the city.", "They bought horses there to cross the Rocky Mountains.", "They used it to reach the Pacific Ocean directly."],
    correct: 0,
    rationale: "Farmers sent goods down the Mississippi River. At its mouth, New Orleans gave those goods a way to reach other markets."
  },
  {
    part: 2,
    q: "Why was President Jefferson worried when France took control of Louisiana?",
    options: ["France might stop Americans from crossing the Rocky Mountains.", "France might move the port to St. Louis.", "France might block Americans from using the port of New Orleans.", "France might stop Americans from fishing in the Atlantic."],
    correct: 2,
    rationale: "Jefferson worried that France could close the port to American trade."
  },
  {
    part: 2,
    q: "Which land did the United States buy from France in 1803?",
    options: ["Canada", "The Louisiana Territory", "Florida", "The Oregon Territory"],
    correct: 1,
    rationale: "The United States bought the Louisiana Territory in 1803. This deal is called the Louisiana Purchase."
  },
  {
    part: 2,
    q: "Why was France willing to sell the Louisiana Territory?",
    options: ["It wanted to buy land from the United States.", "It wanted the United States to build a port.", "It needed horses for an expedition.", "It needed money for costly wars."],
    correct: 3,
    rationale: "France was fighting costly wars and needed money. The United States paid $15 million for the territory."
  },
  {
    part: 2,
    q: "Who was president when the United States made the Louisiana Purchase?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
    correct: 0,
    rationale: "Thomas Jefferson was president when the United States bought the Louisiana Territory."
  },
  {
    part: 3,
    q: "Who led the Corps of Discovery?",
    options: ["York and Thomas Jefferson", "Thomas Jefferson and William Clark", "Meriwether Lewis and York", "Meriwether Lewis and William Clark"],
    correct: 3,
    rationale: "Jefferson chose Meriwether Lewis to lead the expedition. Lewis asked William Clark to lead it with him."
  },
  {
    part: 3,
    q: "Why did the expedition set out from near St. Louis?",
    options: ["The city was near the Missouri River, which the group followed west.", "The city was near the Pacific Ocean.", "The city was high in the Rocky Mountains.", "The city was at the mouth of the Columbia River."],
    correct: 0,
    rationale: "The Corps of Discovery set out in boats on the Missouri River near St. Louis in May 1804."
  },
  {
    part: 3,
    q: "Why did the explorers pack things like beads and fishhooks?",
    options: ["To mark the places where they camped", "To give as gifts and trade with Native American peoples", "To repair their boats after storms", "To collect samples of plants"],
    correct: 1,
    rationale: "The group brought gifts and goods for trade to build friendly relationships with Native American peoples they met."
  },
  {
    part: 3,
    q: "Who was York?",
    options: ["A man enslaved by William Clark who helped the expedition", "The president who bought the Louisiana Territory", "A French trader who sold the territory", "The Shoshone leader who traded horses"],
    correct: 0,
    rationale: "York joined the expedition and helped it as a hunter. William Clark enslaved him."
  },
  {
    part: 3,
    q: "Why did the expedition build a fort near the Mandan villages?",
    options: ["To start a farm", "To build a port for ocean ships", "To have a place to spend the winter", "To hide their journals"],
    correct: 2,
    rationale: "The explorers built Fort Mandan and spent the winter there before continuing west."
  },
  {
    part: 4,
    q: "How did Sacagawea help the explorers talk with Native American people they met?",
    options: ["She drew maps of villages.", "She wrote letters to President Jefferson.", "She translated what people said.", "She built canoes for river travel."],
    correct: 2,
    rationale: "Sacagawea was a Shoshone woman who helped as an interpreter. An interpreter translates between languages."
  },
  {
    part: 4,
    q: "What did the explorers get from the Shoshone to help them cross the Rocky Mountains?",
    options: ["Flatboats", "Fishing nets", "Maps of the Pacific coast", "Horses"],
    correct: 3,
    rationale: "With Sacagawea's help translating, the explorers traded for horses to cross the mountains."
  },
  {
    part: 4,
    q: "Who traveled with Sacagawea when she joined the expedition in the spring?",
    options: ["Her brother and his family", "Her husband and baby son", "Her parents", "Her sister and niece"],
    correct: 1,
    rationale: "Sacagawea joined the expedition with her husband and her baby boy."
  },
  {
    part: 4,
    q: "Who did Sacagawea recognize when she met the Shoshone leader?",
    options: ["Her son", "Her husband", "Her father", "Her brother"],
    correct: 3,
    rationale: "The Shoshone leader was Sacagawea's brother. They were surprised and happy to see each other again."
  },
  {
    part: 5,
    q: "Which ocean did the Corps of Discovery reach in 1805?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Indian Ocean"],
    correct: 1,
    rationale: "After crossing the Rocky Mountains, the group traveled down the Snake and Columbia rivers to reach the Pacific Ocean."
  },
  {
    part: 5,
    q: "What does the Continental Divide separate in the Rocky Mountains?",
    options: ["The United States and Canada", "The Missouri River and St. Louis", "Water flowing toward the Atlantic from water flowing toward the Pacific", "The Louisiana Territory and the city of New Orleans"],
    correct: 2,
    rationale: "The divide separates water flowing east toward the Atlantic from water flowing west toward the Pacific."
  },
  {
    part: 5,
    q: "Which river carried the expedition toward the Pacific Ocean after the Snake River?",
    options: ["Mississippi River", "Columbia River", "Missouri River", "Yellowstone River"],
    correct: 1,
    rationale: "The explorers paddled from the Snake River into the Columbia River, which took them to the Pacific."
  },
  {
    part: 6,
    q: "What did Lewis and Clark bring back that helped the United States learn about the region?",
    options: ["Gold from the Rocky Mountains", "A treaty to buy Canada", "A plan for a railroad", "Journals and maps about the places they explored"],
    correct: 3,
    rationale: "The explorers recorded details about rivers, plants, animals, and the people and places they encountered."
  },
  {
    part: 6,
    q: "Which event happened last?",
    options: ["The explorers returned to St. Louis.", "The United States bought the Louisiana Territory.", "The explorers set out from near St. Louis.", "The explorers reached the Pacific Ocean."],
    correct: 0,
    rationale: "The purchase took place in 1803. The expedition left in 1804, reached the Pacific in 1805, and returned in 1806."
  },
  {
    part: 6,
    q: "What did Lewis and Clark do for part of the trip back east?",
    options: ["They sailed home across the Pacific.", "They stayed together in one boat.", "They went straight to Washington, D.C.", "They split into groups to explore different areas."],
    correct: 3,
    rationale: "Lewis and Clark explored different areas on the return trip. Their groups met again where the Yellowstone and Missouri rivers meet."
  },
  {
    part: 6,
    q: "Where did the explorers return in September 1806?",
    options: ["St. Louis", "New Orleans", "The Pacific coast", "Washington, D.C."],
    correct: 0,
    rationale: "The explorers returned to St. Louis in September 1806. Lewis later went to Washington, D.C., to tell Jefferson what they had learned."
  }
].map(question => ({
  ...question,
  partName: LOUISIANA_PURCHASE_PARTS.find(part => part.id === question.part).title
}));

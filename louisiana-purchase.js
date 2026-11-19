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
  // Keep the first 24 questions and their answer positions stable for saved attempts.
  {
    part: 1,
    q: "How did some settlers travel west around 1800?",
    options: ["By train or bus", "On foot or by flatboat", "By car or truck", "By plane or helicopter"],
    correct: 1,
    feedback: [
      "Trains and buses were not how these settlers traveled around 1800.",
      "Some settlers walked along trails. Others floated down rivers on flatboats.",
      "Cars and trucks did not exist around 1800.",
      "People did not yet have planes or helicopters to make this trip."
    ]
  },
  {
    part: 1,
    q: "Which river marked the western edge of the United States around 1800?",
    options: ["Columbia River", "Missouri River", "Yellowstone River", "Mississippi River"],
    correct: 3,
    feedback: [
      "The Columbia carried Lewis and Clark toward the Pacific farther west.",
      "The Missouri was the river the explorers followed from near St. Louis.",
      "The Yellowstone was a river Clark explored on his return, not the boundary around 1800.",
      "Around 1800, the United States stretched from the Atlantic coast to the Mississippi River."
    ]
  },
  {
    part: 1,
    q: "Who already lived in much of the land that European countries claimed in North America?",
    options: ["French army officers", "American settlers from New Orleans", "Many different Native American peoples", "British traders from the Atlantic coast"],
    correct: 2,
    feedback: [
      "France claimed some land, but many peoples already lived there.",
      "Settlers from New Orleans did not already live across all that land.",
      "Many Native American peoples already lived on the land that European governments claimed.",
      "Britain claimed some land, but the people already living across much of it were Native Americans."
    ]
  },
  {
    part: 2,
    q: "Why was the port of New Orleans important to farmers?",
    options: ["They shipped goods down the Mississippi River through the port.", "They grew all their crops in the city.", "They bought horses there to cross the Rocky Mountains.", "They used it to reach the Pacific Ocean directly."],
    correct: 0,
    feedback: [
      "Farmers sent goods down the Mississippi River. At its mouth, New Orleans gave those goods a way to reach other markets.",
      "The farmers sent crops from other places to the port.",
      "Lewis and Clark traded for horses far from New Orleans.",
      "The Mississippi reaches the Gulf, not the Pacific."
    ]
  },
  {
    part: 2,
    q: "Why was President Jefferson worried when France took control of Louisiana?",
    options: ["France might stop Americans from crossing the Rocky Mountains.", "France might move the port to St. Louis.", "France might block Americans from using the port of New Orleans.", "France might stop Americans from fishing in the Atlantic."],
    correct: 2,
    feedback: [
      "Jefferson’s trade worry was about the port, far from the Rockies.",
      "St. Louis was far upriver. New Orleans was the port Jefferson wanted to keep using.",
      "Jefferson worried that France could close the port to American trade.",
      "Jefferson was protecting trade through New Orleans, not fishing in the Atlantic."
    ]
  },
  {
    part: 2,
    q: "Which land did the United States buy from France in 1803?",
    options: ["Canada", "The Louisiana Territory", "Florida", "The Oregon Territory"],
    correct: 1,
    feedback: [
      "The deal covered land called Louisiana, not Canada.",
      "The United States bought the Louisiana Territory in 1803. This deal is called the Louisiana Purchase.",
      "Spain claimed Florida at the time. It was outside the Louisiana Purchase.",
      "The Oregon Territory was farther west and was not part of the purchase."
    ]
  },
  {
    part: 2,
    q: "Why was France willing to sell the Louisiana Territory?",
    options: ["It wanted to buy land from the United States.", "It wanted the United States to build a port.", "It needed horses for an expedition.", "It needed money for costly wars."],
    correct: 3,
    feedback: [
      "France was selling land to raise money, not buying land from the United States.",
      "New Orleans already had a port.",
      "The horses for the expedition were traded for with the Shoshone later.",
      "France was fighting costly wars and needed money. The United States paid $15 million for the territory."
    ]
  },
  {
    part: 2,
    q: "Who was president when the United States made the Louisiana Purchase?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
    correct: 0,
    feedback: [
      "Thomas Jefferson was president when the United States bought the Louisiana Territory.",
      "Washington was president earlier. Jefferson was president in 1803.",
      "Adams had already left office by the time of the purchase.",
      "Madison became president after Jefferson."
    ]
  },
  {
    part: 3,
    q: "Who led the Corps of Discovery?",
    options: ["York and Thomas Jefferson", "Thomas Jefferson and William Clark", "Meriwether Lewis and York", "Meriwether Lewis and William Clark"],
    correct: 3,
    feedback: [
      "Jefferson sent the expedition, and York helped it as a member.",
      "Clark helped lead the trip. Jefferson sent the group but stayed behind.",
      "Lewis helped lead it. York was a member of the corps, and Clark was the other leader.",
      "Jefferson chose Meriwether Lewis to lead the expedition. Lewis asked William Clark to lead it with him."
    ]
  },
  {
    part: 3,
    q: "Why did the expedition set out from near St. Louis?",
    options: ["The city was near the Missouri River, which the group followed west.", "The city was near the Pacific Ocean.", "The city was high in the Rocky Mountains.", "The city was at the mouth of the Columbia River."],
    correct: 0,
    feedback: [
      "The Corps of Discovery set out in boats on the Missouri River near St. Louis in May 1804.",
      "The Pacific was the ocean the group reached near the end of the trip west.",
      "The group started on the Missouri River and crossed the Rockies later.",
      "The Columbia reaches the Pacific, far from where the group began."
    ]
  },
  {
    part: 3,
    q: "Why did the explorers pack things like beads and fishhooks?",
    options: ["To mark the places where they camped", "To give as gifts and trade with Native American peoples", "To repair their boats after storms", "To collect samples of plants"],
    correct: 1,
    feedback: [
      "The gifts were for people they met, not markers to leave at campsites.",
      "The group brought gifts and goods for trade to build friendly relationships with Native American peoples they met.",
      "The group brought tools for repairs. These items were for gifts and trade.",
      "The group did collect plants, but the reason for packing these items was trade and gifts."
    ]
  },
  {
    part: 3,
    q: "Who was York?",
    options: ["A man enslaved by William Clark who helped the expedition", "The president who bought the Louisiana Territory", "A French trader who sold the territory", "The Shoshone leader who traded horses"],
    correct: 0,
    feedback: [
      "York joined the expedition and helped it as a hunter. William Clark enslaved him.",
      "Thomas Jefferson was the president who bought the territory.",
      "France sold the territory. York was a member of the expedition.",
      "Sacagawea’s brother was the Shoshone leader the group met."
    ]
  },
  {
    part: 3,
    q: "Why did the expedition build a fort near the Mandan villages?",
    options: ["To start a farm", "To build a port for ocean ships", "To have a place to spend the winter", "To hide their journals"],
    correct: 2,
    feedback: [
      "The explorers needed a place to stay through winter, not land to start a farm.",
      "The fort was on the Missouri River, far from an ocean port.",
      "The explorers built Fort Mandan and spent the winter there before continuing west.",
      "The journals were used to record the journey. Hiding them was not the reason for building the fort."
    ]
  },
  {
    part: 4,
    q: "How did Sacagawea help the explorers talk with Native American people they met?",
    options: ["She drew maps of villages.", "She wrote letters to President Jefferson.", "She translated what people said.", "She built canoes for river travel."],
    correct: 2,
    feedback: [
      "Maps show places. Interpreting helped people understand each other’s words.",
      "Her role in these talks was to share the meaning of words in another language.",
      "Sacagawea was a Shoshone woman who helped as an interpreter. An interpreter translates between languages.",
      "Canoes helped people travel, but they did not help people understand another language."
    ]
  },
  {
    part: 4,
    q: "What did the explorers get from the Shoshone to help them cross the Rocky Mountains?",
    options: ["Flatboats", "Fishing nets", "Maps of the Pacific coast", "Horses"],
    correct: 3,
    feedback: [
      "Flatboats carry loads on water. The group needed to cross mountains on land.",
      "Fishing nets would help catch fish, not cross mountains.",
      "The group traded for animals that could carry people and gear over rocky trails.",
      "With Sacagawea's help translating, the explorers traded for horses to cross the mountains."
    ]
  },
  {
    part: 4,
    q: "Who traveled with Sacagawea when she joined the expedition in the spring?",
    options: ["Her brother and his family", "Her husband and baby son", "Her parents", "Her sister and niece"],
    correct: 1,
    feedback: [
      "She met her brother later, near the Missouri River’s source.",
      "Sacagawea joined the expedition with her husband and her baby boy.",
      "The chapter says her husband and her baby joined her.",
      "Her husband and baby were the family members who traveled with her."
    ]
  },
  {
    part: 4,
    q: "Who did Sacagawea recognize when she met the Shoshone leader?",
    options: ["Her son", "Her husband", "Her father", "Her brother"],
    correct: 3,
    feedback: [
      "Her baby son traveled with her. He was not the leader she met.",
      "Her husband had already been traveling with the group.",
      "The leader she recognized was her brother, who had been apart from her for years.",
      "The Shoshone leader was Sacagawea's brother. They were surprised and happy to see each other again."
    ]
  },
  {
    part: 5,
    q: "Which ocean did the Corps of Discovery reach in 1805?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Indian Ocean"],
    correct: 1,
    feedback: [
      "The Atlantic is east of the country. The group was traveling west.",
      "After crossing the Rocky Mountains, the group traveled down the Snake and Columbia rivers to reach the Pacific Ocean.",
      "The Arctic Ocean is far north of where the group arrived.",
      "The Indian Ocean is far from the west coast of North America."
    ]
  },
  {
    part: 5,
    q: "What does the Continental Divide separate in the Rocky Mountains?",
    options: ["The United States and Canada", "The Missouri River and St. Louis", "Water flowing toward the Atlantic from water flowing toward the Pacific", "The Louisiana Territory and the city of New Orleans"],
    correct: 2,
    feedback: [
      "The divide is about where water flows, not the border between countries.",
      "The Missouri is a river and St. Louis is a city. The divide separates water going different ways.",
      "The divide separates water flowing east toward the Atlantic from water flowing west toward the Pacific.",
      "The divide follows high land in the Rockies. New Orleans is far away near the Gulf."
    ]
  },
  {
    part: 5,
    q: "Which river carried the expedition toward the Pacific Ocean after the Snake River?",
    options: ["Mississippi River", "Columbia River", "Missouri River", "Yellowstone River"],
    correct: 1,
    feedback: [
      "The Mississippi flows toward the Gulf, not the Pacific.",
      "The explorers paddled from the Snake River into the Columbia River, which took them to the Pacific.",
      "The group used the Missouri on the way to the mountains.",
      "Clark followed the Yellowstone on the trip back east."
    ]
  },
  {
    part: 6,
    q: "What did Lewis and Clark bring back that helped the United States learn about the region?",
    options: ["Gold from the Rocky Mountains", "A treaty to buy Canada", "A plan for a railroad", "Journals and maps about the places they explored"],
    correct: 3,
    feedback: [
      "The chapter says the group returned with information, not a load of gold.",
      "The expedition explored parts of North America. It did not bring back an agreement to buy Canada.",
      "The group recorded what it saw. Building a railroad was not its job.",
      "The explorers recorded details about rivers, plants, animals, and the people and places they encountered."
    ]
  },
  {
    part: 6,
    q: "Which event happened last?",
    options: ["The explorers returned to St. Louis.", "The United States bought the Louisiana Territory.", "The explorers set out from near St. Louis.", "The explorers reached the Pacific Ocean."],
    correct: 0,
    feedback: [
      "The purchase took place in 1803. The expedition left in 1804, reached the Pacific in 1805, and returned in 1806.",
      "The purchase was in 1803, before the trip started.",
      "The group set out in 1804, before going west and coming back.",
      "They reached the Pacific in 1805, before returning in 1806."
    ]
  },
  {
    part: 6,
    q: "What did Lewis and Clark do for part of the trip back east?",
    options: ["They sailed home across the Pacific.", "They stayed together in one boat.", "They went straight to Washington, D.C.", "They split into groups to explore different areas."],
    correct: 3,
    feedback: [
      "They headed back east across land and along rivers.",
      "They went separate ways for part of the return and met up later.",
      "The group returned to St. Louis first. Lewis then went to Washington, D.C.",
      "Lewis and Clark explored different areas on the return trip. Their groups met again where the Yellowstone and Missouri rivers meet."
    ]
  },
  {
    part: 6,
    q: "Where did the explorers return in September 1806?",
    options: ["St. Louis", "New Orleans", "The Pacific coast", "Washington, D.C."],
    correct: 0,
    feedback: [
      "The explorers returned to St. Louis in September 1806. Lewis later went to Washington, D.C., to tell Jefferson what they had learned.",
      "New Orleans was important to the purchase, but the expedition returned to St. Louis.",
      "The Pacific coast was where they wintered before heading east.",
      "Lewis reported to Jefferson there after the group got back to St. Louis."
    ]
  },

  // Additional chapter practice, grouped by section.
  {
    part: 1,
    q: "Why did many settlers leave towns on the East Coast?",
    options: ["They wanted more land to live on.", "They wanted to reach Europe by land.", "They were sent to map the Pacific.", "They had to deliver a message to France."],
    correct: 0,
    feedback: [
      "Families moved west to find places to settle.",
      "Europe was across the Atlantic Ocean.",
      "Lewis and Clark led that later expedition.",
      "Moving west was about finding land for homes."
    ]
  },
  {
    part: 1,
    q: "What did some families have to do before building a home in the West?",
    options: ["Buy a house in a city.", "Clear trees from the land.", "Build a port for ships.", "Cross the Atlantic Ocean."],
    correct: 1,
    feedback: [
      "Many families had to build their own homes.",
      "Trees sometimes had to be cut down to make room for a house.",
      "Families needed room for homes, not a place for ships.",
      "They were moving within North America."
    ]
  },
  {
    part: 1,
    q: "What made wagon travel hard for settlers?",
    options: ["Every road ended at the Pacific.", "They could only move at night.", "Roads could be rough.", "The ocean covered the trails."],
    correct: 2,
    feedback: [
      "The chapter describes rough roads long before the ocean.",
      "Rough ground was the problem, even in daylight.",
      "Bumps and ruts made it hard to pull a wagon.",
      "Wagons followed land routes."
    ]
  },
  {
    part: 1,
    q: "What might a family notice about neighbors after moving west?",
    options: ["Everyone lived on the same city block.", "All their neighbors were on the same flatboat.", "The nearest neighbor always lived across an ocean.", "The nearest neighbor might live miles away."],
    correct: 3,
    feedback: [
      "Families moving west often settled far from crowded towns.",
      "A flatboat was one way to travel, not where all neighbors lived.",
      "Neighbors could live miles away on the same land.",
      "Homes could be far apart in a new settlement."
    ]
  },
  {
    part: 1,
    q: "Which animals does the chapter say pulled some settlers’ wagons?",
    options: ["Oxen or mules", "Fish or turtles", "Deer or bears", "Chickens or ducks"],
    correct: 0,
    feedback: [
      "These strong animals pulled wagons along land routes.",
      "They live in water and did not pull wagons on roads.",
      "They were wild animals, not the wagon teams in the chapter.",
      "Families could raise these birds, but they did not pull wagons."
    ]
  },
  {
    part: 1,
    q: "What made a flatboat different from a wagon?",
    options: ["It carried people through the air.", "It traveled on water.", "It needed wheels.", "It had to be pulled by mules."],
    correct: 1,
    feedback: [
      "Flatboats traveled on rivers.",
      "A flatboat floated on a river. A wagon rolled on land.",
      "Wheels helped wagons roll. Flatboats floated without wheels.",
      "Mules pulled wagons along roads."
    ]
  },
  {
    part: 1,
    q: "Which description fits a flatboat?",
    options: ["A narrow trail through the woods", "A building where goods are stored", "A wooden boat with a flat bottom and square corners", "A cart with four wheels and a cover"],
    correct: 2,
    feedback: [
      "A trail is a path people can walk along.",
      "That describes a warehouse.",
      "Its flat bottom and square shape made room for loads.",
      "That is a wagon used on land."
    ]
  },
  {
    part: 1,
    q: "Why might a family choose a flatboat to move west?",
    options: ["It was made for climbing mountains.", "It let them roll along a dry road.", "It was built to cross the Atlantic Ocean.", "A river could carry the family and its supplies."],
    correct: 3,
    feedback: [
      "A flatboat needed water to float.",
      "A wagon was better for a road.",
      "The chapter’s flatboats followed inland rivers.",
      "Some families used rivers to carry people and loads."
    ]
  },
  {
    part: 1,
    q: "What could settlers sometimes build on top of a flatboat?",
    options: ["A small house", "A city port", "A mountain trail", "A stone bridge across the Mississippi"],
    correct: 0,
    feedback: [
      "Some flatboats held a house where people could stay.",
      "A port is a place on the shore where boats load and unload.",
      "Trails are paths on land.",
      "A flatboat could carry a small home, not a bridge across a river."
    ]
  },
  {
    part: 1,
    q: "Two families move west. One walks and one takes a flatboat. How are their routes different?",
    options: ["One crosses the ocean and one crosses by air.", "One follows a trail and one follows a river.", "Both must use the same road.", "Both travel only on water."],
    correct: 1,
    feedback: [
      "Both families can travel west without crossing an ocean or flying.",
      "People walked on paths and floated on rivers.",
      "A flatboat cannot travel on a dry road.",
      "The family walking uses a land route."
    ]
  },
  {
    part: 1,
    q: "What helped settlers know where to walk?",
    options: ["They looked up directions on a phone.", "They used the Gateway Arch as a trail sign.", "They followed trails made by earlier travelers.", "They followed railroad signs."],
    correct: 2,
    feedback: [
      "Phones with maps did not exist around 1800.",
      "The arch was built much later.",
      "People who had gone before left paths others could use.",
      "The chapter describes trails used around 1800."
    ]
  },
  {
    part: 1,
    q: "What does “frontier” describe in the chapter?",
    options: ["A place where nobody had ever lived", "A boat with a square bottom", "A place where boats unload goods", "Land European settlers saw as beyond their settlements"],
    correct: 3,
    feedback: [
      "Native American peoples had lived there for thousands of years.",
      "A flatboat carries people or goods on water. A frontier is an area of land.",
      "A port is where boats load or unload. The settlers used frontier to describe land beyond their towns.",
      "Settlers used this idea even though Native Americans already lived there."
    ]
  },
  {
    part: 1,
    q: "What is wrong with saying the land west of the early settlements was empty?",
    options: ["Native American peoples already lived there.", "All settlers already lived west of the Pacific.", "France had built houses on every piece of land.", "There were no rivers west of the settlements."],
    correct: 0,
    feedback: [
      "The land was home to many peoples before settlers moved west.",
      "Settlers had built towns along the East Coast.",
      "France claimed land, but that does not mean it built homes everywhere.",
      "Rivers were important routes, including for flatboats."
    ]
  },
  {
    part: 1,
    q: "Which happened before many settlers began moving west?",
    options: ["Cars crossed the Rocky Mountains.", "They built towns and cities along the East Coast.", "Lewis and Clark returned in 1806.", "The Gateway Arch was built."],
    correct: 1,
    feedback: [
      "Cars did not exist when the chapter’s settlers moved west.",
      "After settling much of the coast, some families looked west for land.",
      "Settlers were already moving west around 1800.",
      "The arch is a much later monument."
    ]
  },
  {
    part: 1,
    q: "Which two things could make starting a new home in the West harder?",
    options: ["Nearby helpers and smooth roads", "Ready-built homes and easy travel", "Rough roads and neighbors who lived far away", "Airports and busy highways"],
    correct: 2,
    feedback: [
      "Both would have made the move easier.",
      "Many settlers had to build homes and travel over rough ground.",
      "Rough roads slowed travel, and help might be far away.",
      "Those were not part of travel around 1800."
    ]
  },
  {
    part: 1,
    q: "Why were waterways useful even without roads?",
    options: ["Waterways cleared trees from house sites.", "Waterways gave wagons new wheels.", "Waterways made all homes close together.", "Flatboats could carry people and supplies down rivers."],
    correct: 3,
    feedback: [
      "People still needed to clear trees themselves.",
      "Wagons used roads. Boats used rivers.",
      "Families could still live miles apart.",
      "Flatboats turned rivers into travel routes."
    ]
  },
  {
    part: 1,
    q: "Which example shows a family getting ready to settle, instead of just passing through?",
    options: ["They clear trees and build a house.", "They stop briefly to rest beside the trail.", "They float past a town on a flatboat.", "They travel through the area in a wagon."],
    correct: 0,
    feedback: [
      "Building a house shows they plan to live there.",
      "A short rest does not mean they will live there.",
      "Passing a town does not show plans to stay.",
      "Traveling through does not show they will make a home there."
    ]
  },
  {
    part: 2,
    q: "What is a territory?",
    options: ["The beginning of a river", "An area of land belonging to a government", "A boat for moving goods", "A group working together"],
    correct: 1,
    feedback: [
      "A river’s beginning is called its source. A territory is an area of land.",
      "The Louisiana Territory was a large area of land.",
      "That describes a flatboat.",
      "A corps is a group of people. A territory is land."
    ]
  },
  {
    part: 2,
    q: "In what year did the United States make the Louisiana Purchase?",
    options: ["1804", "1806", "1803", "1800"],
    correct: 2,
    feedback: [
      "Lewis and Clark set out in 1804.",
      "The expedition returned in 1806.",
      "The United States bought the territory in 1803.",
      "Around 1800, France took control from Spain."
    ]
  },
  {
    part: 2,
    q: "How much did the United States pay for the Louisiana Territory?",
    options: ["$15", "About four cents total", "Nothing", "$15 million"],
    correct: 3,
    feedback: [
      "The purchase cost millions of dollars.",
      "That was roughly the price per acre, not the total.",
      "The territory was bought with money.",
      "That was the price for the whole territory."
    ]
  },
  {
    part: 2,
    q: "What country sold the Louisiana Territory to the United States?",
    options: ["France", "Spain", "Britain", "The United States"],
    correct: 0,
    feedback: [
      "France controlled the territory when it sold it in 1803.",
      "Spain controlled Louisiana earlier, then turned it over to France.",
      "Britain claimed other land in North America, but did not sell Louisiana.",
      "The United States was the buyer."
    ]
  },
  {
    part: 2,
    q: "What does the word “mouth” mean in “the mouth of the Mississippi River”?",
    options: ["A mountain that divides rivers", "The place where the river empties into a larger body of water", "The place where the river starts", "The deepest spot in the whole river"],
    correct: 1,
    feedback: [
      "The Continental Divide separates directions of water flow.",
      "The Mississippi flows into the Gulf through its mouth.",
      "That is the source of a river.",
      "A river’s mouth is named for where it empties, not for depth."
    ]
  },
  {
    part: 2,
    q: "Which city was the important port near the mouth of the Mississippi?",
    options: ["Washington, D.C.", "Fort Mandan", "New Orleans", "St. Louis"],
    correct: 2,
    feedback: [
      "Lewis later reported to Jefferson there.",
      "It was a winter stop on the Missouri River.",
      "Boats carrying goods passed through this port.",
      "The expedition set out near St. Louis, far upriver."
    ]
  },
  {
    part: 2,
    q: "How did control of New Orleans affect trade?",
    options: ["It let rulers choose where the Missouri River started.", "It gave rulers power over every port in the world.", "It made trade by boat impossible everywhere.", "Its rulers could decide who used the port."],
    correct: 3,
    feedback: [
      "People cannot move a river’s natural source by ruling a port.",
      "Their control mattered at New Orleans.",
      "Boats still carried many goods on rivers.",
      "Boats and goods passed through New Orleans to reach the Gulf."
    ]
  },
  {
    part: 2,
    q: "What would farmers have trouble doing if the port closed to them?",
    options: ["Sending goods down the Mississippi to other markets", "Growing crops on their own land", "Finding the source of the Missouri River", "Naming the Continental Divide"],
    correct: 0,
    feedback: [
      "They used New Orleans to ship goods farther away.",
      "Closing the port would block shipping, not stop plants from growing.",
      "That was a route question for explorers.",
      "The divide is in the Rocky Mountains, far from the port."
    ]
  },
  {
    part: 2,
    q: "Which land between two features does the chapter describe as Louisiana before the purchase?",
    options: ["Only the land between two city streets", "Land between the Mississippi River and the Rocky Mountains", "Land between the East Coast and the Atlantic Ocean", "Land between the Pacific coast and the Pacific Ocean"],
    correct: 1,
    feedback: [
      "Louisiana was much larger than a few streets.",
      "Spain had gained this large area from France in 1762.",
      "The ocean lies off the coast and was not the land in the deal.",
      "The purchase was farther east."
    ]
  },
  {
    part: 2,
    q: "What happened to the size of the United States after the purchase?",
    options: ["It stayed the same size.", "It became smaller because it paid money.", "It grew by adding a large area of land.", "It lost all the land west of the Mississippi."],
    correct: 2,
    feedback: [
      "The purchase added a large territory.",
      "Paying money did not take land away from the United States.",
      "The deal added the Louisiana Territory to the United States.",
      "The deal added land to the west of the river."
    ]
  },
  {
    part: 2,
    q: "Who controlled Louisiana just before France took it over around 1800?",
    options: ["Britain", "The United States", "The Corps of Discovery", "Spain"],
    correct: 3,
    feedback: [
      "Britain had other claims, not this transfer.",
      "The United States bought it afterward, in 1803.",
      "The corps was an exploring group formed later.",
      "Spain turned over control of Louisiana to France."
    ]
  },
  {
    part: 2,
    q: "What order did control of Louisiana follow around the time of the purchase?",
    options: ["Spain, then France, then the United States", "France, then the United States, then Spain", "The United States, then Spain, then France", "Spain, then the United States, then France"],
    correct: 0,
    feedback: [
      "Spain turned it over to France, which sold it to the United States.",
      "Spain held it before France sold it.",
      "The United States got it last in this sequence.",
      "France was the seller, so it held Louisiana before the United States did."
    ]
  },
  {
    part: 2,
    q: "What did Jefferson still need to learn after the purchase?",
    options: ["Whether the East Coast touched the Atlantic", "What the land, plants, animals, and people of the region were like", "Whether New Orleans was a port", "Which country had just sold Louisiana"],
    correct: 1,
    feedback: [
      "That coast was already familiar to Americans.",
      "The government knew little about much of the territory.",
      "Jefferson already knew why the port mattered.",
      "He knew that the United States had bought it from France."
    ]
  },
  {
    part: 2,
    q: "Why is the deal called a purchase?",
    options: ["France gave the land as a free gift.", "Settlers built boats by hand.", "The United States paid for the land.", "The explorers gave a name to a river."],
    correct: 2,
    feedback: [
      "The United States paid France $15 million.",
      "Making a boat is not buying the territory.",
      "To purchase something means to buy it.",
      "Naming a river is not buying land."
    ]
  },
  {
    part: 2,
    q: "Which sentence answers the land part of the chapter’s Framing Question?",
    options: ["The purchase helped all settlers build boats.", "The expedition bought the land when it reached the ocean.", "The country grew by buying a small fort near St. Louis.", "The purchase helped the United States grow by adding the Louisiana Territory."],
    correct: 3,
    feedback: [
      "The chapter does not say the deal gave all settlers boats.",
      "The country bought the land before the expedition began.",
      "The purchase added an entire territory, not just one fort.",
      "The deal made the country larger."
    ]
  },
  {
    part: 3,
    q: "What does “expedition” mean?",
    options: ["A journey a group takes for a clear purpose", "A short rest at a fort", "An area of land belonging to a government", "A boat used to carry heavy loads"],
    correct: 0,
    feedback: [
      "Lewis and Clark’s group traveled to explore and learn.",
      "A rest can happen during a journey, but it is not the journey.",
      "That describes a territory.",
      "That describes a flatboat."
    ]
  },
  {
    part: 3,
    q: "What does “corps” mean in Corps of Discovery?",
    options: ["A building used in winter", "A group of people working as a unit", "A river flowing west", "A book used to take notes"],
    correct: 1,
    feedback: [
      "The group could stay in a fort, but the corps was the group itself.",
      "The explorers worked together on one mission.",
      "A river is a body of moving water, not a group.",
      "A journal can hold the group’s notes."
    ]
  },
  {
    part: 3,
    q: "What was the Corps of Discovery?",
    options: ["A group of farmers who ran the port of New Orleans", "The name of a river near St. Louis", "The group that went on the Lewis and Clark Expedition", "The government that sold Louisiana"],
    correct: 2,
    feedback: [
      "The corps explored land and rivers instead.",
      "That river was the Missouri.",
      "It included leaders, soldiers, explorers, and interpreters.",
      "France sold the territory."
    ]
  },
  {
    part: 3,
    q: "What was one reason Jefferson sent the expedition?",
    options: ["To sell Louisiana back to France", "To build the Gateway Arch", "To find a faster way from Europe to America", "To learn about the newly bought land"],
    correct: 3,
    feedback: [
      "Jefferson sent explorers after the United States bought the land.",
      "The arch was built much later to remember the past.",
      "The expedition explored within North America.",
      "He wanted answers about the land and the people living there."
    ]
  },
  {
    part: 3,
    q: "Why did Lewis ask William Clark to help lead?",
    options: ["He knew Clark from his time in the army.", "Clark was the president of the United States.", "Clark had sold Louisiana to the United States.", "Clark was the Shoshone leader."],
    correct: 0,
    feedback: [
      "Clark was an army friend Lewis trusted to lead with him.",
      "Jefferson was the president.",
      "France sold the land. Lewis knew Clark as a friend from the army.",
      "Sacagawea’s brother led the Shoshone group the expedition met."
    ]
  },
  {
    part: 3,
    q: "When did the Corps of Discovery begin its journey?",
    options: ["In 1803 before the purchase", "May 1804", "November 1805", "September 1806"],
    correct: 1,
    feedback: [
      "The exploration began in 1804, after the purchase.",
      "They set out in boats on the Missouri River that spring.",
      "That was when they reached the Pacific.",
      "That was when they returned to St. Louis."
    ]
  },
  {
    part: 3,
    q: "Which river did the group travel up at the start?",
    options: ["Columbia River", "Yellowstone River", "Missouri River", "Snake River"],
    correct: 2,
    feedback: [
      "They used it near the end of the trip west.",
      "Clark explored it on the return trip.",
      "The journey began on the Missouri near St. Louis.",
      "They reached the Snake after crossing the Rockies."
    ]
  },
  {
    part: 3,
    q: "Which problem did the group face going upriver?",
    options: ["The river pushed them in the same direction they wanted to go.", "They could only walk on an ocean beach.", "They had no boats when they started.", "The current flowed against their boats."],
    correct: 3,
    feedback: [
      "That would make travel easier. Upstream travel went against the current.",
      "They were traveling on the Missouri River.",
      "They set out on the Missouri in boats.",
      "Going upstream meant they had to row or push against the current."
    ]
  },
  {
    part: 3,
    q: "What did the explorers do when they saw unfamiliar plants or animals?",
    options: ["They took notes about what they found.", "They crossed all plants and animals off their lists.", "They sent every animal to France.", "They waited until the arch was built to write it down."],
    correct: 0,
    feedback: [
      "The group recorded what it saw and collected samples of useful plants.",
      "Plants and animals were important parts of what Jefferson wanted to learn.",
      "Their job was to describe what they found.",
      "They kept notes during the expedition, long before the arch."
    ]
  },
  {
    part: 3,
    q: "Why did the group make maps during the trip?",
    options: ["To find out what month it was", "To record where rivers, mountains, and travel routes were", "To show the prices at the port of New Orleans", "To pay France for the territory"],
    correct: 1,
    feedback: [
      "A calendar shows months. A map shows places.",
      "Maps helped people understand the places the group explored.",
      "Prices would belong on a list of goods, not a route map.",
      "The United States had already paid money for the land."
    ]
  },
  {
    part: 3,
    q: "How did the explorers plan to get much of their food?",
    options: ["They planned to grow a crop on every boat.", "They expected their food to last without getting more.", "They planned to hunt.", "They planned to buy all of it in St. Louis each day."],
    correct: 2,
    feedback: [
      "Boats moved them along rivers. They were not fields.",
      "Even the food they packed would not cover the whole journey.",
      "They packed food but expected to hunt for more along the way.",
      "They were traveling far from St. Louis."
    ]
  },
  {
    part: 3,
    q: "What kind of route did Jefferson hope might lead to the Pacific?",
    options: ["A railroad across the Rockies", "A tunnel across the Atlantic", "A road that ended at New Orleans", "A route all the way by water"],
    correct: 3,
    feedback: [
      "The group was looking for a water route.",
      "The Pacific was west of the expedition, not across the Atlantic.",
      "Jefferson was asking about a route to the Pacific.",
      "He wondered whether a Northwest Passage could connect waters to the Pacific."
    ]
  },
  {
    part: 3,
    q: "Which supplies would help if the explorers got hurt?",
    options: ["Medical supplies", "Maps", "Gifts of beads", "Fishhooks"],
    correct: 0,
    feedback: [
      "They packed things they could use to care for injuries.",
      "Maps could help them find their way, but could not treat injuries.",
      "Beads were carried to give or trade.",
      "Fishhooks could catch food, not treat an injury."
    ]
  },
  {
    part: 3,
    q: "What did the Corps of Discovery do during its winter stop with the Mandan?",
    options: ["Finished the entire expedition", "Repaired gear and built canoes", "Bought the Louisiana Territory", "Crossed the Atlantic to France"],
    correct: 1,
    feedback: [
      "There was still a long trip to the Pacific ahead.",
      "The group used the winter to prepare to keep going.",
      "The purchase happened before the expedition set out.",
      "The group spent that winter on the Missouri."
    ]
  },
  {
    part: 3,
    q: "What did the Mandan people share that helped the explorers prepare?",
    options: ["A train to the Pacific", "A plan to build the Gateway Arch", "Information about the land and other Native American peoples", "The deed from the Louisiana Purchase"],
    correct: 2,
    feedback: [
      "The travelers moved by boat, on foot, and on horses.",
      "The arch was built long after the trip.",
      "Their knowledge helped the expedition plan for the trip ahead.",
      "France had sold the land to the United States earlier."
    ]
  },
  {
    part: 4,
    q: "What does an interpreter do?",
    options: ["Draws the borders of a territory", "Builds a flatboat with a square bottom", "Finds where a stream starts", "Helps people understand words spoken in another language"],
    correct: 3,
    feedback: [
      "Drawing borders is a mapmaking task.",
      "That is the work of a boatbuilder.",
      "That is finding the source of a stream.",
      "An interpreter shares the meaning in a language the listener knows."
    ]
  },
  {
    part: 4,
    q: "When would the expedition most need an interpreter?",
    options: ["When two people spoke languages the other did not understand", "When canoes needed to be pushed upstream", "When the group needed to cut wood", "When everyone already understood the same words"],
    correct: 0,
    feedback: [
      "The interpreter could help both people know what was said.",
      "Moving boats took paddling or pushing.",
      "Cutting wood took tools and work.",
      "People who understand each other do not need those words translated."
    ]
  },
  {
    part: 4,
    q: "Which Native American people did Sacagawea come from?",
    options: ["The French", "The Shoshone", "The Hidatsa", "The Mandan"],
    correct: 1,
    feedback: [
      "Her husband was French Canadian, but she was Shoshone.",
      "She was a Shoshone woman and later met a Shoshone group on the journey.",
      "Hidatsa people took her away from the Shoshone as a child.",
      "She lived among the Mandan before joining the journey."
    ]
  },
  {
    part: 4,
    q: "Who was Toussaint Charbonneau?",
    options: ["The president who planned the expedition", "The commander who asked William Clark to lead", "Sacagawea’s husband and a French Canadian trapper", "Sacagawea’s brother and a Shoshone leader"],
    correct: 2,
    feedback: [
      "That was Thomas Jefferson.",
      "Meriwether Lewis asked Clark to help lead.",
      "Lewis and Clark invited him and Sacagawea to join the expedition.",
      "Her brother led the Shoshone group they later met."
    ]
  },
  {
    part: 4,
    q: "Where were the explorers when they arranged for Sacagawea to join them?",
    options: ["At the Pacific Ocean", "At Pompey’s Pillar on the return trip", "At the port of New Orleans", "At their winter stop near the Mandan"],
    correct: 3,
    feedback: [
      "She joined before they reached the coast.",
      "She had already been with the group for much of the trip by then.",
      "They met near the Mandan villages, far from New Orleans.",
      "They met her before continuing up the Missouri in spring."
    ]
  },
  {
    part: 4,
    q: "Why did Lewis and Clark invite people who understood Native American languages?",
    options: ["They expected to meet different peoples and needed to talk with them.", "They wanted to replace all the maps with words.", "They wanted help paying France for the land.", "They wanted to avoid meeting anyone on the trip."],
    correct: 0,
    feedback: [
      "Speaking through interpreters helped the group share information and trade.",
      "The expedition still used and made maps.",
      "The Louisiana Purchase was already complete.",
      "They planned to meet peoples along their route."
    ]
  },
  {
    part: 4,
    q: "What happened to Sacagawea as a young girl?",
    options: ["She built the Gateway Arch.", "She was taken away from her people by a group of Hidatsa.", "She bought a territory from France.", "She was chosen to lead the whole expedition."],
    correct: 1,
    feedback: [
      "The arch was built much later.",
      "The chapter tells how she came to live away from the Shoshone.",
      "The United States made that purchase many years later.",
      "Lewis and Clark led it. She later joined as an interpreter."
    ]
  },
  {
    part: 4,
    q: "When did Sacagawea join the group on its journey west?",
    options: ["Only after the group had reached the Pacific", "After everyone returned to St. Louis", "In spring after the winter with the Mandan", "At the start near St. Louis"],
    correct: 2,
    feedback: [
      "She helped the group before it crossed the Rockies.",
      "She had traveled with them before the return to St. Louis.",
      "She and her family continued west with the group in spring.",
      "They met her later near the Mandan."
    ]
  },
  {
    part: 4,
    q: "How did Sacagawea and her family travel when the group left its winter stop?",
    options: ["They took a train to the mountains.", "They sailed across the Atlantic.", "They crossed the mountains by flatboat that day.", "They went upriver with the group in canoes."],
    correct: 3,
    feedback: [
      "The chapter describes travel by canoe at this point.",
      "Their route was inland and headed west.",
      "They were still following the Missouri River.",
      "The explorers had built new canoes and paddled up the Missouri."
    ]
  },
  {
    part: 4,
    q: "Where did the explorers meet the Shoshone group on the westward trip?",
    options: ["Near the source of the Missouri River in what is now Montana", "At the mouth of the Mississippi River", "On the beach by the Pacific", "Near the Gateway Arch"],
    correct: 0,
    feedback: [
      "The expedition reached that area in the summer of 1805.",
      "New Orleans was at that river’s mouth, far from the meeting.",
      "They met the Shoshone before they reached the coast.",
      "The meeting was far west of St. Louis and was long before the arch."
    ]
  },
  {
    part: 4,
    q: "How did Sacagawea feel when she saw the Shoshone leader was her brother?",
    options: ["Worried that he was President Jefferson", "Surprised and happy", "Angry that he was a stranger", "Bored because they had talked the day before"],
    correct: 1,
    feedback: [
      "Her brother was a Shoshone leader, not the president.",
      "She had been taken away as a child, so seeing her brother again was a surprise.",
      "He was her brother and they were glad to see each other.",
      "They had been apart for years."
    ]
  },
  {
    part: 4,
    q: "What did the expedition offer the Shoshone in exchange for horses?",
    options: ["The Pacific Ocean", "All of the Louisiana Territory", "Goods they had brought to trade", "The city of St. Louis"],
    correct: 2,
    feedback: [
      "They did not own the ocean and had not reached it.",
      "The agreement was for horses in exchange for goods.",
      "The Shoshone and the explorers made a trade with Sacagawea’s help.",
      "They traded goods, not a city."
    ]
  },
  {
    part: 4,
    q: "Why were Shoshone horses useful to the expedition?",
    options: ["They carried boats down the Columbia River.", "They pulled ocean ships to the port.", "They helped the group find fish in the rivers.", "They helped the group cross the Rocky Mountains."],
    correct: 3,
    feedback: [
      "The explorers paddled down that river in canoes.",
      "The horses helped with the mountain crossing.",
      "The horses helped them cross the mountains. Fishhooks and nets are for catching fish.",
      "Horses could carry people or loads where canoes could not go."
    ]
  },
  {
    part: 4,
    q: "Which pair correctly matches a person with a job?",
    options: ["Sacagawea helped interpret, and Lewis helped lead.", "Sacagawea sold Louisiana, and Lewis was president.", "Sacagawea was the Shoshone leader, and Lewis was her brother.", "Sacagawea built the arch, and Lewis named the Missouri River."],
    correct: 0,
    feedback: [
      "She translated. He was one of the expedition’s leaders.",
      "France sold Louisiana. Jefferson was president.",
      "Her brother led that Shoshone group. Lewis was an explorer.",
      "The arch came much later, and the river already had a name."
    ]
  },
  {
    part: 4,
    q: "What might have been harder for the group without Sacagawea’s help?",
    options: ["Returning by railroad", "Talking with the Shoshone to trade for horses", "Buying Louisiana in 1803", "Picking the site of New Orleans"],
    correct: 1,
    feedback: [
      "The explorers did not return by railroad.",
      "Her language skills helped the groups understand one another.",
      "The land was bought before she joined the expedition.",
      "The port already existed before the expedition."
    ]
  },
  {
    part: 4,
    q: "Which sentence best shows that Native American people helped the expedition?",
    options: ["France sold territory to the United States.", "The Missouri River flows past the St. Louis area.", "Sacagawea translated, and the Shoshone traded horses to the group.", "The expedition reached the Pacific in November."],
    correct: 2,
    feedback: [
      "That event explains the purchase, not help on the journey.",
      "This tells where a river is, not who helped.",
      "The travelers needed both help talking and horses to cross the mountains.",
      "The date by itself does not show who helped."
    ]
  },
  {
    part: 5,
    q: "In which month and year did the explorers reach the Pacific?",
    options: ["May 1804", "September 1806", "November 1803", "November 1805"],
    correct: 3,
    feedback: [
      "That was when they began the expedition.",
      "That was when they returned to St. Louis.",
      "The purchase happened in 1803, before the journey.",
      "They reached the ocean in November, after paddling down the Columbia."
    ]
  },
  {
    part: 5,
    q: "What is the source of a river?",
    options: ["The place where the river begins", "The place where it empties into a sea", "The deepest spot in a river", "A boat that follows the river"],
    correct: 0,
    feedback: [
      "The Missouri’s source was near the area the group reached in what is now Montana.",
      "That is called the mouth.",
      "A source is about where water begins flowing, not how deep it is.",
      "A boat can travel on water but is not where it starts."
    ]
  },
  {
    part: 5,
    q: "What does it mean that the explorers reached the source of the Missouri River?",
    options: ["They reached the place where they had started near St. Louis.", "They reached the place where the river begins.", "They reached the place where it empties into the Gulf.", "They reached the Pacific Ocean."],
    correct: 1,
    feedback: [
      "They had paddled away from St. Louis, toward the river’s beginning.",
      "They had traveled upriver to its starting area.",
      "The Missouri’s source is far from the Gulf.",
      "They still needed to cross the Rockies."
    ]
  },
  {
    part: 5,
    q: "Where is the Continental Divide described in the chapter?",
    options: ["On the beach at the Pacific Ocean", "In an East Coast town", "High in the Rocky Mountains", "In a warehouse in New Orleans"],
    correct: 2,
    feedback: [
      "The group crossed it before reaching the coast.",
      "The part the chapter describes is far to the west, in the Rockies.",
      "The group reached this line while crossing the Rockies.",
      "The divide is a feature of the land, not something inside a building."
    ]
  },
  {
    part: 5,
    q: "What kind of line is the Continental Divide?",
    options: ["A painted line in the middle of a road", "A fence built to mark a town", "A trail made by the Corps of Discovery", "An imaginary line that shows where water drains in different directions"],
    correct: 3,
    feedback: [
      "There is no painted line that makes rivers flow different ways.",
      "Fences mark property. The divide follows high land.",
      "The shape of the land already divided the water before the expedition.",
      "The line helps explain why rivers on its sides flow toward different oceans."
    ]
  },
  {
    part: 5,
    q: "In the chapter’s description, toward which ocean does water on the west side of the divide flow?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean", "Indian Ocean"],
    correct: 0,
    feedback: [
      "Water draining west can reach the Pacific, as on the Columbia River.",
      "The chapter describes water draining toward the Atlantic on the east side.",
      "The chapter compares water flowing east and west from the Rockies.",
      "The Indian Ocean is far from North America."
    ]
  },
  {
    part: 5,
    q: "Why did the explorers leave their canoes behind when crossing the Rockies?",
    options: ["The canoes were needed to build the Gateway Arch.", "They needed to travel over land through the mountains.", "They had already reached the Pacific and ended the trip.", "The Shoshone asked for every canoe in trade for the horses."],
    correct: 1,
    feedback: [
      "The arch was built long after the expedition.",
      "They crossed on foot and horseback where the river route did not continue.",
      "They still had to cross mountains and paddle farther.",
      "The chapter says the group traded goods for horses."
    ]
  },
  {
    part: 5,
    q: "How did the group cross the Rocky Mountains?",
    options: ["In ocean ships", "By train", "On foot and on horseback", "In flatboats the whole way"],
    correct: 2,
    feedback: [
      "The group was still inland.",
      "They crossed by foot and horse, as the chapter explains.",
      "The rocky trails took the group across land.",
      "The crossing had stretches of land, so boats could not take them all the way."
    ]
  },
  {
    part: 5,
    q: "What happened after the explorers crossed the Continental Divide going west?",
    options: ["They immediately returned to St. Louis.", "They bought the Louisiana Territory from France.", "They spent the winter with the Mandan for the first time.", "They went down rocky trails."],
    correct: 3,
    feedback: [
      "They went on to the Snake and Columbia rivers and the Pacific.",
      "That purchase happened before the trip.",
      "That stop came before the crossing.",
      "They faced a difficult descent on the western side."
    ]
  },
  {
    part: 5,
    q: "Which river did the group reach in October 1805 after crossing the mountains?",
    options: ["Snake River", "Missouri River", "Mississippi River", "Yellowstone River"],
    correct: 0,
    feedback: [
      "They reached the Snake before paddling into the Columbia.",
      "They had followed the Missouri before crossing the Rockies.",
      "That river marked an earlier boundary far to the east.",
      "Clark explored the Yellowstone on the return trip."
    ]
  },
  {
    part: 5,
    q: "How did the explorers get back on the water after crossing the mountains?",
    options: ["They walked across the Pacific.", "They built new canoes.", "They pulled their original canoes across the whole range.", "They found a railroad that carried their boats."],
    correct: 1,
    feedback: [
      "They traveled to the Pacific by river. They did not cross the ocean.",
      "They needed boats again to travel down the Snake and Columbia rivers.",
      "They left the old canoes behind before crossing.",
      "The chapter says they made canoes after crossing."
    ]
  },
  {
    part: 5,
    q: "Which route did the group follow after getting back in canoes?",
    options: ["Missouri River, then Mississippi River, then New Orleans", "Snake River, then Continental Divide, then Missouri River", "Snake River, then Columbia River, then Pacific Ocean", "Pacific Ocean, then Columbia River, then Snake River"],
    correct: 2,
    feedback: [
      "Those places were not the route to the Pacific.",
      "They had already crossed the divide and left the Missouri behind.",
      "The rivers took the travelers west toward the ocean.",
      "That reverses their westward route."
    ]
  },
  {
    part: 5,
    q: "Which event happened first on the way to the Pacific?",
    options: ["The group reached the Pacific Ocean.", "The group paddled down the Columbia River.", "The group reached the Snake River in October.", "The group reached the Continental Divide."],
    correct: 3,
    feedback: [
      "The ocean came last among these events.",
      "They entered the Columbia after coming down from the mountains.",
      "That was after the mountain crossing.",
      "They crossed the divide before reaching the Snake River, Columbia River, and Pacific."
    ]
  },
  {
    part: 5,
    q: "Why couldn’t the whole journey west be made by boat?",
    options: ["The group had to cross mountains over land.", "The Missouri River had no water.", "The explorers never found a river west of the mountains.", "Boats cannot carry people."],
    correct: 0,
    feedback: [
      "The explorers needed to leave their canoes and travel on foot and horseback.",
      "The group paddled up the Missouri for a long stretch.",
      "They used the Snake and Columbia west of the mountains.",
      "Boats carried the group along several rivers."
    ]
  },
  {
    part: 5,
    q: "Which detail shows the group changed how it traveled as the land changed?",
    options: ["It reported to Jefferson after the trip.", "It used horses in the mountains and built canoes for the rivers.", "It paid $15 million for the land.", "It named a rock after a boy’s nickname."],
    correct: 1,
    feedback: [
      "That gave Jefferson information but does not describe travel methods.",
      "Different ways of traveling worked for rocky land and moving water.",
      "That describes what the United States paid, not how the group traveled.",
      "That happened on the way back and is about a name."
    ]
  },
  {
    part: 5,
    q: "About how long was it from the start in May 1804 to reaching the Pacific in November 1805?",
    options: ["About six months", "About ten years", "About a year and a half", "About one month"],
    correct: 2,
    feedback: [
      "Six months counts only from May to November in the same year.",
      "The whole trip took less than three years.",
      "May 1804 to May 1805 is one year. November is about six months later.",
      "The trip west took much longer than a month."
    ]
  },
  {
    part: 5,
    q: "Where did the group spend the winter after reaching the Pacific?",
    options: ["With the Mandan for the first time", "At the port of New Orleans", "In Washington, D.C.", "On the Pacific coast"],
    correct: 3,
    feedback: [
      "That winter stop was on the way west, before they reached the ocean.",
      "They did not go to New Orleans after reaching the coast.",
      "Lewis went there after returning to St. Louis.",
      "They stayed on the coast for the winter before heading back east."
    ]
  },
  {
    part: 6,
    q: "Which river did Clark’s group explore on the way back?",
    options: ["Yellowstone River", "Columbia River", "Mississippi River", "Snake River"],
    correct: 0,
    feedback: [
      "Clark traveled along the Yellowstone with Sacagawea and others.",
      "The Columbia took them toward the Pacific on the trip west.",
      "The chapter describes Clark’s return group along the Yellowstone.",
      "They paddled on the Snake while heading west to the Pacific."
    ]
  },
  {
    part: 6,
    q: "Which river did Lewis’s return group head back along after exploring farther north?",
    options: ["Mississippi River", "Missouri River", "Snake River", "Columbia River"],
    correct: 1,
    feedback: [
      "Lewis’s group returned along the Missouri.",
      "Lewis’s group used the Missouri after exploring the northern area.",
      "The Snake helped the travelers head west after the Rockies.",
      "The Columbia carried the group to the Pacific on the way west."
    ]
  },
  {
    part: 6,
    q: "Where did Lewis’s and Clark’s return groups meet again?",
    options: ["At the source of the Columbia River", "At the Gateway Arch", "Where the Yellowstone and Missouri rivers meet", "Where the Mississippi River reaches the Gulf"],
    correct: 2,
    feedback: [
      "The chapter names the Yellowstone and Missouri for their meeting.",
      "The arch was built much later.",
      "After exploring different areas, they joined at the meeting of the two rivers.",
      "That is near New Orleans, far from their meeting place."
    ]
  },
  {
    part: 6,
    q: "What was the large rock formation Clark named on the way back?",
    options: ["The Gateway Arch", "The Continental Divide", "Fort Mandan", "Pompy’s Tower"],
    correct: 3,
    feedback: [
      "That arch was built much later in St. Louis.",
      "That line separates water flowing in different directions.",
      "It was a winter camp, not the rock formation.",
      "He named it for Sacagawea’s son, whose nickname was Pomp or Little Pomp."
    ]
  },
  {
    part: 6,
    q: "Who was called Pomp or Little Pomp?",
    options: ["Sacagawea’s son", "Sacagawea’s brother", "Meriwether Lewis", "President Thomas Jefferson"],
    correct: 0,
    feedback: [
      "Clark used the boy’s nickname when he named Pompy’s Tower.",
      "Her brother led a Shoshone group.",
      "Lewis helped lead the expedition.",
      "Jefferson sent the expedition but did not go along."
    ]
  },
  {
    part: 6,
    q: "What name did Pompy’s Tower later get?",
    options: ["The Louisiana Territory", "Pompey’s Pillar", "The Gateway Arch", "The Continental Divide"],
    correct: 1,
    feedback: [
      "That was the area of land bought from France.",
      "The rock formation is now called Pompey’s Pillar.",
      "The Gateway Arch is a separate monument in St. Louis.",
      "The divide is a line high in the Rockies."
    ]
  },
  {
    part: 6,
    q: "In which state is Pompey’s Pillar?",
    options: ["Missouri", "Ohio", "Montana", "Louisiana"],
    correct: 2,
    feedback: [
      "Missouri is home to St. Louis and the Gateway Arch.",
      "The landmark is in Montana, not Ohio.",
      "The rock formation along the Yellowstone is in what is now Montana.",
      "Louisiana contains New Orleans. Pompey’s Pillar is much farther northwest."
    ]
  },
  {
    part: 6,
    q: "Where did Sacagawea and her family leave the expedition on the way home?",
    options: ["At the Gateway Arch", "At the Pacific coast before the return began", "In New Orleans", "At the Mandan village"],
    correct: 3,
    feedback: [
      "The arch did not exist during the expedition.",
      "Sacagawea and her family went east with Clark’s group.",
      "They did not go to the port with the returning expedition.",
      "They left the group when it reached the Mandan village again."
    ]
  },
  {
    part: 6,
    q: "Who went on to Washington, D.C., to report what the group had found?",
    options: ["Meriwether Lewis", "Thomas Jefferson", "Sacagawea’s son", "The Shoshone leader"],
    correct: 0,
    feedback: [
      "After returning to St. Louis, Lewis reported the discoveries to Jefferson.",
      "Jefferson received the report.",
      "He left the group with his family near the Mandan.",
      "He helped the group get horses earlier in the trip."
    ]
  },
  {
    part: 6,
    q: "About how far did the expedition travel in all?",
    options: ["About 80,000 miles", "Nearly 8,000 miles", "About 80 miles", "About 800 miles"],
    correct: 1,
    feedback: [
      "That is roughly ten times the distance given in the chapter.",
      "The chapter describes a journey of nearly 8,000 miles over land and water.",
      "The whole journey covered far more than a short trip.",
      "The trip was roughly ten times as far as that."
    ]
  },
  {
    part: 6,
    q: "About how long did the whole expedition last?",
    options: ["About six months", "About ten years", "A little less than two and a half years", "About two and a half weeks"],
    correct: 2,
    feedback: [
      "The group spent more than a year just reaching the Pacific.",
      "They returned in 1806, a little over two years after leaving.",
      "It went from May 1804 to September 1806.",
      "Travel across the land and back took years, not weeks."
    ]
  },
  {
    part: 6,
    q: "Where is the Gateway Arch?",
    options: ["New Orleans, Louisiana", "Near the Pacific coast", "At Pompey’s Pillar in Montana", "St. Louis, Missouri"],
    correct: 3,
    feedback: [
      "New Orleans was the important Mississippi River port.",
      "The group reached the Pacific far west of the arch.",
      "Pompey’s Pillar is a different landmark.",
      "The monument stands in the city near where the expedition began."
    ]
  },
  {
    part: 6,
    q: "What does the Gateway Arch help people remember in this chapter?",
    options: ["St. Louis’s role in the journey west and the people connected to the expedition", "Where the group first saw the Pacific Ocean", "The spot where Clark named Pompy’s Tower", "The place where France built a port to make the purchase"],
    correct: 0,
    feedback: [
      "The arch remembers westward travel and honors Jefferson, Sacagawea, and the Lewis and Clark Expedition in part.",
      "The group first saw the Pacific far west of St. Louis.",
      "Clark named that rock formation in what is now Montana.",
      "The chapter connects the arch with the journey west from St. Louis."
    ]
  },
  {
    part: 6,
    q: "What can people do on the Lewis and Clark National Historic Trail today?",
    options: ["Meet Lewis and Clark in person", "Visit places along the route and learn about the journey", "Buy the Louisiana Territory again", "See the ocean from every stop"],
    correct: 1,
    feedback: [
      "The expedition happened more than two hundred years ago.",
      "The trail follows the expedition’s path through parts of the country.",
      "The land purchase was a deal made in 1803.",
      "Much of the trail is inland."
    ]
  },
  {
    part: 6,
    q: "Which answer best explains how both events helped the country grow?",
    options: ["Both events happened because settlers needed a railroad.", "The purchase added only a boat, and the expedition built the Gateway Arch.", "The purchase added land, and the expedition taught the country about the region.", "The expedition bought the land, and the purchase drew maps."],
    correct: 2,
    feedback: [
      "The chapter explains trade and exploration. The group traveled by boat, foot, and horse.",
      "The purchase added a large territory, and the arch came much later.",
      "The deal made the country larger. The explorers brought back maps and information.",
      "These switch the jobs. The purchase added land, and the explorers made maps."
    ]
  },
  {
    part: 6,
    q: "Why were the expedition’s records useful after the group got home?",
    options: ["They let France sell the territory for the first time.", "They removed the need for anyone to learn about Native American peoples.", "They proved the whole trip could be made by boat.", "The government could learn about places and routes it knew little about."],
    correct: 3,
    feedback: [
      "The purchase had already happened, before the expedition left.",
      "The records shared information, and there was still more to learn.",
      "The group had to cross the mountains on foot and horseback.",
      "The records preserved what the group had learned about the region."
    ]
  }
].map(question => ({
  ...question,
  partName: LOUISIANA_PURCHASE_PARTS.find(part => part.id === question.part).title
}));

const fs = require("fs");
const path = require("path");

// Path to your images folder
const folderPath = path.join(__dirname, "public/images/oc");

// Function to parse a single filename
function parseFilename(filename) {
  let withoutExt = filename.replace(/\.[^/.]+$/, ""); // remove extension
  let clean = withoutExt.replace(/^\d+\./, ""); // remove number prefix
  let [rawName, rawDesc] = clean.split("-").map(s => s.trim());

  return {
    name: rawName,
    description: rawDesc,
    imageUrl: `/images/oc/${filename}`
  };
}

// Read all files and sort them by leading number
const files = fs
  .readdirSync(folderPath)
  .filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
  .sort((a, b) => {
    const numA = parseInt(a.split(".")[0], 10);
    const numB = parseInt(b.split(".")[0], 10);
    return numA - numB;
  });

const teamMembers = files.map(parseFilename);

// Write result to a JSON file
const outputPath = path.join(__dirname, "team.json");
fs.writeFileSync(outputPath, JSON.stringify(teamMembers, null, 2), "utf-8");

console.log(`✅ team.json created with ${teamMembers.length} members`);

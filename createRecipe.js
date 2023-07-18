const fs = require("fs");
const path = require("path");

const recipeName = process.argv[2];
if (!recipeName) {
  console.log("Please provide a recipe name.");
  process.exit(1);
}

const sourcePath = path.join(__dirname, "recipe-dicts", "template.json");
const destinationPath = path.join(
  __dirname,
  "recipe-dicts",
  `${recipeName}.json`
);

fs.copyFileSync(sourcePath, destinationPath);

console.log(`Recipe ${recipeName}.json has been created.`);

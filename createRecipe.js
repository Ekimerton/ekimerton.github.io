const fs = require("fs");
const path = require("path");

const recipeName = process.argv[2];
if (!recipeName) {
  console.log("Please provide a recipe name.");
  process.exit(1);
}

const sourcePath = path.join(__dirname, "markdown", "template.md");
const destinationPath = path.join(__dirname, "markdown", `${recipeName}.md`);

fs.copyFileSync(sourcePath, destinationPath);

console.log(`Recipe ${recipeName}.md has been created.`);

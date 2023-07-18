const swig = require("swig");
const fs = require("fs");
const path = require("path");

// Find all JSON files in the recipe-dicts directory
let jsonFiles = fs
  .readdirSync("./recipe-dicts")
  .filter((file) => file.endsWith(".json"));

// Filter out the template file
jsonFiles = jsonFiles.filter((file) => file !== "template.json");

const recipeLinks = jsonFiles.map((jsonFile) => {
  const recipe = require(path.join(__dirname, "recipe-dicts", jsonFile));
  return {
    name: recipe.name,
    url: `recipes/${jsonFile.replace(".json", ".html")}`,
  };
});

// Generate an HTML file for each recipe
jsonFiles.forEach((jsonFile) => {
  const recipe = require(path.join(__dirname, "recipe-dicts", jsonFile));
  const output = swig.renderFile("./recipes/template.html.swig", {
    recipe: recipe,
  });
  fs.writeFileSync(`./recipes/${jsonFile.replace(".json", ".html")}`, output);
});

// Generate index.html
const indexOutput = swig.renderFile("index.html.swig", { recipeLinks });
fs.writeFileSync("index.html", indexOutput);

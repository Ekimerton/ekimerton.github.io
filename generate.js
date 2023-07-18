const fs = require("fs");
const marked = require("marked");
const { JSDOM } = require("jsdom");
const swig = require("swig");

// Define your template
const template = fs.readFileSync("./recipes/template.html", "utf8");

// Read the markdown files in the directory
const markdownFiles = fs.readdirSync("./markdown");

// Store the recipe links
const recipeLinks = [];

// Process each markdown file
markdownFiles.forEach((markdownFile) => {
  // Skip the template.md file
  if (markdownFile === "template.md") {
    return;
  }

  // Define your markdown
  const markdowntring = fs.readFileSync(`./markdown/${markdownFile}`, "utf8");

  // Create a custom renderer
  let renderer = new marked.Renderer();
  let inSection = false;
  let firstTitle = "";
  let subtitle = "";

  renderer.heading = function (text, level) {
    if (level === 1 && firstTitle === "") {
      firstTitle = text;
      return "";
    } else if (level === 2) {
      let res = inSection
        ? `</div><div class="section"><h${level}>${text}</h${level}>`
        : `<div class="section"><h${level}>${text}</h${level}>`;
      inSection = true;
      return res;
    } else {
      return `<h${level}>${text}</h${level}>`;
    }
  };

  renderer.paragraph = function (text) {
    if (firstTitle && !subtitle) {
      subtitle = text;
      return ""; // skip this paragraph from rendering normally
    } else if (inSection && text.trim() !== "") {
      return `<p>${text}</p>`;
    } else {
      return text;
    }
  };

  renderer.listitem = function (text) {
    if (inSection) {
      return `<li><p>${text}</p></li>`;
    } else {
      return `<li>${text}</li>`;
    }
  };

  renderer.list = function (body, ordered) {
    if (inSection) {
      return ordered
        ? `<ol class="numbered-list">${body}</ol>`
        : `<ul class="ingredients">${body}</ul>`;
    } else {
      return ordered ? `<ol>${body}</ol>` : `<ul>${body}</ul>`;
    }
  };

  // Close the section when finished
  renderer.endSection = function () {
    if (inSection) {
      inSection = false;
      return "</div>";
    }
  };

  // Apply the custom renderer
  marked.setOptions({ renderer });

  // Convert markdown string to HTML
  let htmlString = marked.parse(markdowntring);

  // Append ending section if necessary
  if (inSection) {
    htmlString += renderer.endSection();
  }

  // Create a DOM from the template
  const dom = new JSDOM(template);

  // Set the title
  dom.window.document.querySelector("title").textContent = firstTitle;

  if (subtitle) {
    dom.window.document.querySelector(".section-centered h4").textContent =
      subtitle;
  }

  // Replace the h1 in the section-centered section
  dom.window.document.querySelector(".section-centered h1").textContent =
    firstTitle;

  // Set the HTML content
  dom.window.document
    .querySelector(".links")
    .insertAdjacentHTML("beforebegin", htmlString);

  // Write HTML to a new file
  const outputFileName = `recipes/${markdownFile.replace(".md", ".html")}`;
  fs.writeFileSync(outputFileName, dom.serialize());

  // Update the recipe links array if it's not already added
  if (!recipeLinks.some((link) => link.url === outputFileName)) {
    recipeLinks.push({
      name: firstTitle,
      url: outputFileName,
    });
  }
});

// Generate index.html
console.log(recipeLinks);
const indexOutput = swig.renderFile("index.html.swig", { recipeLinks });
fs.writeFileSync("index.html", indexOutput);

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { parse, format } from "date-fns";

const recipesDirectory = path.join(process.cwd(), "src/app/recipes/recipes");

function createSlug(filename) {
  return filename.replace(/\.md$/, "").replace(/\s+/g, '-').toLowerCase();
}

function getPostMetadata(originalTitle, content, data, fullPath) {
  // Extract first 100 chars for description from the first paragraph
  const noHeaders = content.replace(/^#+\s+.*$/gm, "");
  const firstParagraph = noHeaders.split(/\n\s*\n/).find(p => p.trim().length > 0) || "";
  const plainText = firstParagraph.replace(/\[(.+?)\]\(.+?\)|[*_`#>]/g, "$1").trim();
  let description = plainText.length > 100 ? plainText.slice(0, 100) : plainText;
  if (plainText.length > 100) {
    const lastSpace = description.lastIndexOf(" ");
    if (lastSpace > 0) {
      description = description.slice(0, lastSpace);
    }
  }

  const stat = fs.statSync(fullPath);
  const dateStr = data.date || format(stat.mtime, "MMMM do, yyyy");

  return {
    title: originalTitle,
    description: description,
    date: dateStr,
    author: {
      name: "Ekimerton",
      imageUrl: "",
      url: "",
      handle: ""
    },
    keywords: "recipes",
    ...data
  };
}

export async function loadRecipe(slug) {
  const filenames = fs.readdirSync(recipesDirectory).filter(file => file.endsWith('.md'));
  
  const matchedFilename = filenames.find(filename => createSlug(filename) === slug);
  if (!matchedFilename) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const originalTitle = matchedFilename.replace(/\.md$/, "");
  const fullPath = path.join(recipesDirectory, matchedFilename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  const frontMatter = getPostMetadata(originalTitle, content, data, fullPath);

  return {
    frontMatter,
    content: contentHtml,
  };
}

export async function getStaticPaths() {
  const filenames = fs.readdirSync(recipesDirectory).filter(file => file.endsWith('.md'));

  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: createSlug(filename),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function loadAllRecipes() {
  const filenames = fs.readdirSync(recipesDirectory).filter(file => file.endsWith('.md'));

  const recipes = filenames.map((filename) => {
    const slug = createSlug(filename);
    const originalTitle = filename.replace(/\.md$/, "");
    const fullPath = path.join(recipesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontMatter = getPostMetadata(originalTitle, content, data, fullPath);

    return {
      slug,
      frontMatter,
      preview: frontMatter.description,
    };
  });

  recipes.sort((a, b) => {
    const dateA = parse(a.frontMatter.date, "MMMM do, yyyy", new Date());
    const dateB = parse(b.frontMatter.date, "MMMM do, yyyy", new Date());

    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });

  return recipes;
}

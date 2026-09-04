import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://BusinessCompanysolutions.ca";
const POSTS_API = `${SITE_URL}/wp-json/wp/v2/posts?per_page=100&_embed`;

const postsDir = path.resolve("src/pages/posts");
const imagesDir = path.resolve("public/images/blog");

function stripHtml(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<h2[^>]*>/gi, "\n## ")
    .replace(/<\/h2>/gi, "\n")
    .replace(/<h3[^>]*>/gi, "\n### ")
    .replace(/<\/h3>/gi, "\n")
    .replace(/<strong[^>]*>/gi, "**")
    .replace(/<\/strong>/gi, "**")
    .replace(/<b[^>]*>/gi, "**")
    .replace(/<\/b>/gi, "**")
    .replace(/<em[^>]*>/gi, "_")
    .replace(/<\/em>/gi, "_")
    .replace(/<i[^>]*>/gi, "_")
    .replace(/<\/i>/gi, "_")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/ul>/gi, "\n")
    .replace(/<\/ol>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function escapeYaml(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ");
}

function getImageExtension(url = "") {
  const clean = url.split("?")[0];
  return path.extname(clean) || ".jpg";
}

async function downloadImage(url, slug) {
  if (!url) return "";

  const ext = getImageExtension(url);
  const fileName = `${slug}${ext}`;
  const outputPath = path.join(imagesDir, fileName);

  const response = await fetch(url);

  if (!response.ok) {
    console.warn(`Could not download image for ${slug}: ${url}`);
    return url;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outputPath, buffer);

  return `/images/blog/${fileName}`;
}

await fs.mkdir(postsDir, { recursive: true });
await fs.mkdir(imagesDir, { recursive: true });

const response = await fetch(POSTS_API);

if (!response.ok) {
  throw new Error(`Could not fetch posts: ${response.status}`);
}

const wpPosts = await response.json();

for (const post of wpPosts) {
  const title = stripHtml(post.title?.rendered || "Untitled");
  const slug = post.slug;
  const pubDate = post.date?.split("T")[0] || "";
  const description = stripHtml(post.excerpt?.rendered || "").slice(0, 220);
  const content = stripHtml(post.content?.rendered || "");

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const originalImage = featuredMedia?.source_url || "";
  const imageAlt = featuredMedia?.alt_text || title;
  const localImage = await downloadImage(originalImage, slug);

  const markdown = `---
layout: ../../layouts/MarkdownPostLayout.astro
title: "${escapeYaml(title)}"
pubDate: ${pubDate}
description: "${escapeYaml(description)}"
author: "BusinessCompany"
image:
  url: "${localImage}"
  alt: "${escapeYaml(imageAlt)}"
tags: ["IT"]
---

${content}
`;

  await fs.writeFile(path.join(postsDir, `${slug}.md`), markdown, "utf8");
}

console.log(`Imported ${wpPosts.length} posts.`);

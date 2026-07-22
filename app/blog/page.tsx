import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogList } from "@/components/main/BlogList";
import type { BlogPostMetadata } from "@/types/blog";

function getBlogPosts(): BlogPostMetadata[] {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter(fileName => fileName.endsWith(".mdx"))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const tags = Array.isArray(data.tags) ? data.tags : [];
      const date = data.date ?? data.publishedAt ?? "";
      
      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title ?? fileName.replace(/\.mdx$/, ""),
        date,
        author: data.author ?? "Satyam Sharma",
        tags,
        summary: data.summary ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return <BlogList posts={posts} />;
}

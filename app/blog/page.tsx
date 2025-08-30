import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogList } from "@/components/main/BlogList";

function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter(fileName => fileName.endsWith(".mdx"))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      
      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        author: data.author,
        tags: data.tags,
        summary: data.summary,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return <BlogList posts={posts} />;
}

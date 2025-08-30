import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogPostView } from "@/components/main/BlogPost";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const fullPath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      metadata: {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        tags: data.tags,
        summary: data.summary,
      },
      content,
    };
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <BlogPostView post={post.metadata}>
      <MDXRemote source={post.content} />
    </BlogPostView>
  );
}

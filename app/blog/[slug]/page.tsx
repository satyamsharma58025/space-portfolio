import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostView } from "@/components/main/BlogPost";
import { notFound } from "next/navigation";
import type { BlogPost } from "@/types/blog";
import Markdown from 'react-markdown';

async function getPost(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      metadata: {
        slug,
        title: data.title as string,
        date: data.date as string,
        author: data.author as string,
        tags: data.tags as string[],
        summary: data.summary as string,
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
      <Markdown>{post.content}</Markdown>
    </BlogPostView>
  );
}

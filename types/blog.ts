export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
}

export interface BlogPost {
  metadata: BlogPostMetadata;
  content: string;
}

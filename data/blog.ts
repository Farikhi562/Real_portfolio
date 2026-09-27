export type BlogStatus = "Draft" | "Published" | "Coming Soon";

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  body: string[];
  date: string;
  category: string;
  coverImage?: string;
  status: BlogStatus;
  url?: string;
};

// Keep this empty until real notes are ready to publish.
export const blogPosts: BlogPost[] = [];

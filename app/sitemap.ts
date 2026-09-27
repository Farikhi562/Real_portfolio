import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frikhii.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/certificates", "/activities", "/blog"];
  const publishedBlogRoutes = blogPosts
    .filter((post) => post.status === "Published")
    .map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...publishedBlogRoutes].map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.6,
  }));
}

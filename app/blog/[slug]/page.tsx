import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/data/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.status === "Published")
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug && entry.status === "Published");

  return post ? { title: `${post.title} — Zan`, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug && entry.status === "Published");
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="page-shell article-page">
        <Link className="text-link" href="/blog">← All notes</Link>
        <article>
          <p className="eyebrow article-meta">{post.category} · {post.date}</p>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
          {post.coverImage ? <Image className="article-cover" src={post.coverImage} alt="" width={1440} height={800} priority sizes="(max-width: 700px) 100vw, 900px" /> : null}
          <div className="article-body">
            {post.body.map((paragraph, index) => <p key={`${post.slug}-${index}`}>{paragraph}</p>)}
          </div>
        </article>
      </main>
      <footer className="site-footer page-shell"><Link className="footer-brand" href="/#top">Z<span>.</span></Link><p>AI Engineer in the Making.</p><Link className="back-top" href="/blog">ALL NOTES <span aria-hidden="true">↗</span></Link></footer>
    </>
  );
}

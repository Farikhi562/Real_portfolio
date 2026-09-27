import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const publishedPosts = blogPosts.filter((post) => post.status === "Published");

  return (
    <>
      <SiteHeader />
      <main className="page-shell archive-page blog-archive-page">
        <p className="eyebrow">BLOG / ENGINEERING NOTES</p>
        <h1>Learning in public.</h1>
        <p className="archive-intro">Notes on AI engineering, RAG experiments, Python, data, projects, and lessons from competitions.</p>
        {publishedPosts.length ? (
          <div className="blog-preview-grid">
            {publishedPosts.map((post) => (
              <article className="blog-preview-card" key={post.slug}>
                <span className="document-type">{post.category} · {post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a className="text-link" href={post.url ?? `/blog/${post.slug}`}>Read note <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-coming-soon blog-coming-soon-archive">
            <span className="blog-status-mark" aria-hidden="true">01</span>
            <div><p className="eyebrow">COMING SOON</p><h2>No posts published yet.</h2><p>Drafts will appear here after they are written and ready to share.</p></div>
            <span className="status-pill status-concept"><span className="status-dot" /> No published posts</span>
          </div>
        )}
        <a className="text-link archive-back-link" href="/#blog">← Back to home</a>
      </main>
      <footer className="site-footer page-shell"><a className="footer-brand" href="/#top">Z<span>.</span></a><p>AI Engineer in the Making.</p><a className="back-top" href="/#top">HOME <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}

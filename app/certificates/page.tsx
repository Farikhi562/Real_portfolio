import Link from "next/link";
import { CertificateCard } from "@/components/certificate-card";
import { SiteHeader } from "@/components/site-header";
import { certificateCategories, certificates } from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell archive-page">
        <p className="eyebrow">DOCUMENTS / CERTIFICATE ARCHIVE</p>
        <h1>Credentials, documented.</h1>
        <p className="archive-intro">Certificate records are being collected. No title, issuer, date, or credential link is published until it has been confirmed.</p>
        <div className="certificate-category-list" aria-label="Certificate categories">
          {certificateCategories.map((category) => <span className="tag" key={category}>{category}</span>)}
        </div>
        <div className="certificates-grid archive-certificates-grid">
          {certificates.map((certificate, index) => <CertificateCard key={certificate.id} certificate={certificate} index={index} />)}
        </div>
        <Link className="text-link archive-back-link" href="/#certificates">← Back to featured certificates</Link>
      </main>
      <footer className="site-footer page-shell"><Link className="footer-brand" href="/#top">Z<span>.</span></Link><p>AI Engineer in the Making.</p><Link className="back-top" href="/#top">HOME <span aria-hidden="true">↗</span></Link></footer>
    </>
  );
}

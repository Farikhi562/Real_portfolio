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
        <a className="text-link archive-back-link" href="/#certificates">← Back to featured certificates</a>
      </main>
      <footer className="site-footer page-shell"><a className="footer-brand" href="/#top">Z<span>.</span></a><p>AI Engineer in the Making.</p><a className="back-top" href="/#top">HOME <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}

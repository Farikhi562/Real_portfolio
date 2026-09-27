import Image from "next/image";
import type { Certificate } from "@/data/certificates";

export function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  return (
    <article className="certificate-card">
      <div
        className="certificate-image-placeholder"
        role={certificate.image ? undefined : "img"}
        aria-label={certificate.image ? undefined : "Certificate image placeholder"}
      >
        {certificate.image ? (
          <Image className="certificate-image" src={certificate.image} alt={`${certificate.title} certificate`} fill sizes="(max-width: 700px) 100vw, 25vw" />
        ) : (
          <>
            <span className="certificate-placeholder-mark" aria-hidden="true">Z<span>.</span></span>
            <span>CREDENTIAL / {String(index + 1).padStart(2, "0")}</span>
            <span className="certificate-image-caption">Certificate image TBD</span>
          </>
        )}
      </div>
      <div className="certificate-card-copy">
        <span className="document-type">{certificate.category}</span>
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer} <span>·</span> {certificate.date}</p>
        {certificate.credentialUrl ? (
          <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">View credential <span aria-hidden="true">↗</span></a>
        ) : <span className="link-pending">Credential: Not Available</span>}
      </div>
    </article>
  );
}

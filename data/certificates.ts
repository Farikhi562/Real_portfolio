export type CertificateCategory =
  | "High School"
  | "University"
  | "Competition"
  | "Workshop"
  | "Bootcamp"
  | "Technology"
  | "Organization"
  | "Other";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertificateCategory | "TBD";
  image?: string;
  credentialUrl?: string;
  featured: boolean;
};

// The five slots are intentional until certificate titles, issuers, and images are confirmed.
export const certificates: Certificate[] = Array.from({ length: 5 }, (_, index) => ({
  id: `certificate-${String(index + 1).padStart(2, "0")}`,
  title: "Certificate details TBD",
  issuer: "Issuer TBD",
  date: "Year TBD",
  category: "TBD" as const,
  featured: true,
}));

export const certificateCategories: CertificateCategory[] = [
  "High School",
  "University",
  "Competition",
  "Workshop",
  "Bootcamp",
  "Technology",
  "Organization",
  "Other",
];

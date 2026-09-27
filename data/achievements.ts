export type Achievement = {
  title: string;
  organizer: string;
  category: string;
  year?: string;
  date?: string;
  result: string;
  description: string;
  credentialUrl?: string;
  image?: string;
};

export const achievements: Achievement[] = [
  {
    title: "ICBC 2026",
    organizer: "HMSISFO Universitas Dian Nuswantoro (UDINUS)",
    category: "Competition · Achievement",
    year: "2026",
    date: "April 2026",
    result: "Juara Harapan 1",
    description: "Competition achievement; the official result is retained in its original Indonesian wording.",
  },
  {
    title: "BPC — HIMAMEN Universitas Gunadarma",
    organizer: "HIMAMEN Universitas Gunadarma",
    category: "Business competition",
    result: "Top 7",
    description: "Reached Top 7 and did not advance to the final. Not listed as a finalist.",
  },
  {
    title: "GEMASTIK XIX 2026",
    organizer: "Universitas Gunadarma delegation",
    category: "Pengembangan Bisnis TIK · X1",
    year: "2026",
    result: "Campus Delegate · Not Advanced",
    description:
      "Represented Universitas Gunadarma in the ICT Business Development division; the team did not advance to the next stage. Team: Muhamad Fauzan Al Farikhi (Lead), Rangga Dwi Prasetyo (Finance), and Mirza Danisywar Noor Wahyu (Marketing / Sales).",
  },
];

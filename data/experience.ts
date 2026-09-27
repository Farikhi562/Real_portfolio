export type ExperienceItem = {
  title: string;
  organization: string;
  category: string;
  status: string;
  description: string;
  contribution: string;
};

export const experiences: ExperienceItem[] = [
  {
    title: "UGP-GBIC",
    organization: "UGPreneurs",
    category: "Entrepreneurship · Program",
    status: "Ongoing",
    description:
      "A business and innovation development program exploring technology, entrepreneurship, and product development.",
    contribution: "Technology · Business development · Product thinking",
  },
  {
    title: "GEMASTIK XIX 2026",
    organization: "Pengembangan Bisnis TIK",
    category: "Competition",
    status: "Competition experience",
    description:
      "Developing a technology-business proposal with a small team for the ICT Business Development category. Team: Rangga Dwi Prasetyo (Finance) and Mirza Danisywar Noor Wahyu (Marketing / Sales).",
    contribution:
      "Team Lead · Business validation · Market research · Product positioning",
  },
  {
    title: "UI/UX Design Competition — Nuget Rebus",
    organization: "Competition project",
    category: "Design · Product",
    status: "Experience",
    description:
      "Contributed to the product experience from problem research through a prototype direction.",
    contribution: "Problem research · AI feature exploration · User flow · Wireframe · Prototype",
  },
  {
    title: "NEXA Tech Labs",
    organization: "NEXA ecosystem",
    category: "Technology · Entrepreneurship",
    status: "Ongoing",
    description:
      "Building technology initiatives with a team, connecting engineering practice with product and business thinking.",
    contribution: "Builder · Project lead",
  },
];

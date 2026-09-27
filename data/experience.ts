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
    title: "NEXA Tech Labs",
    organization: "NEXA ecosystem",
    category: "Technology · Entrepreneurship",
    status: "Ongoing",
    description:
      "A team-built initiative for product development, technology experimentation, engineering, and entrepreneurship. Related initiatives include NEXA Campus, NEXA Sphere, and NEXCAMP.",
    contribution: "Builder · Project lead",
  },
  {
    title: "NEXCAMP",
    organization: "NEXA ecosystem",
    category: "Product · Technology · Entrepreneurship",
    status: "Ongoing",
    description:
      "Building practical digital products while combining software, AI, and entrepreneurial thinking.",
    contribution: "Product development · Teamwork · Experimentation",
  },
  {
    title: "UI/UX Design Competition — Nuget Rebus",
    organization: "Competition project",
    category: "Competition · UI/UX",
    status: "Experience",
    description:
      "Contributed to the product experience from problem research through a prototype direction.",
    contribution: "Problem research · AI features · User flow · Wireframe · Prototype",
  },
  {
    title: "Technology Product Exhibition — FTI",
    organization: "Fakultas Teknologi Industri",
    category: "Exhibition · Technology",
    status: "Completed",
    description:
      "Participated in a technology product showcase. Product name, event date, and individual role are not yet documented.",
    contribution: "Product showcase · Product, date, and role: TBD",
  },
];

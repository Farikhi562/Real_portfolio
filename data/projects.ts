export type ProjectStatus = "Building" | "Ongoing" | "Concept" | "In development";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  detail: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "RAG Q&A Bot",
    category: "AI Engineering",
    description:
      "A document question-answering project exploring retrieval-augmented generation: find relevant context, then use it to ground an answer.",
    role: "Project builder",
    status: "Building",
    technologies: ["Python", "RAG", "Groq API"],
    detail: "Model, embedding, and vector store details are being finalized.",
  },
  {
    number: "02",
    title: "NEXCAMP",
    category: "Product · Technology · Entrepreneurship",
    description:
      "A technology initiative focused on building practical digital products with software, AI, and entrepreneurial thinking.",
    role: "NEXA ecosystem initiative",
    status: "Ongoing",
    technologies: ["Product thinking", "Technology", "AI exploration"],
    detail: "An ongoing initiative; product details will be added as they are ready to share.",
  },
  {
    number: "03",
    title: "DocMind Insight",
    category: "AI · Document intelligence",
    description:
      "A multi-agent document decision-support project exploring how documents can become a more useful, maintainable knowledge base.",
    role: "AI / project ownership",
    status: "In development",
    technologies: ["AI agents", "Document workflows", "Knowledge base"],
    detail: "Four-student Informatics team; concept v2.0 explores an auto-sync knowledge base.",
  },
  {
    number: "04",
    title: "OPTURA",
    category: "Data · Product concept",
    description:
      "A concept for helping F&B micro-businesses understand the flow from stock and purchasing to production, sales, waste, and margin.",
    role: "Product exploration",
    status: "Concept",
    technologies: ["Operations data", "Decision support", "F&B"],
    detail: "Case study concept: Warteg Bahari, Kelapa Dua, Depok. Recommendations leave decisions to the owner.",
  },
  {
    number: "05",
    title: "NEXAIR",
    category: "AI · Environmental risk intelligence",
    description:
      "Next-generation air risk intelligence: a concept combining environmental signals with scientific computing approaches.",
    role: "Concept exploration",
    status: "Concept",
    technologies: ["Environmental data", "Scientific computing", "Risk mapping"],
    detail: "Risk confidence is relative and uncalibrated; no forecast is presented as a validated probability.",
  },
  {
    number: "06",
    title: "NEXA Tech Labs",
    category: "Technology initiative",
    description:
      "A team-built ecosystem initiative for developing technology products and growing engineering and entrepreneurship practice.",
    role: "Builder · Project lead",
    status: "Ongoing",
    technologies: ["Product building", "Engineering", "Entrepreneurship"],
    detail: "Related initiatives include NEXA Campus, NEXA Sphere, and NEXCAMP.",
  },
];

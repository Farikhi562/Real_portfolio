export type ProjectStatus = "Building" | "Ongoing" | "Completed" | "Concept" | "Exploring" | "Draft";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  detail: string;
  image?: string;
  github?: string;
  demo?: string;
  externalUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "RAG Q&A Bot",
    category: "AI Engineering",
    description:
      "A document question-answering project exploring retrieval-augmented generation: find relevant context, then use it to ground an answer.",
    role: "Project in development",
    status: "Building",
    technologies: ["Python", "RAG", "LLM", "Embeddings", "Vector Search", "Groq API"],
    detail: "Exact LLM model, embedding model, and vector database are TBD until implementation is confirmed.",
  },
  {
    number: "02",
    title: "NEXCAMP",
    category: "Product · Technology · Entrepreneurship",
    description:
      "A technology initiative focused on building practical digital products with software, AI, and entrepreneurial thinking.",
    role: "NEXA ecosystem project",
    status: "Ongoing",
    technologies: ["Product thinking", "Technology", "AI exploration"],
    detail: "An ongoing initiative; product details will be added as they are ready to share.",
    externalUrl: "https://campus.nexatechlabs.my.id",
  },
  {
    number: "03",
    title: "OPTURA",
    category: "Data · Product concept",
    description:
      "A concept for helping F&B micro-businesses understand the flow from stock and purchasing to production, sales, waste, and margin.",
    role: "Product exploration",
    status: "Concept",
    technologies: ["Operations data", "Decision support", "F&B"],
    detail:
      "Case study: Warteg Bahari, Kelapa Dua, Depok. Planned features cover inventory, production, sales, waste, smart restock, HPP, margin and price-impact analysis, and supplier-versus-market comparisons. Recommendations support the owner, who makes each decision.",
  },
  {
    number: "04",
    title: "NEXAIR",
    category: "AI · Environmental risk intelligence",
    description:
      "Next-generation air risk intelligence: a concept exploring FIRMS hotspots, weather, Gaussian Plume Prior, PINN correction, risk zones, and 2 / 4 / 6 / 8 / 12-hour forecasts.",
    role: "Concept exploration",
    status: "Concept",
    technologies: ["FIRMS hotspots", "Weather data", "Gaussian Plume Prior", "PINN exploration"],
    detail: "Concept pipeline for a BPBD dashboard. Risk levels: LOW / MODERATE / HIGH. Confidence is relative and uncalibrated.",
  },
  {
    number: "05",
    title: "DocMind Insight",
    category: "AI · Document intelligence",
    description:
      "A multi-agent document decision-support project exploring how documents can become a more useful, maintainable knowledge base.",
    role: "AI / project ownership",
    status: "Building",
    technologies: ["AI agents", "Document workflows", "Knowledge base"],
    detail: "Repository: nevora-insights (public URL TBD). Four Informatics students across AI, frontend, and data / QA; Zan handles AI and project ownership. v2.0 explores an auto-sync knowledge base.",
  },
];

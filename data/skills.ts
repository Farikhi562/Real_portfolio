export type SkillGroup = {
  title: string;
  state: "Foundation" | "Building" | "Learning" | "Exploring";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming foundations",
    state: "Foundation",
    skills: ["Python", "Programming concepts", "Object-oriented programming", "Data structures", "Algorithms"],
  },
  {
    title: "AI engineering",
    state: "Building",
    skills: ["LLM applications", "RAG pipelines", "Embeddings", "Vector search", "Prompt engineering", "AI agents"],
  },
  {
    title: "Data & machine learning",
    state: "Learning",
    skills: ["Data science", "Machine learning", "NLP", "Pandas", "Data cleaning", "Exploratory data analysis", "Statistics", "SQL"],
  },
  {
    title: "Software & systems",
    state: "Exploring",
    skills: ["Git & GitHub", "REST/API concepts", "Web development", "Backend fundamentals", "IoT fundamentals"],
  },
];

export const learningPriorities = [
  "AI Engineering",
  "Python",
  "Data Science",
  "Machine Learning",
  "LLM / RAG",
  "Software Engineering",
  "SQL",
  "IoT fundamentals",
];

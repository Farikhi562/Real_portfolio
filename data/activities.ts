export type ActivityCategory =
  | "Competition"
  | "Technology Exhibition"
  | "Campus Event"
  | "Project"
  | "Workshop"
  | "Team Activity";

export type Activity = {
  id: string;
  title: string;
  category: ActivityCategory;
  event: string;
  date: string;
  image?: string;
  description: string;
};

// No photos are currently present in the working public assets directory.
export const activities: Activity[] = [
  { id: "competition", title: "Competition moments", category: "Competition", event: "Event details TBD", date: "TBD", description: "Photo placeholder for competition activities." },
  { id: "exhibition", title: "Technology exhibition", category: "Technology Exhibition", event: "FTI product showcase", date: "TBD", description: "Photo placeholder for the FTI technology product exhibition." },
  { id: "project", title: "Building with a team", category: "Project", event: "Project details TBD", date: "TBD", description: "Photo placeholder for project work and team activities." },
  { id: "campus", title: "Campus activities", category: "Campus Event", event: "Event details TBD", date: "TBD", description: "Photo placeholder for academic and campus activities." },
];

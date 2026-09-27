export type ActivityCategory =
  | "Competition"
  | "Technology Exhibition"
  | "Campus Event"
  | "Project"
  | "Workshop"
  | "Organization"
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

// The first five activity photos are present in public/images/activities.
export const activities: Activity[] = [
  { id: "activity-01", title: "Optura — Warteg Bahari Owner Interview", category: "Project", event: "Optura field research", date: "TBD", image: "/images/activities/activity-01.jpg", description: "Interview with the owner of Warteg Bahari for the Optura project." },
  { id: "activity-02", title: "NCD Formation", category: "Organization", event: "Nexa Competition Division (NCD)", date: "TBD", image: "/images/activities/activity-02.jpg", description: "Photo from the formation of Nexa Competition Division (NCD)." },
  { id: "activity-03", title: "NCD First In-Person Meeting", category: "Organization", event: "Nexa Competition Division (NCD)", date: "TBD", image: "/images/activities/activity-03.jpg", description: "Photo from the first in-person meeting of Nexa Competition Division (NCD)." },
  { id: "activity-04", title: "Gunadarma Industrial Engineering Fair", category: "Campus Event", event: "Gunadarma Industrial Engineering Fair", date: "TBD", image: "/images/activities/activity-04.jpg", description: "Attending the Gunadarma Industrial Engineering Fair." },
  { id: "activity-05", title: "Data Science / LSP Course", category: "Workshop", event: "Universitas Gunadarma", date: "TBD", image: "/images/activities/activity-05.jpg", description: "Attending a Data Science / LSP course at Gunadarma with a senior lab assistant." },
  { id: "activity-06", title: "Activity photo 06", category: "Team Activity", event: "Event details TBD", date: "TBD", description: "Photo and event details TBD." },
  { id: "activity-07", title: "Activity photo 07", category: "Team Activity", event: "Event details TBD", date: "TBD", description: "Photo and event details TBD." },
  { id: "activity-08", title: "Activity photo 08", category: "Team Activity", event: "Event details TBD", date: "TBD", description: "Photo and event details TBD." },
  { id: "activity-09", title: "Activity photo 09", category: "Team Activity", event: "Event details TBD", date: "TBD", description: "Photo and event details TBD." },
  { id: "activity-10", title: "Activity photo 10", category: "Team Activity", event: "Event details TBD", date: "TBD", description: "Photo and event details TBD." },
];

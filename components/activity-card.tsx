import Image from "next/image";
import type { Activity } from "@/data/activities";

export function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  return (
    <article className="activity-card">
      <div
        className="activity-image-placeholder"
        role={activity.image ? undefined : "img"}
        aria-label={activity.image ? undefined : `${activity.category} photo placeholder`}
      >
        {activity.image ? (
          <Image className="activity-image" src={activity.image} alt={`${activity.title} — ${activity.event}`} fill sizes="(max-width: 700px) 100vw, 25vw" />
        ) : (
          <>
            <span className="activity-image-number">MOMENT / {String(index + 1).padStart(2, "0")}</span>
            <span className="activity-image-icon" aria-hidden="true">＋</span>
            <span className="activity-image-caption">Photo coming soon</span>
          </>
        )}
      </div>
      <div className="activity-card-copy">
        <span className="document-type">{activity.category}</span>
        <h3>{activity.title}</h3>
        <p>{activity.event} <span>·</span> {activity.date}</p>
        <p className="activity-description">{activity.description}</p>
      </div>
    </article>
  );
}

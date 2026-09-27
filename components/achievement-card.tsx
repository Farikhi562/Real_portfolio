import Image from "next/image";
import type { Achievement } from "@/data/achievements";

export function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  return (
    <article className="achievement-card">
      {achievement.image ? (
        <div className="achievement-image-frame">
          <Image className="achievement-image" src={achievement.image} alt={`${achievement.title} evidence`} fill sizes="(max-width: 700px) 100vw, 33vw" />
        </div>
      ) : null}
      <div className="achievement-card-top">
        <span className="project-number">ACHIEVEMENT / {String(index + 1).padStart(2, "0")}</span>
        <span className="achievement-year">{achievement.year ?? "YEAR TBD"}</span>
      </div>
      <p className="project-category">{achievement.category}</p>
      <h3>{achievement.title}</h3>
      <p className="achievement-organizer">{achievement.organizer}</p>
      <p className="achievement-result">{achievement.result}</p>
      <p className="achievement-description">{achievement.description}</p>
      {achievement.credentialUrl ? (
        <a className="text-link" href={achievement.credentialUrl} target="_blank" rel="noreferrer">
          View credential <span aria-hidden="true">↗</span>
        </a>
      ) : <span className="link-pending">Credential: Not Available</span>}
    </article>
  );
}

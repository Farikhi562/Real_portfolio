import { ActivityCard } from "@/components/activity-card";
import { SiteHeader } from "@/components/site-header";
import { activities } from "@/data/activities";

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell archive-page">
        <p className="eyebrow">PORTFOLIO / ACTIVITY ARCHIVE</p>
        <h1>Activities & moments.</h1>
        <p className="archive-intro">Photo slots are ready for verified moments from competitions, technology exhibitions, campus activities, and projects.</p>
        <div className="activities-grid archive-activities-grid">
          {activities.map((activity, index) => <ActivityCard key={activity.id} activity={activity} index={index} />)}
        </div>
        <a className="text-link archive-back-link" href="/#activities">← Back to selected moments</a>
      </main>
      <footer className="site-footer page-shell"><a className="footer-brand" href="/#top">Z<span>.</span></a><p>AI Engineer in the Making.</p><a className="back-top" href="/#top">HOME <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}

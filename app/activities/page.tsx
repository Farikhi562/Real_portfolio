import Link from "next/link";
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
        <Link className="text-link archive-back-link" href="/#activities">← Back to selected moments</Link>
      </main>
      <footer className="site-footer page-shell"><Link className="footer-brand" href="/#top">Z<span>.</span></Link><p>AI Engineer in the Making.</p><Link className="back-top" href="/#top">HOME <span aria-hidden="true">↗</span></Link></footer>
    </>
  );
}

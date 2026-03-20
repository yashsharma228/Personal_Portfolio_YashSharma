import SectionCard from "../../components/SectionCard";

export default function AchievementsPage() {
  return (
    <div>
      <div className="code-comment text-xs md:text-sm mb-4">
        {"// achievements.tsx — highlights"}
      </div>
      <SectionCard title="Achievements" subtitle="Milestones and recognitions.">
        <div className="mt-6 text-white/70 leading-relaxed">
          List your achievements here.
        </div>
      </SectionCard>
    </div>
  );
}


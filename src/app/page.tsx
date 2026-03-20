import Link from "next/link";
import SectionCard from "../components/SectionCard";

export default function LandingPage() {
  return (
    <SectionCard
      title="Welcome"
      subtitle="Start here, then open the portfolio"
    >
      <div className="space-y-4 text-white/80">
        <p className="text-base md:text-lg">
          This is the homepage. Open the portfolio to explore projects, skills, and experience.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/portfolio"
            className="rounded-md bg-white/12 border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/18 transition code-mono"
          >
            Open Portfolio
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-black/20 border border-white/12 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition code-mono"
          >
            Contact
          </Link>
        </div>
      </div>
    </SectionCard>
  );
}

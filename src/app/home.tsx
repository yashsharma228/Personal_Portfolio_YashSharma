import SectionCard from "../components/SectionCard";
import { person } from "../lib/portfolioData";

export default function Home() {
	return (
		<SectionCard title="Home">
			<div className="text-lg text-zinc-800 dark:text-zinc-200">
				Connect with me using the links below.
			</div>
			<div className="mt-4 flex flex-wrap gap-3">
				<a
					href={person.links.linkedin}
					target="_blank"
					rel="noreferrer"
					className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 transition hover:bg-white/20"
				>
					LinkedIn
				</a>
				<a
					href={person.links.github}
					target="_blank"
					rel="noreferrer"
					className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 transition hover:bg-white/20"
				>
					GitHub
				</a>
			</div>
		</SectionCard>
	);
}
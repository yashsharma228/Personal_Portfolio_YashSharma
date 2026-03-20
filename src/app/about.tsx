import SectionCard from '../components/SectionCard';

export default function About() {
	return (
		<SectionCard title="About">
			<div className="text-lg text-zinc-800 dark:text-zinc-200">
				Brief bio or summary about yourself goes here.
			</div>
		</SectionCard>
	);
}
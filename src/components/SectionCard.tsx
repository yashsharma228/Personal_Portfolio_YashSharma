type SectionCardProps = {
	title: React.ReactNode;
	children: React.ReactNode;
	subtitle?: React.ReactNode;
};

export default function SectionCard({ title, subtitle, children }: SectionCardProps) {
	return (
		<section className="editor-panel rounded-2xl p-4 sm:p-5 md:p-8 w-full mb-6 md:mb-8 animate-fade-in">
			<div className="flex items-start justify-between gap-6">
				<div className="min-w-0">
					<h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
						{title}
					</h2>
					{subtitle ? (
						<p className="mt-2 text-sm md:text-base text-white/55">{subtitle}</p>
					) : null}
				</div>
			</div>
			{children}
		</section>
	);
}
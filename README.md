This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Projects Page Code

File: `src/app/projects/page.tsx`

```tsx
"use client";

import SectionCard from "../../components/SectionCard";
import { projects } from "../../lib/portfolioData";

const projectMetaByName: Record<
	string,
	{ icon: string; ribbon: string; ribbonClass: string; tags: string[] }
> = {
	"Image Gallery App": {
		icon: "🛡",
		ribbon: "MERN  •  MEDIA  •  CLOUD",
		ribbonClass: "projects-ribbon-pink",
		tags: ["MERN", "Next.js", "Firebase", "Cloudinary", "REST API"],
	},
	"Office Task Management Software": {
		icon: "⚡",
		ribbon: "PRODUCTIVITY  •  FULL STACK  •  WORKFLOW",
		ribbonClass: "projects-ribbon-blue",
		tags: ["React.js", "PHP", "MySQL", "REST API", "Figma"],
	},
};

export default function ProjectsPage() {
	return (
		<div>
			<div className="code-comment text-xs md:text-sm mb-4">
				{"// projects.js : things I've built & shipped"}
			</div>

			<SectionCard
				title={<span className="projects-page-title">Projects</span>}
				subtitle="const projects = [ ...shipped, ...building ]"
			>
				<div className="projects-grid mt-8">
					{projects.map((project, index) => {
						const meta =
							projectMetaByName[project.name] ?? {
								icon: "◈",
								ribbon: "WEB  •  FULL STACK",
								ribbonClass: "projects-ribbon-blue",
								tags: project.stack.split("|").map(part => part.trim()),
							};

						return (
							<article key={project.name} className="project-card">
								<div className="flex items-center justify-between gap-3">
									<div className="project-icon">{meta.icon}</div>

									<div className="flex items-center gap-2">
										<a
											href={project.sourceUrl || "#"}
											target={project.sourceUrl ? "_blank" : undefined}
											rel={project.sourceUrl ? "noreferrer" : undefined}
											aria-disabled={!project.sourceUrl}
											onClick={event => {
												if (!project.sourceUrl) event.preventDefault();
											}}
											className={[
												"project-link-btn",
												!project.sourceUrl ? "project-link-btn-disabled" : "",
											].join(" ")}
										>
											GitHub ↗
										</a>

										<a
											href={project.liveUrl || "#"}
											target={project.liveUrl ? "_blank" : undefined}
											rel={project.liveUrl ? "noreferrer" : undefined}
											aria-disabled={!project.liveUrl}
											onClick={event => {
												if (!project.liveUrl) event.preventDefault();
											}}
											className={[
												"project-link-btn project-link-btn-live",
												!project.liveUrl ? "project-link-btn-disabled" : "",
											].join(" ")}
										>
											Live ↗
										</a>
									</div>
								</div>

								<div className={["project-ribbon mt-6", meta.ribbonClass].join(" ")}>
									{meta.ribbon}
								</div>

								<h3 className="project-title mt-3">{project.name}</h3>

								<p className="project-body mt-4">{project.description}</p>
								<p className="project-body mt-2">{project.learnings}</p>

								<div className="project-tags mt-5">
									{meta.tags.map(tag => (
										<span key={`${project.name}-${tag}`} className="project-tag">
											{tag}
										</span>
									))}
								</div>
							</article>
						);
					})}
				</div>
			</SectionCard>
		</div>
	);
}
```
# Personal_Portfolio_YashSharma

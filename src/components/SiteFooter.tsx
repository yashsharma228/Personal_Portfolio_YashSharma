import Link from "next/link";
import { person } from "../lib/portfolioData";

export default function SiteFooter() {
  return (
    <div className="mt-10">
      <div className="editor-panel rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-extrabold text-lg">{person.name}</div>
            <div className="mt-2 text-white/65">
              Full Stack Developer passionate about creating amazing web experiences.
            </div>
          </div>

          <div>
            <div className="text-white/85 font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-white/65 text-sm">
              <li>
                <Link className="hover:text-white transition" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/education">
                  Education
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/experience">
                  Experience
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/certificates">
                  Certifications
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white/85 font-semibold">Connect</div>
            <div className="mt-3 flex flex-col gap-2 text-white/65 text-sm">
              <a className="hover:text-white transition" href={person.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn →
              </a>
              <a className="hover:text-white transition" href={person.links.x} target="_blank" rel="noreferrer">
                X/Twitter →
              </a>
              <a className="hover:text-white transition" href={person.links.github} target="_blank" rel="noreferrer">
                GitHub →
              </a>
              <a className="hover:text-white transition" href={person.links.email}>
                Email →
              </a>
              <a className="hover:text-white transition" href={person.links.salesforce} target="_blank" rel="noreferrer">
                Salesforce →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-white/55 text-sm">
          <div>
            Crafted with <span className="text-red-300">♥</span> by Yash Sharma
          </div>
          <a className="hover:text-white transition" href={person.links.portfolioRepo} target="_blank" rel="noreferrer">
            View code on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}


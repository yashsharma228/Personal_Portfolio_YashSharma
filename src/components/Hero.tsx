import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero py-16 flex flex-col items-center justify-center bg-linear-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      <div className="mb-8">
        <h3 className="text-lg font-medium text-zinc-600 dark:text-zinc-400">Hello, I'm</h3>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">Yash Sharma</h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 mt-2">A FULL STACK WEB DEVELOPER</p>
      </div>
      <div className="flex gap-4 mb-6">
        <a href="#projects" className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View My Work</a>
        <a href="#contact" className="btn btn-secondary bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 px-4 py-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600">Contact Me</a>
      </div>
      <div className="flex gap-3 mt-4">
        <a href="https://www.linkedin.com/in/yashsharma0228/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin text-xl text-blue-700"></i>
        </a>
        <a href="https://x.com/Yashsharma0228" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fa-brands fa-twitter text-xl text-blue-400"></i>
        </a>
        <a href="https://github.com/yashsharma228" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github text-xl text-zinc-900 dark:text-zinc-100"></i>
        </a>
        <a href="mailto:yashsharma4841@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <i className="fa-solid fa-envelope text-xl text-red-500"></i>
        </a>
        <a href="https://www.salesforce.com/trailblazer/ysharma254" target="_blank" rel="noopener noreferrer" aria-label="Salesforce">
          <i className="fa-brands fa-salesforce text-xl text-blue-500"></i>
        </a>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">Scroll Down</span>
        <i className="fas fa-chevron-down text-lg text-zinc-400"></i>
      </div>
    </section>
  );
}

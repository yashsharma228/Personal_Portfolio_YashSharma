# Personal Portfolio - Yash Sharma

A developer portfolio built with Next.js App Router and TypeScript, styled with a VS Code-inspired interface. It showcases profile details, experience, skills, projects, certifications, and includes a contact/chat flow with optional email delivery via SMTP.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Nodemailer (for contact email delivery)

## Features

- VS Code-like UI shell with sidebar, activity bar, editor view, and status bar
- Dedicated pages for About, Skills, Projects, Experience, Education, Achievements, Certificates, and Contact
- Centralized portfolio content in a single data file for easy updates
- Contact/chat API route that can send messages to email when SMTP is configured
- Responsive layout for desktop and mobile

## Project Structure

```text
src/
  app/
    api/chat/route.ts
    about/page.tsx
    achievements/page.tsx
    certificates/page.tsx
    contact/page.tsx
    education/page.tsx
    experience/page.tsx
    portfolio/page.tsx
    projects/page.tsx
    skills/page.tsx
    layout.tsx
    page.tsx
  components/
    ActivityBar.tsx
    ChatPanel.tsx
    EditorShell.tsx
    Hero.tsx
    IntroScreen.tsx
    Navbar.tsx
    SearchPanel.tsx
    SectionCard.tsx
    Sidebar.tsx
    SiteFooter.tsx
    StatusBar.tsx
  lib/
    portfolioData.ts
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev    # Start dev server
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run ESLint
```

## Environment Variables

To enable email sending from the contact/chat endpoint, create a .env.local file in the project root:

```env
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_EMAIL=your_destination_email@example.com
```

Notes:

- If CONTACT_EMAIL is not set, the app uses SMTP_USER as the recipient.
- If SMTP variables are missing, the API still returns success in development but does not send an email.
- For Gmail, use an App Password (not your regular account password).

## Content Customization

Update the portfolio data in:

- src/lib/portfolioData.ts

From this file, you can edit:

- Personal info and social links
- Education and experience
- Skills by category
- Project entries (name, stack, links, learnings)
- Certifications

## Deployment

Recommended: Vercel

```bash
npm run build
```

Then deploy through Vercel dashboard or Vercel CLI.

Remember to set SMTP_USER, SMTP_PASS, and CONTACT_EMAIL in your deployment environment if you want contact messages to send emails.

## Author

Yash Sharma

- LinkedIn: https://www.linkedin.com/in/yashsharma0228/
- GitHub: https://github.com/yashsharma228

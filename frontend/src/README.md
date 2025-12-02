# DeployHub - Next.js Application

A modern developer cloud platform built with Next.js 14, featuring a creative journal-style aesthetic.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app                  - Next.js App Router pages
  /dashboard         - Dashboard pages
  /services          - Service pages
  /blog             - Blog page
  /docs             - Documentation
  layout.tsx        - Root layout
  page.tsx          - Home page

/components          - React components
  /dashboard        - Dashboard components
  /services         - Service components
  /ui              - UI components (shadcn)

/styles             - Global styles
```

## Features

- 🎨 Creative journal-style design
- 🌓 Dark mode support
- 📱 Fully responsive
- 🚀 Fast page transitions
- 📦 Component-based architecture
- 🎯 TypeScript support

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS v4
- Shadcn/ui components
- Lucide icons

## Routes

- `/` - Landing page
- `/blog` - Blog
- `/docs` - Documentation
- `/services/*` - Service pages
- `/signin` - Sign in
- `/signup` - Sign up
- `/dashboard` - Dashboard
- `/dashboard/new-project` - Create project
- `/dashboard/settings` - Settings
- `/dashboard/billing` - Billing

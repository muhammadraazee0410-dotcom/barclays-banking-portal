# Barclays Portal — Banking Dashboard

A modern, responsive banking portal prototype built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Dashboard Overview**: Total balance, account summaries, and recent activity
- **Account Management**: Current, savings, credit card, and mortgage views
- **Transaction History**: Grouped by date with category icons
- **Spending Analytics**: Interactive donut chart with category breakdown
- **Money Transfer**: Form with validation for bank transfers
- **Quick Actions**: One-tap access to common banking tasks
- **Responsive Design**: Fully mobile-first, works on all screen sizes
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Barclays theme
- **Testing**: Jest + Testing Library
- **Deployment**: Vercel / Netlify (static export)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
```

Static output is generated in the `out/` directory.

### Deploy to Vercel

```bash
npx vercel --prod
```

### Deploy to Netlify

```bash
npx netlify deploy --prod --dir=out
```

Or connect your GitHub repo directly in the Vercel/Netlify dashboard.

## Testing

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind + custom styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main dashboard page
├── components/
│   ├── AccountCard.tsx    # Account display card
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Navigation header
│   ├── QuickActions.tsx   # Quick action buttons
│   ├── SpendingChart.tsx  # SVG donut chart
│   ├── TransactionList.tsx # Transaction history
│   └── TransferForm.tsx   # Money transfer form
├── lib/
│   ├── mock-data.ts       # Demo data
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript interfaces
└── __tests__/
    ├── utils.test.ts      # Utility function tests
    └── mock-data.test.ts  # Data integrity tests
```

## Note

This is a **prototype/demo** — not affiliated with Barclays Bank PLC. All data is mocked.

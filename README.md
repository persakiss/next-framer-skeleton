This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
bun run dev
# or
npm run dev
# or
yarn dev
# or
pnpm dev
```

Next MPA with smooth transitions in lieu of the view transitions API. MPA is important for SEO, and smooth transitions using next/framer (instead of astro+view transitions) would get everybody. Relying on view transitions not feasible at this stage as 90% visitors are mobile, and mobile + safari + firefox not supported yet. 

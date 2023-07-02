# Getting Started


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

[Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

### Create your project

Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```markdown
npx create-next-app@latest crypto-price-tracker-app --typescript --eslint
cd crypto-price-tracker
```

### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```markdown
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```markdown
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js}",
    "./configs/**/*.{js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```markdown
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Crypto

Crypto Icon URL: https://s2.coinmarketcap.com/static/img/coins/128x128/1.png

Explorer SVG:

```markdown
<svg
  className="w-5 h-5 ml-2"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
</svg>
```

## Crypto Endpoint

Crypto Endpoint URL: https://api.binance.com/api/v3/ticker/24hr?symbols=['ETHUSDC','SOLUSDC']

## Credit

Powered by [Binance](https://www.binance.com)

## Image Sample
![crypto1](https://github.com/kenchigozie23/crypto-coins/assets/111024479/9d021199-a823-4843-81b1-82cc9f875eef)
![cryto22](https://github.com/kenchigozie23/crypto-coins/assets/111024479/c2cb480f-1c6b-43cd-8c4f-8623de51872c)
![crypto3](https://github.com/kenchigozie23/crypto-coins/assets/111024479/d5896ccd-d011-4b6d-a7fe-7e088d171ca5)
![crypto4](https://github.com/kenchigozie23/crypto-coins/assets/111024479/3ba09f04-d24c-409a-ab29-7f5e4efcb535)
![crypto5](https://github.com/kenchigozie23/crypto-coins/assets/111024479/024682af-b9f7-45ab-ab5b-f4f87f3c0509)
![cryto6](https://github.com/kenchigozie23/crypto-coins/assets/111024479/4c4158f5-80b5-4bcc-b8de-4890f38ea521)
![crypto7](https://github.com/kenchigozie23/crypto-coins/assets/111024479/d78a5c86-566c-4945-b14d-d260b7ec4f82)
![crypto8](https://github.com/kenchigozie23/crypto-coins/assets/111024479/d2b5e865-d452-4281-85ad-28d06239bb26)
![crypto10](https://github.com/kenchigozie23/crypto-coins/assets/111024479/85c53fb4-b193-4650-9e66-f3c4570002a0)

## Tech Stack Used
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>TYPESCRIPT</li>
  <li>NEXT JS</li>
  <li>TAILWIND CSS</li>
  <li>BINANCE API</li>
  
  
  
  
  
</ul>


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Production

Note:-

- The production site might stop working once the api key is expired or the openAi API revokes the free version.
- There are some glitches in production version on vercel..local dev version is running fine..but under production there's some problem from vercel...which isn't resolved. 😕 <br>
  [Click here to view](https://ai-job-description-two.vercel.app/)

## Getting Started

First create a .env file in root directory and add your [openAI API](https://beta.openai.com/account/api-keys) key as:

```
OPENAI_API_KEY = YOUR_API_KEY
```

Second, install all the dependencies:

```
npm i
# or
npm install
```

Then, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Important Resources

- [Next.js Docs](https://nextjs.org/docs/getting-started)
- [OpenAI Docs](https://beta.openai.com/docs/introduction/overview)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation)

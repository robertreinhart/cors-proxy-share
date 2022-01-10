# CORS-proxy-share

This proxy was created with the Next.js API. It is ready to be launched on Vercel. See below for more details on how to launch.

To use this proxy, clone this repository. Run "npm install". 

```bash
npm install
```

Then launch it on Vercel.com.

Once the proxy is deployed. You can make requests to it by making HTTP/fetch requests to the domain created by vercel and including a "my-url" header with the link you are trying to reach.

For example: fetch("insert vercel domain", { 
  headers: {
  my-url: "insert domain you are trying to reach"
  }})

You should see no CORS errors. 

## Getting Started with Next.js and Vercel

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

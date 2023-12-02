This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Image Attribute

<a href="https://www.freepik.com/free-photo/social-clouds_869907.htm#query=3D%20VPN%20network&position=43&from_view=search&track=ais&uuid=219dd253-6d00-44d8-980e-a23ba0a2de9d">Image by kjpargeter</a> on Freepik

## UI

### how to change color of svg in react

create a component that receive color as props

```
// components/DottedLeft.tsx

const DottedLeft = ({fill}:{fill:string}) => {
    return (
        <svg>
          <circle fill={fill} />
        </svg>
    )
}

// page.tsx
<DottedLeft fill="#2dddba">
```

## generate sitemap

```
npm install next-sitemap
```

create /app/next-sitemap.config.js

```
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  // ...other options
}

```

## metadata

To set meta image, which will appear in search engine result.

1. put opengraph-image.png under /app, not /public
2. create opengraph-image.alt.txt, write something about your site
3. add in /app/layout.tsx or /app/(root)/(home)/layout.tsx, the latter will override first.

```
export const metadata: Metadata = {
  ...
  metadataBase: new URL(process.env.SITE_URL!),
  openGraph: {
    images: "/opengraph-image.png",
  },
```

Without `metadataBase`, metadataBase is automatically populated with a default value, which would fall back to http://localhost:3000.
That's why it did not work before.

> See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase

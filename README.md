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

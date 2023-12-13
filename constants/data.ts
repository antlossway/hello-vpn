export const navlist = [
  {
    name: "About",
    path: "/about",
  },
  // {
  //   name: "Blog",
  //   path: "/blog",
  // },
  // {
  //   name: "Tool",
  //   path: "/tool",
  // },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Pricing",
    path: "/#pricing",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

export const services = [
  {
    icon: "/icons/icon-setup.svg",
    title: "Setup",
    description:
      "You don't have the infrastructure, we'll help you to build a suitable solution.",
  },
  {
    icon: "/icons/icon-configure.svg",
    title: "Configuration",
    description:
      "We configure Site-to-Site VPN tunnels between your network and your peers.",
    // DMVPN, BGP, EIGRP,GRE, SIGTRAN.
  },
  {
    icon: "/icons/icon-monitor.svg",
    title: "Monitoring",
    description:
      "We monitor the health of your VPNs and take actions if any problem occurs. We contact your peers, check network and configuration with them and make proper adjustments.",
  },

  {
    icon: "/icons/icon-backup.svg",
    title: "Backup",
    description:
      "We backup all your configurations to ensure seamless recovery in case of disasters",
  },
]

export const whyus = [
  {
    image: "/piggy-bank.png",
    icon: "/icons/circle-dollar-sign.svg",
    title: "Cost Savings",
    description:
      "Outsourcing your B2B VPN setup and maintenance will reduce your operational expenses, you can save on hiring and training in-house network team.",
  },
  {
    image: "/book.png",
    icon: "/icons/library-big.svg",
    title: "Specialized Expertise",
    description:
      "During the 15+ years of experience in IT field, we have established many site-to-site VPN tunnels with different companies, including telecom giants, financial institutions and service providers. You will have a peace of mind that your B2B VPN operations are handled by people who knows their jobs.",
  },
  {
    image: "/dartboard-red.png",
    icon: "/icons/target.svg",
    title: "Focus on Core Business",
    description:
      "By outsourcing your B2B VPN related operations, you can concentrate on core business, enhance productivity, and remain competitive in the market.",
  },
]

// pricing
export const PricingData = [
  {
    name: "Subscription-based",
    price: "700",
    bill: "per month",
    description: "For small business",
    features: [
      "Up to 10 VPN (50 EUR per VPN above)",
      "Realtime Monitoring of all VPN",
      "Backup of VPN configuration",
      "Email support (response within 12 hours)",
    ],
    active: true,
  },
  {
    name: "Project-based",
    price: "450",
    bill: "per day",
    description: "For project that needs VPN",
    features: ["Hire a VPN specialist for your project"],
    active: false,
  },
  {
    name: "One Time Configuration",
    price: "700",
    bill: "per VPN",
    description: "one-time project",
    features: [
      // "Onboarding",
      // "Planning",
      // "implementation",
      // "Customized solution",
      "You pay only if it works",
    ],
    active: false,
  },
]

export const team = [
  {
    avatar: "/icons/icon-quinn.png",
    name: "Quinn Xie",
    title: "Former Head of Operation in Ameex Mobile",
    description:
      "Quinn has established many site-to-site VPN tunnels with different companies.",
  },
  {
    avatar: "/icons/icon-stephane.png",
    name: "Stephane Tougard",
    // title: "Former CTO in TransferTo (now DT One)",
    title: "Senior Consultant in Ameex Mobile",
    description: "Stephane has 20+ years in the field of IT and Telecom.",
  },
]

export const heroText =
  // "Site-to-Site VPN is the common solution to secure the connection between two sites. However, it can be a challenging task due to various requirements."
  "Site-to-Site IPSec VPN is the common solution to secure the connection between two sites. However, it's a challenging task if you don't have a dedicated personnel to handle it or your peer has unusual VPN requirements. We have 15 plus years of experience of dealing those challenges."

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
      "If you don't yet have a VPN infrastructure, we can help you to setup a suitable solution for your use case",
  },
  {
    icon: "/icons/icon-configure.svg",
    title: "Configuration",
    description:
      "Configure Site-to-Site VPN tunnels between your network and your peers",
  },
  {
    icon: "/icons/icon-monitor.svg",
    title: "Monitoring",
    description:
      "Mornitor the health of the VPN servers and the status of the VPN tunnels",
  },

  {
    icon: "/icons/icon-backup.svg",
    title: "Backup",
    description:
      "Backup all configurations to ensure seamless recovery in case of unforseen disasters",
  },
]

export const whyus = [
  {
    image: "/piggy-bank.png",
    icon: "/icons/circle-dollar-sign.svg",
    title: "Cost Savings",
    description:
      "Using VPN outsourcing service will reduce a company's operational expenses, you can save on hiring and training in-house network team.",
  },
  {
    image: "/book.png",
    icon: "/icons/library-big.svg",
    title: "Specialized Expertise",
    description:
      "We a pool of specialized professionals with a diverse range of skills and experiences, who will apply industry's best practices, ensuring that your company's network is managed and maintained by experts.",
  },
  {
    image: "/dartboard-red.png",
    icon: "/icons/target.svg",
    title: "Focus on Core Business",
    description:
      "By outsourcing network maintenance, a company can concentrate its internal resources and efforts on core business activities. This allows the organization to prioritize its primary objectives, enhance productivity, and remain competitive in the market.",
  },
]

// pricing
export const PricingData = [
  {
    name: "Starter",
    price: "700",
    description: "For small business",
    features: ["Up to 10 VPN tunnels", "Monitoring", "Backup", "Email support"],
    active: true,
  },
  {
    name: "Advanced",
    price: "TBD",
    description: "For large business",
    features: [
      "Up to 100 VPN tunnels",
      "Monitoring",
      "Backup",
      "Email support",
    ],
    active: false,
  },
  {
    name: "Project",
    price: "TBD",
    description: "one-time project",
    features: [
      "Onboarding",
      "Planning",
      "implementation",
      "Customized solution",
    ],
    active: false,
  },
]

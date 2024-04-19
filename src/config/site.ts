export type SiteConfig = typeof SITE_CONFIG;

export const SITE_CONFIG = {
  name: "Codechamp",
  description: "Code faster, better and stronger with Codechamp.",
  navItems: [
    {
      label: "Explore",
      href: "/explore",
    },
    {
      label: "Problems",
      href: "/problems",
    },
    {
      label: "Contests",
      href: "/contests",
    }
  ],
  links: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
  },
};
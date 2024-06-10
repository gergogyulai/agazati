export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "gergogyulai/agazati",
  description: "Ez felkészít az agazati vizsgára, még akkor is ha ezt egyesek nem tették meg...",
  mainNav: [
    {
      title: "Vizsga feladatok",
      href: "/",
    },
    {
      title: "Gyakorló feladatok",
      href: "/gyakorlo",
    },
    {
      title: "Cheatsheet",
      href: "/cheatsheet",
    }
  ],
  links: {
    github: "https://github.com/gergogyulai/agazati",
  },
}
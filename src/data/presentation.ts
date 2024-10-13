type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hello@shonebinu.com",
  title: "Hi, I’m Shone👋",
  profile: "/shone.webp",
  description:
    "Namaste, I'm an *Indian fullstack developer* with over *2 years* of web experience. I am currently working with *Javascript and PHP*. Outside of work I spend more time improving myself and learning React.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/shonebinu",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/shonebinu",
    },
    {
      label: "Resume",
      link: "https://github.com/shonebinu",
    },
    {
      label: "YouTube",
      link: "https://www.youtube.com/@shonebinu5583",
    },
    {
      label: "OpenGenus",
      link: "https://iq.opengenus.org/author/shone",
    },
    {
      label: "X",
      link: "https://x.com/shonebinu"
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/shoneb.inu/"
    }
  ],
};

export default presentation;

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
  mail: "shonebinu04@gmail.com",
  title: "Hi, I’m Shone👋",
  profile: "/shone.webp",
  description:
    "Namaste, i'm an *indian fullstack developer* with over *2 years* of web experience. I am currently working with *Javascript and PHP*. Outside of work I spend more time improving myself and learning React.",
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
  ],
};

export default presentation;

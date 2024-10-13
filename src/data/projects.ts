export type Project = {
  title: string;
  techs: string[];
  description?: string;
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "MGUScraper",
    techs: ["Streamlit", "Python", "BeautifulSoup"],
    description:
      "MGU Scraper is a specialized tool that simplifies the bulk extraction of students' exam results.",
    link: "https://github.com/shonebinu/MGUScraper",
  },
  {
    title: "Weatherify",
    techs: ["JavaScript", "WeatherAPI"],
    description:
      "A stunning weather application featuring a glassmorphism design, powered by weatherapi.com.",
    link: "https://github.com/shonebinu/weatherify",
  },
  {
    title: "Flashify",
    techs: ["JavaScript", "PHP", "Linux", "MySQL"],
    description:
      "Flashify is a minimal, beautiful, and responsive web-based flashcard application built using the LAMP stack.",
    link: "https://github.com/shonebinu/flashify/",
  },
  {
    title: "College Curriculum",
    techs: ["C/C++", "HTML/CSS/JavaScript", "PHP", "Java"],
    description:
      "A repository containing all the records, answers, and previous exam answers from my three years of studying computer science at college.",
    link: "https://github.com/shonebinu/collegeCurriculum/",
  },
  {
    title: "Moonwalker",
    techs: ["HTML/CSS/JavaScript", "Canvas API"],
    description:
      "A retro space-themed adaptation of Chrome's classic dinosaur game, built in 48 hours at NASA Space Apps 2024.",
    link: "https://github.com/ecoholic84/moonwalker",
  },
];

export default projects;

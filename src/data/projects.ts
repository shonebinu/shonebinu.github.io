export type Project = {
  title: string;
  techs: string[];
  description?: string;
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Weatherify",
    techs: ["JavaScript", "WeatherAPI"],
    description: "A stunning weather application featuring a glassmorphism design, powered by weatherapi.com.",
    link: "https://shonebinu.github.io/weatherify/",
  },
  {
    title: "MGUScraper",
    techs: ["Streamlit", "Python", "Scrapy/BeautifulSoup"],
    description: "MGU Scraper is a specialized tool that simplifies the bulk extraction of students' exam results.",
    link: "https://github.com/shonebinu/MGUScraper",
  },
  {
    title: "College Curriculum",
    techs: ["C/C++", "HTML/CSS/JavaScript", "PHP", "Java"],
    description: "A repository containing all the records, answers, and previous exam answers from my three years of studying computer science at college.",
    link: "https://github.com/shonebinu/collegeCurriculum/",
  },
  {
    title: "Flashify",
    techs: ["JavaScript", "PHP", "Linux", "MySQL"],
    link: "https://github.com/shonebinu/flashify/",
    isComingSoon: true,
  },
];

export default projects;

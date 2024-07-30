export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Weatherify",
    techs: ["JavaScript", "WeatherAPI"],
    link: "https://shonebinu.github.io/weatherify/",
  },
  {
    title: "MGUScraper",
    techs: ["Streamlit", "Python", "Scrapy/BeautifulSoup"],
    link: "https://github.com/shonebinu/MGUScraper",
  },
  {
    title: "College Curriculum",
    techs: ["C/C++", "HTML/CSS/JavaScript", "PHP", "Java"],
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

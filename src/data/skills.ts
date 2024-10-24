type Skill = {
  name: string;
  icon: string;
};

type Skills = {
  frontend: Skill[];
  backend: Skill[];
  others: Skill[];
};

const skills: Skills = {
  frontend: [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Streamlit", icon: "fa-solid fa-globe" },
    { name: "Tailwind", icon: "fa-solid fa-globe" },
  ],
  backend: [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Python", icon: "fab fa-python" },
    { name: "PHP", icon: "fab fa-php" },
  ],
  others: [
    { name: "Linux", icon: "fab fa-linux" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "C/C++", icon: "fas fa-c" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Jest", icon: "fa-solid fa-globe" },
    { name: "Azure", icon: "fab fa-microsoft" },
  ],
};

export default skills;

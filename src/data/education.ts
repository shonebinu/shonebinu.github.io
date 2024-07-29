type EducationEntry = {
  degree: string;
  institution: string;
  year: string;
  description: string;
  marks?: string;

};

const education: EducationEntry[] = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Nirmala College Muvattupuzha",
    year: "Jun 2022 - Mar 2025",
    description: "My computer science curriculum covered programming languages, data structures, algorithms, and software engineering, with practical experience in Java, C/C++, JavaScript, Linux and PHP.",
    marks: "SCPA: 8.5/10",
  },
  {
    degree: "Higher Secondary Computer Science",
    institution: "Mar Basil HSS, Kothamangalam",
    year: "Jun 2020 - Mar 2022",
    description: "Explored fundamental concepts in computer science, including the essential building blocks of computing.",
    marks: "Grade: 90%",
  }
];

export default education;


import project1 from "../assets/projects/MyPortfolio.png";
import project2 from "../assets/projects/MemoryGame.png";
import project3 from "../assets/projects/ListingsProject.png";
import project4 from "../assets/projects/MoviesProject.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like Html, CSS, JavaScript, React, as well as back-end technologies like Node.js, Express.js, and databases MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of hands-on experience, I have worked with a variety of technologies, including Html, CSS, JavaScript, React, Node.js, Express.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Web Developer-(MERN)",
    company: "Google Inc.",
    description:
      "I am continuously expanding my expertise by learning new technologies and refining my skills. My focus has been on improving my proficiency in React.js, where I am deepening my understanding of component architecture and optimizing UI/UX development. I have also been mastering Redux & Redux Toolkit to enhance state management for scalable applications. Strengthening authentication and authorization workflows has been a priority, leading me to work extensively with JWT (JSON Web Tokens) to ensure secure user access in web applications. Currently, I am transitioning into mobile development with React Native, aiming to build cross-platform applications that offer seamless user experiences. Through hands-on projects and continuous exploration, I am dedicated to refining my problem-solving abilities and staying adaptable in the ever-evolving tech landscape.",
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Memory Flash - A Reflex & Recall Game",
    image: project2,
    description:
      "Memory Flash is an interactive guessing game built using HTML, CSS, and JavaScript. Designed to challenge players' memory and reflexes, it provides a fast-paced experience where users must recall and select the correct sequence of flashing boxes to advance.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Wanderlust - Personalized Travel & Exploration Platform",
    image: project3,
    description:
      "Wanderlust is a dynamic web application designed to help users discover amazing places based on their preferences. Whether searching for scenic spots, adventure experiences, or hidden gems, Wanderlust provides personalized recommendations tailored to user interests.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "EJS",
      "Express.js",
      "Passport.js",
    ],
  },
  {
    title: "Movies App",
    image: project4,
    description:
      "CineVerse is a full-featured movie application designed to provide an immersive movie discovery experience while offering robust administrative control. Built with secure authentication and authorization, CineVault allows users to explore, review, and categorize movies seamlessly while enabling administrators to manage content efficiently.",
    technologies: [
      "React",
      "Redux & Redux-Toolkit",
      "JWT",
      "Express.js",
      "TailwindCSS",
    ],
  },
];

export const CONTACT = {
  address: "Whitefield, Bangalore, Karnataka",
  phoneNo: "+91-8688581855",
  email: "patansuhailkhan44@gmail.com",
};

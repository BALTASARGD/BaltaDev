import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

export const sideBarRightMail = {
  link: "mailto:baltakoeln@icloud.com",
  text: "baltakoeln@icloud.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/Baltademonio/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/BALTASARGD",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:baltakoeln@icloud.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: "/assets/icons/htmlicon.svg",
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: "/assets/icons/cssicon.svg",
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: "/assets/icons/javascripticon.svg",
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: "/assets/icons/typescripticon.svg",
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: "/assets/icons/reacticon.svg",
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: "/assets/icons/nodejsicon.svg",
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: "/assets/icons/tailwindicon.svg",
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: "/assets/icons/sassicon.svg",
        color: "#CC6699",
      },
    ],
  },
] as const;

export const projectsData = [
  {
    name: "Find Countries App",
    url: "https://dci-spa-find-countries-app-witv.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/Dci_SPA_FindCountriesApp",
    image: "/assets/images/projects_img/FindCountriesApp.png",
    tags: ["React", "API", "CSS"],
  },
  {
    name: "The Modern House",
    url: "https://baltasargd.github.io/The-Modern-House/",
    githubUrl: "https://github.com/BALTASARGD/The-Modern-House",
    image: "/assets/images/projects_img/TheModernHouse.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Portfolio BGD",
    url: "https://portfolio-bgd.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/PORTFOLIO-BGD",
    image: "/assets/images/projects_img/PortfolioBGD.png",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    name: "To-Do List",
    url: "https://to-do-list-mauve-eta.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/To-Do-List",
    image: "/assets/images/projects_img/ToDoList.png",
    tags: ["React", "CSS", "LocalStorage"],
  },
  {
    name: "Tarjeta Mercedes Benz",
    url: "https://tarjeta-mercedes-benz.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/Tarjeta-Mercedes-Benz",
    image: "/assets/images/projects_img/MercedesBenzCard.png",
    tags: ["HTML", "CSS"],
  },
  {
    name: "Weather App",
    url: "https://web-dev-course-spa-weather-app.vercel.app/",
    githubUrl: "https://github.com/BALTASARGD/WebDevCourse_SPA__Weather_App-",
    image: "/assets/images/projects_img/WeatherApp.png",
    tags: ["React", "API", "CSS"],
  },
];
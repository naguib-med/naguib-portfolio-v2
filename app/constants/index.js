import cookChef from "../_components/images/cookchef.png";
import myposter from "../_components/images/myposter.png";
import saba_logo from "../_components/images/company/saba_logo.jpg";
import bifora from "../_components/images/company/bifora.jpg";
import posterEditor from "../_components/images/poster_editor.png";
import infoexpert from "../_components/images/company/infoexpert-logo.jpg";
import hopital_peltier from "../_components/images/company/hopital_peltier.jpg";

/* education logo */
import univ_djibouti from "../_components/images/education/univ_djib.jpg";
import univ_lyon1 from "../_components/images/education/univ_lyon1logo.png";

const experiences = [
    {
        title: "Vue.js Developer",
        company: "Peltier Hospital",
        type: "Internship",
        date: "Jun. 2020 - Aug. 2020",
        description: [
            "Participated in developing a patient management web application to optimize processes for nurse supervisors.",
            "Collaborated in designing user interfaces and managing patient data.",
            "Contributed to implementing key features and optimizing workflows."
        ],
        languages: ["Vue.js", "Node.js", "SCSS", "Vuetify", "MySQL", "Git", "Agile Methodology"],
        icon: hopital_peltier,
    },
    {
        title: "Web Developer",
        company: "Infoexpert",
        type: "Fixed-term contract (CDD)",
        date: "Nov. 2020 - Feb. 2021",
        description: [
            "Worked on developing a library management web application.",
            "Implemented a system to track loans and returns, with automatic notifications for users.",
            "Implemented search and filter functionalities to facilitate user navigation."
        ],
        languages: ["React.js", "Spring Boot", "MySQL", "Git", "Agile Methodology"],
        icon: infoexpert,
    },
    {
        title: "Backend Java Developer",
        company: "Saba Africa Bank",
        type: "Permanent contract (CDI)",
        date: "Mar. 2021 - Aug. 2021",
        description: [
            "Implemented a service for balance inquiry and transaction history display.",
            "Developed an online bank check request feature."
        ],
        languages: ["Java", "Spring Boot", "Spring Security", "Git", "Agile Methodology"],
        icon: saba_logo
    },
    {
        title: "Full Stack Developer React/Node.js",
        company: "Bifora Data Consulting",
        type: "Internship",
        date: "Apr. 2023 - Aug. 2023",
        description: [
            "Developed a web application for Activity Reports (CRA) independently.",
            "Participated in designing the architecture and developing the online training web application.",
            "Project management: planning, monitoring, and reporting.",
            "Wrote scripts and set up processes for migrating MongoDB databases."
        ],
        languages: ["React.js", "Node.js", "Spring Boot", "Spring Security", "PostgreSQL", "MongoDB", "Git", "Agile Methodology", "Docker", "Jira"],
        icon: bifora
    },
    {
        title: "Full Stack Developer React/Node.js",
        company: "Bifora Data Consulting",
        type: "Work-study",
        date: "Sep. 2023 - Aug. 2024",
        description: [
            "Contributed to continuous improvement and maintenance of the company’s website.",
            "Created unit and functional tests to ensure code quality.",
            "Participated in migrating SAS programs to SparkR on the Databricks cloud."
        ],
        languages: ["React.js", "Node.js", "MongoDB", "Git", "Agile Methodology", "Databricks", "SparkR", "SAS"],
        icon: bifora
    },
];

const educations = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Djibouti",
        date: "Sep. 2017 - Jun. 2020",
        description: [
            "Relevant coursework: Data Structures, Algorithms, Web Development, Artificial Intelligence, Computer Networks ...",
            "Valedictorian of the 2020 class of 201 students."
        ],
        icon: univ_djibouti,
    },
    {
        degree: "Master of Information and Web Technologies",
        school: "University of Claude Bernard Lyon 1",
        date: "Sep. 2022 - Jun. 2024",
        description: [
            "Relevant coursework: Web Development, Web Security, Data Mining, Machine Learning, Big Data, Cloud Computing, Internet of Things ...",
            "Received with distinction."
        ],
        icon: univ_lyon1,
    }
];

const projects = [
    {
        name: "Poster editor",
        description:
            "A web application for creating posters. Users can add text, images, shapes, and change the color of the text and shapes.",
        tags: [
            {
                name: "Vite + Vue",
                color: "#42b883",
            },
            {
                name: "Fabric.js",
                color: "#FF6138",
            },
            {
                name: "Pinia",
                color: "#42b883",
            },
            {
                name: "Vuetify3",
                color: "#4f9ff6",
            },
        ],
        image: posterEditor,
        source_code_link: "https://github.com/naguib-med/demo-fabricjs",
        live_link: "https://demo-fabricjs.vercel.app/",
    },
    {
        name: "Cook Chef",
        description:
            "A web-based recipe management application. Users can search for recipes, consult them, add them to their favorites and remove them from their favorites.",
        tags: [
            {
                name: "react",
                color: "#61dafb",
            },
            {
                name: "Yup",
                color: "#FF69B4",
            },
            {
                name: "React-hook-form",
                color: "#61DAFB",
            },
            {
                name: "Sass",
                color: "#CC6699",
            },
        ],
        image: cookChef,
        source_code_link: "https://github.com/naguib-med/cookchefapp",
        live_link: "https://cookchefapp.vercel.app/",
    },
    {
        name: "Poster management",
        description:
            "A web application for managing posters. Users can add, edit, delete, consult posters and generate a PDF file containing the list of posters.",
        tags: [
            {
                name: "vue",
                color: "#42b883",
            },
            {
                name: "Firebase",
                color: "#FFA611",
            },
            {
                name: "Fabric.js",
                color: "#FF6138",
            },
            {
                name: "Pinia",
                color: "#42b883",
            },
            {
                name: "Vuetify3",
                color: "#4f9ff6",
            }
        ],
        image: myposter,
        source_code_link: "https://github.com/naguib-med/creation-posters",
        live_link: "https://posters-app-3eb45.web.app/",
    }
];

export { projects, experiences, educations };
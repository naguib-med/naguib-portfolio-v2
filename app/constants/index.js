import cookChef from "../_components/images/cookchef.png";
import myposter from "../_components/images/myposter.png";
import saba_logo from "../_components/images/company/saba_logo.jpg";
import bifora from "../_components/images/company/bifora.jpg";
import posterEditor from "../_components/images/poster_editor.png";
import infoexpert from "../_components/images/company/infoexpert-logo.jpg";
import hopital_peltier from "../_components/images/company/hopital_peltier.jpg";

const experiences = [
    {
        title: "Vue.js Developer",
        company: "Peltier Hospital",
        type: "Internship",
        date: "Jun. 2020 - Aug. 2020",
        description: [
            "Participé au développement d'une application web de gestion des patients pour optimiser les processus des infirmiers majors.",
            "Collaboré à la conception des interfaces utilisateurs et à la gestion des données patients.",
            "Contribué à la mise en place de fonctionnalités clés et à l'optimisation des flux de travail."
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
            "Travaillé sur un projet de développement d'une application web de gestion de bibliothèque.",
            "Mise en place d'un système de suivi des emprunts et retours, avec des notifications automatiques pour les utilisateurs.",
            "Implémenté des fonctionnalités de recherche et de filtrage pour faciliter la navigation des utilisateurs."
            
        ],
        languages: ["React.js", "Spring Boot", "MySQL", "Git", "Agile Methodology"],
        icon: infoexpert,
    },
    {
        title: "Developer Backend Java",
        company: "Saba Africa Bank",
        type: "Permanent contract (CDI)",
        date: "Apr. 2021 - Aug. 2021",
        description: [
            "Implémentation d'un service de consultation de soldes en temps réel pour les clients de la banque.",
            "Développement d'une fonctionnalité de demande de chèque bancaire en ligne.",
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
            "Développement d'une application web de Compte Rendu d'Activité (CRA) en autonomie",
            "Participé à la conception de l'architecture et au développement de l'application web de formation en ligne.",
            "Gestion de projet : planification, suivi et reporting.",
            "Écriture de scripts et mise en place des processus et techniques de migration de base de données MongoDB",
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
            "Contribué à l'amélioration continue et à la maintenance du site web de l'entreprise.",
            "Créer des tests unitaires et fonctionnels pour garantir la qualité du code.",
            "Participé à la migration des programmes SAS vers SparkR dans le cloud Databricks.",
        ],
        languages: ["React.js", "Node.js", "MongoDB", "Git", "Agile Methodology", "Databricks", "SparkR", "SAS"],
        icon: bifora
    },
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

export { projects, experiences };
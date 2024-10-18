import cookChef from "../_components/images/cookchef.png";
import myposter from "../_components/images/myposter.png";
import saba_logo from "../_components/images/company/saba_logo.jpg";
import bifora from "../_components/images/company/bifora.jpg";
import posterEditor from "../_components/images/poster_editor.png";

const experiences = [
    {
        title: "Developer Backend Java",
        company: "Saba Africa Bank",
        type: "CDI",
        date: "April 2020 - August 2020",
        description: "Back-end development of a web application for managing the bank's internal processes.",
        icon: saba_logo
    },
    {
        title: "Full Stack Developer React/Node.js",
        company: "Bifora Data Consulting",
        type: "Internship",
        date: "2023 - 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: bifora
    },
    {
        title: "Full Stack Developer React/Node.js",
        company: "Bifora Data Consulting",
        type: "Work-study",
        date: "2023 - 2024",
        description: "Développement d'une application web de gestion de Comptes Rendus d'Activités (CRA) pour les consultants de l'entreprise.",
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
import cookChef from "../_components/images/cookchef.png";
import myposter from "../_components/images/myposter.png";
import saba_logo from "../_components/images/company/saba_logo.jpg";
import bifora from "../_components/images/company/bifora.jpg";
import posterEditor from "../_components/images/poster_editor.png";
import infoexpert from "../_components/images/company/infoexpert-logo.jpg";
import hopital_peltier from "../_components/images/company/hopital_peltier.jpg";

/* logo des établissements d'éducation */
import univ_djibouti from "../_components/images/education/univ_djib.jpg";
import univ_lyon1 from "../_components/images/education/univ_lyon1logo.png";

const experiences = [
    {
        title: "Développeur Frontend Vue.js",
        company: "Hôpital Peltier",
        type: "Stage",
        date: "Juin 2020 - Août 2020",
        description: [
            "Participation au développement d'une application web de gestion des patients pour optimiser les processus des infirmiers majors.",
            "Collaboration à la conception des interfaces utilisateurs et à la gestion des données des patients.",
            "Contribution à la mise en place de fonctionnalités clés et à l'optimisation de l'expérience utilisateur."
        ],
        languages: ["Vue.js", "Node.js", "SCSS", "Vuetify", "MySQL", "Git", "Méthodologie Agile"],
        icon: hopital_peltier,
    },
    {
        title: "Développeur Web",
        company: "Infoexpert",
        type: "Contrat à durée déterminée (CDD)",
        date: "Nov. 2020 - Jan. 2021",
        description: [
            "Développement d'une application web de gestion de bibliothèque.",
            "Mise en place d'un système de suivi des prêts et retours avec notifications automatiques pour les utilisateurs.",
            "Implémentation de fonctionnalités de recherche et de filtrage pour faciliter la navigation des utilisateurs."
        ],
        languages: ["React.js", "Spring Boot", "MySQL", "Git", "Méthodologie Agile"],
        icon: infoexpert,
    },
    {
        title: "Développeur Backend Java",
        company: "Saba Africa Bank",
        type: "Contrat à durée indéterminée (CDI)",
        date: "Mars 2021 - Août 2021",
        description: [
            "Implémentation d'un service de consultation de solde et d'affichage de l'historique des transactions.",
            "Développement d'une fonctionnalité de demande de chèques en ligne."
        ],
        languages: ["Java", "Spring Boot", "Spring Security", "Git", "Méthodologie Agile"],
        icon: saba_logo
    },
    {
        title: "Développeur Full Stack React/Node.js",
        company: "Bifora Data Consulting",
        type: "Stage",
        date: "Avr. 2023 - Août 2023",
        description: [
            "Développement d'une application web de Comptes-Rendus d'Activité (CRA) de manière autonome.",
            "Participation à la conception de l'architecture et au développement de l'application web de formation en ligne.",
            "Gestion de projet : planification, suivi et reporting.",
            "Écriture de scripts et mise en place de processus pour la migration des bases de données MongoDB."
        ],
        languages: ["React.js", "Node.js", "Spring Boot", "Spring Security", "PostgreSQL", "MongoDB", "Git", "Méthodologie Agile", "Docker", "Jira"],
        icon: bifora
    },
    {
        title: "Développeur Full Stack React/Node.js",
        company: "Bifora Data Consulting",
        type: "Alternance",
        date: "Sep. 2023 - Août 2024",
        description: [
            "Contribution à l'amélioration continue et à la maintenance du site web de l'entreprise.",
            "Création de tests unitaires et fonctionnels pour garantir la qualité du code.",
            "Participation à la migration des programmes SAS vers SparkR sur le cloud Databricks."
        ],
        languages: ["React.js", "Node.js", "MongoDB", "Git", "Méthodologie Agile", "Databricks", "SparkR", "SAS"],
        icon: bifora
    },
];

const educations = [
    {
        degree: "Licence en Informatique",
        school: "Université de Djibouti",
        date: "Sep. 2017 - Juin 2020",
        description: [
            "Cours pertinents : Structures de données, Algorithmes, Développement web, Intelligence artificielle, Réseaux informatiques...",
            "Major de promotion de la classe de 2020 composée de 101 étudiants."
        ],
        icon: univ_djibouti,
    },
    {
        degree: "Master en Technologies de l'Information et du Web",
        school: "Université Claude Bernard Lyon 1",
        date: "Sep. 2022 - Juin 2024",
        description: [
            "Cours pertinents : Développement web, Sécurité web, Fouille de données, Apprentissage automatique, Big Data, Cloud Computing, Internet des objets...",
            "Diplôme obtenu avec mention."
        ],
        icon: univ_lyon1,
    }
];

const projects = [
    {
        name: "Éditeur de posters",
        description:
            "Une application web pour créer des posters. Les utilisateurs peuvent ajouter du texte, des images, des formes, et changer la couleur du texte et des formes.",
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
            "Une application web de gestion de recettes. Les utilisateurs peuvent rechercher des recettes, les consulter, les ajouter à leurs favoris et les retirer de leurs favoris.",
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
        name: "Gestion des posters",
        description:
            "Une application web pour gérer des posters. Les utilisateurs peuvent ajouter, modifier, supprimer, consulter des posters et générer un fichier PDF contenant la liste des posters.",
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

import cookChef from "../_components/images/cookchef.png";
import myposter from "../_components/images/myposter.png";
import saba_logo from "../_components/images/company/saba_logo.jpg";
import bifora from "../_components/images/company/bifora.jpg";
import posterEditor from "../_components/images/poster_editor.png";
import infoexpert from "../_components/images/company/infoexpert-logo.jpg";
import hopital_peltier from "../_components/images/company/hopital_peltier.jpg";
import planify_app from "../_components/images/planify_app.png";
import code_snippet_image from "../_components/images/code_snippet_image.png";
import pomodoro_image from "../_components/images/pomodoro_image.png";

/* logo des établissements d'éducation */
import univ_djibouti from "../_components/images/education/univ_djib.jpg";
import univ_lyon1 from "../_components/images/education/univ_lyon1logo.png";

const experiences = [
  {
    title: "Développeur Full Stack",
    company: "Bifora Data Consulting",
    type: "Alternance",
    date: "Sep. 2023 - Sep. 2024",
    description: [
      "Développement d'une application web de Comptes-Rendus d'Activité (CRA) de manière autonome.",
      "Participation à la conception de l'architecture et au développement de l'application web de formation en ligne.",
      "Gestion de projet : planification, suivi et reporting.",
      "Écriture de scripts et mise en place de processus pour la migration des bases de données MongoDB.",
    ],
    languages: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Nest.js",
      "MongoDB",
      "Git",
      "Méthodologie Agile",
      "Docker",
      "Jira",
    ],
    icon: bifora,
  },
  {
    title: "Développeur Full Stack",
    company: "Bifora Data Consulting",
    type: "Stage",
    date: "Avr. 2023 - Sep. 2023",
    description: [
      "Contribution à l'amélioration continue et à la maintenance du site web de l'entreprise.",
      "Création de tests unitaires et fonctionnels pour garantir la qualité du code.",
      "Participation à la migration des programmes SAS vers SparkR sur le cloud Databricks.",
    ],
    languages: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Git",
      "Méthodologie Agile",
      "Databricks",
      "SparkR",
      "SAS",
    ],
    icon: bifora,
  },
  {
    title: "Développeur Backend Java",
    company: "Saba Africa Bank",
    type: "Contrat à durée indéterminée (CDI)",
    date: "Mars 2021 - Août 2021",
    description: [
      "Implémentation d'un service de consultation de solde et d'affichage de l'historique des transactions.",
      "Développement d'une fonctionnalité de demande de chèques en ligne.",
    ],
    languages: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Git",
      "Méthodologie Agile",
    ],
    icon: saba_logo,
  },
  {
    title: "Développeur Web",
    company: "Infoexpert",
    type: "Contrat à durée déterminée (CDD)",
    date: "Oct. 2020 - Jan. 2021",
    description: [
      "Développement d'une application web de gestion de bibliothèque.",
      "Mise en place d'un système de suivi des prêts et retours avec notifications automatiques pour les utilisateurs.",
      "Implémentation de fonctionnalités de recherche et de filtrage pour faciliter la navigation des utilisateurs.",
    ],
    languages: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "Git",
      "Méthodologie Agile",
    ],
    icon: infoexpert,
  },
  {
    title: "Développeur Frontend Vue.js",
    company: "Hôpital Peltier",
    type: "Stage",
    date: "Juin 2020 - Août 2020",
    description: [
      "Participation au développement d'une application web de gestion des patients pour optimiser les processus des infirmiers majors.",
      "Collaboration à la conception des interfaces utilisateurs et à la gestion des données des patients.",
      "Contribution à la mise en place de fonctionnalités clés et à l'optimisation de l'expérience utilisateur.",
    ],
    languages: [
      "Vue.js",
      "Node.js",
      "SCSS",
      "Vuetify",
      "MySQL",
      "Git",
      "Méthodologie Agile",
    ],
    icon: hopital_peltier,
  },
];

const educations = [
  {
    degree: "Master en Technologies de l'Information et du Web",
    school: "Université Claude Bernard Lyon 1",
    date: "Sep. 2022 - Juin 2024",
    description: [
      "*Architecture distribuée*: monitoring et scaling d'applications sur Kubernetes, circuit breaker pattern, déploiement avec Terraform/Ansible.",
      "*Performance*: programmation concurrentielle, optimisation BDD distribuées, monitoring d'applications.",
      "*Gestion de flux*: Apache Spark/Storm, traitement temps réel, analyse de données massives.",
      "*Sécurité*: cryptographie, tests d'intrusion, OWASP, exploitation CVE, sécurité des applications web.",
      "*DevOps*: Docker, VXLAN, stockage objet, monitoring (logs, métriques), CI/CD, déploiement continu.",
      "*Web*: React, Vue, Node.js, Express, REST, WebSockets, WebRTC, PWA, WebAssembly.",
    ],
    icon: univ_lyon1,
  },

  {
    degree: "Licence en Informatique",
    school: "Université de Djibouti",
    date: "Sep. 2017 - Juin 2020",
    description: [
      "*Cours pertinents*: Structures de données, Algorithmes, Développement web, Intelligence artificielle, Réseaux informatiques...",
      "*Major de promotion*:  1/101 étudiants.",
    ],
    icon: univ_djibouti,
  },
];

const projects = [
  {
    name: "Pomodoro Timer",
    description:
      "Pomodoro Timer est une application web pour gérer le temps de travail et de pause.",
    tags: [
      {
        name: "Next.js",
        color: "#ffffff",
      },
      {
        name: "Radix UI",
        color: "#f25f4c",
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
    ],
    image: pomodoro_image,
    source_code_link: "https://github.com/naguib-med/pomodoro",
    live_link: "https://pomodoro-three-beryl.vercel.app/",
  },
  {
    name: "Code Snippet",
    description:
      "Code Snippet est une application web moderne pour stocker et partager des extraits de code.",
    tags: [
      {
        name: "Next.js",
        color: "#ffffff",
      },
      {
        name: "Prisma",
        color: "#8eb4ff",
      },
      {
        name: "PostgreSQL",
        color: "#0f69e1",
      },
      {
        name: "Radix UI",
        color: "#f25f4c",
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
    ],
    image: code_snippet_image,
    source_code_link: "https://github.com/naguib-med/code-snippets",
    live_link: "https://code-snippets-three-theta.vercel.app/",
  },
  {
    name: "Planify",
    description:
      "Planify est une application web moderne de réservation de rendez-vous en ligne.",
    tags: [
      {
        name: "Next.js",
        color: "#ffffff",
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
      },
      {
        name: "Prisma",
        color: "#8eb4ff",
      },
      {
        name: "PostgreSQL",
        color: "#0f69e1",
      },
    ],
    image: planify_app,
    source_code_link: "https://github.com/naguib-med/planify",
    live_link: "https://planify.vercel.app/",
  },
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
      },
    ],
    image: myposter,
    source_code_link: "https://github.com/naguib-med/creation-posters",
    live_link: "https://posters-app-3eb45.web.app/",
  },
];

export { projects, experiences, educations };

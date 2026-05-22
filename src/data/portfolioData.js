// Single source of truth for the portfolio content.
// React sections can stay focused on layout and presentation.
export const portfolioData = {
  identity: {
    name: 'Cheikh Massamba Dia',
    title: 'Développeur Full-Stack JavaScript',
  },
  hero: {
    badge: 'Développeur Full-Stack JavaScript',
    title: 'Je crée des applications web modernes, rapides et élégantes.',
    subtitle:
      "Je développe des interfaces premium avec React et Tailwind CSS, ainsi que des API robustes avec Node.js, Express, MongoDB et MySQL. J'aime transformer des idées concrètes en applications web fiables, responsives et faciles à utiliser.",
    primaryCta: {
      label: 'Voir mes projets',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Me contacter',
      href: '#contact',
    },
  },
  stack: {
    title: 'Mon univers technique',
    description:
      "J'utilise un écosystème JavaScript moderne pour construire des applications complètes, de l'interface utilisateur jusqu'à l'API backend.",
  },
  about: {
    eyebrow: 'À propos',
    title: 'Un développeur orienté projets réels.',
    description:
      "Je m'appelle Cheikh Massamba, développeur web full-stack JavaScript en apprentissage avancé, basé au Sénégal.",
    paragraphs: [
      "Je construis des applications web modernes avec une attention particulière portée à l'expérience utilisateur, la performance, l'accessibilité et la qualité du code.",
      'Mes projets sont orientés vers des besoins concrets : commande en ligne, réservation, gestion admin, suivi de statut, tableaux de bord et API sécurisées.',
      "J'aime créer des interfaces propres, responsives et agréables à utiliser, tout en structurant le backend de manière claire, maintenable et évolutive.",
    ],
    highlights: [
      'Full-Stack JavaScript',
      'Projets concrets',
      'Mobile-first',
      'Code maintenable',
    ],
  },
  skills: {
    eyebrow: 'Compétences',
    title:
      'Un stack JavaScript moderne pour construire des applications complètes.',
    description:
      "J'utilise des outils modernes pour créer des interfaces fluides, des API propres et des expériences web fiables.",
    groups: [
      {
        title: 'Frontend',
        description:
          'Création d’interfaces modernes, responsives et agréables à utiliser.',
        items: [
          'React',
          'Vite',
          'CSS',
          'Tailwind CSS',
          'Framer Motion',
          'Responsive Design',
          'Composants réutilisables',
        ],
      },
      {
        title: 'Backend',
        description:
          'Développement d’API REST propres, sécurisées et maintenables.',
        items: [
          'Node.js',
          'Express.js',
          'MongoDB',
          'MySQL',
          'Mongoose',
          'JWT',
          'Zod',
        ],
      },
      {
        title: 'Architecture',
        description:
          'Organisation claire du code pour faciliter l’évolution des projets.',
        items: [
          'Architecture modulaire',
          'Validation',
          'Gestion des erreurs',
          'Séparation des responsabilités',
        ],
      },
      {
        title: 'Déploiement',
        description:
          'Mise en ligne propre des applications frontend et backend.',
        items: [
          'Vercel',
          'Render',
          'Docker',
          'Git',
          'GitHub',
          'Variables d’environnement',
          'Configuration production',
        ],
      },
    ],
  },
  learningLanguages: {
    eyebrow: 'Apprentissage',
    title: 'Langages rencontrés pendant mon parcours.',
    description:
      'Au fil de mon apprentissage, j’ai exploré plusieurs langages et concepts qui m’ont aidé à mieux comprendre la programmation, les bases du web, les algorithmes et les bases de données.',
    note:
      'Mon stack principal reste JavaScript, React, Node.js et MongoDB. Ces langages représentent mon parcours d’apprentissage et les bases que j’ai rencontrées en progressant.',
    items: [
      {
        name: 'Scratch',
        category: 'Logique visuelle',
        description:
          'Découverte des bases de la programmation : événements, conditions, boucles, variables et logique algorithmique.',
      },
      {
        name: 'C',
        category: 'Fondamentaux',
        description:
          'Compréhension plus profonde de la mémoire, des types, des pointeurs, de la compilation et des bases de l’algorithmique.',
      },
      {
        name: 'Python',
        category: 'Programmation générale',
        description:
          'Pratique d’un langage clair pour manipuler des données, écrire des scripts et comprendre la logique de programmation.',
      },
      {
        name: 'SQL',
        category: 'Bases de données',
        description:
          'Apprentissage des requêtes, tables, relations, filtres et bases de la manipulation de données structurées.',
      },
      {
        name: 'PHP',
        category: 'Web backend',
        description:
          'Découverte des bases du développement web côté serveur et de la génération de pages dynamiques.',
      },
    ],
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Des projets concrets, pensés comme de vraies applications.',
    description:
      "Voici quelques projets que j'ai construits pour appliquer mes compétences full-stack sur des cas proches du monde réel.",
    items: [
      {
        name: 'Kaolack Kitchen',
        type: 'Plateforme de commande de fast-food',
        status: 'Projet full-stack',
        description:
          'Application web de commande en ligne conçue pour un service de fast-food local. Les clients peuvent consulter le menu, ajouter des produits au panier, passer une commande et suivre son statut.',
        highlights: [
          'Menu dynamique avec catégories',
          'Panier responsive mobile et desktop',
          'Passage de commande en ligne',
          'Suivi de commande par téléphone',
          'Dashboard admin',
          'Gestion produits/catégories',
          'Upload d’images avec Cloudinary',
          'API REST sécurisée',
        ],
        stack: [
          'React',
          'Vite',
          'Tailwind CSS',
          'Node.js',
          'Express',
          'MongoDB',
          'Mongoose',
          'JWT',
          'Zod',
          'Cloudinary',
        ],
        links: {
          // Keep empty until a reliable public link is available.
          live: 'https://kaolack-kitchen-web.vercel.app/',
          code: 'https://github.com/PapyDia',
        },
        backendNotice: true,
        note: 'Repo privé, disponible sur demande.',
      },
      {
        name: 'Sama Horaire',
        type: 'Plateforme de réservation de tickets de transport',
        status: 'Projet full-stack',
        description:
          'Application web de réservation de tickets de transport. Elle permet aux utilisateurs de consulter des trajets, réserver des places, recevoir un ticket avec QR code et suivre leur réservation.',
        highlights: [
          'Liste des trajets disponibles',
          'Réservation de plusieurs places',
          'Génération de ticket QR code',
          'Suivi de réservation',
          'Interface admin protégée',
          'Gestion des trajets',
          'Page contrôleur',
          'Scan QR code',
        ],
        stack: [
          'React',
          'Vite',
          'Tailwind CSS',
          'Node.js',
          'Express',
          'MongoDB',
          'Mongoose',
          'JWT',
          'Zod',
          'QR Code',
        ],
        links: {
          // ProjectCard automatically hides CTAs with an empty href.
          live: 'https://ama-horaire-frontend.vercel.app/',
          code: 'https://github.com/PapyDia',
        },
        backendNotice: true,
        note: 'Repo privé, disponible sur demande.',
      },
    ],
  },
  process: {
    eyebrow: 'Méthode',
    title: 'Ma façon de construire une application.',
    description:
      "J’avance étape par étape pour transformer une idée en application claire, fonctionnelle et maintenable.",
    steps: [
      {
        number: '01',
        title: 'Comprendre le besoin',
        description:
          "Je commence par clarifier l’objectif du projet, les utilisateurs concernés et les fonctionnalités importantes.",
      },
      {
        number: '02',
        title: 'Structurer la solution',
        description:
          'Je prépare une architecture simple, lisible et évolutive avant de développer les fonctionnalités.',
      },
      {
        number: '03',
        title: 'Créer une interface responsive',
        description:
          "Je construis une interface propre, mobile-first, agréable à utiliser et cohérente avec l’identité du projet.",
      },
      {
        number: '04',
        title: 'Développer une API propre',
        description:
          'Je mets en place une API structurée avec validation, gestion des erreurs, sécurité et séparation des responsabilités.',
      },
      {
        number: '05',
        title: 'Tester et améliorer',
        description:
          "Je vérifie les comportements importants, les erreurs possibles, le responsive et l’expérience utilisateur.",
      },
      {
        number: '06',
        title: 'Déployer proprement',
        description:
          "Je prépare la mise en ligne avec une configuration claire, des variables d’environnement et un déploiement stable.",
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Vous avez une idée ou un projet web ?',
    description:
      "Je suis disponible pour discuter d’une collaboration, d’une opportunité ou d’un projet autour du développement web JavaScript.",
    primaryCta: {
      // Contact links are displayed only after their href is filled in.
      label: 'M’envoyer un email',
      href: '',
    },
    secondaryCta: {
      label: 'Voir mon GitHub',
      href: '',
    },
    cards: [
      {
        title: 'Collaboration',
        description:
          'Discuter d’un projet web, d’une application ou d’une idée à transformer en produit.',
      },
      {
        title: 'Opportunité',
        description:
          'Échanger autour d’un stage, d’une mission, d’un poste junior ou d’une collaboration technique.',
      },
      {
        title: 'Projet local',
        description:
          'Construire une solution utile, adaptée aux besoins réels des utilisateurs au Sénégal.',
      },
    ],
  },
  footer:
    '© 2026 Cheikh Massamba. Portfolio. Tous droits réservés.',
}

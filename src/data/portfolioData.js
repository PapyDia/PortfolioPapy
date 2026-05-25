// Single source of truth for the portfolio content.
// React sections can stay focused on layout and presentation.
export const portfolioData = {
  identity: {
    name: 'Cheikh Massamba Dia',
    title: 'Développeur Full-Stack JavaScript',
    imageAlt: 'Portrait de Cheikh Massamba Dia',
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
    title: 'Un écosystème moderne pour construire des applications solides.',
    description:
      'Je construis mes projets avec un écosystème JavaScript moderne, léger et cohérent, pensé pour créer des interfaces rapides, des API structurées et des applications faciles à faire évoluer. Mon stack principal s’articule autour de React, Tailwind CSS, Node.js, Express, MongoDB et des outils qui renforcent la qualité, la sécurité, le déploiement et la maintenabilité des projets.',
  },
  about: {
    eyebrow: 'À propos',
    title: 'Je suis un développeur orienté projets réels.',
    description:
      'Un profil hybride qui combine développement web, esprit d’analyse, apprentissage rapide et compréhension des besoins réels.',
    paragraphs: [
      'Je suis Cheikh Massamba Dia, développeur Full-Stack JavaScript avec un profil hybride, à la croisée du développement web, de l’analyse de terrain et de la recherche. Mon parcours m’a appris à comprendre les besoins réels avant de penser solution, à observer les usages et à construire avec méthode.',
      'Je développe aujourd’hui des applications web modernes avec React, Tailwind CSS, Node.js, Express et MongoDB, en accordant une attention particulière à la qualité du code, à l’expérience utilisateur, à la performance, au responsive et à l’accessibilité.',
      'Ce qui me distingue, c’est ma capacité à m’adapter rapidement à de nouveaux environnements techniques ou professionnels. J’aime apprendre, explorer de nouveaux langages, comprendre de nouvelles technologies et les intégrer progressivement dans des projets concrets.',
      'Mon ambition est de continuer à évoluer vers des applications toujours plus utiles, fiables et proches des besoins des utilisateurs, avec une ouverture forte vers le développement mobile et les expériences multiplateformes.',
    ],
    highlights: [
      'Profil hybride',
      'Full-Stack JavaScript',
      'Adaptation rapide',
      'Recherche & terrain',
      'Apprentissage continu',
      'Ambition mobile',
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
          'Helmet',
          'CORS',
        ],
      },
      {
        title: 'Architecture',
        description:
          'Organisation claire du code pour faciliter l’évolution des projets.',
        items: [
          'Architecture modulaire',
          'Validation',
          'Features',
          'Gestion des erreurs',
          'S.O.L.I.D',
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
          'CI/CD',
          'Variables d’environnement',
          'Configuration production',
        ],
      },
      {
        title: 'Soft skills',
        featured: true,
        description:
          'Des qualités humaines importantes pour collaborer, apprendre vite et construire des projets sérieux.',
        items: [
          'Flexibilité',
          'Esprit d’équipe',
          'Communication claire',
          'Esprit d’analyse',
          'Résolution de problèmes',
          'Curiosité',
          'Rigueur',
          'Adaptabilité',
          'Patience dans le debugging',
          'Apprentissage continu',
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
          'Découverte des bases de la programmation: événements, conditions, boucles, variables et logique algorithmique.',
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
        name: 'MySQL',
        category: 'SQL / Bases de données',
        description:
          'Apprentissage des requêtes SQL, des tables, des relations, des filtres et de la manipulation de données structurées avec MySQL.',
      },
      {
        name: 'PHP',
        category: 'Web backend',
        description:
          'Découverte des bases du développement web côté serveur et de la génération de pages dynamiques.',
      },
    ],
    academicJourney: {
      eyebrow: 'Parcours universitaire',
      title: 'Je ne vous l’avais pas dit, mais...',
      description:
        'Avant de me consacrer sérieusement au développement web, j’ai suivi un parcours universitaire en géographie rurale jusqu’au niveau Master 2. Cette formation m’a appris à observer les territoires, analyser les dynamiques sociales et économiques, mener des enquêtes de terrain et rédiger des travaux scientifiques structurés.',
      paragraphs: [
        'J’ai notamment participé à une recherche à Poste Keur Ayib, à la frontière entre le Sénégal et la Gambie, autour du commerce formel et non formel. Cette expérience m’a confronté directement à la réalité du terrain : les échanges transfrontaliers, les pratiques économiques locales, les acteurs, les contraintes et les logiques d’organisation.',
        'J’ai également travaillé à Kaolack sur une recherche liée à la santé animale et aux zoonoses présentes dans la zone. Ce travail m’a amené à collecter des informations, analyser des données de terrain et rédiger un rapport scientifique qui a contribué à valider mon Master 1.',
        'Ce parcours m’a donné des compétences solides en enquête, observation, analyse, synthèse et rédaction scientifique. Aujourd’hui, je les considère comme un vrai avantage dans ma manière de concevoir des applications web : je ne pense pas seulement au code, mais aussi aux usages réels, aux besoins des utilisateurs et au contexte dans lequel une solution doit fonctionner.',
      ],
      skills: [
        'Géographie rurale',
        'Enquête de terrain',
        'Analyse territoriale',
        'Recherche qualitative',
        'Rédaction scientifique',
        'Observation du terrain',
        'Synthèse',
        'Compréhension des usages réels',
      ],
    },
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
          live: 'https://kaolack-kitchen-web.vercel.app/',
          code: '',
        },
        backendNotice: true,
        repoPrivate: true,
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
          live: 'https://ama-horaire-frontend.vercel.app/',
          code: '',
        },
        backendNotice: true,
        repoPrivate: true,
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
    title: 'Travaillons ensemble sur votre prochain projet web.',
    description:
      'Vous avez une idée, une opportunité ou un projet autour du développement web ? Je suis disponible pour échanger et voir comment je peux vous aider.',
    email: 'Cheikhmassamba53@gmail.com',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/PapyDia',
        description: 'Voir mes projets et mon code public.',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/cheikh-massamba-83a9a0256',
        description: 'Découvrir mon profil professionnel.',
      },
      {
        label: 'WhatsApp',
        href: '',
        description: 'Discuter rapidement d’un projet.',
      },
    ],
    cards: [
      {
        title: 'Projet web 🌐',
        description:
          'Création ou amélioration d’une application web moderne, responsive et maintenable.',
      },
      {
        title: 'Collaboration 🤝',
        description:
          'Échange autour d’une mission, d’un stage, d’un poste junior ou d’une collaboration technique.',
      },
      {
        title: 'Conseil technique 👨‍💻',
        description:
          'Discussion sur une idée, une architecture ou une solution web à construire.',
      },
    ],
  },
  footer:
    '© 2026 Cheikh Massamba. Portfolio. Tous droits réservés.',
}

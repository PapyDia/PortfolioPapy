export const portfolioData = {
  identity: {
    name: 'Papy Dia',
    title: 'Développeur Full-Stack JavaScript',
    location: 'Sénégal',
  },
  hero: {
    badge: 'Développeur Full-Stack JavaScript basé au Sénégal',
    title: 'Je crée des applications web modernes, rapides et élégantes.',
    subtitle:
      "Je développe des interfaces premium avec React et Tailwind CSS, ainsi que des API robustes avec Node.js, Express et MongoDB. J'aime transformer des idées concrètes en applications web fiables, responsives et faciles à utiliser.",
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
      'Je suis Papy Dia, développeur web full-stack JavaScript en apprentissage avancé, basé au Sénégal.',
    paragraphs: [
      "Je construis des applications web modernes avec une attention particulière portée à l'expérience utilisateur, la performance, l'accessibilité et la qualité du code.",
      'Mes projets sont orientés vers des besoins concrets : commande en ligne, réservation, gestion admin, suivi de statut, tableaux de bord et API sécurisées.',
      "J'aime créer des interfaces propres, responsives et agréables à utiliser, tout en structurant le backend de manière claire, maintenable et évolutive.",
    ],
    highlights: [
      'Basé au Sénégal',
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
        items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Zod'],
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
          'GitHub',
          'Variables d’environnement',
          'Configuration production',
        ],
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
          live: '',
          code: '',
        },
        note: 'Code privé ou disponible sur demande.',
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
          live: '',
          code: '',
        },
        note: 'Projet en construction progressive.',
      },
    ],
  },
  footer:
    '© 2026 Papy Dia. Portfolio développé avec React, Tailwind CSS et Vite.',
}

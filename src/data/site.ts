// =========================================================================
// site.ts - Configuration globale Codex EHS
// Source unique pour : URL canonique, contact, infos AE, meta SEO par defaut.
// Toute modification ici se propage sur tout le site.
// =========================================================================

export const SITE = {
  // Identite
  name: 'Codex EHS',
  shortName: 'Codex EHS',
  tagline: 'Le kit du Responsable EHS solo.',
  baseline: 'Audit-ready en 48h.',
  description:
    "Templates Excel et guides premium pour responsables EHS de PME industrielles. Plans d'action, registres, tableaux de bord, audit ISO 45001, DUERP. Multi-pays francophone, audit-ready.",

  // URLs
  url: 'https://codexehs.com',
  domain: 'codexehs.com',

  // Contact
  email: 'contact@codexehs.com',

  // Auto-entreprise
  legalName: 'Guillaume Cadet',
  legalForm: 'Entrepreneur individuel (regime micro-entreprise)',
  siret: '539 040 840 00024',
  ape: '7022Z',
  vatStatus: 'Franchise en base de TVA - article 293 B du Code general des impots',

  // Reseaux
  social: {
    linkedin: 'https://www.linkedin.com/in/guillaume-cadet-ehs',
  },

  // Locale
  locale: 'fr-FR',
  language: 'fr',

  // Auteur (auteur.org schema)
  author: {
    name: 'Guillaume Cadet',
    role: 'EHS Manager industriel',
    bio: "EHS Manager Amcor Flexibles Mareuil-sur-Ay. 12 ans d'experience en EHS industriel, ISO 45001 / 14001, plans d'action terrain.",
  },
} as const;

// =========================================================================
// Lemon Squeezy - configuration paiements
// =========================================================================
export const LEMON = {
  storeSlug: import.meta.env.PUBLIC_LEMON_STORE || 'codexehs',
  // URL de base des checkouts (overlay)
  checkoutBase: 'https://codexehs.lemonsqueezy.com/buy/',
  // Script overlay
  jsUrl: 'https://assets.lemonsqueezy.com/lemon.js',
} as const;

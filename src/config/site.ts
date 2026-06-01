// src/config/site.ts
// Configuration centralisée du site CODEX EHS.
// Constantes de marque réutilisées par les pages (méta, JSON-LD, URLs absolues).

export const SITE = {
  name: "CODEX EHS",
  // URL canonique de production, SANS slash final.
  // Les pages concatènent : `${SITE.url}/produits/plan-action-ehs`.
  url: "https://codexehs.com",
  description:
    "Templates Excel EHS premium pour responsables EHS francophones. " +
    "Audit-ready en 48 h.",
  email: "contact@codexehs.com",
  locale: "fr",
} as const;

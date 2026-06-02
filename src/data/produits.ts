// src/data/produits.ts
// CODEX EHS — Catalogue produits : SOURCE UNIQUE pour les CTA des Ressources.
//
// Pourquoi ce fichier : la discipline CTA impose qu'un seul produit soit
// vendable a un instant donne (gel commercial). Chaque article de la section
// /ressources lit ce catalogue via le composant ArticleCta. Quand un produit
// gele est mis en vente (« degel »), il suffit de basculer son `etat` a
// 'en-vente' et de renseigner `checkoutUrl` ICI : tous les articles de la
// grappe correspondante reportent automatiquement leur bouton d'achat dessus.
// Aucune retouche article par article.
//
// NB : les champs `nom` et `resume` sont RENDUS a l'utilisateur (dans le CTA) ->
// accents et apostrophes typographiques. Tout le reste (slug, url, cles) reste
// en ASCII car c'est du code / des chemins.

export type EtatProduit = 'en-vente' | 'gele' | 'a-venir';

export interface Produit {
  slug: string;            // identifiant interne
  nom: string;             // intitule commercial (CODEX EHS en majuscules dans les libelles visibles)
  prix: number;            // prix TTC en euros (franchise TVA art. 293 B)
  url: string;             // page produit sur le site (sous-dossier /produits/)
  checkoutUrl: string | null; // lien Lemon Squeezy ; null tant que non vendable
  etat: EtatProduit;
  resume: string;          // une ligne de positionnement, reutilisee dans les CTA rabattus (RENDU)
}

export const PRODUITS: Record<string, Produit> = {
  'plan-action': {
    slug: 'plan-action',
    nom: "Plan d’Action EHS Dynamique",
    prix: 89,
    url: '/produits/plan-action-ehs',
    // A RENSEIGNER au lancement (runbook FIL_14) : URL checkout Lemon Squeezy du Plan d'Action.
    // Laisser null bloque le bouton d'achat (etat affiche « apercu » sans clic mort).
    checkoutUrl: null,
    etat: 'en-vente',
    resume: "le tableur Excel qui structure, priorise et tient tes actions EHS jusqu’à leur clôture.",
  },
  'registre-at': {
    slug: 'registre-at',
    nom: 'Registre AT/Incidents',
    prix: 119,
    url: '/produits/registre-at-incidents',
    checkoutUrl: null,
    etat: 'gele',
    resume: "le registre AT qui calcule TF/TG en temps réel et intègre l’arbre des causes INRS.",
  },
  'tableau-bord': {
    slug: 'tableau-bord',
    nom: 'Tableau de Bord EHS Direction',
    prix: 99,
    url: '/produits/tableau-bord-direction',
    checkoutUrl: null,
    etat: 'gele',
    resume: 'le tableau de bord qui transforme tes indicateurs EHS en une page que la direction lit.',
  },
  'pack-audit': {
    slug: 'pack-audit',
    nom: 'Pack Audit ISO 45001',
    prix: 249,
    url: '/produits/pack-audit-iso-45001',
    checkoutUrl: null,
    etat: 'gele',
    resume: 'le kit qui prépare ton audit blanc ISO 45001 en 30 jours, sans cabinet.',
  },
  'kit-duerp': {
    slug: 'kit-duerp',
    nom: 'Kit DUERP Industriel',
    prix: 199,
    url: '/produits/kit-duerp',
    checkoutUrl: null,
    etat: 'a-venir',
    resume: 'le kit DUERP industriel : cotation, plan de prévention et conservation 40 ans.',
  },
};

// Produit pivot : la cible de repli pour TOUS les CTA d'achat tant que le gel tient.
export const PRODUIT_PIVOT = PRODUITS['plan-action'];

// Resout le produit a mettre en avant dans un article et la cible reelle du bouton d'achat.
export function resoudreCta(slugProduitGrappe: string) {
  const produitGrappe = PRODUITS[slugProduitGrappe] ?? PRODUIT_PIVOT;
  const achatDirect = produitGrappe.etat === 'en-vente' && produitGrappe.checkoutUrl !== null;
  return {
    produitGrappe,
    cibleAchat: achatDirect ? produitGrappe : PRODUIT_PIVOT,
    achatDirect,
    pivot: PRODUIT_PIVOT,
  };
}

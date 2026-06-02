// =========================================================================
// products.ts - Catalogue CODEX EHS
// 5 templates. 1 actif (Plan d'action). 4 "bientot disponibles".
// Modifier ici pour ajouter/activer un produit, jamais en dur ailleurs.
// =========================================================================

export type ProductStatus = 'active' | 'soon';

export interface Product {
  slug: string;
  title: string;
  shortTitle: string;
  pitch: string;
  longPitch?: string;
  price: number;
  priceStrike?: number;
  currency: string;
  status: ProductStatus;
  features: string[];
  highlights: string[];
  variantEnvKey: string; // nom de la variable d'env qui contient le variant ID LS
  releaseEta?: string; // "Q3 2026", "septembre 2026", etc.
  category: 'Plan d\'action' | 'Registre' | 'Reporting' | 'Audit' | 'DUERP';
  sample?: string; // chemin vers fichier demo si dispo
}

export const PRODUCTS: Product[] = [
  {
    slug: 'plan-action-ehs',
    title: "Plan d'Action EHS Dynamique",
    shortTitle: "Plan d'Action EHS",
    pitch:
      "Le plan d'action audit-ready en 1 fichier Excel : 500 actions, dashboard temps reel, planning trie par criticite, multi-pays francophone.",
    longPitch:
      "Un seul fichier Excel pour piloter tout ton plan d'action EHS. 6 onglets, 4 591 formules dynamiques, 6 KPI cards, 6 graphiques, matrice de criticite 5x5, planning top 100, indicateurs annuels civil et fiscal. Format structuré, vocabulaire CSSCT/CARSAT/DREAL a jour. 8 pays francophones pilotes par une seule cellule.",
    price: 89,
    currency: 'EUR',
    status: 'active',
    features: [
      "Table de 500 actions, 25 colonnes structurees",
      "Dashboard 6 KPI cards + 6 graphiques peuples automatiquement",
      "Planning top 100 trie par criticite (G x P)",
      "Indicateurs annuels civil + fiscal (mois de debut FY parametrable)",
      "Multi-pays : FR / BE / CH / LU / QC / MA / TN / DZ via une cellule",
      "Mise en forme conditionnelle sur statut et echeance",
      "30 actions pre-remplies dans la demo industrie generique",
      "Guide PDF 11 pages pas-a-pas (Ce que ca fait / Pourquoi / Ou / Champ / Verification)",
    ],
    highlights: [
      'Audit-ready : CSSCT, CARSAT, DREAL, ISO 45001',
      "Setup en 30 minutes, premiere action saisie en 2 minutes",
      "Compatible Excel 365 desktop, web, Mac et LibreOffice",
    ],
    variantEnvKey: 'PUBLIC_LEMON_VARIANT_PLAN_ACTION',
    category: "Plan d'action",
    sample: '/samples/CodexEHS_PlanActionEHS_Demo_v1.xlsx',
  },
  {
    slug: 'registre-at-incidents',
    title: "Registre AT/Incidents + Arbre des Causes",
    shortTitle: 'Registre AT/Incidents',
    pitch:
      "Le registre AT/MP qui repond aux exigences L4711-1, avec arbre des causes integre et taux de frequence/gravite calcules automatiquement.",
    price: 119,
    currency: 'EUR',
    status: 'soon',
    features: [
      "Registre AT/MP/Presque-accidents conforme L4711-1",
      "Arbre des causes 4M integre, exportable PDF",
      "Calculs automatiques TF1, TF2, TG, IF",
      "Tableau de bord direction trimestriel/annuel",
      "Modeles de declaration CPAM",
    ],
    highlights: [],
    variantEnvKey: 'PUBLIC_LEMON_VARIANT_REGISTRE_AT',
    category: 'Registre',
    releaseEta: 'ete 2026',
  },
  {
    slug: 'tableau-bord-ehs',
    title: "Tableau de Bord EHS Direction",
    shortTitle: 'Tableau de Bord EHS',
    pitch:
      "Le reporting mensuel pret pour CODIR : 1 fichier, 1 onglet executif, lecture en 90 secondes. Tendances 12 mois et alertes automatiques.",
    price: 99,
    currency: 'EUR',
    status: 'soon',
    features: [
      "Vue executive sur 1 ecran A3 imprimable",
      "9 KPI EHS standards (TF, TG, near-miss, conformite...)",
      "Tendances 12 mois glissants avec sparklines",
      "Alertes seuils + commentaires guides",
      "Export PPTX automatique pour CODIR",
    ],
    highlights: [],
    variantEnvKey: 'PUBLIC_LEMON_VARIANT_TABLEAU_BORD',
    category: 'Reporting',
    releaseEta: 'ete 2026',
  },
  {
    slug: 'pack-audit-iso-45001',
    title: "Pack Audit ISO 45001 - Pret en 30 jours",
    shortTitle: 'Pack Audit ISO 45001',
    pitch:
      "Le kit complet pour se preparer a un audit ISO 45001 en 30 jours : checklist par chapitre, registre des preuves, planning de revue, livrables auditeur.",
    price: 249,
    currency: 'EUR',
    status: 'soon',
    features: [
      "Checklist d'audit detaillee chapitre par chapitre (clauses 4 a 10)",
      "Registre des preuves documentaires avec liens vers les onglets sources",
      "Planning de revue J-30 a J0",
      "Modeles d'entretien auditeur",
      "Kit de communication interne pre-audit",
      "Plan d'action de remediation post-audit",
    ],
    highlights: [],
    variantEnvKey: 'PUBLIC_LEMON_VARIANT_PACK_AUDIT',
    category: 'Audit',
    releaseEta: 'automne 2026',
  },
  {
    slug: 'kit-duerp-industriel',
    title: "Kit DUERP Industriel",
    shortTitle: 'Kit DUERP Industriel',
    pitch:
      "Un DUERP HIRARC industriel pret a personnaliser : 18 unites de travail types, 120 risques references, cotation Severite x Probabilite x Exposition.",
    price: 199,
    currency: 'EUR',
    status: 'soon',
    features: [
      "Methodologie HIRARC complete",
      "18 unites de travail industrielles pre-cartographiees",
      "Bibliotheque 120 risques references (mecanique, chimique, ergonomique, psycho-social, environnement)",
      "Cotation S x P x E + criticite residuelle apres barrieres",
      "Plan d'action lie automatiquement (compatible Plan d'Action EHS Dynamique)",
      "Annexe penibilite + secteur agro/chimie/metallurgie",
    ],
    highlights: [],
    variantEnvKey: 'PUBLIC_LEMON_VARIANT_KIT_DUERP',
    category: 'DUERP',
    releaseEta: 'automne 2026',
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getActiveProducts(): Product[] {
  return PRODUCTS.filter((p) => p.status === 'active');
}

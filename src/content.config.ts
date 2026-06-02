// src/content.config.ts
// CODEX EHS — Configuration des Content Collections (Astro 5+).
//
// Emplacement : a la racine de `src/` (Astro 5). Si le projet tourne encore
// sous Astro 4, deplacer ce fichier en `src/content/config.ts`, retirer le
// `loader` (glob) et remplacer par `type: 'content'`. Detail dans le README.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ressources = defineCollection({
  // Charge tous les .md du dossier des articles. Le slug de l'URL = le nom du
  // fichier (ex. duerp-2026-obligations-cotation-erreurs.md -> /ressources/duerp-2026-obligations-cotation-erreurs).
  loader: glob({ pattern: '**/*.md', base: './src/content/ressources' }),
  schema: z.object({
    // --- Identite editoriale ---
    titre: z.string(),                 // H1 et <title> de l'article
    description: z.string().max(170),  // meta description + accroche du hub (155-165 car. ideal)

    // --- Dates ---
    date: z.coerce.date(),             // date de publication (ISO : 2026-06-15)
    maj: z.coerce.date().optional(),   // date de derniere mise a jour (affichee si presente)

    // --- Architecture pilier + grappe ---
    grappe: z.enum(['plan-action', 'duerp', 'indicateurs-at', 'iso-45001']),
    type: z.enum(['pilier', 'satellite']),
    pilier: z.string().optional(),     // slug du pilier de rattachement (obligatoire pour un satellite)

    // --- Routage commercial (cf. src/data/produits.ts) ---
    produit: z.enum(['plan-action', 'registre-at', 'tableau-bord', 'pack-audit', 'kit-duerp']),

    // --- SEO ---
    motCle: z.string(),                // requete cible principale (documentaire, pas affichee)
    ogImage: z.string().optional(),    // chemin image Open Graph (defaut : OG generique du site)

    // --- Signature ---
    auteur: z.string().default('Guillaume, Responsable EHS'),

    // --- Publication ---
    draft: z.boolean().default(false), // true = exclu du build et du sitemap
  }),
});

export const collections = { ressources };

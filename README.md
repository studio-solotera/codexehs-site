# Codex EHS — Site Astro

Site statique de la boutique [codexehs.com](https://codexehs.com), construit avec Astro 5, déployé sur Cloudflare Pages, paiements gérés par Lemon Squeezy en overlay.

**Stack** : Astro 5 (output statique) · TypeScript · CSS variables natives · `@fontsource-variable` (Inter + JetBrains Mono self-hosted) · Cloudflare Pages · Lemon Squeezy `lemon.js`.

**Aucune dépendance Google Fonts CDN.** Aucune dépendance externe au runtime. Tout est servi depuis le domaine final.

---

## Sommaire du guide

1. [Prérequis](#1-prérequis)
2. [Installer le repo en local et lancer le serveur de dev](#2-installer-le-repo-en-local-et-lancer-le-serveur-de-dev)
3. [Variables d'environnement Lemon Squeezy](#3-variables-denvironnement-lemon-squeezy)
4. [Créer le repo GitHub et pousser le code](#4-créer-le-repo-github-et-pousser-le-code)
5. [Connecter Cloudflare Pages au repo GitHub](#5-connecter-cloudflare-pages-au-repo-github)
6. [Brancher le domaine codexehs.com](#6-brancher-le-domaine-codexehscom)
7. [Vérifications post-déploiement](#7-vérifications-post-déploiement)
8. [Workflow de mise à jour quotidien](#8-workflow-de-mise-à-jour-quotidien)
9. [Placeholders à remplir avant publication](#9-placeholders-à-remplir-avant-publication)
10. [Dépannage rapide](#10-dépannage-rapide)

---

## 1. Prérequis

Tout doit déjà être installé sur ton Mac Mini (héritage du projet Solotera). Vérifie quand même.

**Ce que ça fait** : s'assurer que les outils nécessaires répondent. **Pourquoi cette étape** : si l'un de ces outils manque, rien de ce qui suit ne fonctionnera. **Où** : Terminal (iTerm2). **Quoi vérifier à la fin** : chaque commande renvoie un numéro de version.

```bash
node --version    # attendu : v20.x ou plus récent
npm --version     # attendu : 10.x ou plus
git --version     # attendu : 2.x
gh --version      # attendu : 2.x (GitHub CLI)
```

Si Node est en 18 ou moins : `brew upgrade node`. Si `gh` n'existe pas : `brew install gh`.

**Compte GitHub** : tu utilises ton compte GitHub existant (celui créé pour Solotera est OK). Le repo Codex EHS sera créé sous ce même compte, en dépôt **public** (visibilité externe pour SEO + open-source-friendly) ou **privé** (ton choix, ça ne change rien au déploiement).

**Compte Cloudflare** : le tien existe déjà. Le domaine `codexehs.com` est déjà acheté chez Cloudflare Registrar, DNS géré par Cloudflare. Rien à racheter.

---

## 2. Installer le repo en local et lancer le serveur de dev

**Ce que ça fait** : décompresser le ZIP, installer toutes les dépendances Astro/TypeScript/Fonts, lancer un serveur web local pour voir le site dans ton navigateur. **Pourquoi cette étape** : tu dois pouvoir prévisualiser le site avant tout déploiement. **Où** : Terminal puis navigateur. **Quoi vérifier à la fin** : `http://localhost:4321` affiche la page d'accueil Codex EHS avec hero bleu Prusse et orange Codex.

```bash
# Décompresse le ZIP livré, place-toi dans le dossier
cd ~/studio/projects   # ou n'importe quel dossier de travail
unzip ~/Downloads/CodexEHS_SiteAstro_v1.zip
cd codexehs-site

# Installe les dépendances (Astro, sitemap, fonts Inter + JBM)
npm install

# Lance le serveur de dev
npm run dev
```

À la fin de `npm run dev`, le terminal affiche un lien `http://localhost:4321`. **Ouvre-le dans ton navigateur**. Tu dois voir : header avec wordmark Codex EHS, hero « Le kit du Responsable EHS solo », mockup KPI à droite, 3 piliers en dessous.

Pour arrêter le serveur : `Ctrl+C` dans le terminal.

---

## 3. Variables d'environnement Lemon Squeezy

**Ce que ça fait** : connecter le bouton « Acheter maintenant » au vrai store Lemon Squeezy. **Pourquoi cette étape** : sans variant ID, le bouton reste désactivé en mode « Bientôt disponible » et aucune vente n'est possible. **Où** : fichier `.env` à la racine du repo (créé à partir de `.env.example`). **Quoi vérifier à la fin** : le bouton « Acheter — 89 € » est cliquable sur la page produit en local.

```bash
# À la racine du repo (codexehs-site/)
cp .env.example .env

# Édite le fichier dans VS Code
code .env
```

Remplis ces deux variables critiques :

```env
PUBLIC_LEMON_STORE=codexehs
PUBLIC_LEMON_VARIANT_PLAN_ACTION=123456
```

| Variable | Où la trouver |
|---|---|
| `PUBLIC_LEMON_STORE` | Slug du store dans Lemon Squeezy. Visible dans l'URL du store : `https://codexehs.lemonsqueezy.com` → slug = `codexehs`. |
| `PUBLIC_LEMON_VARIANT_PLAN_ACTION` | ID numérique du variant produit. Dans LS : Products → Plan d'Action EHS Dynamique → Variants → l'ID est dans l'URL ou affiché à côté du variant. |

⚠ **Tant que le KYB Lemon Squeezy n'est pas validé** (en attente Solotera/Gargi côté FIL_04 deps), le store et les variants n'existent pas. Le bouton reste désactivé, c'est le comportement attendu. Tu peux quand même déployer le site sans ces variables : le catalogue s'affiche, les produits sont visibles, mais le bouton paiement reste en mode « Bientôt disponible ». **C'est OK pour pré-lancement.**

Relance `npm run dev` après modification du `.env`.

---

## 4. Créer le repo GitHub et pousser le code

**Ce que ça fait** : initialiser git en local, créer un repo GitHub vide, pousser tout le code dessus. **Pourquoi cette étape** : Cloudflare Pages déploie depuis un repo GitHub, pas depuis ton disque. **Où** : Terminal, dans le dossier `codexehs-site/`. **Quoi vérifier à la fin** : tu vois ton code sur `https://github.com/[ton-username]/codexehs-site`.

```bash
# Place-toi dans le dossier du repo
cd ~/studio/projects/codexehs-site

# Initialise git
git init
git branch -M main

# Premier commit
git add .
git commit -m "feat: bootstrap site Astro Codex EHS v1"

# Crée le repo GitHub via la CLI gh (déjà connectée pour Solotera)
gh repo create codexehs-site --public --source=. --remote=origin --push
```

Si tu préfères un repo privé : remplace `--public` par `--private`. Cloudflare Pages fonctionne avec les deux.

**Vérification finale** : ouvre `https://github.com/[ton-username]/codexehs-site` dans le navigateur. Tu dois voir l'arborescence complète (`src/`, `public/`, `package.json`, etc.).

---

## 5. Connecter Cloudflare Pages au repo GitHub

**Ce que ça fait** : créer un projet Cloudflare Pages qui builde et déploie automatiquement le site à chaque `git push`. **Pourquoi cette étape** : c'est le serveur qui héberge codexehs.com gratuitement et avec un CDN mondial. **Où** : dashboard Cloudflare dans le navigateur. **Quoi vérifier à la fin** : Cloudflare te donne une URL temporaire type `codexehs-site.pages.dev` qui affiche le site déployé.

### 5.1 Créer le projet Pages

1. Ouvre [dash.cloudflare.com](https://dash.cloudflare.com), connecte-toi avec ton compte.
2. Dans la barre latérale gauche, clique sur **Workers & Pages**.
3. Onglet **Pages** (pas Workers), bouton **Create application**, onglet **Pages**.
4. Clique sur **Connect to Git**.
5. Connecte ton compte GitHub si pas déjà fait, autorise l'accès au repo `codexehs-site`.
6. Sélectionne le repo `codexehs-site`, bouton **Begin setup**.

### 5.2 Configuration build

Remplis exactement comme ci-dessous, sinon le build casse.

| Champ | Valeur |
|---|---|
| **Project name** | `codexehs-site` |
| **Production branch** | `main` |
| **Framework preset** | `Astro` (Cloudflare détecte automatiquement) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | (vide, laisse par défaut) |
| **Node version** | `20` (à définir en variable d'env, voir 5.3) |

### 5.3 Variables d'environnement de build

Toujours dans le même écran de setup, déroule **Environment variables (advanced)**. Ajoute :

| Nom | Valeur | Pourquoi |
|---|---|---|
| `NODE_VERSION` | `20` | Force Cloudflare à utiliser Node 20 pour le build (sinon erreur Astro) |
| `PUBLIC_SITE_URL` | `https://codexehs.com` | Utilisée pour le sitemap et les balises canonical |
| `PUBLIC_CONTACT_EMAIL` | `contact@codexehs.com` | Email affiché en footer et mentions légales |
| `PUBLIC_LEMON_STORE` | `codexehs` | Slug du store Lemon Squeezy |
| `PUBLIC_LEMON_VARIANT_PLAN_ACTION` | (laisse vide pour l'instant) | À renseigner dès que KYB LS validé |

⚠ Toutes les variables qui doivent être lisibles côté client (donc dans le HTML final, comme les variables Lemon Squeezy) **doivent commencer par `PUBLIC_`**. C'est une règle Astro non négociable.

Bouton **Save and Deploy**.

### 5.4 Attendre le premier build

Le premier build prend 2 à 4 minutes. Cloudflare affiche un log en direct. À la fin :

- ✅ vert : le build a réussi, URL temporaire fournie (type `https://codexehs-site.pages.dev`)
- ❌ rouge : lis le log, c'est généralement un problème de Node version ou de variable manquante

**Quoi vérifier à la fin** : ouvre l'URL `.pages.dev`, le site Codex EHS s'affiche identique à ton local. Header, hero, 3 piliers, catalogue, page produit, CGV/mentions/confidentialité, /merci, 404. Tout doit fonctionner.

---

## 6. Brancher le domaine codexehs.com

**Ce que ça fait** : faire pointer `codexehs.com` vers le projet Cloudflare Pages. **Pourquoi cette étape** : sans ça, le site n'est accessible que sur l'URL `.pages.dev` temporaire. **Où** : dashboard Cloudflare, dans le projet Pages. **Quoi vérifier à la fin** : `https://codexehs.com` ouvre le site, certificat SSL valide (cadenas vert dans le navigateur).

1. Dans Cloudflare Pages → projet `codexehs-site` → onglet **Custom domains**.
2. Bouton **Set up a custom domain**.
3. Tape `codexehs.com`, valide.
4. Cloudflare détecte que le domaine est déjà géré chez Cloudflare (puisque tu l'as acheté chez Cloudflare Registrar) → **il configure le DNS automatiquement, zéro action manuelle**.
5. Coche aussi `www.codexehs.com` en domaine secondaire avec redirection vers la racine (Cloudflare le propose).
6. Attends 1 à 3 minutes la propagation et l'émission du certificat SSL.
7. Teste : `https://codexehs.com` doit ouvrir le site avec cadenas vert.

**Si tu vois une erreur SSL pendant 5 minutes** : c'est normal, le certificat Let's Encrypt n'est pas encore émis. Attends. Si après 15 minutes ça ne marche toujours pas, va dans **SSL/TLS → Overview** et mets le mode sur **Full**.

---

## 7. Vérifications post-déploiement

**Ce que ça fait** : s'assurer que le site est techniquement prêt pour le SEO et le marketing. **Pourquoi cette étape** : un site live qui n'est pas indexable, ou qui charge en 8 secondes, perd 80 % de son potentiel. **Où** : navigateur + outils en ligne. **Quoi vérifier à la fin** : toutes les cases ci-dessous sont cochées.

### Checklist de validation

- [ ] `https://codexehs.com` → page d'accueil OK
- [ ] `https://www.codexehs.com` → redirige vers `https://codexehs.com`
- [ ] `https://codexehs.com/robots.txt` → fichier servi, pointe vers le sitemap
- [ ] `https://codexehs.com/sitemap-index.xml` → fichier XML avec toutes les pages
- [ ] `https://codexehs.com/catalogue` → 5 cartes produits
- [ ] `https://codexehs.com/produits/plan-action-ehs` → page produit complète
- [ ] `https://codexehs.com/cgv` → CGV affichées
- [ ] `https://codexehs.com/mentions-legales` → mentions légales affichées
- [ ] `https://codexehs.com/confidentialite` → politique RGPD affichée
- [ ] `https://codexehs.com/page-qui-existe-pas` → page 404 customisée

### Tests qualité

| Outil | URL à coller | Objectif |
|---|---|---|
| [PageSpeed Insights](https://pagespeed.web.dev/) | `https://codexehs.com/produits/plan-action-ehs` | Performance ≥ 95, SEO = 100, Accessibility ≥ 95 |
| [OpenGraph.xyz](https://www.opengraph.xyz/) | `https://codexehs.com` | Aperçu OG correct (titre + description + image) |
| [Schema.org Validator](https://validator.schema.org/) | `https://codexehs.com/produits/plan-action-ehs` | JSON-LD Product + FAQPage détectés, zéro erreur |
| [Search Console](https://search.google.com/search-console) | Ajouter `codexehs.com` comme propriété | Soumettre le sitemap, demander indexation de la home |

---

## 8. Workflow de mise à jour quotidien

**Ce que ça fait** : déployer une modification du site en 30 secondes. **Pourquoi cette étape** : c'est le cycle de vie normal du site une fois en ligne. **Où** : Terminal. **Quoi vérifier à la fin** : le push déclenche un build Cloudflare, la modification est visible sur codexehs.com en 2-3 minutes.

```bash
# Tu modifies un fichier dans ~/studio/projects/codexehs-site/
# Par exemple, tu ajustes un prix dans src/data/products.ts

# Vérifie en local
npm run dev
# → ouvre localhost:4321, valide la modif

# Quand c'est bon, commit + push
git add .
git commit -m "fix: ajustement prix Plan d'Action 89 € → 99 €"
git push
```

Cloudflare Pages détecte le push, relance un build, redéploie. Aucune action manuelle côté Cloudflare.

**Pour tester une grosse modif sans risquer le site live** : crée une branche, push-la, Cloudflare génère automatiquement un déploiement de preview sur une URL `[hash].codexehs-site.pages.dev`. Tu valides sur la preview, puis tu merges sur `main` pour pousser en prod.

```bash
git checkout -b feature/nouvelle-page
# modifications
git push -u origin feature/nouvelle-page
# → Cloudflare déploie une preview, tu valides
git checkout main
git merge feature/nouvelle-page
git push   # → déploie en prod
```

---

## 9. Placeholders à remplir AVANT publication

⚠ Ces éléments sont des placeholders dans le code. **Le site peut être en ligne avec, mais ils doivent être remplis avant la première vente conso** (donc avant communication large).

| Fichier | Placeholder | Quoi mettre |
|---|---|---|
| `src/pages/mentions-legales.astro` | `[ADRESSE_AE_A_COMPLETER]` | Adresse postale déclarée de l'auto-entreprise (adresse personnelle ou domiciliation) |
| `src/pages/cgv.astro` | `[MEDIATEUR_A_DESIGNER_LORS_INSCRIPTION]` | Médiateur agréé (ex : MEDICYS, CM2C). Obligation B2C, mais activité Codex EHS étant B2B exclusive, risque faible. À inscrire sous 30 jours après 1ère vente si on a un doute. |
| `src/data/site.ts` | `social.linkedin` | URL exacte de ton profil LinkedIn pro à mettre à jour |
| `public/logos/*.svg` | Logos approximatifs | À remplacer par les exports officiels du dossier `logos-export/` du brand kit v1 (FIL_02) |

**Recherche rapide des placeholders** :

```bash
cd ~/studio/projects/codexehs-site
grep -r "A_COMPLETER\|A_DESIGNER" src/
```

---

## 10. Dépannage rapide

### Le build Cloudflare échoue avec « node version not supported »
La variable d'env `NODE_VERSION=20` n'est pas définie ou est sur une vieille version. Va dans Pages → Settings → Environment variables → corrige.

### Les fonts Inter / JetBrains Mono ne s'affichent pas
Vérifie que `npm install` a bien tourné : le dossier `node_modules/@fontsource-variable/` doit exister localement. En prod, c'est `npm run build` côté Cloudflare qui les embarque dans `dist/_astro/` automatiquement.

### Le bouton « Acheter maintenant » ne fait rien
Soit `PUBLIC_LEMON_VARIANT_PLAN_ACTION` est vide → bouton désactivé, c'est volontaire. Soit `lemon.js` n'a pas pu se charger → ouvre la console navigateur (F12 → onglet Console) et regarde l'erreur. Vérifie aussi que le store et le variant existent vraiment côté Lemon Squeezy.

### Le sitemap est vide ou contient des pages indésirables
Le filtre est dans `astro.config.mjs` (clé `filter`). Par défaut on exclut `/merci` et `/404`. Pour exclure une autre page, ajoute son chemin dans la fonction.

### Lighthouse score < 95 en performance
Cause habituelle : une image non optimisée. Convertis-la en WebP avant de la committer. Outil : [Squoosh.app](https://squoosh.app) ou `cwebp` en CLI (`brew install webp`). Place les images dans `public/` et appelle-les avec `<img src="/mon-image.webp" loading="lazy" alt="...">`.

### Je veux ajouter Plausible Analytics
Plan tier gratuit self-host à voir plus tard. Pour la v1 de mise en ligne : zéro analytics, on ajoute Plausible self-hosted dans une phase ultérieure (FIL_06 ou postérieur). En attendant, les analytics Cloudflare Pages (gratuites, RGPD-friendly) suffisent : dashboard Pages → onglet **Analytics**.

---

## Structure du repo

```
codexehs-site/
├── .env.example          # Modèle de variables d'environnement
├── .gitignore            # Protège .env, node_modules, dist
├── astro.config.mjs      # Config Astro + sitemap
├── package.json          # Dépendances npm
├── tsconfig.json         # Config TypeScript stricte
├── public/               # Assets statiques servis tels quels
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── og-default.png    # Image OG par défaut (1200x630)
│   ├── og-default.svg
│   ├── robots.txt
│   └── logos/
│       ├── wordmark.svg
│       ├── monogramme.svg
│       └── combine.svg
└── src/
    ├── components/       # Composants Astro réutilisables
    │   ├── Button.astro
    │   ├── FAQ.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── LemonCheckoutButton.astro
    │   └── ProductCard.astro
    ├── data/             # Données structurées TypeScript
    │   ├── products.ts   # Catalogue 5 produits
    │   └── site.ts       # Constantes site + Lemon Squeezy
    ├── layouts/
    │   └── Base.astro    # Layout maître avec SEO + JSON-LD
    ├── pages/            # Une page = un fichier .astro
    │   ├── index.astro
    │   ├── catalogue.astro
    │   ├── a-propos.astro
    │   ├── cgv.astro
    │   ├── mentions-legales.astro
    │   ├── confidentialite.astro
    │   ├── merci.astro
    │   ├── 404.astro
    │   └── produits/
    │       └── plan-action-ehs.astro
    └── styles/
        ├── tokens.css    # Variables CSS (brand kit v1)
        └── global.css    # Imports fonts + classes layout
```

---

## Commandes utiles

```bash
npm run dev         # Serveur de dev local sur localhost:4321
npm run build       # Build production dans dist/
npm run preview     # Sert le build pour vérifier avant push
npm run astro check # Vérification TypeScript des composants Astro
```

---

## Crédits techniques

- [Astro 5](https://astro.build) — Framework statique
- [Cloudflare Pages](https://pages.cloudflare.com) — Hébergement
- [Lemon Squeezy](https://www.lemonsqueezy.com) — Paiements + Merchant of Record (gère la TVA mondiale à notre place)
- [Fontsource](https://fontsource.org) — Inter Variable + JetBrains Mono Variable self-hosted (zéro Google Fonts CDN, conforme RGPD)

---

**Maintenu par** : Guillaume Cadet · contact@codexehs.com · SIRET 539 040 840 00024

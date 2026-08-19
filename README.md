# Abdul Business — Plateforme Web & Mobile (Niamey, Niger)

Site web officiel et configurateur de services mobiles pour l’entreprise **Abdul Business** basée à Niamey (Niger).

> **Slogan :** *Simple · fiable · sécurisé*  
> **Contact officiel WhatsApp :** [+227 74 47 09 22](https://wa.me/22774470922)

---

## 📱 Fonctionnalités Principales

1. **Accueil immersif avec Parallax & Storytelling :**
   - Hero adapté au contexte urbain de Niamey et aux réseaux télécoms locaux.
   - 4 piliers de confiance animés à l'entrée dans le viewport.
   - Carousel tactile avec défilement fluide `scroll-snap-type`.
2. **Recharges & Forfaits Télécoms :**
   - Prise en charge des réseaux **Airtel Niger**, **Moov Africa Niger** et **Zamani Telecom**.
   - Simulateurs interactifs de recharges et de forfaits Internet (jour, semaine, mois).
   - Génération de messages WhatsApp pré-formatés avec encodage d'URL sans collecte de données sensibles.
3. **Moyens de Paiement Sécurisés à Niamey :**
   - Présentation claire des canaux acceptés : *Airtel Money, Moov Money (Flooz), Nita, Amanah, Zamani Cash, Coris Money*.
   - Mention légale obligatoire : *« Moyens de paiement acceptés selon confirmation Abdul Business »*.
   - Aucune transaction bancaire non sécurisée en direct : validation humaine préalable systématique.
4. **Boutique Accessoires Mobiles :**
   - Présentation de câbles de charge renforcés (Type-C, Lightning), têtes de chargeur, adaptateurs OTG et écouteurs.
   - Prise de commande directe sur WhatsApp et remise convenue à Niamey.
5. **Accessibilité & PWA :**
   - Conçu d'abord pour mobile (390 px) puis optimisé pour grands écrans (1280 px).
   - Prise en charge de `prefers-reduced-motion`.
   - Manifest PWA prêt pour l'installation sur smartphone.

---

## 🛠️ Stack Technique

- **Framework :** [Next.js 15 (App Router)](https://nextjs.org)
- **Langage :** TypeScript (mode strict)
- **Styles :** Tailwind CSS v4 & Effets Liquid Glass
- **Icônes :** Lucide React
- **Animations légères :** IntersectionObserver natif (`ScrollReveal`) & `requestAnimationFrame`

---

## 🚀 Installation & Développement Local

1. **Cloner le dépôt ou ouvrir le projet :**
```bash
git clone <votre-depot>
cd abdul-business
```

2. **Installer les dépendances :**
```bash
npm install
```

3. **Lancer le serveur de développement :**
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

4. **Vérifier le build de production :**
```bash
npm run build
```

---

## 🌐 Déploiement sur Vercel

Le projet est nativement configuré pour un déploiement instantané sur **Vercel** :

1. Poussez le projet sur votre compte GitHub, GitLab ou Bitbucket.
2. Rendez-vous sur [Vercel Dashboard](https://vercel.com/new).
3. Importez le dépôt du projet.
4. Le framework est automatiquement détecté comme **Next.js**.
5. *(Optionnel)* Définissez vos variables d'environnement si nécessaire (`APP_URL`, etc.).
6. Cliquez sur **Deploy**. Le site est déployé mondialement avec CDN Edge et certificat SSL HTTPS automatique.

---

## ⚙️ Variables & Éléments à Personnaliser avant la Production

Tous les éléments configurables sont centralisés dans le fichier `lib/constants.ts` :

- [ ] **Logo officiel :** Remplacer l'icône placeholder par le fichier SVG/PNG haute définition dans `public/`.
- [ ] **Numéro WhatsApp & Téléphone :** Modifiable dans `BUSINESS_CONFIG.phone` et `BUSINESS_CONFIG.whatsappUrl`.
- [ ] **Horaires d'ouverture réels :** À ajuster dans `BUSINESS_CONFIG.hours`.
- [ ] **Opérateurs & Grilles forfaits :** Personnaliser les volumes et validités dans `DATA_PASS_OPTIONS`.
- [ ] **Moyens de paiement actifs :** Activer/Désactiver chaque méthode via le flag `isActive` dans `PAYMENT_METHODS`.
- [ ] **Catalogue accessoires & prix :** Mettre à jour `BOUTIQUE_PRODUCTS` selon le stock physique réel disponible à Niamey.
- [ ] **Photos réelles :** Remplacer les images CDN de démonstration par les vraies photos du point de vente et des produits.

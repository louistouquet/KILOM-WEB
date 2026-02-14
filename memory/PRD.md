# PRD - KILOM Landing Page

**Date de création**: 14 Février 2025  
**Dernière mise à jour**: 14 Février 2025  
**Statut**: MVP Complété (Frontend Only - Site Vitrine)

---

## 📋 Vue d'ensemble du projet

**Nom du projet**: KILOM  
**Type**: Site vitrine premium pour SaaS de gestion d'indemnités kilométriques  
**URL**: kilom.fr  
**Tech Stack**: React (CRA), Tailwind CSS, Shadcn UI, Framer Motion  
**Langue**: Français

---

## 🎯 Proposition de valeur

KILOM est une application SaaS premium qui automatise la gestion des indemnités kilométriques pour les professionnels. L'application :
- Synchronise le calendrier professionnel de l'utilisateur
- Utilise l'IA pour identifier les déplacements professionnels
- Interroge Mapbox pour calculer les distances exactes
- Stocke les trajets dans un calendrier dédié
- Génère des exports comptables certifiés

---

## 👥 Personas utilisateurs

1. **Professionnel indépendant** (Plan Solo - 89€/an)
   - Consultant, commercial, profession libérale
   - Effectue de nombreux déplacements professionnels
   - Veut gagner du temps sur l'administratif
   - Cherche à maximiser ses déductions fiscales

2. **Couple/Associés** (Plan Duo - 139€/an)
   - Deux professionnels indépendants
   - Veulent gérer leurs trajets séparément
   - Cherchent à économiser vs 2 abonnements Solo

3. **Testeur** (Plan Demo - Gratuit)
   - Découvre la solution
   - Veut tester avant d'investir
   - Limité à 10 trajets/mois

---

## 🎨 Design System

### Identité visuelle
- **Concept**: "Pure Gold & Absolute Minimalism"
- **Inspiration**: Finary (fintech premium)
- **Ambiance**: Luxe, sérieux, automatisation

### Palette de couleurs
- **Background**: `#0D0D0E` (noir profond, flat)
- **Accent principal**: `#F1C086` (or premium)
- **Accent secondaire**: `#D9A867` (or plus sombre pour hover)
- **Texte**: Blanc (#FFFFFF) et gris (#FFFFFF/70)

### Typographie
- **Logo**: Pilcrow Rounded (ou Inter 800 en fallback)
- **Headings**: Clash Display Bold (ou Inter 800 en fallback)
- **Body**: Inter

### Principes de design
- ✅ Minimalisme radical
- ✅ Contraste fort (Or vs Noir)
- ✅ Glassmorphism (backdrop-blur)
- ✅ Animations fluides (Framer Motion)
- ✅ Glow effects sur les éléments dorés
- ❌ PAS de gradients colorés
- ❌ PAS d'émojis comme icônes (utiliser Lucide React)

---

## 📐 Architecture frontend

### Structure des composants
```
src/
├── App.js                  # Point d'entrée principal
├── App.css                 # Animations et styles globaux
├── index.css               # Tailwind + Polices + Utilitaires
└── components/
    ├── Header.jsx          # Navigation sticky avec animations
    ├── Hero.jsx            # Section héro immersive
    ├── HowItWorks.jsx      # 4 étapes du processus
    ├── Pricing.jsx         # 3 plans tarifaires
    ├── FAQ.jsx             # Accordion avec 8 questions
    └── Footer.jsx          # Footer complet avec liens
```

### Sections du site

#### 1. Header (Navigation)
- Logo KILOM (or, Pilcrow Rounded)
- Navigation: Accueil, Fonctionnement, Tarifs, FAQ
- CTA: "Essayer gratuitement"
- Responsive avec menu hamburger mobile
- Sticky avec effet blur au scroll

#### 2. Hero Section
- Titre principal: "Transformez vos déplacements en économies"
- Sous-titre explicatif
- 2 CTA: "Commencer gratuitement" + "Découvrir comment ça marche"
- 3 features cards: Automatisation IA, Conformité fiscale, Économies garanties
- Image de fond: Voiture de luxe avec overlay
- Grille animée en background
- Scroll indicator

#### 3. How It Works
- Badge: "Comment ça marche"
- Titre: "Quatre étapes vers l'automatisation totale"
- 4 cartes avec numéros dorés:
  1. Synchronisation calendrier (Calendar icon)
  2. Intelligence artificielle (Brain icon)
  3. Calcul de distance (Map icon)
  4. Export comptable (FileText icon)
- Flèches de connexion entre les étapes
- CTA final: "Commencer maintenant"

#### 4. Pricing
- Badge: "Tarifs transparents"
- Titre: "Un investissement qui se rentabilise immédiatement"
- 3 plans en grid:

**Plan Demo** (Gratuit)
- Icon: Sparkles
- 5 features limitées
- CTA: "Essayer gratuitement"

**Plan Solo** (89€/an) - Populaire
- Icon: Rocket
- 8 features complètes
- Badge "Populaire"
- Border doré + glow effect
- CTA: "Choisir Solo"

**Plan Duo** (139€/an) - Meilleure offre
- Icon: Users
- 7 features (dont économie de 39€/an)
- Badge "Meilleure offre"
- CTA: "Choisir Duo"

- Note en bas: "Paiement sécurisé • Données cryptées • Satisfait ou remboursé sous 30 jours"

#### 5. FAQ
- Badge: "Questions fréquentes"
- Titre: "Tout ce que vous devez savoir sur KILOM"
- 8 questions/réponses en accordion
- Icônes Plus/Minus animées
- Effet glow doré sur la question ouverte
- CTA: "Contactez-nous" (email)

#### 6. Footer
- Logo KILOM + description
- 4 icônes sociales (LinkedIn, Twitter, Instagram, Email)
- 3 colonnes de liens:
  - Produit (Fonctionnalités, Tarifs, FAQ, Mises à jour)
  - Légal (CGU, Confidentialité, Mentions légales, CGV)
  - Entreprise (À propos, Contact, Blog, Carrières)
- Copyright: "© 2025 KILOM. Tous droits réservés."
- Badge: "Conçu avec passion à Paris 🇫🇷"

---

## 🎬 Animations & Interactions

### Framer Motion
- **Entrées de sections**: fadeInUp, opacity + translateY
- **Scroll-triggered animations**: useScroll, useTransform
- **Hover effects**: scale, translateY(-8px)
- **Stagger children**: pour les grids de cards
- **Floating animations**: y: [0, -20, 0] pour les feature cards
- **Scroll indicator**: animation de bounce infinie

### CSS Animations
- **fadeInUp, fadeIn, slideInLeft, slideInRight**
- **pulse-gold**: pour les glow effects
- **Transitions**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Hover States
- Boutons: scale(1.05) + translateY(-2px) + shadow
- Cards: translateY(-10px) + border-gold/50
- Links: color change vers #F1C086

---

## 🖼️ Assets & Images

**Images utilisées** (Unsplash via vision_expert_agent):
1. `https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb` - Voiture futuriste noire (Hero background)
2. `https://images.unsplash.com/photo-1760449072778-dc4499c75707` - Intérieur luxe cuir (disponible)
3. `https://images.unsplash.com/photo-1694903089438-bf28d4697d9a` - Interface automation digitale (disponible)

**Polices personnalisées** (à ajouter par l'utilisateur):
- Pilcrow Rounded (OTF)
- Clash Display (OTF)
- Inter (TTF)

**Fallback actuel**: Inter de Google Fonts

---

## ✅ Ce qui a été implémenté (14 Février 2025)

### Frontend complet
- ✅ Header avec navigation responsive et menu mobile
- ✅ Hero section avec animations Framer Motion
- ✅ Section "How It Works" avec 4 étapes
- ✅ Section Pricing avec 3 plans (Demo/Solo/Duo)
- ✅ Section FAQ avec 8 questions en accordion
- ✅ Footer complet avec liens légaux et sociaux
- ✅ Design system complet (couleurs, typographie, effets)
- ✅ Animations avancées (scroll-triggered, hover, floating)
- ✅ Responsive parfait (desktop + mobile + tablet)
- ✅ Glassmorphism effects
- ✅ Glow effects dorés
- ✅ Smooth scrolling avec anchors
- ✅ Tout le contenu en français professionnel
- ✅ Icônes Lucide React (pas d'émojis)
- ✅ 3 images premium intégrées

### Dépendances installées
- ✅ framer-motion@12.34.0
- ✅ lucide-react (déjà présent)
- ✅ Shadcn UI components (déjà présents)

### Fichiers créés/modifiés
- ✅ `/app/frontend/src/App.js` - Application principale
- ✅ `/app/frontend/src/App.css` - Animations CSS
- ✅ `/app/frontend/src/index.css` - Styles globaux + Design system
- ✅ `/app/frontend/src/components/Header.jsx` - Navigation
- ✅ `/app/frontend/src/components/Hero.jsx` - Héro immersif
- ✅ `/app/frontend/src/components/HowItWorks.jsx` - Process 4 étapes
- ✅ `/app/frontend/src/components/Pricing.jsx` - Plans tarifaires
- ✅ `/app/frontend/src/components/FAQ.jsx` - Questions fréquentes
- ✅ `/app/frontend/src/components/Footer.jsx` - Footer complet
- ✅ `/app/frontend/README_FONTS.md` - Instructions polices custom

---

## 📦 Backlog & Prochaines étapes

### P0 (Critique)
- [ ] **Ajouter les polices personnalisées** (Pilcrow Rounded, Clash Display, Inter)
  - Placer les fichiers .otf/.ttf dans `/app/frontend/public/fonts/`
  - Décommenter les @font-face dans index.css
  - Suivre `/app/frontend/README_FONTS.md`

### P1 (Important)
- [ ] **Intégration backend** (si nécessaire)
  - API de contact (formulaire)
  - Tracking analytics (Google Analytics, Plausible)
  - Newsletter signup

- [ ] **SEO & Performance**
  - Meta tags (title, description, OG tags)
  - Sitemap.xml
  - robots.txt
  - Optimisation des images (lazy loading, WebP)
  - Preload des polices custom

- [ ] **Légal**
  - Créer pages CGU, Confidentialité, Mentions légales, CGV
  - Cookie consent banner
  - RGPD compliance

### P2 (Nice to have)
- [ ] **Animations avancées**
  - Parallax scrolling plus poussé
  - Micro-interactions supplémentaires
  - Lottie animations pour illustrations

- [ ] **A/B Testing**
  - Tester différents CTA wording
  - Tester disposition des plans pricing

- [ ] **Blog section**
  - Articles sur la gestion des IK
  - SEO content

- [ ] **Multilingue**
  - Version anglaise du site

---

## 🚀 Déploiement & Environnement

**URL de preview actuelle**: https://mileage-gold.preview.emergentagent.com

**Environnement de développement**:
- Hot reload activé sur frontend
- Port 3000 (frontend)
- Node.js avec React 19

**Production (à venir)**:
- Domaine: kilom.fr
- Hébergement: À définir (Vercel, Netlify, AWS)
- CDN pour les assets
- Certificat SSL

---

## 📊 Métriques de succès (à définir)

**Objectifs business**:
- Conversions Demo → Solo/Duo
- Temps passé sur la page
- Taux de rebond < 40%
- Scroll depth moyen > 70%

**Objectifs techniques**:
- Lighthouse Score > 90
- Core Web Vitals: Vert
- Mobile Performance > 85

---

## 📝 Notes importantes

1. **Niveau Awwwards**: Le design actuel vise un niveau "Awwwards" avec animations fluides, design minimaliste premium, et attention aux détails

2. **Polices**: Pour l'instant, Inter de Google Fonts est utilisé comme fallback. Une fois les polices custom ajoutées, l'identité visuelle sera complète

3. **Pas de backend**: Ce MVP est un site vitrine statique. Aucune API n'est nécessaire pour l'instant. Les CTA pointent vers des anchors ou sont des placeholders

4. **Images**: 3 images premium ont été sélectionnées. L'utilisateur peut les remplacer par ses propres visuels si nécessaire

5. **Contenu**: Tout le contenu français a été rédigé de manière professionnelle et optimisée pour la conversion

---

## 🔗 Liens utiles

- **Design inspiration**: Finary (https://finary.com)
- **Framer Motion docs**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/
- **Tailwind CSS**: https://tailwindcss.com/

---

**Dernière révision**: 14 Février 2025, 17:54 UTC  
**Auteur**: E1 (Emergent Agent)

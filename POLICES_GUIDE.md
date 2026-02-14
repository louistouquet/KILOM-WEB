# 🎨 Guide d'intégration des polices KILOM

## 📍 Vos polices sont-elles bien uploadées ?

Pour vérifier si vos polices sont dans le bon dossier, exécutez :
```bash
ls -la /app/frontend/public/fonts/
```

## 📝 Structure attendue des polices

D'après votre message, vous avez plusieurs versions de chaque police. Voici comment choisir :

### Pour Pilcrow Rounded
Recherchez les fichiers contenant "Pilcrow" :
- **Pilcrow Rounded Medium ou Regular** → Pour le logo (poids normal)
- Si vous avez plusieurs poids, privilégiez Medium ou Regular

### Pour Clash Display
Recherchez les fichiers contenant "Clash" :
- **Clash Display Bold ou SemiBold** → Pour les titres
- Si vous avez plusieurs poids, privilégiez Bold (700) ou SemiBold (600)

### Pour Inter
Recherchez les fichiers contenant "Inter" :
- **Inter Variable** (si disponible) → Meilleure option car contient tous les poids
- Sinon **Inter Regular, Medium, SemiBold, Bold** → Pour avoir de la flexibilité

## 🔍 Commande pour lister vos polices

Exécutez cette commande pour voir toutes vos polices :
```bash
find /app/frontend/public/fonts -type f \( -name "*.otf" -o -name "*.ttf" -o -name "*.woff*" \) -exec basename {} \;
```

## ⚙️ Une fois les polices identifiées

Je mettrai à jour `/app/frontend/src/index.css` avec les bons noms de fichiers.

Exemple de configuration finale :
```css
@font-face {
    font-family: 'Pilcrow Rounded';
    src: url('/fonts/PilcrowRounded-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Clash Display';
    src: url('/fonts/ClashDisplay-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Variable.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}
```

## 📤 Si les polices ne sont pas encore uploadées

Uploadez-les dans : `/app/frontend/public/fonts/`

Vous pouvez utiliser l'interface Emergent pour uploader les fichiers, ou via bash si vous les avez localement.

---

**Une fois les polices en place, donnez-moi juste la liste des fichiers et je configure tout automatiquement ! 🚀**

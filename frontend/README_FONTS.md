# 🎨 Instructions pour les polices personnalisées KILOM

## 📍 Où placer vos fichiers de polices

Placez vos fichiers de polices dans le dossier suivant :
```
/app/frontend/public/fonts/
```

## 📝 Fichiers requis

Vous devez ajouter ces 3 fichiers :

1. **pilcrow-rounded.otf** - Police du logo KILOM
2. **clash-display.otf** - Police des titres (headings)
3. **inter.ttf** - Police du corps de texte (body)

## ⚙️ Configuration actuelle

Pour l'instant, le site utilise **Inter de Google Fonts** comme police de secours.
Une fois vos polices personnalisées ajoutées, elles seront automatiquement chargées.

## 🔧 Étapes pour activer vos polices personnalisées

### 1. Ajoutez vos fichiers de polices
```bash
# Exemple de commande (à adapter selon votre méthode)
cp /chemin/vers/pilcrow-rounded.otf /app/frontend/public/fonts/
cp /chemin/vers/clash-display.otf /app/frontend/public/fonts/
cp /chemin/vers/inter.ttf /app/frontend/public/fonts/
```

### 2. Décommentez les @font-face dans index.css

Ouvrez `/app/frontend/src/index.css` et décommentez les lignes suivantes (lignes 7-31) :

```css
@font-face {
    font-family: 'Pilcrow Rounded';
    src: url('/fonts/pilcrow-rounded.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Clash Display';
    src: url('/fonts/clash-display.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url('/fonts/inter.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}
```

### 3. Mettez à jour les classes CSS

Modifiez les classes suivantes dans `/app/frontend/src/index.css` (lignes ~130-145) :

**Avant :**
```css
.font-logo {
    font-family: 'Inter', 'Pilcrow Rounded', sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
}

.font-heading {
    font-family: 'Inter', 'Clash Display', sans-serif;
    font-weight: 800;
    letter-spacing: -0.03em;
}
```

**Après :**
```css
.font-logo {
    font-family: 'Pilcrow Rounded', sans-serif;
}

.font-heading {
    font-family: 'Clash Display', sans-serif;
    font-weight: bold;
}
```

### 4. Vérifiez dans votre navigateur

Le site rechargera automatiquement (hot reload). Vérifiez que vos polices personnalisées s'affichent correctement.

## 🎯 Où sont utilisées les polices ?

- **Pilcrow Rounded** : Logo "KILOM" (classe `.font-logo`)
- **Clash Display** : Tous les titres principaux (classe `.font-heading`)
- **Inter** : Tout le corps de texte (classe `.font-body`)

## 🚀 Alternative : Utiliser des variables de polices

Si vos fichiers OTF/TTF ont plusieurs poids, vous pouvez les ajouter ainsi :

```css
@font-face {
    font-family: 'Clash Display';
    src: url('/fonts/clash-display-regular.otf') format('opentype');
    font-weight: 400;
}

@font-face {
    font-family: 'Clash Display';
    src: url('/fonts/clash-display-bold.otf') format('opentype');
    font-weight: 700;
}
```

## ❓ Besoin d'aide ?

Si vos polices ne se chargent pas correctement :
1. Vérifiez que les noms de fichiers correspondent exactement
2. Ouvrez la console du navigateur (F12) pour voir les erreurs
3. Vérifiez que les fichiers sont bien dans `/app/frontend/public/fonts/`
4. Videz le cache du navigateur (Ctrl+Shift+R)

---

**Note** : Le site fonctionne déjà parfaitement avec Inter de Google Fonts. L'ajout de vos polices personnalisées est optionnel mais recommandé pour l'identité visuelle finale de KILOM.

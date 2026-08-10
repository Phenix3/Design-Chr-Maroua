# 🎨 Système de Style CHR Maroua

Système de style complet exporté du projet Centre Hospitalier Moderne de Maroua, prêt à être réutilisé dans vos nouveaux projets.

## 📦 Installation Rapide

### 1. Installer les dépendances
```bash
npm install tailwindcss tailwindcss-animate autoprefixer postcss
```

### 2. Copier les fichiers
Copiez ces fichiers dans votre nouveau projet :
- `tailwind.config.ts` → racine du projet
- `postcss.config.js` → racine du projet
- `index.css` → `src/index.css` (ou votre dossier CSS)
- `components.json` → racine (optionnel, pour shadcn/ui)

### 3. Importer les styles
Dans votre fichier principal (`main.tsx` ou `index.tsx`) :
```typescript
import './index.css'
```

## 🎨 Palette de Couleurs

### Couleurs Médicales
- **Bleu médical** : `hsl(210 100% 45%)` - Couleur principale
- **Vert médical** : `hsl(142 76% 36%)` - Succès/Validation
- **Bleu clair** : `hsl(210 100% 95%)` - Arrière-plans
- **Gris médical** : `hsl(210 11% 96%)` - Sections neutres
- **Rouge urgence** : `hsl(0 84% 60%)` - Erreurs/Alertes

## 🔧 Classes Utilitaires

| Classe | Usage |
|--------|-------|
| `.medical-gradient` | Dégradé bleu → vert médical |
| `.hero-pattern` | Motif de cercles radiaux |
| `.animate-fade-in` | Animation d'apparition |
| `.animate-slide-up` | Animation de glissement |
| `.carousel-slide` | Transition pour carrousels |
| `.hover-lift` | Effet de survol élévation |

## 📖 Utilisation

### Avec Tailwind
```tsx
<div className="bg-primary text-primary-foreground">
  Texte sur fond bleu médical
</div>
```

### Classes personnalisées
```tsx
<div className="medical-gradient p-8">
  <h1 className="animate-fade-in">Titre animé</h1>
</div>
```

## 🌓 Mode Sombre

Le système supporte le mode sombre avec la classe `.dark` :
```typescript
// Activer le mode sombre
document.documentElement.classList.add('dark')

// Désactiver
document.documentElement.classList.remove('dark')
```

## 📝 Notes

- Police recommandée : **Inter** (Google Fonts ou npm)
- Container max-width : **1400px**
- Rayon des bordures : **0.5rem** (modifiable via `--radius`)
- Support complet des composants **shadcn/ui**

## 🚀 Prêt à l'emploi !

Tous les fichiers sont configurés et prêts à être copiés dans votre nouveau projet. Aucune modification nécessaire, sauf si vous souhaitez personnaliser les couleurs.

---

**Version** : 1.0
**Source** : Design-Chr-Maroua
**Date** : 2026-01-18

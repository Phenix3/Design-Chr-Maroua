# Export des Règles de Style - Centre Hospitalier Moderne

Ce fichier contient toutes les configurations de style du projet Design-Chr-Maroua, prêtes à être réutilisées dans d'autres projets.

## 📦 Dépendances NPM Requises

```json
{
  "dependencies": {
    "tailwindcss": "^3.4.1",
    "tailwindcss-animate": "^1.0.7",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35"
  }
}
```

Installation :
```bash
npm install tailwindcss tailwindcss-animate autoprefixer postcss
```

---

## 1️⃣ Configuration Tailwind CSS

**Fichier : `tailwind.config.ts`**

```typescript
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 2️⃣ Styles CSS Globaux

**Fichier : `src/index.css` ou votre fichier CSS principal**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Centre Hospitalier Moderne - Design System */
/* Couleurs médicales professionnelles */

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    /* Couleurs médicales */
    --primary: 210 100% 45%; /* Bleu médical */
    --primary-foreground: 0 0% 100%;

    --medical-blue: 210 100% 45%;
    --medical-green: 142 76% 36%;
    --medical-light-blue: 210 100% 95%;
    --medical-gray: 210 11% 96%;
    --emergency-red: 0 84% 60%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@theme inline {
  --color-medical-blue: hsl(210 100% 45%);
  --color-medical-green: hsl(142 76% 36%);
  --color-medical-light-blue: hsl(210 100% 95%);
  --color-medical-gray: hsl(210 11% 96%);
  --color-emergency-red: hsl(0 84% 60%);
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .medical-gradient {
    background: linear-gradient(135deg, hsl(210 100% 45%) 0%, hsl(142 76% 36%) 100%);
  }

  .hero-pattern {
    background-image: radial-gradient(circle at 25% 25%, hsl(210 100% 95%) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, hsl(210 100% 95%) 0%, transparent 50%);
  }

  /* Carousel Animations */
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }

  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Carousel slide transitions */
  .carousel-slide {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hover effects */
  .hover-lift {
    transition: transform 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-5px);
  }
}
```

---

## 3️⃣ Configuration PostCSS

**Fichier : `postcss.config.js`**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 4️⃣ Configuration shadcn/ui (Optionnel)

**Fichier : `components.json`**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

## 🎨 Palette de Couleurs Médicales

### Mode Clair
| Couleur | HSL | Hex Approximatif | Usage |
|---------|-----|------------------|--------|
| Bleu médical | `210 100% 45%` | `#0073E6` | Couleur primaire |
| Vert médical | `142 76% 36%` | `#16A34A` | Accent/Succès |
| Bleu clair médical | `210 100% 95%` | `#E0F2FE` | Arrière-plans |
| Gris médical | `210 11% 96%` | `#F4F5F6` | Sections neutres |
| Rouge urgence | `0 84% 60%` | `#EF4444` | Erreurs/Urgences |

### Mode Sombre
Toutes les variables sont inversées pour le mode sombre avec `.dark` class.

---

## 🚀 Guide d'Installation Rapide

### Étape 1 : Créer un nouveau projet
```bash
npm create vite@latest mon-projet -- --template react-ts
cd mon-projet
```

### Étape 2 : Installer les dépendances
```bash
npm install tailwindcss tailwindcss-animate autoprefixer postcss
```

### Étape 3 : Copier les fichiers de configuration
1. Copier le contenu de `tailwind.config.ts` ci-dessus
2. Copier le contenu de `postcss.config.js` ci-dessus
3. Copier le contenu des styles CSS dans votre fichier CSS principal

### Étape 4 : Initialiser Tailwind
```bash
npx tailwindcss init -p
```

Puis remplacer le contenu généré par la configuration ci-dessus.

### Étape 5 : Importer les styles
Dans votre fichier `main.tsx` ou `index.tsx` :
```typescript
import './index.css'
```

---

## 🎯 Classes Utilitaires Personnalisées

Voici les classes CSS personnalisées disponibles :

| Classe | Description | Exemple |
|--------|-------------|---------|
| `.medical-gradient` | Dégradé bleu → vert médical | Arrière-plans hero |
| `.hero-pattern` | Motif de cercles radiaux | Sections d'en-tête |
| `.animate-fade-in` | Animation d'apparition en fondu | Éléments qui apparaissent |
| `.animate-slide-up` | Animation de glissement vers le haut | Cartes, sections |
| `.carousel-slide` | Transition fluide pour carrousels | Diaporamas |
| `.hover-lift` | Effet de survol élévation | Cartes interactives |

---

## 📝 Utilisation des Couleurs dans le Code

### Avec Tailwind
```tsx
<div className="bg-primary text-primary-foreground">
  Texte sur fond bleu médical
</div>

<button className="bg-medical-green text-white">
  Bouton vert médical
</button>
```

### Avec CSS personnalisé
```css
.mon-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

---

## 🌓 Support du Mode Sombre

Le système utilise la stratégie `class` pour le mode sombre. Pour l'activer :

```tsx
// Ajouter la classe "dark" à l'élément HTML
document.documentElement.classList.add('dark')

// Retirer pour revenir en mode clair
document.documentElement.classList.remove('dark')
```

---

## ⚙️ Personnalisation

### Changer les couleurs médicales
Modifiez les valeurs HSL dans `:root` dans le fichier CSS :

```css
:root {
  --primary: 210 100% 45%; /* Remplacer par votre couleur */
  --medical-blue: 210 100% 45%;
  /* ... etc */
}
```

### Ajuster le rayon des bordures
Modifiez la variable `--radius` :

```css
:root {
  --radius: 0.5rem; /* 0.25rem pour plus carré, 1rem pour plus arrondi */
}
```

---

## 📦 Fichiers à Copier

Pour réutiliser ce style dans un nouveau projet, copiez ces 3 fichiers :

1. ✅ `tailwind.config.ts`
2. ✅ `postcss.config.js`
3. ✅ `src/index.css` (ou votre fichier CSS principal)
4. ⚠️ `components.json` (optionnel, uniquement si vous utilisez shadcn/ui)

---

## 🎓 Notes Importantes

- **Font** : Le projet utilise la police `Inter`. Assurez-vous de l'inclure via Google Fonts ou npm
- **Container** : Le container est centré avec un max-width de 1400px sur les grands écrans
- **Animations** : Les animations utilisent `tailwindcss-animate` pour les composants Radix UI
- **Variables CSS** : Toutes les couleurs utilisent des variables CSS HSL pour une personnalisation facile

---

## 📚 Ressources

- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation shadcn/ui](https://ui.shadcn.com)
- [Documentation tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)

---

**Version** : 1.0
**Dernière mise à jour** : 2026-01-18
**Projet source** : Design-Chr-Maroua

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is the website for **Centre Hospitalier Moderne de Maroua** — a hospital in Cameroon. The UI is in French. Content includes hospital services, medical team, news, gallery, and contact/information pages.

## Development Commands

### Setup
```bash
npm install   # or pnpm install (pnpm-lock.yaml is present)
```

### Development Server
```bash
npm run dev                    # Start dev server with route messaging enabled
```
The dev server runs on `http://[::]:8080` (IPv6, port 8080).

### Build
```bash
npm run build                  # Production build
npm run build:dev              # Development build with source maps and route messaging
npm run build:map              # Production build with source maps
```

### Preview
```bash
npm run preview                # Preview production build
npm run preview:dev            # Build in dev mode then preview
```

### Linting
```bash
npm run lint                   # ESLint check
```

### Testing
```bash
npm run test:edge-functions    # Run Deno tests for Supabase edge functions
```

## Architecture

### Tech Stack
- **Build Tool**: Vite with TypeScript
- **Frontend**: React 18 with React Router DOM (HashRouter)
- **UI Framework**: shadcn/ui components built on Radix UI
- **Styling**: Tailwind CSS with CSS variables theming
- **State Management**: TanStack Query (React Query)
- **Backend**: Supabase (edge functions in `supabase/edge_function/`)
- **Icons**: Iconify React and Lucide React

### Key Architectural Patterns

#### React Router Proxy System
The project uses a custom React Router DOM proxy (`src/lib/react-router-dom-proxy.tsx`) that wraps the original react-router-dom library. This is configured via Vite alias:
- `react-router-dom` → proxied version at `src/lib/react-router-dom-proxy.tsx`
- `react-router-dom-original` → actual react-router-dom package

**Purpose**: The proxy enables bidirectional communication between an iframe and its parent via `postMessage`:
- **Outbound**: Sends route lists (`ROUTES_INFO`) and route changes (`ROUTE_CHANGE`) to parent window
- **Inbound**: Listens for `ROUTE_CONTROL` commands (navigate, back, forward, replace) and `RELOAD` commands from parent

**Route Messaging Control**: Route messaging can be toggled via `VITE_ENABLE_ROUTE_MESSAGING` environment variable:
- Development: Enabled by default (unless explicitly set to `'false'`)
- Production: Disabled by default (unless explicitly set to `'true'`)
- Global flag: `__ROUTE_MESSAGING_ENABLED__` is defined in vite.config.ts

#### CDN Image Prefix Plugin
Custom Vite plugin (`cdnPrefixImages()` in vite.config.ts) that rewrites image paths at build time:
- Collects all files under `public/images/` directory
- Rewrites references in HTML, CSS, JSX, and string literals to use CDN prefix
- Activated by `CDN_IMG_PREFIX` environment variable
- Uses Babel AST transformation for JSX/TSX files to rewrite `src`, `href`, and `srcSet` attributes
- Debug logging available via `CDN_IMG_DEBUG=1`

#### Path Aliases
Configured in both vite.config.ts and components.json:
- `@/` → `src/`
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/components/ui` → `src/components/ui`

### Application Structure

#### Routing
The app uses HashRouter with the following main routes defined in `src/App.tsx`:
- `/` → Index (home page)
- `/services` → Services page
- `/equipe` → Team page
- `/actualites` → News/updates page
- `/galerie` → Gallery page
- `/contact` → Contact page
- `/informations` → Information page
- `*` → NotFound (404 catch-all)

**Important**: Always add new custom routes ABOVE the catch-all `*` route in App.tsx.

#### Component Organization
- `src/components/ui/` - shadcn/ui components (accordion, alert, button, card, dialog, etc.)
- `src/pages/` - Page-level components that map to routes
- `src/hooks/` - Custom React hooks (`use-toast`, `use-mobile`)
- `src/lib/` - Utility functions and the react-router-dom proxy

#### Global Providers
The app is wrapped with several providers in this order (see `src/App.tsx`):
1. QueryClientProvider (TanStack Query)
2. TooltipProvider (Radix UI)
3. Toaster & Sonner (toast notifications)
4. HashRouter (React Router)

### Supabase Edge Functions
- Located in `supabase/edge_function/`
- Uses Deno runtime with configuration in `supabase/edge_function/deno.json`
- Test files in `supabase/edge_function/tests/`
- Run tests with: `cd supabase/edge_function && deno task test`

### Image Assets
- `src/assets/images.ts` exports a typed `IMAGES` const with auto-generated Unsplash URLs grouped by category: `HOSPITAL_EXTERIOR_*`, `HOSPITAL_INTERIOR_*`, `MEDICAL_EQUIPMENT_*`, `MEDICAL_TEAM_*`, `PATIENT_CARE_*` (10 images each).
- Always import images from this file rather than using raw URLs in components.

### Styling System
- Tailwind CSS with custom configuration in `tailwind.config.ts`
- Uses CSS variables for theming (defined in `src/index.css`)
- PostCSS with Tailwind and Autoprefixer
- Typography plugin enabled (`@tailwindcss/typography`)
- shadcn/ui base color: slate

#### Medical Color Palette (CSS variables)
Custom medical-themed variables defined in `:root`:
- `--medical-blue` (`210 100% 45%`) — primary brand color
- `--medical-green` (`142 76% 36%`) — accent/success
- `--medical-light-blue` (`210 100% 95%`) — backgrounds
- `--medical-gray` (`210 11% 96%`) — neutral sections
- `--emergency-red` (`0 84% 60%`) — errors/emergencies

Also available as Tailwind utilities via `@theme inline`: `bg-medical-blue`, `bg-medical-green`, etc.

#### Custom CSS Utility Classes
Defined in `src/index.css`:
- `.medical-gradient` — blue-to-green diagonal gradient
- `.hero-pattern` — radial background pattern for hero sections
- `.animate-fade-in` / `.animate-slide-up` — entrance animations
- `.carousel-slide` — smooth carousel transitions
- `.hover-lift` — card hover elevation effect

`STYLE_EXPORT.md` documents the full design system for reuse in other projects.

### Development Tooling
- **ESLint**: Flat config with TypeScript support, React hooks rules
- **TypeScript**: Strict type checking with separate configs:
  - `tsconfig.json` - Base configuration
  - `tsconfig.app.json` - App-specific settings
  - `tsconfig.node.json` - Node/Vite config files
- **lovable-tagger**: Component tagging plugin (development only)

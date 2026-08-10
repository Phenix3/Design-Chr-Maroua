import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface PageHeroMeta {
  icon: LucideIcon;
  label: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  /** Chiffre géant en contour affiché à droite (éditorial) */
  number?: string;
  meta?: PageHeroMeta[];
}

const CROSS_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

const PageHero = ({ eyebrow, title, description, number, meta }: PageHeroProps) => (
  <section className="relative overflow-hidden medical-gradient text-white">
    <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true" style={{ backgroundImage: CROSS_PATTERN }} />
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
    <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" aria-hidden="true" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            <span className="h-px w-10 bg-amber-300/60" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl md:text-5xl font-heading font-semibold leading-[1.08]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-xl">{description}</p>
          )}
          {meta && meta.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              {meta.map((m, i) => {
                const Icon = m.icon;
                return (
                  <span key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-amber-300" />
                    {m.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {number && (
          <div className="hidden lg:flex justify-end select-none pointer-events-none" aria-hidden="true">
            <span
              className="font-heading font-bold leading-none text-transparent opacity-40"
              style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', fontSize: '15rem' }}
            >
              {number}
            </span>
          </div>
        )}
      </div>
    </div>

    <div className="relative h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" aria-hidden="true" />
  </section>
);

export default PageHero;

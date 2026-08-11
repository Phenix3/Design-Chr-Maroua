import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface Crumb {
  label: string;
  to?: string;
}

interface EditorialBreadcrumbProps {
  items: Crumb[];
  className?: string;
}

/**
 * Fil d'Ariane éditorial — petites capitales cuivre pour les liens,
 * page courante en serif Fraunces, séparateurs ✦ en cuivre (rappel du ticker).
 */
const EditorialBreadcrumb = ({ items, className }: EditorialBreadcrumbProps) => {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn(
        'flex flex-wrap items-center gap-x-2.5 gap-y-1.5 border-l-2 border-medical-copper pl-3.5',
        className
      )}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <span
                aria-hidden="true"
                className="text-[10px] leading-none text-medical-copper/70 select-none"
              >
                ✦
              </span>
            )}
            {!isLast && item.to ? (
              <Link
                to={item.to}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground underline-offset-4 transition-colors hover:text-medical-copper hover:underline cursor-pointer"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="font-heading text-sm font-semibold text-foreground leading-snug"
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default EditorialBreadcrumb;

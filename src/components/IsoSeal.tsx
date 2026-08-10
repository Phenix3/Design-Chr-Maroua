import React, { useId } from 'react';

interface IsoSealProps {
  size?: number;
  className?: string;
}

/**
 * Sceau de certification ISO 9001 — anneau doré, bande sombre dédiée au
 * texte circulaire rotatif (lisibilité optimale), disque central blanc.
 * Réutilisable (header, hero, section certification, footer).
 */
const IsoSeal = ({ size = 180, className = '' }: IsoSealProps) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const goldId = `iso-gold-${uid}`;
  const pathId = `iso-path-${uid}`;

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Sceau de certification ISO 9001 — Qualité certifiée"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <path
            id={pathId}
            d="M 100,100 m -83,0 a 83,83 0 1,1 166,0 a 83,83 0 1,1 -166,0"
            fill="none"
          />
        </defs>

        {/* Anneaux extérieurs */}
        <circle cx="100" cy="100" r="98" fill="none" stroke={`url(#${goldId})`} strokeWidth="3" />
        <circle cx="100" cy="100" r="94.5" fill="none" stroke={`url(#${goldId})`} strokeWidth="1" strokeDasharray="2.5 6" opacity="0.85" />

        {/* Bande sombre dédiée au texte circulaire */}
        <circle cx="100" cy="100" r="91" fill="#0F172A" />
        <circle cx="100" cy="100" r="91" fill="none" stroke={`url(#${goldId})`} strokeWidth="1.5" opacity="0.6" />

        {/* Texte circulaire rotatif — doré clair sur bande sombre */}
        <g className="animate-spin-slow">
          <text fill="#FCD34D" fontSize="15.5" fontWeight="700" letterSpacing="2.5" fontFamily="Figtree, sans-serif">
            <textPath href={`#${pathId}`} startOffset="25%">
              CERTIFICATION ISO 9001 • QUALITÉ • SÉCURITÉ •
            </textPath>
          </text>
        </g>

        {/* Disque central */}
        <circle cx="100" cy="100" r="66" fill="#ffffff" />
        <circle cx="100" cy="100" r="66" fill="none" stroke={`url(#${goldId})`} strokeWidth="2.5" />

        {/* Contenu central */}
        <g>
          <path
            d="M 79 99 L 95 115 L 124 86"
            fill="none"
            stroke="#0D9488"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="100"
            y="142"
            textAnchor="middle"
            fill="#134E4A"
            fontSize="18.5"
            fontWeight="800"
            fontFamily="Figtree, sans-serif"
          >
            ISO 9001
          </text>
          <text
            x="100"
            y="155"
            textAnchor="middle"
            fill="#64748B"
            fontSize="9.5"
            fontWeight="700"
            letterSpacing="1.5"
          >
            CERTIFIÉ
          </text>
        </g>
      </svg>
    </div>
  );
};

export default IsoSeal;

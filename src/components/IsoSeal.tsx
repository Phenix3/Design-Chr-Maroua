import React, { useId } from 'react';

interface IsoSealProps {
  size?: number;
  className?: string;
}

/**
 * Sceau de certification ISO 9001 — anneau doré avec texte circulaire rotatif.
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
            d="M 100,100 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
            fill="none"
          />
        </defs>

        {/* Anneaux extérieurs */}
        <circle cx="100" cy="100" r="97" fill="none" stroke={`url(#${goldId})`} strokeWidth="2.5" />
        <circle cx="100" cy="100" r="94" fill="none" stroke={`url(#${goldId})`} strokeWidth="1" strokeDasharray="3 5" opacity="0.9" />

        {/* Texte circulaire rotatif */}
        <g className="animate-spin-slow">
          <text fill={`url(#${goldId})`} fontSize="14" fontWeight="700" letterSpacing="2.5">
            <textPath href={`#${pathId}`} startOffset="25%">
              CERTIFICATION ISO 9001 • QUALITÉ • SÉCURITÉ •
            </textPath>
          </text>
        </g>

        {/* Disque central */}
        <circle cx="100" cy="100" r="64" fill="#ffffff" />
        <circle cx="100" cy="100" r="64" fill="none" stroke={`url(#${goldId})`} strokeWidth="2" />

        {/* Contenu central */}
        <g>
          <path
            d="M 77 100 L 93 116 L 125 84"
            fill="none"
            stroke="#0D9488"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="100"
            y="143"
            textAnchor="middle"
            fill="#134E4A"
            fontSize="19"
            fontWeight="800"
            fontFamily="Figtree, sans-serif"
          >
            ISO 9001
          </text>
          <text
            x="100"
            y="157"
            textAnchor="middle"
            fill="#64748B"
            fontSize="10"
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

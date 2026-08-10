import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Stethoscope, Calendar, Phone, Menu, X, ShieldCheck, Sparkles, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
  { to: '/informations', label: 'Informations' },
  { to: '/qualite', label: 'Qualité' },
];

interface SiteHeaderProps {
  /** Route active à surligner, ex. "/services" */
  active?: string;
}

const SiteHeader = ({ active }: SiteHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('chr-theme', dark ? 'dark' : 'light');
    } catch {
      /* stockage indisponible */
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Ruban certification ISO 9001 — toujours visible */}
      <div className="bg-medical-pine text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-center lg:justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="font-bold">Certifié ISO 9001:2015</span>
            <span className="hidden sm:inline text-white/60">· Système de Management de la Qualité</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-amber-300">
            <Sparkles className="w-4 h-4" />
            <span>Agrément obtenu — Qualité certifiée</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 medical-gradient rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-heading font-semibold text-foreground leading-tight">CHR Maroua</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Sécurité · Qualité · Humanisation</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2.5 py-2 rounded-full text-xs uppercase tracking-wide transition-colors duration-200 cursor-pointer font-medium ${
                  active === link.to
                    ? 'text-foreground bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => setDark(d => !d)}
              className="w-10 h-10 rounded-full border border-border bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer min-h-[40px] min-w-[40px]"
              aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}
              title={dark ? 'Mode clair' : 'Mode sombre'}
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="tel:+237671440486"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-medical-copper border border-medical-copper/40 rounded-full hover:bg-medical-copper/5 transition-colors duration-200 cursor-pointer min-h-[40px]"
            >
              <Phone className="w-4 h-4" />
              Urgences
            </a>
            <Link to="/rendez-vous">
              <Button className="cursor-pointer medical-gradient text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all min-h-[40px] rounded-full px-6">
                <Calendar className="w-4 h-4 mr-2" />
                Rendez-vous
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="xl:hidden py-3 border-t border-border">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                    active === link.to
                      ? 'text-foreground bg-secondary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-border mt-2">
                <button
                  onClick={() => setDark(d => !d)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer min-h-[44px]"
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {dark ? 'Mode clair' : 'Mode sombre'}
                </button>
                <a href="tel:+237671440486" className="flex items-center gap-2 px-4 py-2.5 text-sm text-medical-copper font-semibold cursor-pointer min-h-[44px]">
                  <Phone className="w-4 h-4" /> +237 671 440 486 (Urgences)
                </a>
                <Link to="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full cursor-pointer medical-gradient text-white min-h-[44px] rounded-full">
                    <Calendar className="w-4 h-4 mr-2" /> Prendre Rendez-vous
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IMAGES } from '@/assets/images';
import {
  Phone, MapPin, Mail, Stethoscope, Menu, X, Calendar,
  AlertCircle, ArrowRight, Users, Building2, Globe, Facebook,
  Youtube, Star
} from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
  { to: '/informations', label: 'Informations' },
];

const TEAM_IMAGES = [
  IMAGES.MEDICAL_TEAM_1,
  IMAGES.MEDICAL_TEAM_2,
  IMAGES.MEDICAL_TEAM_3,
  IMAGES.MEDICAL_TEAM_4,
  IMAGES.MEDICAL_TEAM_5,
  IMAGES.MEDICAL_TEAM_6,
  IMAGES.MEDICAL_TEAM_7,
  IMAGES.MEDICAL_TEAM_8,
  IMAGES.MEDICAL_TEAM_9,
  IMAGES.MEDICAL_TEAM_10,
] as const;

interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  email: string;
  image: string;
  initials: string;
  avatarGradient: string;
}

const DIRECTION: TeamMember = {
  id: 0,
  name: 'Dr GÉRARD FETSE TAMA',
  specialty: 'Directeur du CHR Maroua',
  email: 'gerard.fetse-tama@chr-maroua.cm',
  image: IMAGES.MEDICAL_TEAM_10,
  initials: 'GF',
  avatarGradient: 'from-teal-600 to-cyan-500',
};

const CHEFS_DE_SERVICE: TeamMember[] = [
  {
    id: 1,
    name: 'Dr Clovis Ourtchingh',
    specialty: 'Gynécologie-Obstétrique',
    email: 'clovis.ourtchingh@chr-maroua.cm',
    image: TEAM_IMAGES[0],
    initials: 'CO',
    avatarGradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 2,
    name: 'Dr Djaowe Emmanuel Fanfitsou',
    specialty: 'Pharmacie',
    email: 'djaowe.fanfitsou@chr-maroua.cm',
    image: TEAM_IMAGES[1],
    initials: 'DE',
    avatarGradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    name: 'Dr Fanny Christelle Abena',
    specialty: 'Pédiatrie',
    email: 'fanny.abena@chr-maroua.cm',
    image: TEAM_IMAGES[2],
    initials: 'FA',
    avatarGradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 4,
    name: 'Dr Guillaume Gayma',
    specialty: 'Urologie',
    email: 'guillaume.gayma@chr-maroua.cm',
    image: TEAM_IMAGES[3],
    initials: 'GG',
    avatarGradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 5,
    name: 'Dr Ngeng Woincham Léonard',
    specialty: 'Dentisterie',
    email: 'ngeng.leonard@chr-maroua.cm',
    image: TEAM_IMAGES[4],
    initials: 'NL',
    avatarGradient: 'from-sky-400 to-cyan-500',
  },
  {
    id: 6,
    name: 'Dr Yomi Diane Ngniatcha',
    specialty: 'Imagerie Médicale',
    email: 'yomi.ngniatcha@chr-maroua.cm',
    image: TEAM_IMAGES[5],
    initials: 'YN',
    avatarGradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 7,
    name: 'Dr Appolinaire BEME',
    specialty: 'Orthopédie-Traumatologie',
    email: 'appolinaire.beme@chr-maroua.cm',
    image: TEAM_IMAGES[6],
    initials: 'AB',
    avatarGradient: 'from-amber-500 to-yellow-600',
  },
  {
    id: 8,
    name: 'Dr Sadjo SALIHOU',
    specialty: 'Orthopédie-Traumatologie',
    email: 'sadjo.salihou@chr-maroua.cm',
    image: TEAM_IMAGES[7],
    initials: 'SS',
    avatarGradient: 'from-orange-500 to-amber-600',
  },
  {
    id: 9,
    name: 'Dr Kambou Armelle FOHOM',
    specialty: 'ORL (Oto-Rhino-Laryngologie)',
    email: 'kambou.fohom@chr-maroua.cm',
    image: TEAM_IMAGES[8],
    initials: 'KF',
    avatarGradient: 'from-indigo-500 to-blue-600',
  },
  {
    id: 10,
    name: 'Dr Deniel KOLLO',
    specialty: 'Médecine Interne',
    email: 'deniel.kollo@chr-maroua.cm',
    image: TEAM_IMAGES[9],
    initials: 'DK',
    avatarGradient: 'from-teal-500 to-emerald-600',
  },
  {
    id: 11,
    name: 'Dr Maba FOKO',
    specialty: 'Nutrition',
    email: 'maba.foko@chr-maroua.cm',
    image: TEAM_IMAGES[0],
    initials: 'MF',
    avatarGradient: 'from-lime-500 to-green-600',
  },
  {
    id: 12,
    name: 'Dr Annelle TAZAMOU',
    specialty: 'Dermatologie-Vénérologie',
    email: 'annelle.tazamou@chr-maroua.cm',
    image: TEAM_IMAGES[1],
    initials: 'AT',
    avatarGradient: 'from-rose-500 to-pink-600',
  },
];

const STATS = [
  { value: '13', label: 'Spécialistes', icon: Users },
  { value: '28', label: 'Spécialités couvertes', icon: Star },
  { value: '2024', label: 'Depuis', icon: Building2 },
  { value: 'Extrême-Nord', label: 'Cameroun', icon: Globe },
];

const Equipe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group min-h-[44px]">
              <div className="w-10 h-10 medical-gradient rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-base font-heading font-bold text-primary leading-tight">CHR Maroua</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Sécurité · Qualité · Humanisation</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center ${
                    link.to === '/equipe'
                      ? 'text-primary bg-secondary'
                      : 'text-foreground hover:text-primary hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="tel:+237671440486"
                className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors duration-200 text-sm font-medium"
              >
                <AlertCircle className="w-4 h-4" />
                Urgences
              </a>
              <Button asChild className="medical-gradient text-white min-h-[44px] shadow-md hover:opacity-90 transition-opacity duration-200">
                <Link to="/rendez-vous">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Rendez-vous
                </Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <nav className="flex flex-col gap-1 mb-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-4 py-3 rounded-lg text-foreground hover:bg-secondary hover:text-primary transition-colors duration-200 font-medium min-h-[44px] flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 px-4">
                <a
                  href="tel:+237671440486"
                  className="min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  Urgences : +237 671 440 486
                </a>
                <Button asChild className="medical-gradient text-white min-h-[44px]">
                  <Link to="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
                    <Calendar className="w-4 h-4 mr-1.5" />
                    Prendre rendez-vous
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="medical-gradient text-white py-20 md:py-28 relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-5 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-1">
            Équipe Médicale
          </Badge>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            Notre Équipe Médicale
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Des professionnels dévoués à votre santé
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center flex flex-col items-center gap-2">
                  <div className="w-10 h-10 medical-gradient rounded-full flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-heading font-bold text-2xl text-primary leading-none">{stat.value}</p>
                  <p className="text-muted-foreground text-sm leading-tight">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Direction ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Direction</h2>
            <div className="w-16 h-1 medical-gradient rounded-full mx-auto" />
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group hover-lift cursor-default border border-border bg-card overflow-hidden transition-shadow duration-200">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Photo */}
                  <div className="relative sm:w-48 h-56 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={DIRECTION.image}
                      alt={DIRECTION.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-6 flex flex-col justify-center gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="medical-gradient text-white border-0 text-xs px-3 py-1">
                        Direction
                      </Badge>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground leading-snug mb-1">
                        {DIRECTION.name}
                      </h3>
                      <p className="text-primary font-medium text-sm">{DIRECTION.specialty}</p>
                    </div>
                    <a
                      href={`mailto:${DIRECTION.email}`}
                      className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors duration-200 min-h-[44px] md:min-h-0"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="break-all">{DIRECTION.email}</span>
                    </a>
                    <Button
                      asChild
                      className="medical-gradient text-white min-h-[44px] self-start shadow-md hover:opacity-90 transition-opacity duration-200"
                    >
                      <Link to="/rendez-vous">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        Prendre rendez-vous
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Chefs de Service ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Chefs de Service
            </h2>
            <div className="w-16 h-1 medical-gradient rounded-full mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              {CHEFS_DE_SERVICE.length} spécialistes à votre service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHEFS_DE_SERVICE.map((member) => (
              <Card
                key={member.id}
                className="group hover-lift cursor-default border border-border bg-card overflow-hidden transition-shadow duration-200"
              >
                <CardContent className="p-0">
                  {/* Photo header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Initials avatar overlay */}
                    <div className="absolute bottom-3 left-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${member.avatarGradient} rounded-full flex items-center justify-center shadow-lg border-2 border-white font-heading font-bold text-white text-sm`}
                      >
                        {member.initials}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors duration-200">
                          {member.name}
                        </h3>
                        <p className="text-primary text-xs font-medium mt-0.5">{member.specialty}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-[10px] bg-secondary text-muted-foreground border-0 flex-shrink-0 whitespace-nowrap"
                      >
                        Chef de Service
                      </Badge>
                    </div>

                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-muted-foreground text-xs hover:text-primary transition-colors duration-200 min-h-[44px] md:min-h-0"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="break-all">{member.email}</span>
                    </a>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full min-h-[44px] border-border hover:bg-secondary hover:text-primary transition-colors duration-200 text-xs"
                    >
                      <Link to="/rendez-vous">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        Rendez-vous
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note praticiens */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
              <div className="w-8 h-8 medical-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                <Users className="w-4 h-4 text-white" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Note :</span>{' '}
                La liste des médecins praticiens sera mise à jour prochainement. Pour toute information sur les consultations, contactez-nous directement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA rendez-vous ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 medical-gradient text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Consultez l'un de nos spécialistes. Notre équipe est disponible pour vous accompagner vers la meilleure prise en charge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold min-h-[44px] shadow-lg transition-colors duration-200"
            >
              <Link to="/rendez-vous">
                <Calendar className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 min-h-[44px] transition-colors duration-200"
            >
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-background py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 medical-gradient rounded-xl flex items-center justify-center shadow">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-base">CHR Maroua</p>
                  <p className="text-xs opacity-60 leading-tight">Sécurité · Qualité · Humanisation</p>
                </div>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">
                Centre Hospitalier Régional de Maroua — au service de la santé de l'Extrême-Nord Cameroun.
              </p>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide opacity-80">
                Liens rapides
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity duration-200 group min-h-[44px] md:min-h-0"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urgences */}
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide opacity-80">
                Urgences
              </h4>
              <div className="space-y-3 text-sm opacity-70">
                <p className="font-semibold text-red-400 text-base">+237 671 440 486</p>
                <p>Disponible 24h/24, 7j/7</p>
                <p>Prise en charge immédiate</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wide opacity-80">
                Contact
              </h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" />
                  <span>Sékandé, Maroua, Extrême-Nord, Cameroun</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 opacity-60" />
                  <a href="tel:+237689867206" className="hover:opacity-100 transition-opacity min-h-[44px] md:min-h-0 flex items-center">
                    +237 689 867 206
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 opacity-60" />
                  <a href="mailto:contact@chr-maroua.cm" className="hover:opacity-100 transition-opacity break-all min-h-[44px] md:min-h-0 flex items-center">
                    contact@chr-maroua.cm
                  </a>
                </li>
                <li className="flex items-center gap-3 pt-1">
                  <a
                    href="https://facebook.com/chr_maroua"
                    aria-label="Facebook CHR Maroua"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/237671440486"
                    aria-label="WhatsApp CHR Maroua"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com/@chr_maroua"
                    aria-label="YouTube CHR Maroua"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
            <p>&copy; 2026 Centre Hospitalier Régional de Maroua. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link to="/informations" className="hover:opacity-100 transition-opacity min-h-[44px] md:min-h-0 flex items-center">Informations pratiques</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity min-h-[44px] md:min-h-0 flex items-center">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Equipe;

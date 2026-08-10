import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Phone, MapPin, Mail, Stethoscope, Menu, X, Activity, Heart,
  Baby, Brain, Bone, Microscope, Eye, Shield, Leaf, Smile,
  Dumbbell, Pill, Monitor, Building2, Shirt, Wind, ArrowRight,
  Calendar, AlertCircle, Facebook, Youtube
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

type Category = 'Tous' | 'Urgences' | 'Chirurgie' | 'Médecine' | 'Spécialités' | 'Imagerie & Labo';

interface Service {
  id: number;
  title: string;
  description: string;
  category: Category;
  icon: React.ElementType;
  iconColor: string;
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Urgences 24h/24',
    description: 'Prise en charge immédiate, équipe disponible 24h/24, 7j/7.',
    category: 'Urgences',
    icon: Phone,
    iconColor: 'from-red-500 to-rose-600',
  },
  {
    id: 2,
    title: 'Chirurgie Générale',
    description: "Interventions chirurgicales digestives, abdominales et d'urgence.",
    category: 'Chirurgie',
    icon: Activity,
    iconColor: 'from-orange-500 to-amber-600',
  },
  {
    id: 3,
    title: 'Chirurgie Pédiatrique',
    description: 'Chirurgie adaptée aux enfants et nourrissons.',
    category: 'Chirurgie',
    icon: Baby,
    iconColor: 'from-pink-500 to-rose-500',
  },
  {
    id: 4,
    title: 'Bloc Opératoire',
    description: "Salles d'opération équipées pour toutes interventions.",
    category: 'Chirurgie',
    icon: Activity,
    iconColor: 'from-orange-400 to-orange-600',
  },
  {
    id: 5,
    title: 'Orthopédie-Traumatologie',
    description: 'Fractures, traumatismes et pathologies ostéo-articulaires.',
    category: 'Chirurgie',
    icon: Bone,
    iconColor: 'from-yellow-500 to-amber-600',
  },
  {
    id: 6,
    title: 'Neurochirurgie',
    description: 'Interventions neurochirurgicales spécialisées.',
    category: 'Chirurgie',
    icon: Brain,
    iconColor: 'from-violet-500 to-purple-600',
  },
  {
    id: 7,
    title: 'Hospitalisation Chirurgicale Polyvalente',
    description: "Unité d'hospitalisation pour patients chirurgicaux.",
    category: 'Chirurgie',
    icon: Building2,
    iconColor: 'from-orange-500 to-red-500',
  },
  {
    id: 8,
    title: 'Médecine Interne',
    description: 'Diagnostic et prise en charge des pathologies complexes.',
    category: 'Médecine',
    icon: Stethoscope,
    iconColor: 'from-teal-500 to-cyan-600',
  },
  {
    id: 9,
    title: 'Cardiologie',
    description: 'Prévention, diagnostic et traitement des maladies du cœur.',
    category: 'Médecine',
    icon: Heart,
    iconColor: 'from-red-500 to-pink-600',
  },
  {
    id: 10,
    title: 'Pédiatrie',
    description: "Soins spécialisés pour les enfants de la naissance à l'adolescence.",
    category: 'Médecine',
    icon: Baby,
    iconColor: 'from-green-500 to-emerald-600',
  },
  {
    id: 11,
    title: 'Gynécologie-Obstétrique',
    description: 'Suivi de grossesse, accouchement, soins gynécologiques.',
    category: 'Médecine',
    icon: Heart,
    iconColor: 'from-pink-500 to-fuchsia-600',
  },
  {
    id: 12,
    title: 'Neurologie',
    description: 'Pathologies du système nerveux central et périphérique.',
    category: 'Médecine',
    icon: Brain,
    iconColor: 'from-purple-500 to-indigo-600',
  },
  {
    id: 13,
    title: 'Pneumologie',
    description: 'Maladies respiratoires et pathologies pulmonaires.',
    category: 'Médecine',
    icon: Wind,
    iconColor: 'from-sky-500 to-blue-600',
  },
  {
    id: 14,
    title: 'Rhumatologie',
    description: 'Maladies des articulations, os et muscles.',
    category: 'Médecine',
    icon: Bone,
    iconColor: 'from-amber-500 to-yellow-600',
  },
  {
    id: 15,
    title: 'Nutrition',
    description: 'Accompagnement nutritionnel et prise en charge des carences.',
    category: 'Médecine',
    icon: Leaf,
    iconColor: 'from-lime-500 to-green-600',
  },
  {
    id: 16,
    title: 'Ophtalmologie',
    description: 'Soins des yeux et traitement des pathologies visuelles.',
    category: 'Spécialités',
    icon: Eye,
    iconColor: 'from-cyan-500 to-teal-600',
  },
  {
    id: 17,
    title: 'ORL',
    description: 'Oto-Rhino-Laryngologie : oreilles, nez, gorge.',
    category: 'Spécialités',
    icon: Activity,
    iconColor: 'from-indigo-500 to-blue-600',
  },
  {
    id: 18,
    title: 'Dentisterie',
    description: 'Soins dentaires, extractions et chirurgie buccale.',
    category: 'Spécialités',
    icon: Smile,
    iconColor: 'from-sky-400 to-cyan-500',
  },
  {
    id: 19,
    title: 'Dermatologie-Vénérologie',
    description: 'Maladies de la peau et infections sexuellement transmissibles.',
    category: 'Spécialités',
    icon: Shield,
    iconColor: 'from-rose-500 to-pink-600',
  },
  {
    id: 20,
    title: 'Endocrinologie / Diabétologie',
    description: 'Diabète, thyroïde et troubles hormonaux.',
    category: 'Spécialités',
    icon: Activity,
    iconColor: 'from-teal-400 to-emerald-600',
  },
  {
    id: 21,
    title: 'Urologie',
    description: "Maladies de l'appareil urinaire et génital masculin.",
    category: 'Spécialités',
    icon: Shield,
    iconColor: 'from-blue-500 to-indigo-600',
  },
  {
    id: 22,
    title: 'Kinésithérapie',
    description: 'Rééducation fonctionnelle et physiothérapie.',
    category: 'Spécialités',
    icon: Dumbbell,
    iconColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 23,
    title: 'Pharmacie',
    description: 'Dispensation des médicaments et conseil pharmaceutique.',
    category: 'Spécialités',
    icon: Pill,
    iconColor: 'from-violet-400 to-purple-600',
  },
  {
    id: 24,
    title: 'Hygiène',
    description: 'Hygiène hospitalière et prévention des infections.',
    category: 'Spécialités',
    icon: Shield,
    iconColor: 'from-green-400 to-emerald-500',
  },
  {
    id: 25,
    title: 'Imagerie Médicale',
    description: "Échographie, radiologie et examens d'imagerie médicale.",
    category: 'Imagerie & Labo',
    icon: Monitor,
    iconColor: 'from-teal-500 to-cyan-600',
  },
  {
    id: 26,
    title: 'Radiologie',
    description: 'Radiographies et imagerie diagnostique.',
    category: 'Imagerie & Labo',
    icon: Monitor,
    iconColor: 'from-slate-500 to-gray-700',
  },
  {
    id: 27,
    title: 'Laboratoire d\'ANAPATH',
    description: 'Analyses anatomopathologiques et biopsies.',
    category: 'Imagerie & Labo',
    icon: Microscope,
    iconColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 28,
    title: 'Buanderie',
    description: 'Service de blanchisserie hospitalière.',
    category: 'Imagerie & Labo',
    icon: Shirt,
    iconColor: 'from-blue-400 to-sky-500',
  },
];

const CATEGORIES: Category[] = ['Tous', 'Urgences', 'Chirurgie', 'Médecine', 'Spécialités', 'Imagerie & Labo'];

const CATEGORY_COUNT: Record<Category, number> = SERVICES.reduce(
  (acc, s) => {
    acc[s.category] = (acc[s.category] ?? 0) + 1;
    return acc;
  },
  { Tous: SERVICES.length } as Record<Category, number>
);

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');

  const filteredServices =
    activeCategory === 'Tous'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

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
                    link.to === '/services'
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
            28 Spécialités Médicales
          </Badge>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            Nos 28 Spécialités Médicales
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Nous sommes ravis d'accueillir de nouveaux patients et de fournir des soins de qualité.
            Notre équipe dévouée est prête à vous accompagner à chaque étape.
          </p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => {
              const count = cat === 'Tous' ? SERVICES.length : (CATEGORY_COUNT[cat] ?? 0);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 border ${
                    isActive
                      ? 'medical-gradient text-white border-transparent shadow-md'
                      : 'bg-background text-foreground border-border hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {cat}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground mb-10 text-sm">
            {filteredServices.length} service{filteredServices.length > 1 ? 's' : ''} affiché{filteredServices.length > 1 ? 's' : ''}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group hover-lift cursor-pointer border border-border bg-card overflow-hidden transition-shadow duration-200"
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.iconColor} rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-2">
                      <h3 className="font-heading font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Badge */}
                    <Badge
                      variant="secondary"
                      className="self-start text-xs bg-secondary text-muted-foreground border-0"
                    >
                      {service.category}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Urgences banner ── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-red-50 border-y border-red-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-heading font-bold text-red-700 text-base">Urgences disponibles 24h/24 — 7j/7</p>
              <p className="text-red-600 text-sm">Notre équipe est mobilisée à tout moment pour votre prise en charge immédiate.</p>
            </div>
          </div>
          <a
            href="tel:+237671440486"
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors duration-200 flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            +237 671 440 486
          </a>
        </div>
      </section>

      {/* ── CTA rendez-vous ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 medical-gradient text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Besoin d'une consultation ?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Prenez rendez-vous en ligne avec l'un de nos spécialistes. Une prise en charge rapide et bienveillante vous attend.
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

export default Services;

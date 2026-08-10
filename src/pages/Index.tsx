import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Clock, Phone, MapPin, Mail, Users, Award, Heart, Shield,
  Stethoscope, Activity, Ambulance, UserCheck, Menu, X, CheckCircle,
  ArrowRight, ChevronLeft, ChevronRight, Clock3, HeartPulse, Microscope,
  Baby, Facebook, Youtube, MessageCircle, ShieldCheck, BadgeCheck,
  ClipboardCheck, TrendingUp, Medal
} from 'lucide-react';
import { IMAGES } from '@/assets/images';
import IsoSeal from '@/components/IsoSeal';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
  { to: '/informations', label: 'Informations' },
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselSlides = [
    {
      id: 1,
      title: 'Sécurité',
      titleHighlight: '· Qualité · Humanisation',
      subtitle: 'Centre Hospitalier Régional de Maroua',
      description: 'Établissement de santé de référence en Extrême-Nord du Cameroun. Une équipe dévouée vous accompagne à chaque étape de votre parcours de soins.',
      image: IMAGES.HOSPITAL_EXTERIOR_8,
      gradient: 'from-cyan-700 via-teal-600 to-cyan-500',
      stats: [
        { icon: Stethoscope, value: '28+', label: 'Spécialités' },
        { icon: Award, value: '2024', label: 'Opérationnel depuis' },
        { icon: Clock3, value: '24/7', label: 'Urgences' },
      ],
    },
    {
      id: 2,
      title: 'Équipements',
      titleHighlight: 'Modernes',
      subtitle: 'Innovation & Précision Médicale',
      description: 'Imagerie médicale haute définition, bloc opératoire moderne, laboratoire d\'ANAPATH — des technologies adaptées pour des diagnostics précis.',
      image: IMAGES.MEDICAL_EQUIPMENT_1,
      gradient: 'from-teal-700 via-cyan-600 to-teal-500',
      stats: [
        { icon: Microscope, value: 'Labo', label: 'ANAPATH' },
        { icon: Activity, value: 'Bloc', label: 'Opératoire' },
        { icon: HeartPulse, value: 'Cardio', label: 'Cardiologie' },
      ],
    },
    {
      id: 3,
      title: 'Équipe',
      titleHighlight: 'de Spécialistes',
      subtitle: 'Professionnels Engagés',
      description: 'Des médecins spécialistes et une équipe pluridisciplinaire dévoués à vous offrir les meilleurs soins avec compassion et humanisme.',
      image: IMAGES.MEDICAL_TEAM_6,
      gradient: 'from-emerald-700 via-teal-600 to-emerald-500',
      stats: [
        { icon: UserCheck, value: '13+', label: 'Médecins spécialistes' },
        { icon: Users, value: '28', label: 'Spécialités couvertes' },
        { icon: Heart, value: '500k+', label: 'Patients (campagne 2025)' },
      ],
    },
    {
      id: 4,
      title: 'Urgences',
      titleHighlight: '24h/24',
      subtitle: 'Toujours à Votre Service',
      description: 'Service d\'urgences disponible en permanence. Appelez le +237 671 440 486 pour toute urgence médicale.',
      image: IMAGES.HOSPITAL_INTERIOR_8,
      gradient: 'from-red-700 via-rose-600 to-red-500',
      stats: [
        { icon: Ambulance, value: '24/7', label: 'Disponible' },
        { icon: HeartPulse, value: '+237', label: '671 440 486' },
        { icon: Phone, value: 'SAMU', label: 'Cameroun' },
      ],
    },
  ];

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, carouselSlides.length]);

  const handlePrev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, carouselSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const slide = carouselSlides[currentSlide];

  const services = [
    { icon: Ambulance, title: 'Urgences 24h/24', description: 'Prise en charge immédiate pour toute urgence médicale, disponible en permanence.', color: 'from-red-500 to-rose-500' },
    { icon: Heart, title: 'Cardiologie', description: 'Prévention, diagnostic et traitement de toutes les maladies du cœur et des vaisseaux.', color: 'from-cyan-600 to-teal-500' },
    { icon: Baby, title: 'Gynécologie-Obstétrique', description: 'Suivi de grossesse, accouchement et soins gynécologiques spécialisés.', color: 'from-pink-500 to-rose-400' },
    { icon: Users, title: 'Pédiatrie', description: 'Soins spécialisés pour les nourrissons, enfants et adolescents.', color: 'from-emerald-500 to-teal-500' },
    { icon: Activity, title: 'Orthopédie-Traumatologie', description: 'Prise en charge des fractures, traumatismes et pathologies ostéo-articulaires.', color: 'from-orange-500 to-amber-400' },
    { icon: Microscope, title: 'Imagerie Médicale', description: 'Radiologie, échographie et examens d\'imagerie pour des diagnostics précis.', color: 'from-teal-600 to-cyan-500' },
  ];

  const features = [
    { icon: Shield, title: 'Sécurité', description: 'Protocoles sanitaires rigoureux et environnement sécurisé pour tous les patients.' },
    { icon: Clock3, title: 'Disponibilité 24/7', description: 'Service d\'urgences et soins disponibles en permanence, jour et nuit.' },
    { icon: Award, title: 'Qualité', description: 'Une qualité certifiée ISO 9001:2015, au service d\'une prise en charge optimale.' },
    { icon: Heart, title: 'Humanisation', description: 'Accompagnement personnalisé et respect de la dignité de chaque patient.' },
  ];

  const stats = [
    { value: '28+', label: 'Spécialités médicales', icon: Stethoscope },
    { value: '13+', label: 'Médecins spécialistes', icon: UserCheck },
    { value: '24/7', label: 'Urgences disponibles', icon: Clock3 },
    { value: 'ISO 9001', label: 'Qualité certifiée (2015)', icon: Medal },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        {/* Ruban certification ISO 9001 — toujours visible */}
        <div className="bg-foreground text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-center lg:justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="font-bold">Certifié ISO 9001:2015</span>
              <span className="hidden sm:inline text-white/60">· Système de Management de la Qualité</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-amber-300">
              <BadgeCheck className="w-4 h-4" />
              <span>Agrément obtenu — Qualité certifiée</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-11 h-11 medical-gradient rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold text-foreground font-heading leading-tight">CHR Maroua</h1>
                <p className="text-xs text-muted-foreground">Sécurité · Qualité · Humanisation</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors duration-200 cursor-pointer font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+237671440486"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-emergency-red border border-emergency-red/30 rounded-lg hover:bg-emergency-red/5 transition-colors duration-200 cursor-pointer min-h-[40px]"
              >
                <Phone className="w-4 h-4" />
                Urgences
              </a>
              <Link to="/rendez-vous">
                <Button className="cursor-pointer medical-gradient text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all min-h-[40px]">
                  <Calendar className="w-4 h-4 mr-2" />
                  Rendez-vous
                </Button>
              </Link>
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="lg:hidden py-3 border-t border-border">
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-3 border-t border-border mt-2">
                  <a href="tel:+237671440486" className="flex items-center gap-2 px-3 py-2.5 text-sm text-emergency-red font-medium cursor-pointer min-h-[44px]">
                    <Phone className="w-4 h-4" /> +237 671 440 486 (Urgences)
                  </a>
                  <Link to="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full cursor-pointer medical-gradient text-white min-h-[44px]">
                      <Calendar className="w-4 h-4 mr-2" /> Prendre Rendez-vous
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative overflow-hidden">
        <div className="relative h-[88vh] min-h-[580px]">
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-1000`}>
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center h-full py-12">
              {/* Text */}
              <div className={`space-y-7 text-white transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <div className="inline-flex items-center gap-2 bg-amber-400 text-foreground rounded-full pl-1.5 pr-4 py-1.5 shadow-lg">
                  <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-600" />
                  </span>
                  <span className="text-sm font-bold">Certifié ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <Stethoscope className="w-4 h-4" />
                  <span className="text-sm font-medium">{slide.subtitle}</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight font-heading">
                  {slide.title}
                  <br />
                  <span className="text-white/85">{slide.titleHighlight}</span>
                </h2>
                <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/rendez-vous">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl cursor-pointer font-semibold min-h-[48px]">
                      <Calendar className="w-5 h-5 mr-2" />
                      Prendre Rendez-vous
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm cursor-pointer min-h-[48px]">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Nos Services
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {slide.stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="text-center">
                        <div className="inline-flex items-center justify-center w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl mb-2">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-2xl font-bold font-heading">{stat.value}</div>
                        <div className="text-xs text-white/80">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Image */}
              <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground font-heading">28+</div>
                      <div className="text-xs text-muted-foreground">Spécialités</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 medical-gradient rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground font-heading">24/7</div>
                      <div className="text-xs text-muted-foreground">Urgences</div>
                    </div>
                  </div>
                </div>
                {/* Sceau ISO 9001 flottant */}
                <div className="absolute -top-7 -right-5 lg:-right-8 z-10 drop-shadow-xl">
                  <IsoSeal size={104} className="animate-float" />
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/30 cursor-pointer"
            aria-label="Diapositive précédente"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/30 cursor-pointer"
            aria-label="Diapositive suivante"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAnimating(true); setCurrentSlide(i); setTimeout(() => setIsAnimating(false), 500); }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${i === currentSlide ? 'w-10 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/70'}`}
                aria-label={`Aller à la diapositive ${i + 1}`}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div className="h-full bg-white transition-all duration-300" style={{ width: `${((currentSlide + 1) / carouselSlides.length) * 100}%` }} />
          </div>
        </div>
      </section>

      {/* Certification ISO 9001 */}
      <section className="relative overflow-hidden bg-foreground text-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Halos décoratifs */}
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-teal-500/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-amber-500/15 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Sceau */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-4 bg-amber-400/25 rounded-full blur-3xl scale-125" aria-hidden="true" />
                <IsoSeal size={250} className="drop-shadow-2xl" />
              </div>
            </div>

            {/* Texte */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">Certification Internationale</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-heading leading-tight">
                Le CHR Maroua est officiellement{' '}
                <span className="text-amber-400">certifié ISO 9001:2015</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Notre établissement a obtenu l'agrément ISO 9001 — la norme internationale de référence
                en matière de système de management de la qualité. Une reconnaissance qui confirme
                l'exigence et la rigueur de nos processus, au service de la sécurité et de la
                satisfaction de chaque patient.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Management de la Qualité',
                    description: 'Processus maîtrisés, documentés et tracés sur l\'ensemble de nos activités.',
                  },
                  {
                    icon: ClipboardCheck,
                    title: 'Exigences Auditées',
                    description: 'Conformité vérifiée par un organisme certificateur externe indépendant.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Amélioration Continue',
                    description: 'Un engagement permanent pour des soins toujours plus sûrs et efficaces.',
                  },
                ].map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-amber-400/30 transition-colors duration-200"
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm font-bold font-heading mb-1">{p.title}</h3>
                      <p className="text-xs text-white/65 leading-relaxed">{p.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/informations">
                  <Button size="lg" className="bg-amber-400 text-foreground hover:bg-amber-300 shadow-lg cursor-pointer font-semibold min-h-[48px]">
                    Découvrir notre démarche qualité
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm cursor-pointer min-h-[48px]">
                    Nos Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-secondary text-primary hover:bg-secondary">Nos Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
              28 Spécialités Médicales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Du diagnostic au traitement, nous couvrons l'ensemble des besoins de santé de la population de l'Extrême-Nord.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden cursor-pointer hover-lift">
                  <CardContent className="p-7">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 shadow-md`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-heading">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                    <Link to="/services" className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all cursor-pointer">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" className="cursor-pointer medical-gradient text-white shadow-md hover:opacity-90 transition-opacity">
                Voir les 28 Spécialités
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-secondary/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-secondary text-primary hover:bg-secondary">Notre Engagement</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-heading">
              Sécurité · Qualité · Humanisation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les trois piliers qui guident chaque action de l'équipe du CHR Maroua au quotidien.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-18 h-18 w-[72px] h-[72px] medical-gradient rounded-2xl mb-5 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-heading">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 medical-gradient text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2 font-heading">{s.value}</div>
                  <div className="text-white/85 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-xl overflow-hidden bg-foreground text-white">
            <CardContent className="p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 medical-gradient rounded-2xl mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3 font-heading">
                Prêt à Consulter ?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto text-base leading-relaxed">
                Prenez rendez-vous en ligne avec l'un de nos 13 médecins spécialistes. Nous vous contacterons rapidement pour confirmer.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/rendez-vous">
                  <Button size="lg" className="bg-medical-green text-white hover:opacity-90 transition-opacity shadow-lg cursor-pointer font-semibold min-h-[48px]">
                    <Calendar className="w-5 h-5 mr-2" />
                    Prendre Rendez-vous
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 transition-colors cursor-pointer min-h-[48px]">
                    <Phone className="w-5 h-5 mr-2" />
                    Nous Contacter
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 medical-gradient rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading">CHR Maroua</h3>
                  <p className="text-xs text-white/60">Centre Hospitalier Régional</p>
                </div>
              </div>
              <p className="text-white/65 text-sm leading-relaxed">
                Établissement de santé de référence en Extrême-Nord du Cameroun. Opérationnel depuis 2024, certifié ISO 9001:2015.
              </p>
              {/* Réseaux sociaux */}
              <div className="flex items-center gap-3 pt-1">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook CHR Maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://wa.me/237689867206" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp CHR Maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@chr_maroua" target="_blank" rel="noopener noreferrer" aria-label="TikTok @chr_maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <span className="text-xs font-bold">TK</span>
                </a>
                <a href="https://youtube.com/@chr_maroua" target="_blank" rel="noopener noreferrer" aria-label="YouTube @chr_maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Liens */}
            <div>
              <h4 className="font-semibold text-sm mb-4 font-heading uppercase tracking-wide text-white/80">Navigation</h4>
              <ul className="space-y-2.5">
                {[
                  { to: '/services', label: 'Nos Services' },
                  { to: '/equipe', label: 'Notre Équipe' },
                  { to: '/actualites', label: 'Actualités' },
                  { to: '/galerie', label: 'Galerie' },
                  { to: '/informations', label: 'Informations Pratiques' },
                ].map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-white/65 hover:text-white transition-colors text-sm flex items-center group cursor-pointer">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-sm mb-4 font-heading uppercase tracking-wide text-white/80">Services Clés</h4>
              <ul className="space-y-2.5 text-sm text-white/65">
                {['Urgences 24h/24', 'Cardiologie', 'Gynécologie-Obstétrique', 'Pédiatrie', 'Orthopédie-Traumatologie', 'Imagerie Médicale'].map(s => (
                  <li key={s}>
                    <Link to="/services" className="hover:text-white transition-colors cursor-pointer">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-4 font-heading uppercase tracking-wide text-white/80">Contact</h4>
              <ul className="space-y-3 text-sm text-white/65">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-medical-cyan" />
                  <a href="tel:+237689867206" className="hover:text-white transition-colors cursor-pointer">+237 689 867 206</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-emergency-red" />
                  <a href="tel:+237671440486" className="hover:text-white transition-colors cursor-pointer">+237 671 440 486 <span className="text-xs">(Urgences)</span></a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-medical-cyan" />
                  <a href="mailto:contact@chr-maroua.cm" className="hover:text-white transition-colors cursor-pointer">contact@chr-maroua.cm</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-medical-cyan" />
                  <span>Sékandé, Maroua<br />Extrême-Nord, Cameroun</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Centre Hospitalier Régional de Maroua. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                Urgences 24h/24 — +237 671 440 486
              </span>
              <span className="hidden sm:block w-px h-3 bg-white/15" aria-hidden="true" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                Certifié ISO 9001:2015
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

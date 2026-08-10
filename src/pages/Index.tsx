import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Stethoscope, Calendar, Phone, Users, Award, Heart, Shield,
  Activity, Ambulance, UserCheck, ArrowRight, Clock3, Microscope,
  Baby, ShieldCheck, ClipboardCheck, TrendingUp
} from 'lucide-react';
import { IMAGES } from '@/assets/images';
import IsoSeal from '@/components/IsoSeal';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';

const TICKER_ITEMS = [
  'Sécurité',
  'Qualité',
  'Humanisation',
  'Certifié ISO 9001:2015',
  '28 Spécialités',
  'Urgences 24h/24',
  '13 Médecins Spécialistes',
];

const Index = () => {
  const services = [
    { icon: Ambulance, title: 'Urgences 24h/24', description: 'Prise en charge immédiate pour toute urgence médicale, disponible en permanence.' },
    { icon: Heart, title: 'Cardiologie', description: 'Prévention, diagnostic et traitement de toutes les maladies du cœur et des vaisseaux.' },
    { icon: Baby, title: 'Gynécologie-Obstétrique', description: 'Suivi de grossesse, accouchement et soins gynécologiques spécialisés.' },
    { icon: Users, title: 'Pédiatrie', description: 'Soins spécialisés pour les nourrissons, enfants et adolescents.' },
    { icon: Activity, title: 'Orthopédie-Traumatologie', description: 'Prise en charge des fractures, traumatismes et pathologies ostéo-articulaires.' },
    { icon: Microscope, title: 'Imagerie Médicale', description: 'Radiologie, échographie et examens d\'imagerie pour des diagnostics précis.' },
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
    { value: 'ISO 9001', label: 'Qualité certifiée (2015)', icon: Award },
  ];

  const isoPillars = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ===== Hero éditorial ===== */}
      <section className="relative overflow-hidden">
        {/* Décor de fond */}
        <div className="absolute inset-0 hero-pattern" aria-hidden="true" />
        <div className="absolute -top-32 right-[-8%] w-[38rem] h-[38rem] rounded-full bg-medical-copper/10 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-[-10%] left-[-6%] w-[30rem] h-[30rem] rounded-full bg-medical-pine/10 blur-3xl" aria-hidden="true" />
        {/* Filigrane éditorial */}
        <span
          className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[18vw] lg:text-[13vw] leading-none font-heading font-bold text-outline opacity-[0.07] select-none pointer-events-none"
          aria-hidden="true"
        >
          Maroua
        </span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-24 pb-16 lg:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
            {/* Texte */}
            <Reveal>
            <div className="space-y-8">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-medical-copper">
                <span className="h-px w-10 bg-medical-copper/60" aria-hidden="true" />
                Centre Hospitalier Régional de Maroua
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-heading font-semibold leading-[1.05] text-foreground">
                Des soins d'excellence, avec une{' '}
                <em className="italic text-medical-copper">attention humaine</em>.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Établissement de santé de référence en Extrême-Nord du Cameroun. Une équipe dévouée
                vous accompagne à chaque étape de votre parcours de soins, avec des technologies
                adaptées pour des diagnostics précis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/rendez-vous">
                  <Button size="lg" className="cursor-pointer medical-gradient text-white shadow-xl hover:opacity-90 transition-opacity font-semibold min-h-[52px] rounded-full px-8">
                    <Calendar className="w-5 h-5 mr-2" />
                    Prendre Rendez-vous
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="cursor-pointer rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-medical-pine hover:text-white transition-colors min-h-[52px] px-8">
                    Nos Services
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
              </div>

              {/* Stats — filets éditoriaux */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 pt-6 border-t border-border">
                {[
                  { value: '28+', label: 'Spécialités' },
                  { value: '13+', label: 'Médecins' },
                  { value: '24/7', label: 'Urgences' },
                  { value: 'ISO 9001', label: 'Certifié' },
                ].map((s, i) => (
                  <div key={i} className={i > 0 ? 'sm:border-l sm:border-border sm:pl-6' : ''}>
                    <div className="text-3xl font-heading font-semibold text-foreground">{s.value}</div>                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
              </div>
            </div>
            </Reveal>

            {/* Image en arche */}
            <Reveal delay={150}>
            <div className="relative">
              <div className="relative rounded-t-[999px] rounded-b-[2rem] overflow-hidden border-[6px] border-white shadow-2xl aspect-[3/4] max-h-[560px]">
                <img
                  src={IMAGES.MEDICAL_TEAM_6}
                  alt="Équipe médicale du CHR Maroua"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                {/* Carte urgences */}
                <div className="absolute bottom-5 left-5 right-5 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-medical-copper rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Urgences 24h/24</div>
                      <div className="text-sm font-bold text-foreground">+237 671 440 486</div>
                    </div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emergency-red animate-pulse" aria-hidden="true" />
                </div>
              </div>
              {/* Sceau ISO 9001 flottant */}
              <div className="absolute -top-6 -right-4 lg:-right-8 z-10 drop-shadow-xl">
                <IsoSeal size={110} className="animate-float" />
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Ticker éditorial ===== */}
      <Reveal>
      <div className="bg-medical-pine text-white border-y-4 border-medical-gold/60 overflow-hidden py-3.5" aria-hidden="true">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center">
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className="flex items-center text-sm font-semibold uppercase tracking-[0.2em]">
                  <span className="px-6">{item}</span>
                  <span className="text-medical-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      </Reveal>

      {/* ===== Certification ISO 9001 ===== */}
      <section className="relative overflow-hidden bg-medical-pine text-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-medical-copper/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-amber-500/15 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Sceau */}
            <Reveal>
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-4 bg-amber-400/25 rounded-full blur-3xl scale-125" aria-hidden="true" />
                <IsoSeal size={250} className="drop-shadow-2xl" />
              </div>
            </div>
            </Reveal>

            {/* Texte */}
            <Reveal delay={150}>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">Certification Internationale</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-heading leading-tight">
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
                {isoPillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Reveal key={i} delay={i * 60} className="h-full">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-amber-400/30 transition-colors duration-200 h-full">
                      <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm font-heading font-semibold mb-1">{p.title}</h3>
                      <p className="text-xs text-white/65 leading-relaxed">{p.description}</p>
                    </div>
                    </Reveal>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/qualite">
                  <Button size="lg" className="bg-amber-400 text-medical-pine hover:bg-amber-300 shadow-lg cursor-pointer font-semibold min-h-[48px] rounded-full px-8">
                    Découvrir notre démarche qualité
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm cursor-pointer min-h-[48px] rounded-full px-8">
                    Nos Services
                  </Button>
                </Link>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Services — liste numérotée ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <Badge className="mb-4 bg-secondary text-medical-copper hover:bg-secondary uppercase tracking-[0.2em]">Nos Services</Badge>
              <h2 className="text-3xl lg:text-5xl font-heading font-semibold text-foreground leading-tight">
                28 spécialités au service<br />de votre santé
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm lg:text-right leading-relaxed">
              Du diagnostic au traitement, nous couvrons l'ensemble des besoins de santé de la
              population de l'Extrême-Nord.
            </p>
          </div>

          <div className="border-t border-border">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                <div className="group grid md:grid-cols-[80px_64px_1fr_auto] items-center gap-4 md:gap-6 border-b border-border py-6 md:py-7 px-2 md:px-4 hover:bg-card transition-colors duration-200">
                  <span className="text-3xl font-heading font-semibold text-medical-copper/60 group-hover:text-medical-copper transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-medical-copper/10 text-medical-copper flex items-center justify-center group-hover:bg-medical-copper group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-1 group-hover:text-medical-copper transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{service.description}</p>
                  </div>
                  <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all cursor-pointer">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 text-medical-copper" />
                  </Link>
                </div>
                </Reveal>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="cursor-pointer medical-gradient text-white shadow-md hover:opacity-90 transition-opacity rounded-full px-10 min-h-[52px]">
                Voir les 28 Spécialités
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Valeurs ===== */}
      <section className="py-20 lg:py-28 bg-medical-sand px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-white text-medical-copper hover:bg-white dark:bg-secondary dark:text-medical-gold dark:hover:bg-secondary uppercase tracking-[0.2em]">Notre Engagement</Badge>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold text-foreground leading-tight">
              Sécurité · Qualité · <em className="italic text-medical-copper">Humanisation</em>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              Les trois piliers qui guident chaque action de l'équipe du CHR Maroua au quotidien.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80} className="h-full">
                <div className="text-center group h-full">
                  <div className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full border border-medical-copper/30 bg-white dark:bg-secondary dark:border-medical-copper/50 text-medical-copper mb-5 group-hover:bg-medical-copper group-hover:text-white group-hover:scale-105 transition-all duration-200 shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="py-20 lg:py-24 medical-gradient text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-heading font-semibold mb-1">{s.value}</div>
                  <div className="text-white/80 text-sm">{s.label}</div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
          <div className="relative bg-card border border-border rounded-[2rem] shadow-xl overflow-hidden px-8 py-14 lg:p-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-1.5 medical-gradient" aria-hidden="true" />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full medical-gradient text-white mb-6 shadow-lg">
              <Calendar className="w-7 h-7" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-3">
              Prêt à consulter ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-base leading-relaxed">
              Prenez rendez-vous en ligne avec l'un de nos 13 médecins spécialistes. Nous vous
              contacterons rapidement pour confirmer.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/rendez-vous">
                <Button size="lg" className="cursor-pointer medical-gradient text-white hover:opacity-90 transition-opacity shadow-lg font-semibold min-h-[52px] rounded-full px-10">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre Rendez-vous
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="cursor-pointer rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-medical-pine hover:text-white transition-colors min-h-[52px] px-10">
                  <Phone className="w-5 h-5 mr-2" />
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;

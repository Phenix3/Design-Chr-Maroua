import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award, ShieldCheck, ClipboardCheck, TrendingUp, Users, CheckCircle,
  Search, RefreshCw, Target, Stethoscope, UserCheck, Clock3, Calendar,
  Phone, ArrowRight
} from 'lucide-react';
import IsoSeal from '@/components/IsoSeal';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { IMAGES } from '@/assets/images';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const QUALITY_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Management de la Qualité',
    description: 'Des processus maîtrisés, documentés et tracés sur l\'ensemble de nos activités de soins et de support.',
  },
  {
    icon: ClipboardCheck,
    title: 'Exigences Auditées',
    description: 'Notre conformité est vérifiée par un organisme certificateur externe indépendant et accrédité.',
  },
  {
    icon: TrendingUp,
    title: 'Amélioration Continue',
    description: 'Un cycle permanent d\'évaluation, de mesure et d\'amélioration de nos pratiques et de nos résultats.',
  },
  {
    icon: Users,
    title: 'Satisfaction Patient',
    description: 'L\'écoute et le retour des patients guident nos priorités et la révision de nos processus.',
  },
];

const ENGAGEMENTS = [
  {
    title: 'Processus documentés et tracés',
    description: 'Chaque acte de soin et chaque décision administrative suit une procédure écrite, vérifiable et améliorable.',
  },
  {
    title: 'Formation continue des équipes',
    description: 'Nos médecins, infirmiers et personnels administratifs se forment en continu aux bonnes pratiques.',
  },
  {
    title: 'Écoute et suivi des patients',
    description: 'Enquêtes de satisfaction, recueil des plaintes et suivi personnalisé de chaque parcours de soins.',
  },
  {
    title: 'Gestion des risques et sécurité',
    description: 'Prévention des infections, sécurisation du circuit du médicament et maîtrise des risques liés aux soins.',
  },
  {
    title: 'Traçabilité des actes',
    description: 'Dossiers patients complets et archives fiables pour garantir la continuité et la sécurité des soins.',
  },
  {
    title: 'Audits réguliers et évaluation',
    description: 'Audits internes et externes périodiques pour mesurer notre conformité et corriger nos écarts.',
  },
];

const CERTIFICATION_STEPS = [
  {
    num: '01',
    title: 'Diagnostic initial',
    description: 'Évaluation de nos pratiques existantes au regard des exigences de la norme ISO 9001.',
  },
  {
    num: '02',
    title: 'Mise en place du SMQ',
    description: 'Déploiement de notre système de management de la qualité : processus, procédures et indicateurs.',
  },
  {
    num: '03',
    title: 'Audit interne',
    description: 'Revue interne de notre système et préparation des équipes à l\'audit de certification.',
  },
  {
    num: '04',
    title: 'Audit de certification',
    description: 'Audit réalisé par un organisme certificateur indépendant pour valider notre conformité.',
  },
  {
    num: '05',
    title: 'Surveillance continue',
    description: 'Audits de suivi réguliers pour maintenir et faire évoluer notre certification dans la durée.',
  },
];

const QUALITE = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader active="/qualite" />

    <PageHero
      eyebrow="Démarche Qualité"
      title="Notre Certification ISO 9001:2015"
      description="Le CHR Maroua est officiellement certifié ISO 9001:2015 — la norme internationale de référence pour les systèmes de management de la qualité. Une reconnaissance qui engage l'ensemble de nos équipes, chaque jour, au service des patients."
      number="9001"
      numberSize="7.5rem"
      meta={[
        { icon: Award, label: 'Norme internationale' },
        { icon: ShieldCheck, label: 'Audit externe indépendant' },
        { icon: TrendingUp, label: 'Amélioration continue' },
      ]}
      images={[IMAGES.MEDICAL_EQUIPMENT_4, IMAGES.HOSPITAL_EXTERIOR_6, IMAGES.MEDICAL_TEAM_8]}
    />

    {/* ── Déclaration + sceau ── */}
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="space-y-6">
              <Badge className="bg-medical-copper/10 text-medical-copper hover:bg-medical-copper/10 uppercase tracking-[0.2em]">
                Une reconnaissance internationale
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight">
                Une exigence de qualité,{' '}
                <em className="italic text-medical-copper">prouvée par un audit indépendant</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Obtenir la certification ISO 9001:2015 n'est pas une fin en soi : c'est le fruit d'une
                démarche rigoureuse menée par l'ensemble de nos équipes, du service des urgences à
                l'administration. Chaque processus — accueil du patient, prise en charge, suivi,
                facturation — a été revu, documenté et évalué selon les exigences de la norme.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cette certification confirme notre engagement pour des soins sûrs, efficaces et
                centrés sur le patient, et nous engage à maintenir et améliorer en permanence la
                qualité de nos services.
              </p>
              <Link to="/informations">
                <Button size="lg" className="cursor-pointer medical-gradient text-white shadow-md hover:opacity-90 transition-opacity rounded-full px-10 min-h-[52px]">
                  Informations pratiques
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-6 bg-amber-400/25 rounded-full blur-3xl scale-125" aria-hidden="true" />
                <IsoSeal size={260} className="drop-shadow-2xl" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ── Piliers ── */}
    <section className="py-20 lg:py-24 bg-medical-sand px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Badge className="mb-4 bg-white text-medical-copper hover:bg-white dark:bg-secondary dark:text-medical-gold dark:hover:bg-secondary uppercase tracking-[0.2em]">Notre système qualité</Badge>
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight">
            Les piliers de notre management de la qualité
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALITY_PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={i} delay={i * 80} className="h-full">
                <div className="bg-card border border-border rounded-2xl p-6 hover-lift h-full">
                  <div className="w-12 h-12 rounded-full bg-medical-copper/10 text-medical-copper flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Engagements ── */}
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Badge className="mb-4 bg-secondary text-medical-copper hover:bg-secondary uppercase tracking-[0.2em]">Nos engagements</Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight">
              Ce que la certification change au quotidien
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm lg:text-right leading-relaxed">
            La norme ISO 9001 n'est pas un label décoratif : elle structure concrètement notre
            façon de travailler, pour votre sécurité et votre confort.
          </p>
        </div>

        <div className="border-t border-border">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group grid md:grid-cols-[80px_1fr] items-start gap-4 md:gap-6 border-b border-border py-6 md:py-7 px-2 md:px-4 hover:bg-card transition-colors duration-200">
                <span className="text-3xl font-heading font-semibold text-medical-copper/60 group-hover:text-medical-copper transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-medical-copper/10 text-medical-copper flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-medical-copper group-hover:text-white transition-colors duration-200">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-1 group-hover:text-medical-copper transition-colors">
                      {e.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{e.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Parcours de certification ── */}
    <section className="py-20 lg:py-24 bg-medical-pine text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-medical-copper/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-amber-500/15 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-white/10 text-amber-300 hover:bg-white/10 border border-white/15 uppercase tracking-[0.2em]">Le parcours de certification</Badge>
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold leading-tight">
            Comment nous avons obtenu l'agrément ISO 9001
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Un processus rigoureux en cinq étapes, mené avec l'ensemble de nos équipes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CERTIFICATION_STEPS.map((s, i) => {
            const icons = [Search, Target, ClipboardCheck, ShieldCheck, RefreshCw];
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 80} className="h-full">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-amber-400/30 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-heading font-semibold text-white/20">{s.num}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-xs text-white/65 leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Stats ── */}
    <section className="py-16 lg:py-20 medical-gradient text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { value: '28+', label: 'Spécialités médicales', icon: Stethoscope },
            { value: '13+', label: 'Médecins spécialistes', icon: UserCheck },
            { value: '24/7', label: 'Urgences disponibles', icon: Clock3 },
            { value: 'ISO 9001', label: 'Qualité certifiée (2015)', icon: Award },
          ].map((s, i) => {
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

    {/* ── CTA ── */}
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative bg-card border border-border rounded-[2rem] shadow-xl overflow-hidden px-8 py-14 lg:p-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-1.5 medical-gradient" aria-hidden="true" />
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full medical-gradient text-white mb-6 shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-3">
              Une question sur notre démarche qualité ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-base leading-relaxed">
              Notre équipe vous renseigne sur la certification ISO 9001 et sur toutes nos activités de soins.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="cursor-pointer medical-gradient text-white hover:opacity-90 transition-opacity shadow-lg font-semibold min-h-[52px] rounded-full px-10">
                  <Phone className="w-5 h-5 mr-2" />
                  Nous Contacter
                </Button>
              </Link>
              <Link to="/rendez-vous">
                <Button size="lg" variant="outline" className="cursor-pointer rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-medical-pine hover:text-white transition-colors min-h-[52px] px-10">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre Rendez-vous
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

export default QUALITE;

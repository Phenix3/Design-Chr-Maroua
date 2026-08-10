import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IMAGES } from '@/assets/images';
import {
  Phone, Mail, Calendar, Users, Building2, Globe, Star,
  ArrowRight, ShieldCheck
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

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
}

const DIRECTION: TeamMember = {
  id: 0,
  name: 'Dr GÉRARD FETSE TAMA',
  specialty: 'Directeur du CHR Maroua',
  email: 'gerard.fetse-tama@chr-maroua.cm',
  image: IMAGES.MEDICAL_TEAM_10,
  initials: 'GF',
};

const CHEFS_DE_SERVICE: TeamMember[] = [
  { id: 1, name: 'Dr Clovis Ourtchingh', specialty: 'Gynécologie-Obstétrique', email: 'clovis.ourtchingh@chr-maroua.cm', image: TEAM_IMAGES[0], initials: 'CO' },
  { id: 2, name: 'Dr Djaowe Emmanuel Fanfitsou', specialty: 'Pharmacie', email: 'djaowe.fanfitsou@chr-maroua.cm', image: TEAM_IMAGES[1], initials: 'DE' },
  { id: 3, name: 'Dr Fanny Christelle Abena', specialty: 'Pédiatrie', email: 'fanny.abena@chr-maroua.cm', image: TEAM_IMAGES[2], initials: 'FA' },
  { id: 4, name: 'Dr Guillaume Gayma', specialty: 'Urologie', email: 'guillaume.gayma@chr-maroua.cm', image: TEAM_IMAGES[3], initials: 'GG' },
  { id: 5, name: 'Dr Ngeng Woincham Léonard', specialty: 'Dentisterie', email: 'ngeng.leonard@chr-maroua.cm', image: TEAM_IMAGES[4], initials: 'NL' },
  { id: 6, name: 'Dr Yomi Diane Ngniatcha', specialty: 'Imagerie Médicale', email: 'yomi.ngniatcha@chr-maroua.cm', image: TEAM_IMAGES[5], initials: 'YN' },
  { id: 7, name: 'Dr Appolinaire BEME', specialty: 'Orthopédie-Traumatologie', email: 'appolinaire.beme@chr-maroua.cm', image: TEAM_IMAGES[6], initials: 'AB' },
  { id: 8, name: 'Dr Sadjo SALIHOU', specialty: 'Orthopédie-Traumatologie', email: 'sadjo.salihou@chr-maroua.cm', image: TEAM_IMAGES[7], initials: 'SS' },
  { id: 9, name: 'Dr Kambou Armelle FOHOM', specialty: 'ORL (Oto-Rhino-Laryngologie)', email: 'kambou.fohom@chr-maroua.cm', image: TEAM_IMAGES[8], initials: 'KF' },
  { id: 10, name: 'Dr Deniel KOLLO', specialty: 'Médecine Interne', email: 'deniel.kollo@chr-maroua.cm', image: TEAM_IMAGES[9], initials: 'DK' },
  { id: 11, name: 'Dr Maba FOKO', specialty: 'Nutrition', email: 'maba.foko@chr-maroua.cm', image: TEAM_IMAGES[0], initials: 'MF' },
  { id: 12, name: 'Dr Annelle TAZAMOU', specialty: 'Dermatologie-Vénérologie', email: 'annelle.tazamou@chr-maroua.cm', image: TEAM_IMAGES[1], initials: 'AT' },
];

const STATS = [
  { value: '13', label: 'Spécialistes', icon: Users },
  { value: '28', label: 'Spécialités couvertes', icon: Star },
  { value: '2024', label: 'Depuis', icon: Building2 },
  { value: 'ISO 9001', label: 'Qualité certifiée', icon: ShieldCheck },
];

const Equipe = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SiteHeader active="/equipe" />

    <PageHero
      eyebrow="Équipe Médicale"
      title="Notre Équipe Médicale"
      description="Des professionnels dévoués à votre santé, une direction engagée et des chefs de service experts dans leurs spécialités."
      number="13"
      meta={[
        { icon: Users, label: '12 chefs de service' },
        { icon: ShieldCheck, label: 'Certifié ISO 9001:2015' },
      ]}
    />

    {/* ── Stats ── */}
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-medical-sand border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full medical-gradient flex items-center justify-center shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-heading font-semibold text-3xl text-foreground leading-none">{stat.value}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Direction ── */}
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-medical-copper mb-3">
            <span className="h-px w-10 bg-medical-copper/60" aria-hidden="true" />
            Direction
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Le Directeur</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="group hover-lift cursor-default border border-border bg-card overflow-hidden transition-shadow duration-200">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="relative sm:w-48 h-56 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={DIRECTION.image}
                    alt={DIRECTION.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-foreground/50 to-transparent" />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-center gap-4">
                  <div>
                    <Badge className="medical-gradient text-white border-0 text-xs px-3 py-1">Direction</Badge>
                    <h3 className="font-heading font-semibold text-xl text-foreground leading-snug mt-3 mb-1">
                      {DIRECTION.name}
                    </h3>
                    <p className="text-medical-copper font-medium text-sm">{DIRECTION.specialty}</p>
                  </div>
                  <a
                    href={`mailto:${DIRECTION.email}`}
                    className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 min-h-[44px] md:min-h-0"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">{DIRECTION.email}</span>
                  </a>
                  <Button
                    asChild
                    className="medical-gradient text-white min-h-[44px] self-start shadow-md hover:opacity-90 transition-opacity duration-200 rounded-full px-6"
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-medical-sand">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-medical-copper mb-3">
            <span className="h-px w-10 bg-medical-copper/60" aria-hidden="true" />
            Chefs de Service
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            {CHEFS_DE_SERVICE.length} spécialistes à votre service
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHEFS_DE_SERVICE.map((member) => (
            <Card
              key={member.id}
              className="group hover-lift cursor-default border border-border bg-card overflow-hidden transition-shadow duration-200"
            >
              <CardContent className="p-0">
                {/* Photo header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-11 h-11 rounded-full medical-gradient flex items-center justify-center shadow-lg border-2 border-white font-heading font-bold text-white text-sm">
                      {member.initials}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/90 bg-medical-pine/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                      Chef de Service
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-base leading-snug group-hover:text-medical-copper transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-medical-copper text-xs font-medium mt-1 uppercase tracking-wider">{member.specialty}</p>
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-muted-foreground text-xs hover:text-foreground transition-colors duration-200 min-h-[44px] md:min-h-0"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="break-all">{member.email}</span>
                  </a>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full min-h-[44px] border-border hover:bg-secondary hover:text-foreground transition-colors duration-200 text-xs rounded-full"
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
          <div className="flex items-start gap-3 bg-card border border-border rounded-2xl p-5">
            <div className="w-9 h-9 rounded-full medical-gradient flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
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

    {/* ── CTA ── */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 medical-gradient text-white relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Prendre rendez-vous</h2>
        <p className="text-white/90 text-lg mb-8 leading-relaxed">
          Consultez l'un de nos spécialistes. Notre équipe est disponible pour vous accompagner vers la meilleure prise en charge.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-medical-pine hover:bg-white/90 font-semibold min-h-[48px] shadow-lg rounded-full px-10 transition-colors duration-200"
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
            className="border-2 border-white text-white hover:bg-white/10 min-h-[48px] rounded-full px-10 transition-colors duration-200"
          >
            <Link to="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Nous contacter
            </Link>
          </Button>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default Equipe;

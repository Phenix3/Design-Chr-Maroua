import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone, Stethoscope, Activity, Heart, Baby, Brain, Bone, Microscope,
  Eye, Shield, Leaf, Smile, Dumbbell, Pill, Monitor, Building2, Shirt,
  Wind, ArrowRight, Calendar, AlertCircle, Award
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

type Category = 'Tous' | 'Urgences' | 'Chirurgie' | 'Médecine' | 'Spécialités' | 'Imagerie & Labo';

interface Service {
  id: number;
  title: string;
  description: string;
  category: Category;
  icon: React.ElementType;
}

const SERVICES: Service[] = [
  { id: 1, title: 'Urgences 24h/24', description: 'Prise en charge immédiate, équipe disponible 24h/24, 7j/7.', category: 'Urgences', icon: Phone },
  { id: 2, title: 'Chirurgie Générale', description: "Interventions chirurgicales digestives, abdominales et d'urgence.", category: 'Chirurgie', icon: Activity },
  { id: 3, title: 'Chirurgie Pédiatrique', description: 'Chirurgie adaptée aux enfants et nourrissons.', category: 'Chirurgie', icon: Baby },
  { id: 4, title: 'Bloc Opératoire', description: "Salles d'opération équipées pour toutes interventions.", category: 'Chirurgie', icon: Activity },
  { id: 5, title: 'Orthopédie-Traumatologie', description: 'Fractures, traumatismes et pathologies ostéo-articulaires.', category: 'Chirurgie', icon: Bone },
  { id: 6, title: 'Neurochirurgie', description: 'Interventions neurochirurgicales spécialisées.', category: 'Chirurgie', icon: Brain },
  { id: 7, title: 'Hospitalisation Chirurgicale Polyvalente', description: "Unité d'hospitalisation pour patients chirurgicaux.", category: 'Chirurgie', icon: Building2 },
  { id: 8, title: 'Médecine Interne', description: 'Diagnostic et prise en charge des pathologies complexes.', category: 'Médecine', icon: Stethoscope },
  { id: 9, title: 'Cardiologie', description: 'Prévention, diagnostic et traitement des maladies du cœur.', category: 'Médecine', icon: Heart },
  { id: 10, title: 'Pédiatrie', description: "Soins spécialisés pour les enfants de la naissance à l'adolescence.", category: 'Médecine', icon: Baby },
  { id: 11, title: 'Gynécologie-Obstétrique', description: 'Suivi de grossesse, accouchement, soins gynécologiques.', category: 'Médecine', icon: Heart },
  { id: 12, title: 'Neurologie', description: 'Pathologies du système nerveux central et périphérique.', category: 'Médecine', icon: Brain },
  { id: 13, title: 'Pneumologie', description: 'Maladies respiratoires et pathologies pulmonaires.', category: 'Médecine', icon: Wind },
  { id: 14, title: 'Rhumatologie', description: 'Maladies des articulations, os et muscles.', category: 'Médecine', icon: Bone },
  { id: 15, title: 'Nutrition', description: 'Accompagnement nutritionnel et prise en charge des carences.', category: 'Médecine', icon: Leaf },
  { id: 16, title: 'Ophtalmologie', description: 'Soins des yeux et traitement des pathologies visuelles.', category: 'Spécialités', icon: Eye },
  { id: 17, title: 'ORL', description: 'Oto-Rhino-Laryngologie : oreilles, nez, gorge.', category: 'Spécialités', icon: Activity },
  { id: 18, title: 'Dentisterie', description: 'Soins dentaires, extractions et chirurgie buccale.', category: 'Spécialités', icon: Smile },
  { id: 19, title: 'Dermatologie-Vénérologie', description: 'Maladies de la peau et infections sexuellement transmissibles.', category: 'Spécialités', icon: Shield },
  { id: 20, title: 'Endocrinologie / Diabétologie', description: 'Diabète, thyroïde et troubles hormonaux.', category: 'Spécialités', icon: Activity },
  { id: 21, title: 'Urologie', description: "Maladies de l'appareil urinaire et génital masculin.", category: 'Spécialités', icon: Shield },
  { id: 22, title: 'Kinésithérapie', description: 'Rééducation fonctionnelle et physiothérapie.', category: 'Spécialités', icon: Dumbbell },
  { id: 23, title: 'Pharmacie', description: 'Dispensation des médicaments et conseil pharmaceutique.', category: 'Spécialités', icon: Pill },
  { id: 24, title: 'Hygiène', description: 'Hygiène hospitalière et prévention des infections.', category: 'Spécialités', icon: Shield },
  { id: 25, title: 'Imagerie Médicale', description: "Échographie, radiologie et examens d'imagerie médicale.", category: 'Imagerie & Labo', icon: Monitor },
  { id: 26, title: 'Radiologie', description: 'Radiographies et imagerie diagnostique.', category: 'Imagerie & Labo', icon: Monitor },
  { id: 27, title: "Laboratoire d'ANAPATH", description: 'Analyses anatomopathologiques et biopsies.', category: 'Imagerie & Labo', icon: Microscope },
  { id: 28, title: 'Buanderie', description: 'Service de blanchisserie hospitalière.', category: 'Imagerie & Labo', icon: Shirt },
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
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');

  const filteredServices =
    activeCategory === 'Tous'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="/services" />

      <PageHero
        eyebrow="Pôle Médical"
        title="Nos 28 Spécialités Médicales"
        description="Nous sommes ravis d'accueillir de nouveaux patients et de fournir des soins de qualité. Notre équipe dévouée est prête à vous accompagner à chaque étape."
        number="28"
        meta={[
          { icon: Stethoscope, label: '28 spécialités' },
          { icon: Phone, label: 'Urgences 24h/24' },
          { icon: Award, label: 'Certifié ISO 9001:2015' },
        ]}
      />

      {/* ── Filtres ── */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3 shadow-sm">
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
                      ? 'bg-foreground text-white border-foreground shadow-md'
                      : 'bg-background text-foreground border-border hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {cat}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-secondary text-muted-foreground'
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

      {/* ── Grille de services ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground mb-10 text-sm uppercase tracking-[0.2em]">
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
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-full bg-medical-copper/10 text-medical-copper flex items-center justify-center group-hover:bg-medical-copper group-hover:text-white transition-colors duration-200 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-3xl font-heading font-semibold text-secondary-foreground/15 group-hover:text-medical-copper/40 transition-colors">
                        {String(service.id).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col gap-1.5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-medical-copper">
                        {service.category}
                      </p>
                      <h3 className="font-heading font-semibold text-foreground text-lg leading-snug group-hover:text-medical-copper transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bandeau urgences ── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-emergency-red/5 border-y border-emergency-red/15">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emergency-red/10 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-emergency-red" />
            </div>
            <div>
              <p className="font-heading font-semibold text-red-700 text-base">Urgences disponibles 24h/24 — 7j/7</p>
              <p className="text-red-600 text-sm">Notre équipe est mobilisée à tout moment pour votre prise en charge immédiate.</p>
            </div>
          </div>
          <a
            href="tel:+237671440486"
            className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emergency-red text-white font-semibold text-sm hover:bg-emergency-red/90 transition-colors duration-200 flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            +237 671 440 486
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 medical-gradient text-white relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Besoin d'une consultation ?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Prenez rendez-vous en ligne avec l'un de nos spécialistes. Une prise en charge rapide et bienveillante vous attend.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 font-semibold min-h-[48px] shadow-lg rounded-full px-10 transition-colors duration-200"
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
};

export default Services;

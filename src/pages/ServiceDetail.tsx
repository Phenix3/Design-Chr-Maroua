import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Phone, Clock, CheckCircle, ArrowRight, MapPin, Mail
} from 'lucide-react';
import { getServiceBySlug, getRelatedServices } from '@/lib/services';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center px-4 py-24">
          <div className="text-center max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-medical-copper mb-4">
              Service introuvable
            </p>
            <h1 className="text-5xl font-heading font-semibold text-foreground leading-tight mb-4">
              Ce service n'existe pas
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Le service que vous recherchez a peut-être été renommé ou déplacé.
            </p>
            <Link to="/services">
              <Button className="cursor-pointer medical-gradient text-white rounded-full px-10 min-h-[48px]">
                Voir les 28 spécialités
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const Icon = service.icon;
  const related = getRelatedServices(service);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader active="/services" />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.description}
        number={String(service.id).padStart(2, '0')}
        numberSize="9rem"
        meta={[
          { icon: Clock, label: 'Rendez-vous sur demande' },
          { icon: Phone, label: 'Urgences 24h/24' },
        ]}
      />

      {/* ── Détail ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
            {/* Texte */}
            <Reveal>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-medical-copper/30 bg-medical-copper/10 px-4 py-1.5">
                  <Icon className="w-4 h-4 text-medical-copper" />
                  <span className="text-sm font-semibold text-medical-copper uppercase tracking-wider">{service.category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground leading-tight">
                  Le service <em className="italic text-medical-copper">{service.title}</em> en détail
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Points clés */}
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-5">
                    Ce que nous proposons
                  </h3>
                  <ul className="space-y-3.5">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-medical-copper flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Image + accès */}
            <Reveal delay={120}>
              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-[6px] border-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-72 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 dark:bg-card/90 text-foreground border-0">{service.category}</Badge>
                  </div>
                </div>

                {/* Comment prendre rendez-vous */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-4">
                      Prendre rendez-vous
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full medical-gradient text-white flex items-center justify-center flex-shrink-0 text-xs font-bold font-heading">1</div>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground">En ligne</p>
                          <p className="text-muted-foreground text-xs mt-0.5">Remplissez le formulaire de rendez-vous, nous vous recontactons.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full medical-gradient text-white flex items-center justify-center flex-shrink-0 text-xs font-bold font-heading">2</div>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground">Par téléphone</p>
                          <p className="text-muted-foreground text-xs mt-0.5">Standard : <a href="tel:+237689867206" className="text-medical-copper font-medium hover:underline">+237 689 867 206</a>, Lun–Ven 7h–18h.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full medical-gradient text-white flex items-center justify-center flex-shrink-0 text-xs font-bold font-heading">3</div>
                        <div className="text-sm">
                          <p className="font-semibold text-foreground">Sur place</p>
                          <p className="text-muted-foreground text-xs mt-0.5">Accueil administratif — Sékandé, Maroua, Lun–Ven 7h30–15h30.</p>
                        </div>
                      </li>
                    </ul>
                    <div className="flex flex-col gap-3 mt-5">
                      <Link to="/rendez-vous">
                        <Button className="w-full cursor-pointer medical-gradient text-white rounded-full min-h-[44px]">
                          <Calendar className="w-4 h-4 mr-2" />
                          Prendre rendez-vous
                        </Button>
                      </Link>
                      <a href="tel:+237671440486">
                        <Button variant="outline" className="w-full cursor-pointer rounded-full border-emergency-red/40 text-emergency-red hover:bg-emergency-red/5 min-h-[44px]">
                          <Phone className="w-4 h-4 mr-2" />
                          Urgences 24h/24
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services liés ── */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-medical-sand px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <Badge className="mb-3 bg-white text-medical-copper hover:bg-white dark:bg-secondary dark:text-medical-gold dark:hover:bg-secondary uppercase tracking-[0.2em]">Dans le même pôle</Badge>
                <h2 className="text-3xl font-heading font-semibold text-foreground leading-tight">
                  Services associés
                </h2>
              </div>
              <Link to="/services" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-medical-copper transition-colors cursor-pointer">
                Tous les services
                <ArrowRight className="w-4 h-4 text-medical-copper" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r, i) => {
                const RIcon = r.icon;
                return (
                  <Reveal key={r.id} delay={i * 80} className="h-full">
                    <Link to={`/services/${r.slug}`} className="block group h-full">
                      <Card className="hover-lift cursor-pointer border border-border bg-card overflow-hidden transition-shadow duration-200 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-11 h-11 rounded-full bg-medical-copper/10 text-medical-copper flex items-center justify-center group-hover:bg-medical-copper group-hover:text-white transition-colors duration-200">
                              <RIcon className="w-5 h-5" />
                            </div>
                            <span className="text-2xl font-heading font-semibold text-secondary-foreground/15 group-hover:text-medical-copper/40 transition-colors">
                              {String(r.id).padStart(2, '0')}
                            </span>
                          </div>
                          <h3 className="font-heading font-semibold text-foreground text-lg mb-1.5 group-hover:text-medical-copper transition-colors">
                            {r.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
            <div className="text-center mt-10 lg:hidden">
              <Link to="/services">
                <Button variant="outline" className="cursor-pointer rounded-full border-foreground/20 min-h-[44px] px-8">
                  Tous les services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 lg:py-24 medical-gradient text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Une question sur ce service ?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Notre équipe vous renseigne et vous oriente vers le bon spécialiste.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-medical-pine hover:bg-white/90 font-semibold min-h-[48px] shadow-lg rounded-full px-10 transition-colors duration-200">
                  <Mail className="w-5 h-5 mr-2" />
                  Nous contacter
                </Button>
              </Link>
              <Link to="/rendez-vous">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 min-h-[48px] rounded-full px-10 transition-colors duration-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ServiceDetail;

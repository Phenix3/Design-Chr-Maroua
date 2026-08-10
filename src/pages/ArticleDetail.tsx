import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Calendar, Clock, ArrowRight, ArrowLeft, Phone, Tag, Newspaper, User,
  MessageCircle
} from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { articles } from '@/lib/articles';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const others = articles.filter(a => a.slug !== slug).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader active="/actualites" />
        <div className="py-28 px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-medical-copper mb-4">
            Article introuvable
          </p>
          <h1 className="text-4xl font-heading font-semibold text-foreground mb-4">
            Cet article n'existe pas
          </h1>
          <p className="text-muted-foreground mb-8">
            Il a peut-être été déplacé ou retiré. Revenez à la liste des actualités pour continuer votre visite.
          </p>
          <Link to="/actualites">
            <Button className="cursor-pointer medical-gradient text-white rounded-full px-10 min-h-[48px]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Toutes les actualités
            </Button>
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader active="/actualites" />

      <PageHero
        eyebrow={article.categorie}
        title={article.titre}
        description={article.extrait}
        number={String(article.id).padStart(2, '0')}
        numberSize="9rem"
        meta={[
          { icon: Calendar, label: article.date },
          { icon: User, label: article.auteur },
          { icon: Newspaper, label: article.categorie },
        ]}
        images={[article.image, IMAGES.HOSPITAL_INTERIOR_3, IMAGES.MEDICAL_TEAM_5]}
      />

      {/* ── Article complet ── */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
            {/* Texte */}
            <Reveal>
            <div>
              <Link
                to="/actualites"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-medical-copper transition-colors cursor-pointer mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux actualités
              </Link>

              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-lg mb-10 aspect-[16/9]">
                <img
                  src={article.image}
                  alt={article.titre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-card/95 text-medical-copper dark:text-medical-gold border-0">
                  {article.categorie}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-medical-copper" /> {article.date}</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-medical-copper" /> {article.auteur}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-medical-copper" /> Lecture ~3 min</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6 leading-snug">
                {article.titre}
              </h2>
              <div className="prose-editorial text-muted-foreground leading-relaxed space-y-5 text-base">
                <p>{article.contenu}</p>
                <p>
                  Le Centre Hospitalier Régional de Maroua reste engagé à vos côtés pour une prise en charge
                  sûre et de qualité, certifiée ISO 9001:2015. Pour toute question, notre équipe est disponible
                  au standard {`+237 689 867 206`}.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {article.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Tag className="w-3 h-3 text-medical-copper" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>

            {/* Colonne latérale */}
            <div className="space-y-6 lg:sticky lg:top-28">
              <Reveal delay={100}>
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-base flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-medical-copper" /> Autres actualités
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {others.length === 0 && (
                    <p className="text-sm text-muted-foreground">Aucune autre actualité pour le moment.</p>
                  )}
                  {others.map(other => (
                    <Link
                      key={other.id}
                      to={`/actualites/${other.slug}`}
                      className="group flex items-center gap-3 p-2 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={other.image} alt="" loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground mb-0.5">{other.date}</p>
                        <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-medical-copper transition-colors line-clamp-2">
                          {other.titre}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-border">
                    <Link
                      to="/actualites"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-medical-copper transition-colors cursor-pointer"
                    >
                      Toutes les actualités
                      <ArrowRight className="w-4 h-4 text-medical-copper" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              </Reveal>

              <Reveal delay={150}>
              <Card className="border-border medical-gradient text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 border border-white/25 mb-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Une question ?</h3>
                  <p className="text-sm text-white/85 leading-relaxed mb-5">
                    Notre équipe est disponible pour vous renseigner sur nos services et votre parcours de soins.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+237689867206">
                      <Button className="w-full cursor-pointer bg-white text-medical-pine hover:bg-white/90 font-semibold min-h-[44px] rounded-full">
                        <Phone className="w-4 h-4 mr-2" /> +237 689 867 206
                      </Button>
                    </a>
                    <Link to="/rendez-vous">
                      <Button variant="outline" className="w-full cursor-pointer border-2 border-white/40 text-white hover:bg-white/10 min-h-[44px] rounded-full">
                        Prendre rendez-vous
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-medical-sand">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
          <h2 className="text-2xl lg:text-4xl font-heading font-semibold text-foreground mb-3">
            Restez informé de nos actualités
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Découvrez nos campagnes de santé, nos services et la vie du CHR Maroua au fil de nos publications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/actualites">
              <Button size="lg" className="cursor-pointer medical-gradient text-white hover:opacity-90 transition-opacity rounded-full px-10 min-h-[52px]">
                Toutes les actualités
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="cursor-pointer rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-medical-pine hover:text-white transition-colors min-h-[52px] px-10">
                Nous Contacter
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

export default ArticleDetail;

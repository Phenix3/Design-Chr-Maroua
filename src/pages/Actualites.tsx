import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Phone, ArrowRight, Tag, Facebook, Youtube, MessageCircle,
  Newspaper, Clock
} from 'lucide-react';
import { articles } from '@/lib/articles';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

const categories = ['Tous', 'Santé Publique', 'Cardiologie'];

const Actualites = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = activeCategory === 'Tous'
    ? articles
    : articles.filter(a => a.categorie === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader active="/actualites" />

      <PageHero
        eyebrow="Actualités"
        title="Actualités & Informations"
        description="Restez informé des dernières nouvelles, campagnes de santé et services du Centre Hospitalier Régional de Maroua."
        number="2"
        meta={[
          { icon: Newspaper, label: '2 publications' },
          { icon: Phone, label: 'Urgences 24h/24' },
        ]}
      />

      {/* ── Filtres ── */}
      <section className="py-6 px-4 border-b border-border bg-background">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer min-h-[40px] ${
                activeCategory === cat
                  ? 'bg-medical-pine text-white shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Aucun article dans cette catégorie.</p>
          )}
          {filtered.map(article => (
            <Card key={article.id} className="overflow-hidden border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-72 flex-shrink-0 relative">
                  <img src={article.image} alt={article.titre} loading="lazy" className="w-full h-52 md:h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-foreground/40 to-transparent" />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge className="bg-medical-copper/10 text-medical-copper hover:bg-medical-copper/10 border-0 text-xs">
                      {article.categorie}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {article.auteur}</span>
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3 leading-snug">{article.titre}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {expandedId === article.id ? article.contenu : article.extrait}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {article.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                        <Tag className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant={expandedId === article.id ? 'outline' : 'default'}
                    size="sm"
                    onClick={() => setExpandedId(expandedId === article.id ? null : article.id)}
                    className="cursor-pointer min-h-[40px] rounded-full px-6"
                  >
                    {expandedId === article.id ? 'Réduire' : 'Lire la suite'}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Réseaux sociaux ── */}
      <section className="py-12 px-4 bg-medical-sand">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Suivez-nous pour plus d'actualités</h3>
          <p className="text-sm text-muted-foreground mb-6">D'autres actualités seront publiées prochainement. Suivez-nous sur nos réseaux sociaux.</p>
          <div className="flex justify-center flex-wrap gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors cursor-pointer min-h-[44px]">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href="https://wa.me/237689867206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white text-sm rounded-full hover:bg-emerald-700 transition-colors cursor-pointer min-h-[44px]">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="https://youtube.com/@chr_maroua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-colors cursor-pointer min-h-[44px]">
              <Youtube className="w-4 h-4" /> YouTube
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Actualites;

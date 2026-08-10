import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Phone, Mail, Menu, X, Stethoscope, ArrowRight,
  Tag, Facebook, Youtube, MessageCircle, Newspaper, Clock
} from 'lucide-react';
import { IMAGES } from '@/assets/images';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
  { to: '/informations', label: 'Informations' },
];

const articles = [
  {
    id: 1,
    titre: 'Campagne de santé gratuite Extrême-Nord 2025',
    date: '18 juin 2025',
    categorie: 'Santé Publique',
    auteur: 'CHR Maroua',
    image: IMAGES.PATIENT_CARE_1,
    extrait: "La campagne de santé prévue du 21 au 27 juin 2025 dans la région de l'Extrême-Nord vise à offrir des soins gratuits à plus de 500 000 personnes.",
    contenu: "La campagne de santé programmée du 21 au 27 juin 2025 dans la région de l'Extrême-Nord vise à offrir des soins gratuits à plus de 500 000 personnes. Coordonnée par le Ministre de la Santé Dr Manaouda Malachie, elle mobilise 1 865 volontaires dans plusieurs villes de la région : Maroua, Bogo, Kaélé, Mora et Mokolo. La campagne combine consultations médicales, interventions chirurgicales et dépistages dans le cadre des objectifs de couverture sanitaire universelle. Le CHR Maroua participe activement à cette initiative majeure pour la santé des populations de la région.",
    tags: ['Prévention', 'Santé Publique', 'Extrême-Nord'],
  },
  {
    id: 2,
    titre: 'Département de Cardiologie — Nos Services Médicaux',
    date: '4 avril 2025',
    categorie: 'Cardiologie',
    auteur: 'Service de Cardiologie',
    image: IMAGES.MEDICAL_EQUIPMENT_2,
    extrait: "Le département de Cardiologie du CHR Maroua assure la prévention, le diagnostic et le traitement de toutes les maladies du cœur et des vaisseaux.",
    contenu: "Le département de Cardiologie du CHR Maroua assure la prévention, le diagnostic et le traitement de toutes les maladies du cœur et des vaisseaux sanguins. Notre équipe multidisciplinaire travaille avec des équipements adaptés pour offrir des soins cardiovasculaires de qualité à la population de la région Extrême-Nord du Cameroun. Nous proposons des consultations spécialisées, des examens électrocardiographiques, des échocardiographies et un suivi personnalisé pour chaque patient.",
    tags: ['Cardiologie', 'Services', 'Spécialités'],
  },
];

const categories = ['Tous', 'Santé Publique', 'Cardiologie'];

const Actualites = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = activeCategory === 'Tous'
    ? articles
    : articles.filter(a => a.categorie === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 medical-gradient rounded-xl flex items-center justify-center shadow-sm">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-foreground text-sm font-heading block leading-tight">CHR Maroua</span>
                <span className="text-xs text-muted-foreground">Sécurité · Qualité · Humanisation</span>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map(l => (
                <Link key={l.to} to={l.to} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors duration-200 cursor-pointer font-medium">{l.label}</Link>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+237671440486" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-emergency-red border border-emergency-red/30 rounded-lg hover:bg-emergency-red/5 transition-colors cursor-pointer min-h-[40px]">
                <Phone className="w-4 h-4" /> Urgences
              </a>
              <Link to="/rendez-vous">
                <Button className="cursor-pointer medical-gradient text-white shadow-sm hover:opacity-90 min-h-[40px]">
                  <Calendar className="w-4 h-4 mr-2" /> Rendez-vous
                </Button>
              </Link>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-secondary cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Menu">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border py-3 space-y-1">
              {NAV_LINKS.map(l => (
                <Link key={l.to} to={l.to} className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>{l.label}</Link>
              ))}
              <div className="pt-3 border-t border-border space-y-2 mt-2">
                <a href="tel:+237671440486" className="flex items-center gap-2 px-3 py-2.5 text-sm text-emergency-red font-medium cursor-pointer min-h-[44px]"><Phone className="w-4 h-4" /> +237 671 440 486</a>
                <Link to="/rendez-vous" onClick={() => setIsMenuOpen(false)}><Button className="w-full medical-gradient text-white min-h-[44px] cursor-pointer"><Calendar className="w-4 h-4 mr-2" />Rendez-vous</Button></Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="medical-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Newspaper className="w-3 h-3 mr-1" /> Actualités
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Actualités & Informations</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Restez informé des dernières nouvelles, campagnes de santé et services du Centre Hospitalier Régional de Maroua.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-6 px-4 border-b border-border bg-white">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer min-h-[40px] ${
                activeCategory === cat
                  ? 'medical-gradient text-white shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:text-primary border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Aucun article dans cette catégorie.</p>
          )}
          {filtered.map(article => (
            <Card key={article.id} className="overflow-hidden border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-64 flex-shrink-0">
                  <img src={article.image} alt={article.titre} loading="lazy" className="w-full h-52 md:h-full object-cover" />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className="bg-secondary text-primary hover:bg-secondary text-xs border-0">{article.categorie}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {article.auteur}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 font-heading leading-snug">{article.titre}</h2>
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
                    className="cursor-pointer min-h-[40px]"
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

      {/* Réseaux sociaux */}
      <section className="py-12 px-4 bg-secondary/40">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-lg font-bold text-foreground mb-2 font-heading">Suivez-nous pour plus d'actualités</h3>
          <p className="text-sm text-muted-foreground mb-6">D'autres actualités seront publiées prochainement. Suivez-nous sur nos réseaux sociaux.</p>
          <div className="flex justify-center flex-wrap gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors cursor-pointer min-h-[44px]">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href="https://wa.me/237689867206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer min-h-[44px]">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="https://youtube.com/@chr_maroua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors cursor-pointer min-h-[44px]">
              <Youtube className="w-4 h-4" /> YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 medical-gradient rounded-lg flex items-center justify-center"><Stethoscope className="w-5 h-5 text-white" /></div>
                <div><p className="font-bold text-sm font-heading">CHR Maroua</p><p className="text-xs text-white/60">Centre Hospitalier Régional</p></div>
              </div>
              <p className="text-white/60 text-sm">Sékandé, Maroua — Extrême-Nord, Cameroun.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 font-heading uppercase tracking-wide text-white/70">Contact</h4>
              <div className="space-y-2 text-sm text-white/65">
                <a href="tel:+237689867206" className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Phone className="w-4 h-4" />+237 689 867 206</a>
                <a href="tel:+237671440486" className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors text-emergency-red/80"><Phone className="w-4 h-4" />+237 671 440 486 (Urgences)</a>
                <a href="mailto:contact@chr-maroua.cm" className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Mail className="w-4 h-4" />contact@chr-maroua.cm</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 font-heading uppercase tracking-wide text-white/70">Navigation</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-white/65">
                {NAV_LINKS.map(l => <Link key={l.to} to={l.to} className="hover:text-white transition-colors cursor-pointer">{l.label}</Link>)}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Centre Hospitalier Régional de Maroua. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Actualites;

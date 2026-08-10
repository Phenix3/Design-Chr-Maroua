import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Phone, Menu, X, Stethoscope, Calendar, ChevronLeft, ChevronRight,
  Eye, Images, MapPin, Mail
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

type GalleryItem = { src: string; alt: string; category: string; caption: string };

const galleryItems: GalleryItem[] = [
  { src: IMAGES.HOSPITAL_EXTERIOR_1, alt: 'Vue aérienne du CHR Maroua 1', category: 'Extérieur', caption: 'Vue aérienne du campus hospitalier — Face principale' },
  { src: IMAGES.HOSPITAL_EXTERIOR_2, alt: 'Vue aérienne du CHR Maroua 2', category: 'Extérieur', caption: 'Vue aérienne du campus — Aile Est' },
  { src: IMAGES.HOSPITAL_EXTERIOR_3, alt: 'Vue aérienne du CHR Maroua 3', category: 'Extérieur', caption: 'Campus hospitalier depuis le sud' },
  { src: IMAGES.HOSPITAL_EXTERIOR_4, alt: 'Vue aérienne du CHR Maroua 4', category: 'Extérieur', caption: 'Vue globale du complexe hospitalier' },
  { src: IMAGES.HOSPITAL_EXTERIOR_5, alt: 'Vue aérienne du CHR Maroua 5', category: 'Extérieur', caption: 'Entrée principale et parking' },
  { src: IMAGES.HOSPITAL_EXTERIOR_6, alt: 'Vue aérienne du CHR Maroua 6', category: 'Extérieur', caption: 'Aile des consultations externes' },
  { src: IMAGES.HOSPITAL_EXTERIOR_7, alt: 'Vue aérienne du CHR Maroua 7', category: 'Extérieur', caption: 'Zone d\'urgences — accès ambulances' },
  { src: IMAGES.HOSPITAL_EXTERIOR_8, alt: 'Vue aérienne du CHR Maroua 8', category: 'Extérieur', caption: 'Campus vu depuis le nord' },
  { src: IMAGES.HOSPITAL_EXTERIOR_9, alt: 'Vue aérienne du CHR Maroua 9', category: 'Extérieur', caption: 'Perspective panoramique du site' },
  { src: IMAGES.HOSPITAL_EXTERIOR_10, alt: 'Vue aérienne du CHR Maroua 10', category: 'Extérieur', caption: 'Vue d\'ensemble du CHR Maroua' },
  { src: IMAGES.HOSPITAL_INTERIOR_1, alt: 'Intérieur du CHR Maroua 1', category: 'Intérieur', caption: 'Hall d\'accueil principal' },
  { src: IMAGES.HOSPITAL_INTERIOR_2, alt: 'Intérieur du CHR Maroua 2', category: 'Intérieur', caption: 'Couloir des consultations' },
  { src: IMAGES.HOSPITAL_INTERIOR_3, alt: 'Intérieur du CHR Maroua 3', category: 'Intérieur', caption: 'Salle d\'attente patients' },
  { src: IMAGES.HOSPITAL_INTERIOR_4, alt: 'Intérieur du CHR Maroua 4', category: 'Intérieur', caption: 'Unité d\'hospitalisation' },
  { src: IMAGES.HOSPITAL_INTERIOR_5, alt: 'Intérieur du CHR Maroua 5', category: 'Intérieur', caption: 'Service de pédiatrie' },
  { src: IMAGES.HOSPITAL_INTERIOR_6, alt: 'Intérieur du CHR Maroua 6', category: 'Intérieur', caption: 'Couloir de chirurgie' },
  { src: IMAGES.HOSPITAL_INTERIOR_7, alt: 'Intérieur du CHR Maroua 7', category: 'Intérieur', caption: 'Zone de réception administrative' },
  { src: IMAGES.HOSPITAL_INTERIOR_8, alt: 'Intérieur du CHR Maroua 8', category: 'Intérieur', caption: 'Unité de soins intensifs' },
  { src: IMAGES.HOSPITAL_INTERIOR_9, alt: 'Intérieur du CHR Maroua 9', category: 'Intérieur', caption: 'Service de maternité' },
  { src: IMAGES.HOSPITAL_INTERIOR_10, alt: 'Intérieur du CHR Maroua 10', category: 'Intérieur', caption: 'Salle d\'examen médical' },
  { src: IMAGES.MEDICAL_EQUIPMENT_1, alt: 'Équipements médicaux 1', category: 'Équipements', caption: 'Équipements d\'imagerie médicale' },
  { src: IMAGES.MEDICAL_EQUIPMENT_2, alt: 'Équipements médicaux 2', category: 'Équipements', caption: 'Matériel de cardiologie' },
  { src: IMAGES.MEDICAL_EQUIPMENT_3, alt: 'Équipements médicaux 3', category: 'Équipements', caption: 'Équipements du bloc opératoire' },
  { src: IMAGES.MEDICAL_EQUIPMENT_4, alt: 'Équipements médicaux 4', category: 'Équipements', caption: 'Appareils de diagnostic' },
  { src: IMAGES.MEDICAL_EQUIPMENT_5, alt: 'Équipements médicaux 5', category: 'Équipements', caption: 'Matériel de laboratoire' },
  { src: IMAGES.MEDICAL_TEAM_1, alt: 'Équipe médicale 1', category: 'Équipes', caption: 'Équipe médicale du CHR Maroua' },
  { src: IMAGES.MEDICAL_TEAM_2, alt: 'Équipe médicale 2', category: 'Équipes', caption: 'Spécialistes en consultation' },
  { src: IMAGES.MEDICAL_TEAM_3, alt: 'Équipe médicale 3', category: 'Équipes', caption: 'Personnel soignant en action' },
  { src: IMAGES.MEDICAL_TEAM_4, alt: 'Équipe médicale 4', category: 'Équipes', caption: 'Médecins et infirmiers du CHR' },
  { src: IMAGES.MEDICAL_TEAM_5, alt: 'Équipe médicale 5', category: 'Équipes', caption: 'L\'équipe pluridisciplinaire du CHR Maroua' },
];

const categories = ['Tous', 'Extérieur', 'Intérieur', 'Équipements', 'Équipes'];

const Gallery = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'Tous'
    ? galleryItems
    : galleryItems.filter(img => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const nextImage = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  }, [closeLightbox, prevImage, nextImage]);

  return (
    <div className="min-h-screen bg-background" onKeyDown={handleKeyDown}>
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
            <Images className="w-3 h-3 mr-1" /> Galerie Photographique
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Galerie du CHR Maroua</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
            Découvrez les installations du Centre Hospitalier Régional de Maroua — campus photographié en janvier 2025.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/85">
            <span className="flex items-center gap-1.5"><Images className="w-4 h-4" /> {galleryItems.length} photos</span>
            <span className="flex items-center gap-1.5"><span className="font-bold">DJI</span> Drone DJI</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Janvier 2025</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Sékandé, Maroua</span>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-6 px-4 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
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
              {cat} {cat === 'Tous' ? `(${galleryItems.length})` : `(${galleryItems.filter(i => i.category === cat).length})`}
            </button>
          ))}
        </div>
      </section>

      {/* Grille */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square bg-secondary"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`Voir : ${item.caption}`}
                onKeyDown={e => e.key === 'Enter' && openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-xs leading-tight">{item.caption}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge className="bg-primary/80 text-white border-0 text-xs">{item.category}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image"
        >
          <button
            className="absolute top-4 right-4 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            onClick={e => { e.stopPropagation(); prevImage(); }}
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            onClick={e => { e.stopPropagation(); nextImage(); }}
            aria-label="Image suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-medium text-sm mb-1">{filtered[lightboxIndex].caption}</p>
              <p className="text-white/50 text-xs">{lightboxIndex + 1} / {filtered.length} — {filtered[lightboxIndex].category}</p>
            </div>
          </div>
        </div>
      )}

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
                <a href="tel:+237671440486" className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Phone className="w-4 h-4 text-emergency-red" />+237 671 440 486 (Urgences)</a>
                <a href="mailto:contact@chr-maroua.cm" className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Mail className="w-4 h-4" />contact@chr-maroua.cm</a>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>Sékandé, Maroua, Extrême-Nord</span></div>
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

export default Gallery;

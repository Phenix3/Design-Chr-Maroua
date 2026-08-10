import React, { useState, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, ChevronLeft, ChevronRight, Eye, Images, MapPin, X
} from 'lucide-react';
import { IMAGES } from '@/assets/images';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

type GalleryItem = { src: string; alt: string; category: string; caption: string };

const galleryItems: GalleryItem[] = [
  { src: IMAGES.HOSPITAL_EXTERIOR_1, alt: 'Vue aérienne du CHR Maroua 1', category: 'Extérieur', caption: 'Vue aérienne du campus hospitalier — Face principale' },
  { src: IMAGES.HOSPITAL_EXTERIOR_2, alt: 'Vue aérienne du CHR Maroua 2', category: 'Extérieur', caption: 'Vue aérienne du campus — Aile Est' },
  { src: IMAGES.HOSPITAL_EXTERIOR_3, alt: 'Vue aérienne du CHR Maroua 3', category: 'Extérieur', caption: 'Campus hospitalier depuis le sud' },
  { src: IMAGES.HOSPITAL_EXTERIOR_4, alt: 'Vue aérienne du CHR Maroua 4', category: 'Extérieur', caption: 'Vue globale du complexe hospitalier' },
  { src: IMAGES.HOSPITAL_EXTERIOR_5, alt: 'Vue aérienne du CHR Maroua 5', category: 'Extérieur', caption: 'Entrée principale et parking' },
  { src: IMAGES.HOSPITAL_EXTERIOR_6, alt: 'Vue aérienne du CHR Maroua 6', category: 'Extérieur', caption: 'Aile des consultations externes' },
  { src: IMAGES.HOSPITAL_EXTERIOR_7, alt: 'Vue aérienne du CHR Maroua 7', category: 'Extérieur', caption: "Zone d'urgences — accès ambulances" },
  { src: IMAGES.HOSPITAL_EXTERIOR_8, alt: 'Vue aérienne du CHR Maroua 8', category: 'Extérieur', caption: 'Campus vu depuis le nord' },
  { src: IMAGES.HOSPITAL_EXTERIOR_9, alt: 'Vue aérienne du CHR Maroua 9', category: 'Extérieur', caption: 'Perspective panoramique du site' },
  { src: IMAGES.HOSPITAL_EXTERIOR_10, alt: 'Vue aérienne du CHR Maroua 10', category: 'Extérieur', caption: "Vue d'ensemble du CHR Maroua" },
  { src: IMAGES.HOSPITAL_INTERIOR_1, alt: 'Intérieur du CHR Maroua 1', category: 'Intérieur', caption: "Hall d'accueil principal" },
  { src: IMAGES.HOSPITAL_INTERIOR_2, alt: 'Intérieur du CHR Maroua 2', category: 'Intérieur', caption: 'Couloir des consultations' },
  { src: IMAGES.HOSPITAL_INTERIOR_3, alt: 'Intérieur du CHR Maroua 3', category: 'Intérieur', caption: "Salle d'attente patients" },
  { src: IMAGES.HOSPITAL_INTERIOR_4, alt: 'Intérieur du CHR Maroua 4', category: 'Intérieur', caption: "Unité d'hospitalisation" },
  { src: IMAGES.HOSPITAL_INTERIOR_5, alt: 'Intérieur du CHR Maroua 5', category: 'Intérieur', caption: 'Service de pédiatrie' },
  { src: IMAGES.HOSPITAL_INTERIOR_6, alt: 'Intérieur du CHR Maroua 6', category: 'Intérieur', caption: 'Couloir de chirurgie' },
  { src: IMAGES.HOSPITAL_INTERIOR_7, alt: 'Intérieur du CHR Maroua 7', category: 'Intérieur', caption: 'Zone de réception administrative' },
  { src: IMAGES.HOSPITAL_INTERIOR_8, alt: 'Intérieur du CHR Maroua 8', category: 'Intérieur', caption: 'Unité de soins intensifs' },
  { src: IMAGES.HOSPITAL_INTERIOR_9, alt: 'Intérieur du CHR Maroua 9', category: 'Intérieur', caption: 'Service de maternité' },
  { src: IMAGES.HOSPITAL_INTERIOR_10, alt: 'Intérieur du CHR Maroua 10', category: 'Intérieur', caption: "Salle d'examen médical" },
  { src: IMAGES.MEDICAL_EQUIPMENT_1, alt: 'Équipements médicaux 1', category: 'Équipements', caption: "Équipements d'imagerie médicale" },
  { src: IMAGES.MEDICAL_EQUIPMENT_2, alt: 'Équipements médicaux 2', category: 'Équipements', caption: 'Matériel de cardiologie' },
  { src: IMAGES.MEDICAL_EQUIPMENT_3, alt: 'Équipements médicaux 3', category: 'Équipements', caption: "Équipements du bloc opératoire" },
  { src: IMAGES.MEDICAL_EQUIPMENT_4, alt: 'Équipements médicaux 4', category: 'Équipements', caption: 'Appareils de diagnostic' },
  { src: IMAGES.MEDICAL_EQUIPMENT_5, alt: 'Équipements médicaux 5', category: 'Équipements', caption: 'Matériel de laboratoire' },
  { src: IMAGES.MEDICAL_TEAM_1, alt: 'Équipe médicale 1', category: 'Équipes', caption: 'Équipe médicale du CHR Maroua' },
  { src: IMAGES.MEDICAL_TEAM_2, alt: 'Équipe médicale 2', category: 'Équipes', caption: 'Spécialistes en consultation' },
  { src: IMAGES.MEDICAL_TEAM_3, alt: 'Équipe médicale 3', category: 'Équipes', caption: 'Personnel soignant en action' },
  { src: IMAGES.MEDICAL_TEAM_4, alt: 'Équipe médicale 4', category: 'Équipes', caption: 'Médecins et infirmiers du CHR' },
  { src: IMAGES.MEDICAL_TEAM_5, alt: 'Équipe médicale 5', category: 'Équipes', caption: "L'équipe pluridisciplinaire du CHR Maroua" },
];

const categories = ['Tous', 'Extérieur', 'Intérieur', 'Équipements', 'Équipes'];

const Gallery = () => {
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
      <SiteHeader active="/galerie" />

      <PageHero
        eyebrow="Galerie Photographique"
        title="Galerie du CHR Maroua"
        description="Découvrez les installations du Centre Hospitalier Régional de Maroua — campus photographié en janvier 2025."
        number="30"
        meta={[
          { icon: Images, label: `${galleryItems.length} photos` },
          { icon: MapPin, label: 'Sékandé, Maroua' },
          { icon: Calendar, label: 'Janvier 2025' },
        ]}
      />

      {/* ── Filtres ── */}
      <section className="py-6 px-4 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer min-h-[40px] ${
                activeCategory === cat
                  ? 'bg-foreground text-white shadow-sm'
                  : 'bg-secondary text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {cat} {cat === 'Tous' ? `(${galleryItems.length})` : `(${galleryItems.filter(i => i.category === cat).length})`}
            </button>
          ))}
        </div>
      </section>

      {/* ── Grille ── */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square bg-secondary"
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
                  <Badge className="bg-foreground/80 text-white border-0 text-xs">{item.category}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
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

      <SiteFooter />
    </div>
  );
};

export default Gallery;

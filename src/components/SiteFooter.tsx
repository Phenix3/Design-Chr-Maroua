import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Phone, MapPin, Mail, Facebook, Youtube, MessageCircle,
  ArrowRight, Clock3, ShieldCheck
} from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
  { to: '/informations', label: 'Informations' },
];

const SiteFooter = () => (
  <footer className="bg-medical-pine text-white py-14 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full medical-gradient flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold">CHR Maroua</h3>
              <p className="text-xs text-white/60">Centre Hospitalier Régional</p>
            </div>
          </div>
          <p className="text-white/65 text-sm leading-relaxed">
            Établissement de santé de référence en Extrême-Nord du Cameroun. Opérationnel depuis 2024,
            certifié ISO 9001:2015.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook CHR Maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://wa.me/237689867206" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp CHR Maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://tiktok.com/@chr_maroua" target="_blank" rel="noopener noreferrer" aria-label="TikTok @chr_maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
              <span className="text-xs font-bold">TK</span>
            </a>
            <a href="https://youtube.com/@chr_maroua" target="_blank" rel="noopener noreferrer" aria-label="YouTube @chr_maroua" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Liens */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-[0.2em] text-white/80">Navigation</h4>
          <ul className="space-y-2.5">
            {[
              { to: '/services', label: 'Nos Services' },
              { to: '/equipe', label: 'Notre Équipe' },
              { to: '/actualites', label: 'Actualités' },
              { to: '/galerie', label: 'Galerie' },
              { to: '/informations', label: 'Informations Pratiques' },
              { to: '/qualite', label: 'Certification Qualité' },
            ].map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/65 hover:text-white transition-colors text-sm flex items-center group cursor-pointer">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-[0.2em] text-white/80">Services Clés</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            {['Urgences 24h/24', 'Cardiologie', 'Gynécologie-Obstétrique', 'Pédiatrie', 'Orthopédie-Traumatologie', 'Imagerie Médicale'].map(s => (
              <li key={s}>
                <Link to="/services" className="hover:text-white transition-colors cursor-pointer">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-[0.2em] text-white/80">Contact</h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-medical-cyan" />
              <a href="tel:+237689867206" className="hover:text-white transition-colors cursor-pointer">+237 689 867 206</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-emergency-red" />
              <a href="tel:+237671440486" className="hover:text-white transition-colors cursor-pointer">+237 671 440 486 <span className="text-xs">(Urgences)</span></a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-medical-cyan" />
              <a href="mailto:contact@chr-maroua.cm" className="hover:text-white transition-colors cursor-pointer">contact@chr-maroua.cm</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-medical-cyan" />
              <span>Sékandé, Maroua<br />Extrême-Nord, Cameroun</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Centre Hospitalier Régional de Maroua. Tous droits réservés.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <Clock3 className="w-3 h-3" />
            Urgences 24h/24 — +237 671 440 486
          </span>
          <span className="hidden sm:block w-px h-3 bg-white/15" aria-hidden="true" />
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-amber-400" />
            Certifié ISO 9001:2015
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;

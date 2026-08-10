import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Phone, Mail, MapPin, Clock, Menu, X, Stethoscope, Calendar,
  Users, CheckCircle, CreditCard, Wifi, Car, ChevronDown, ChevronUp, Info
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

const visitingHours = [
  { service: 'Médecine Générale', heures: '14h00 – 20h00', note: 'Maximum 2 visiteurs simultanément', icon: Users },
  { service: 'Chirurgie', heures: '15h00 – 19h00', note: 'Visites limitées sur recommandation médicale', icon: Clock },
  { service: 'Pédiatrie', heures: '10h00 – 20h00', note: 'Parents autorisés 24h/24', icon: Users },
  { service: 'Réanimation / Soins Intensifs', heures: '16h00 – 18h00', note: 'Autorisation médicale obligatoire', icon: Clock },
  { service: 'Maternité', heures: '10h00 – 21h00', note: 'Conjoint autorisé 24h/24', icon: Users },
];

const admissionSteps = [
  {
    num: 1,
    titre: 'Pré-admission',
    items: ["Pièce d'identité valide", 'Carnet de santé', 'Ordonnance médicale si disponible'],
  },
  {
    num: 2,
    titre: 'Accueil & Enregistrement',
    items: ['Carte CNPS ou attestation assurance', 'Résultats examens antérieurs', 'Liste médicaments en cours'],
  },
  {
    num: 3,
    titre: 'Formalités Administratives',
    items: ['Désignation personne de confiance', 'Directives anticipées (si souhaitées)', 'Signature consentement aux soins'],
  },
  {
    num: 4,
    titre: 'Installation',
    items: ['Affaires personnelles essentielles', 'Coordonnées famille / proche à contacter', 'Informations chambre et équipe soignante'],
  },
];

const payments = [
  { label: 'Espèces (FCFA)', icon: '💵' },
  { label: 'MTN Mobile Money', icon: '📱' },
  { label: 'Orange Money', icon: '📱' },
  { label: 'Assurance CNPS', icon: '🏥' },
  { label: 'Mutuelles de santé', icon: '🤝' },
  { label: 'Prise en charge employeur', icon: '🏢' },
];

const Informations = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>('horaires');

  const toggleSection = (id: string) => setOpenSection(openSection === id ? null : id);

  const sections = [
    {
      id: 'horaires',
      title: 'Horaires de Visite',
      icon: Clock,
      content: (
        <div className="space-y-3">
          {visitingHours.map((v, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
              <v.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-foreground text-sm">{v.service}</span>
                  <Badge className="bg-primary/10 text-primary border-0 text-xs">{v.heures}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{v.note}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'services',
      title: 'Services Pratiques',
      icon: Info,
      content: (
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Car, title: 'Parking', desc: 'Parking disponible sur place, accès gratuit, ouvert en permanence.' },
            { icon: Clock, title: 'Restauration', desc: 'Restauration disponible dans l\'enceinte de l\'établissement.' },
            { icon: Wifi, title: 'WiFi', desc: 'Connexion WiFi gratuite dans les zones d\'attente et d\'accueil.' },
            { icon: Users, title: 'Accessibilité PMR', desc: 'Accès adapté aux personnes à mobilité réduite. Ascenseurs disponibles.' },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
              <s.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'admission',
      title: "Procédure d'Admission",
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          {admissionSteps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 medical-gradient rounded-xl flex items-center justify-center text-white font-bold text-sm font-heading">
                {step.num}
              </div>
              <div className="flex-1 pb-4 border-b border-border last:border-0 last:pb-0">
                <h4 className="font-bold text-foreground text-sm mb-2 font-heading">{step.titre}</h4>
                <ul className="space-y-1">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
            <p className="text-sm font-semibold text-foreground mb-1 font-heading">Contact Admissions</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="tel:+237689867206" className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors"><Phone className="w-4 h-4" />+237 689 867 206</a>
              <a href="mailto:contact@chr-maroua.cm" className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors"><Mail className="w-4 h-4" />contact@chr-maroua.cm</a>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />Lun–Ven, 7h30–15h30</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'paiements',
      title: 'Paiements & Prise en Charge',
      icon: CreditCard,
      content: (
        <div>
          <p className="text-sm text-muted-foreground mb-4">Nous acceptons les modes de paiement suivants :</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {payments.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3 bg-secondary/50 rounded-xl text-sm text-foreground">
                <span>{p.icon}</span>
                <span className="font-medium text-sm">{p.label}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-secondary/50 rounded-xl">
            <p className="text-sm font-semibold text-foreground mb-1 font-heading">Contact Facturation</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="tel:+237689867206" className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors"><Phone className="w-4 h-4" />+237 689 867 206</a>
              <a href="mailto:contact@chr-maroua.cm" className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors"><Mail className="w-4 h-4" />contact@chr-maroua.cm</a>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />Lun–Ven, 9h–16h</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

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
            <Info className="w-3 h-3 mr-1" /> Informations Pratiques
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Informations Pratiques</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant et pendant votre séjour au Centre Hospitalier Régional de Maroua.
          </p>
        </div>
      </section>

      {/* Accès rapide */}
      <section className="py-8 px-4 border-b border-border bg-white">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => { toggleSection(s.id); document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer min-h-[40px] ${openSection === s.id ? 'medical-gradient text-white shadow-sm' : 'bg-secondary text-muted-foreground hover:text-primary border border-border'}`}
            >
              <s.icon className="w-4 h-4" /> {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* Sections accordéon */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {sections.map(s => (
            <Card key={s.id} id={`section-${s.id}`} className="border-border overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-secondary/30 transition-colors min-h-[64px]"
                onClick={() => toggleSection(s.id)}
                aria-expanded={openSection === s.id}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 medical-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-foreground font-heading">{s.title}</span>
                </div>
                {openSection === s.id ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
              </button>
              {openSection === s.id && (
                <CardContent className="px-6 pb-6 pt-0 border-t border-border">
                  <div className="pt-5">{s.content}</div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-secondary/40">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Besoin d'aide ?</h3>
          <p className="text-sm text-muted-foreground mb-6">Notre équipe est disponible pour répondre à toutes vos questions.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+237689867206">
              <Button variant="outline" className="cursor-pointer min-h-[44px]"><Phone className="w-4 h-4 mr-2" /> +237 689 867 206</Button>
            </a>
            <Link to="/contact">
              <Button className="cursor-pointer medical-gradient text-white min-h-[44px] hover:opacity-90">Nous écrire</Button>
            </Link>
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

export default Informations;

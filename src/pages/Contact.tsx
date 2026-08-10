import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Phone, Mail, MapPin, Clock, Menu, X, Stethoscope, Calendar,
  AlertCircle, CheckCircle, Send, Facebook, Youtube, MessageCircle
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

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <Phone className="w-3 h-3 mr-1" /> Nous Contacter
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Contactez-Nous</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à vos questions et vous orienter dans votre parcours de soins.
          </p>
        </div>
      </section>

      {/* Urgences — carte alerte */}
      <section className="py-8 px-4 bg-emergency-red/5 border-y border-emergency-red/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 bg-emergency-red/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-7 h-7 text-emergency-red" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-foreground text-lg font-heading mb-1">Urgences Médicales — 24h/24</h2>
              <p className="text-sm text-muted-foreground">Pour toute urgence, contactez directement notre service d'urgences disponible en permanence.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+237671440486" className="flex items-center gap-2 px-5 py-3 bg-emergency-red text-white rounded-xl font-bold text-sm hover:bg-emergency-red/90 transition-colors cursor-pointer min-h-[48px] shadow-md">
                <Phone className="w-4 h-4" /> +237 671 440 486
              </a>
              <a href="mailto:urgence@chr-maroua.cm" className="flex items-center gap-2 px-5 py-3 border-2 border-emergency-red text-emergency-red rounded-xl font-medium text-sm hover:bg-emergency-red/5 transition-colors cursor-pointer min-h-[48px]">
                <Mail className="w-4 h-4" /> urgence@chr-maroua.cm
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blocs contact */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { icon: Phone, title: 'Standard', value: '+237 689 867 206', href: 'tel:+237689867206', note: 'Lun–Ven, 7h–18h', color: 'text-primary' },
              { icon: Phone, title: 'Urgences', value: '+237 671 440 486', href: 'tel:+237671440486', note: '24h/24, 7j/7', color: 'text-emergency-red' },
              { icon: Mail, title: 'Email', value: 'contact@chr-maroua.cm', href: 'mailto:contact@chr-maroua.cm', note: 'Réponse sous 24h', color: 'text-primary' },
              { icon: MapPin, title: 'Adresse', value: 'Sékandé, Maroua', href: '#localisation', note: 'Extrême-Nord, Cameroun', color: 'text-primary' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="text-center p-5 hover-lift border-border cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1 font-heading">{item.title}</h3>
                    <a href={item.href} className={`text-sm font-semibold ${item.color} hover:underline cursor-pointer block mb-1`}>{item.value}</a>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Formulaire */}
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2 text-xl">
                  <Send className="w-5 h-5 text-primary" /> Envoyer un Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-medical-green" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 font-heading">Message envoyé !</h3>
                    <p className="text-sm text-muted-foreground mb-4">Merci <strong>{form.nom}</strong>. Nous vous répondrons à l'adresse <strong>{form.email}</strong> dans les plus brefs délais.</p>
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="cursor-pointer min-h-[40px]">Nouveau message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nom" className="text-sm font-medium text-foreground block mb-1.5">Nom complet *</label>
                        <input id="nom" name="nom" type="text" required value={form.nom} onChange={handleChange} placeholder="Jean Dupont" className="w-full px-3 py-2.5 border border-input rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors min-h-[44px]" />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="text-sm font-medium text-foreground block mb-1.5">Téléphone</label>
                        <input id="telephone" name="telephone" type="tel" value={form.telephone} onChange={handleChange} placeholder="+237 6XX XXX XXX" className="w-full px-3 py-2.5 border border-input rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors min-h-[44px]" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1.5">Email *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="email@exemple.cm" className="w-full px-3 py-2.5 border border-input rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors min-h-[44px]" />
                    </div>
                    <div>
                      <label htmlFor="sujet" className="text-sm font-medium text-foreground block mb-1.5">Sujet</label>
                      <select id="sujet" name="sujet" value={form.sujet} onChange={handleChange} className="w-full px-3 py-2.5 border border-input rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors cursor-pointer min-h-[44px]">
                        <option value="">Choisir un sujet</option>
                        <option>Demande de renseignements</option>
                        <option>Rendez-vous médical</option>
                        <option>Résultats d'examens</option>
                        <option>Réclamation / Suggestion</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1.5">Message *</label>
                      <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} placeholder="Décrivez votre demande..." className="w-full px-3 py-2.5 border border-input rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none" />
                    </div>
                    <Button type="submit" className="w-full cursor-pointer medical-gradient text-white min-h-[48px] font-semibold hover:opacity-90">
                      <Send className="w-4 h-4 mr-2" /> Envoyer le message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Infos + Numéros utiles */}
            <div className="space-y-6">
              {/* Localisation */}
              <Card id="localisation" className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-base flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Comment nous trouver
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Adresse :</strong> Sékandé, Maroua, Région de l'Extrême-Nord, Cameroun</p>
                  <p>Le CHR Maroua est situé dans le quartier de Sékandé, visible depuis la route principale. Des panneaux de signalisation indiquent l'accès à l'établissement.</p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Accueil administratif : Lun–Ven, 7h30–15h30</span>
                  </div>
                </CardContent>
              </Card>

              {/* Numéros d'urgence nationaux */}
              <Card className="border-emergency-red/20 bg-emergency-red/5">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-base flex items-center gap-2 text-emergency-red">
                    <AlertCircle className="w-5 h-5" /> Numéros d'Urgence Nationaux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { num: '15', label: 'SAMU Cameroun' },
                      { num: '18', label: 'Pompiers' },
                      { num: '117', label: 'Police Nationale' },
                    ].map(item => (
                      <div key={item.num} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <a href={`tel:${item.num}`} className="text-2xl font-bold text-emergency-red hover:underline cursor-pointer font-heading">{item.num}</a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Réseaux sociaux */}
              <Card className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-base">Suivez-nous</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors cursor-pointer min-h-[44px] justify-center">
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                    <a href="https://wa.me/237689867206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer min-h-[44px] justify-center">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                    <a href="https://tiktok.com/@chr_maroua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors cursor-pointer min-h-[44px] justify-center">
                      <span className="font-bold text-xs">TK</span> TikTok @chr_maroua
                    </a>
                    <a href="https://youtube.com/@chr_maroua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors cursor-pointer min-h-[44px] justify-center">
                      <Youtube className="w-4 h-4" /> YouTube
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
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

export default Contact;

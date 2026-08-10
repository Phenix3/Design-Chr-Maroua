import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Phone, Clock, CheckCircle, Menu, X, AlertCircle,
  Stethoscope, User, Mail, ArrowRight
} from 'lucide-react';

const SPECIALITES = [
  'Cardiologie',
  'Chirurgie Générale',
  'Chirurgie Pédiatrique',
  'Dentisterie',
  'Dermatologie-Vénérologie',
  'Endocrinologie / Diabétologie',
  'Gynécologie-Obstétrique',
  'Imagerie Médicale',
  'Kinésithérapie',
  'Médecine Interne',
  'Neurochirurgie',
  'Neurologie',
  'Nutrition',
  'Ophtalmologie',
  'ORL (Oto-Rhino-Laryngologie)',
  'Orthopédie-Traumatologie',
  'Pédiatrie',
  'Pharmacie',
  'Pneumologie',
  'Radiologie',
  'Rhumatologie',
  'Urologie',
  'Laboratoire d\'ANAPATH',
  'Bloc Opératoire',
  'Hospitalisation Chirurgicale Polyvalente',
  'Hygiène',
  'Urgences 24h/24',
  'Autres',
];

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Contact', href: '/contact' },
  { label: 'Informations', href: '/informations' },
];

const RendezVous = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    specialite: '',
    dateRdv: '',
    message: '',
    consentement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-9 h-9 medical-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-foreground text-sm leading-tight block font-heading">CHR Maroua</span>
                <span className="text-xs text-muted-foreground leading-tight block">Extrême-Nord, Cameroun</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/rendez-vous"
                className="ml-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
              >
                Rendez-vous
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:bg-secondary cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-4 py-2 space-y-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/rendez-vous"
                className="block px-3 py-2 text-sm font-medium text-primary cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Rendez-vous
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="medical-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Calendar className="w-3 h-3 mr-1" />
            Prise de Rendez-vous en Ligne
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            Prendre un Rendez-vous
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous. Notre équipe vous contactera pour confirmer votre rendez-vous dans les plus brefs délais.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/85">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Urgences : +237 671 440 486</span>
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> Standard : +237 689 867 206</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <Card className="text-center py-12 border-medical-teal/30">
              <CardContent>
                <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-medical-green" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 font-heading">Demande envoyée !</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Merci, <strong>{form.prenom} {form.nom}</strong>. Votre demande de rendez-vous a bien été transmise. Nous vous contacterons au <strong>{form.telephone}</strong> pour la confirmation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="cursor-pointer">
                    Nouveau rendez-vous
                  </Button>
                  <Button asChild className="cursor-pointer">
                    <Link to="/">Retour à l'accueil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-2">
                  <User className="w-6 h-6 text-primary" />
                  Vos informations
                </CardTitle>
                <CardDescription>Tous les champs marqués * sont obligatoires.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Identité */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="prenom" className="text-sm font-medium text-foreground">Prénom *</label>
                      <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        required
                        value={form.prenom}
                        onChange={handleChange}
                        placeholder="Jean"
                        className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="nom" className="text-sm font-medium text-foreground">Nom *</label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Dupont"
                        className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.cm"
                        className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="telephone" className="text-sm font-medium text-foreground">Téléphone *</label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        required
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="+237 6XX XXX XXX"
                        className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Date naissance + Spécialité */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="dateNaissance" className="text-sm font-medium text-foreground">Date de naissance</label>
                      <input
                        id="dateNaissance"
                        name="dateNaissance"
                        type="date"
                        value={form.dateNaissance}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="specialite" className="text-sm font-medium text-foreground">Spécialité souhaitée *</label>
                      <select
                        id="specialite"
                        name="specialite"
                        required
                        value={form.specialite}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer min-h-[44px]"
                      >
                        <option value="">Choisir une spécialité</option>
                        {SPECIALITES.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date souhaitée */}
                  <div className="space-y-1.5">
                    <label htmlFor="dateRdv" className="text-sm font-medium text-foreground">Date souhaitée *</label>
                    <input
                      id="dateRdv"
                      name="dateRdv"
                      type="date"
                      required
                      value={form.dateRdv}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
                    />
                  </div>

                  {/* Message optionnel */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message (optionnel)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Précisez votre motif de consultation ou toute information utile..."
                      className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* Urgence info */}
                  <div className="flex items-start gap-3 p-3 bg-emergency-red/5 border border-emergency-red/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-emergency-red flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                      <strong>Urgences médicales :</strong> Pour toute urgence, appelez directement le{' '}
                      <a href="tel:+237671440486" className="font-semibold text-emergency-red hover:underline cursor-pointer">
                        +237 671 440 486
                      </a>{' '}
                      disponible 24h/24.
                    </p>
                  </div>

                  {/* Consentement */}
                  <div className="flex items-start gap-3">
                    <input
                      id="consentement"
                      name="consentement"
                      type="checkbox"
                      required
                      checked={form.consentement}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-input accent-primary cursor-pointer"
                    />
                    <label htmlFor="consentement" className="text-sm text-muted-foreground cursor-pointer">
                      J'accepte que mes données personnelles soient utilisées par le CHR Maroua pour le traitement de ma demande de rendez-vous. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full cursor-pointer medical-gradient-green text-white font-semibold min-h-[48px] hover:opacity-90 transition-opacity"
                  >
                    Envoyer ma demande
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Info cards */}
      <section className="py-12 px-4 bg-secondary/40">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 hover-lift cursor-default border-border">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1 font-heading">Par téléphone</h3>
            <p className="text-sm text-muted-foreground mb-2">Standard : Lun–Ven, 7h–18h</p>
            <a href="tel:+237689867206" className="text-primary font-medium text-sm hover:underline cursor-pointer">+237 689 867 206</a>
          </Card>
          <Card className="text-center p-6 hover-lift cursor-default border-border">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1 font-heading">Par email</h3>
            <p className="text-sm text-muted-foreground mb-2">Réponse sous 24h ouvrées</p>
            <a href="mailto:contact@chr-maroua.cm" className="text-primary font-medium text-sm hover:underline cursor-pointer">contact@chr-maroua.cm</a>
          </Card>
          <Card className="text-center p-6 hover-lift cursor-default border-border">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1 font-heading">Urgences</h3>
            <p className="text-sm text-muted-foreground mb-2">Disponible 24h/24, 7j/7</p>
            <a href="tel:+237671440486" className="text-emergency-red font-medium text-sm hover:underline cursor-pointer">+237 671 440 486</a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold font-heading">CHR Maroua</span>
          </div>
          <p className="text-sm text-white/60 mb-1">Sékandé, Maroua — Région de l'Extrême-Nord, Cameroun</p>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Centre Hospitalier Régional de Maroua. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default RendezVous;

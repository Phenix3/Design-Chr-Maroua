import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Calendar, Phone, Clock, CheckCircle, AlertCircle,
  User, Mail, ArrowRight
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { IMAGES } from '@/assets/images';
import PageHero from '@/components/PageHero';

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
  "Laboratoire d'ANAPATH",
  'Bloc Opératoire',
  'Hospitalisation Chirurgicale Polyvalente',
  'Hygiène',
  'Urgences 24h/24',
  'Autres',
];

const RendezVous = () => {
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
      <SiteHeader active="/rendez-vous" />

      <PageHero
        eyebrow="Prise de Rendez-vous en Ligne"
        title="Prendre un Rendez-vous"
        description="Remplissez le formulaire ci-dessous. Notre équipe vous contactera pour confirmer votre rendez-vous dans les plus brefs délais."
        number="24"
        meta={[
          { icon: Phone, label: 'Urgences : +237 671 440 486' },
          { icon: Clock, label: 'Standard : +237 689 867 206' },
        ]}
        images={[IMAGES.HOSPITAL_INTERIOR_6, IMAGES.MEDICAL_EQUIPMENT_3, IMAGES.PATIENT_CARE_3]}
      />

      {/* ── Formulaire ── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <Card className="text-center py-12 border-border">
              <CardContent>
                <div className="w-16 h-16 bg-medical-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-medical-copper" />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">Demande envoyée !</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Merci, <strong>{form.prenom} {form.nom}</strong>. Votre demande de rendez-vous a bien été transmise. Nous vous contacterons au <strong>{form.telephone}</strong> pour la confirmation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="cursor-pointer rounded-full px-8">
                    Nouveau rendez-vous
                  </Button>
                  <Button asChild className="cursor-pointer rounded-full px-8">
                    <Link to="/">Retour à l'accueil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-2">
                  <User className="w-6 h-6 text-medical-copper" />
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
                        className="w-full px-3 py-2 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
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
                        className="w-full px-3 py-2 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
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
                        className="w-full px-3 py-2 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
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
                        className="w-full px-3 py-2 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
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
                        className="w-full px-3 py-2 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
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
                        className="w-full px-3 py-2 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer min-h-[44px]"
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
                      className="w-full px-3 py-2 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]"
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
                      className="w-full px-3 py-2 border border-input rounded-2xl text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* Urgence info */}
                  <div className="flex items-start gap-3 p-3 bg-emergency-red/5 border border-emergency-red/20 rounded-2xl">
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
                    className="w-full cursor-pointer medical-gradient-green text-white font-semibold min-h-[48px] hover:opacity-90 transition-opacity rounded-full"
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

      {/* ── Autres moyens ── */}
      <section className="py-12 px-4 bg-medical-sand">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 hover-lift cursor-default border-border">
            <Phone className="w-8 h-8 text-medical-copper mx-auto mb-3" />
            <h3 className="font-heading font-semibold text-foreground mb-1">Par téléphone</h3>
            <p className="text-sm text-muted-foreground mb-2">Standard : Lun–Ven, 7h–18h</p>
            <a href="tel:+237689867206" className="text-medical-copper font-medium text-sm hover:underline cursor-pointer">+237 689 867 206</a>
          </Card>
          <Card className="text-center p-6 hover-lift cursor-default border-border">
            <Mail className="w-8 h-8 text-medical-copper mx-auto mb-3" />
            <h3 className="font-heading font-semibold text-foreground mb-1">Par email</h3>
            <p className="text-sm text-muted-foreground mb-2">Réponse sous 24h ouvrées</p>
            <a href="mailto:contact@chr-maroua.cm" className="text-medical-copper font-medium text-sm hover:underline cursor-pointer">contact@chr-maroua.cm</a>
          </Card>
          <Card className="text-center p-6 hover-lift cursor-default border-border">
            <Clock className="w-8 h-8 text-medical-copper mx-auto mb-3" />
            <h3 className="font-heading font-semibold text-foreground mb-1">Urgences</h3>
            <p className="text-sm text-muted-foreground mb-2">Disponible 24h/24, 7j/7</p>
            <a href="tel:+237671440486" className="text-emergency-red font-medium text-sm hover:underline cursor-pointer">+237 671 440 486</a>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default RendezVous;

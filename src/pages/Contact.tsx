import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle, Send, Award
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { IMAGES } from '@/assets/images';
import PageHero from '@/components/PageHero';

const Contact = () => {
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
      <SiteHeader active="/contact" />

      <PageHero
        eyebrow="Nous Contacter"
        title="Contactez-Nous"
        description="Notre équipe est disponible pour répondre à vos questions et vous orienter dans votre parcours de soins."
        number="24"
        meta={[
          { icon: Phone, label: 'Urgences 24h/24' },
          { icon: Clock, label: 'Lun–Ven, 7h30–15h30' },
          { icon: MapPin, label: 'Sékandé, Maroua' },
        ]}
        images={[IMAGES.HOSPITAL_EXTERIOR_2, IMAGES.HOSPITAL_INTERIOR_2, IMAGES.PATIENT_CARE_2]}
      />

      {/* ── Urgences — carte alerte ── */}
      <section className="py-8 px-4 bg-emergency-red/5 border-y border-emergency-red/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 bg-emergency-red/10 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-7 h-7 text-emergency-red" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-semibold text-foreground text-lg mb-1">Urgences Médicales — 24h/24</h2>
              <p className="text-sm text-muted-foreground">Pour toute urgence, contactez directement notre service d'urgences disponible en permanence.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+237671440486" className="flex items-center gap-2 px-5 py-3 bg-emergency-red text-white rounded-full font-bold text-sm hover:bg-emergency-red/90 transition-colors cursor-pointer min-h-[48px] shadow-md">
                <Phone className="w-4 h-4" /> +237 671 440 486
              </a>
              <a href="mailto:urgence@chr-maroua.cm" className="flex items-center gap-2 px-5 py-3 border-2 border-emergency-red text-emergency-red rounded-full font-medium text-sm hover:bg-emergency-red/5 transition-colors cursor-pointer min-h-[48px]">
                <Mail className="w-4 h-4" /> urgence@chr-maroua.cm
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blocs contact ── */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { icon: Phone, title: 'Standard', value: '+237 689 867 206', href: 'tel:+237689867206', note: 'Lun–Ven, 7h–18h', color: 'text-medical-copper' },
              { icon: Phone, title: 'Urgences', value: '+237 671 440 486', href: 'tel:+237671440486', note: '24h/24, 7j/7', color: 'text-emergency-red' },
              { icon: Mail, title: 'Email', value: 'contact@chr-maroua.cm', href: 'mailto:contact@chr-maroua.cm', note: 'Réponse sous 24h', color: 'text-medical-copper' },
              { icon: MapPin, title: 'Adresse', value: 'Sékandé, Maroua', href: '#localisation', note: 'Extrême-Nord, Cameroun', color: 'text-medical-copper' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="text-center p-5 hover-lift border-border cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-full bg-medical-copper/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h3>
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
                  <Send className="w-5 h-5 text-medical-copper" /> Envoyer un Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-medical-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-medical-copper" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Message envoyé !</h3>
                    <p className="text-sm text-muted-foreground mb-4">Merci <strong>{form.nom}</strong>. Nous vous répondrons à l'adresse <strong>{form.email}</strong> dans les plus brefs délais.</p>
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="cursor-pointer min-h-[40px] rounded-full">Nouveau message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nom" className="text-sm font-medium text-foreground block mb-1.5">Nom complet *</label>
                        <input id="nom" name="nom" type="text" required value={form.nom} onChange={handleChange} placeholder="Jean Dupont" className="w-full px-3 py-2.5 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors min-h-[44px]" />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="text-sm font-medium text-foreground block mb-1.5">Téléphone</label>
                        <input id="telephone" name="telephone" type="tel" value={form.telephone} onChange={handleChange} placeholder="+237 6XX XXX XXX" className="w-full px-3 py-2.5 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors min-h-[44px]" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1.5">Email *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="email@exemple.cm" className="w-full px-3 py-2.5 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors min-h-[44px]" />
                    </div>
                    <div>
                      <label htmlFor="sujet" className="text-sm font-medium text-foreground block mb-1.5">Sujet</label>
                      <select id="sujet" name="sujet" value={form.sujet} onChange={handleChange} className="w-full px-3 py-2.5 border border-input rounded-full text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors cursor-pointer min-h-[44px]">
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
                      <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} placeholder="Décrivez votre demande..." className="w-full px-3 py-2.5 border border-input rounded-2xl text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none" />
                    </div>
                    <Button type="submit" className="w-full cursor-pointer medical-gradient text-white min-h-[48px] font-semibold hover:opacity-90 rounded-full">
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
                    <MapPin className="w-5 h-5 text-medical-copper" /> Comment nous trouver
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Adresse :</strong> Sékandé, Maroua, Région de l'Extrême-Nord, Cameroun</p>
                  <p>Le CHR Maroua est situé dans le quartier de Sékandé, visible depuis la route principale. Des panneaux de signalisation indiquent l'accès à l'établissement.</p>
                  <div className="flex items-center gap-2 text-medical-copper font-medium">
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
                      <div key={item.num} className="flex items-center justify-between border-b border-emergency-red/10 last:border-0 pb-2 last:pb-0">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <a href={`tel:${item.num}`} className="text-2xl font-heading font-semibold text-emergency-red hover:underline cursor-pointer">{item.num}</a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certification */}
              <Card className="border-amber-400/30 bg-amber-400/5">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Certifié ISO 9001:2015</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Notre système de management de la qualité est certifié selon la norme internationale ISO 9001:2015.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;

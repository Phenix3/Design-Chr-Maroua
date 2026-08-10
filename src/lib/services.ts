import {
  Phone, Activity, Heart, Baby, Brain, Bone, Microscope, Eye, Shield,
  Leaf, Smile, Dumbbell, Pill, Monitor, Building2, Shirt, Wind, Stethoscope
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IMAGES } from '@/assets/images';

export type Category = 'Urgences' | 'Chirurgie' | 'Médecine' | 'Spécialités' | 'Imagerie & Labo';

export interface ServiceInfo {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: Category;
  icon: LucideIcon;
  points: string[];
  image: string;
}

export const SERVICES: ServiceInfo[] = [
  {
    id: 1,
    slug: 'urgences',
    title: 'Urgences 24h/24',
    description: 'Prise en charge immédiate, équipe disponible 24h/24, 7j/7.',
    longDescription:
      "Le service des urgences du CHR Maroua assure une prise en charge immédiate et ininterrompue des patients, jour et nuit, sept jours sur sept. Une équipe médicale et paramédicale dédiée trie, stabilise et oriente chaque patient selon la gravité de son état, en lien direct avec les autres services de l'établissement.",
    category: 'Urgences',
    icon: Phone,
    points: [
      'Accueil et triage médical priorisé 24h/24',
      'Stabilisation et prise en charge des urgences vitales',
      'Orientation vers les services spécialisés adaptés',
      'Coordination avec le SAMU et les services de secours',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_8,
  },
  {
    id: 2,
    slug: 'chirurgie-generale',
    title: 'Chirurgie Générale',
    description: "Interventions chirurgicales digestives, abdominales et d'urgence.",
    longDescription:
      "Le service de chirurgie générale réalise les interventions digestives, abdominales et d'urgence. Nos chirurgiens opèrent dans un bloc opératoire moderne, avec un suivi pré et post-opératoire rigoureux assuré par une équipe soignante dédiée.",
    category: 'Chirurgie',
    icon: Activity,
    points: [
      'Chirurgie digestive et abdominale',
      'Prise en charge chirurgicale des urgences',
      'Consultation pré-opératoire systématique',
      'Suivi post-opératoire hospitalier et ambulatoire',
    ],
    image: IMAGES.MEDICAL_EQUIPMENT_3,
  },
  {
    id: 3,
    slug: 'chirurgie-pediatrique',
    title: 'Chirurgie Pédiatrique',
    description: 'Chirurgie adaptée aux enfants et nourrissons.',
    longDescription:
      "La chirurgie pédiatrique prend en charge les nourrissons, enfants et adolescents nécessitant une intervention chirurgicale. L'équipe associe chirurgiens, anesthésistes et puéricultrices pour un accompagnement adapté à l'âge et à la taille de chaque patient, avec une attention particulière au confort des familles.",
    category: 'Chirurgie',
    icon: Baby,
    points: [
      'Chirurgie adaptée aux nourrissons et enfants',
      'Anesthésie pédiatrique spécialisée',
      'Accompagnement des parents avant et après l\'intervention',
      'Suivi de croissance et de cicatrisation',
    ],
    image: IMAGES.MEDICAL_TEAM_5,
  },
  {
    id: 4,
    slug: 'bloc-operatoire',
    title: 'Bloc Opératoire',
    description: "Salles d'opération équipées pour toutes interventions.",
    longDescription:
      "Le bloc opératoire du CHR Maroua regroupe des salles d'opération modernes et équipées pour la chirurgie générale, l'orthopédie, la gynécologie-obstétrique et l'urologie. Les protocoles d'hygiène et de sécurité y sont strictement appliqués, conformément aux exigences de la norme ISO 9001.",
    category: 'Chirurgie',
    icon: Activity,
    points: [
      'Salles d\'opération équipées et stériles',
      'Équipe d\'anesthésie-réanimation dédiée',
      'Protocoles d\'hygiène stricts et tracés',
      'Réveil et surveillance post-opératoire immédiate',
    ],
    image: IMAGES.MEDICAL_EQUIPMENT_4,
  },
  {
    id: 5,
    slug: 'orthopedie-traumatologie',
    title: 'Orthopédie-Traumatologie',
    description: 'Fractures, traumatismes et pathologies ostéo-articulaires.',
    longDescription:
      "Le service d'orthopédie-traumatologie prend en charge les fractures, les traumatismes et les pathologies des os, articulations et muscles. De la réduction des fractures aux chirurgies de reconstruction, l'équipe assure un suivi de rééducation en lien avec la kinésithérapie.",
    category: 'Chirurgie',
    icon: Bone,
    points: [
      'Prise en charge des fractures et traumatismes',
      'Chirurgie ostéo-articulaire',
      'Traitement conservateur et chirurgical',
      'Suivi de rééducation fonctionnelle',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_6,
  },
  {
    id: 6,
    slug: 'neurochirurgie',
    title: 'Neurochirurgie',
    description: 'Interventions neurochirurgicales spécialisées.',
    longDescription:
      "Le service de neurochirurgie traite les affections du cerveau, de la moelle épinière et des nerfs nécessitant une prise en charge chirurgicale spécialisée. Les indications sont posées en concertation pluridisciplinaire avec les neurologues et les radiologues.",
    category: 'Chirurgie',
    icon: Brain,
    points: [
      'Chirurgie du cerveau et de la moelle épinière',
      'Prise en charge des traumatismes crâniens',
      'Concertation pluridisciplinaire systématique',
      'Suivi neurologique post-opératoire',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_2,
  },
  {
    id: 7,
    slug: 'hospitalisation-chirurgicale',
    title: 'Hospitalisation Chirurgicale Polyvalente',
    description: "Unité d'hospitalisation pour patients chirurgicaux.",
    longDescription:
      "L'unité d'hospitalisation chirurgicale polyvalente accueille les patients avant et après leur intervention. L'équipe soignante assure la préparation, la surveillance des suites opératoires et l'éducation du patient à sa sortie, dans un environnement calme et sécurisé.",
    category: 'Chirurgie',
    icon: Building2,
    points: [
      'Préparation pré-opératoire complète',
      'Surveillance des suites opératoires',
      'Soins infirmiers continus',
      'Organisation de la sortie et du suivi',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_10,
  },
  {
    id: 8,
    slug: 'medecine-interne',
    title: 'Médecine Interne',
    description: 'Diagnostic et prise en charge des pathologies complexes.',
    longDescription:
      "Le service de médecine interne assure le diagnostic et la prise en charge des pathologies complexes et plurifactorielles. Il coordonne les explorations et les avis spécialisés pour établir un diagnostic précis et construire un parcours de soins adapté à chaque patient.",
    category: 'Médecine',
    icon: Stethoscope,
    points: [
      'Diagnostic des pathologies complexes',
      'Coordination des explorations et avis spécialisés',
      'Prise en charge des maladies chroniques',
      'Suivi global et personnalisé du patient',
    ],
    image: IMAGES.MEDICAL_TEAM_1,
  },
  {
    id: 9,
    slug: 'cardiologie',
    title: 'Cardiologie',
    description: 'Prévention, diagnostic et traitement des maladies du cœur.',
    longDescription:
      "Le département de cardiologie assure la prévention, le diagnostic et le traitement des maladies du cœur et des vaisseaux sanguins. Il propose des consultations spécialisées, des examens électrocardiographiques, des échocardiographies et un suivi personnalisé pour chaque patient.",
    category: 'Médecine',
    icon: Heart,
    points: [
      'Consultations spécialisées de cardiologie',
      'Électrocardiogramme et échocardiographie',
      'Suivi de l\'hypertension et de l\'insuffisance cardiaque',
      'Prévention des maladies cardiovasculaires',
    ],
    image: IMAGES.MEDICAL_EQUIPMENT_2,
  },
  {
    id: 10,
    slug: 'pediatrie',
    title: 'Pédiatrie',
    description: "Soins spécialisés pour les enfants de la naissance à l'adolescence.",
    longDescription:
      "Le service de pédiatrie prend en charge les enfants de la naissance à l'adolescence : consultations, vaccinations, prise en charge des maladies infantiles et suivi de la croissance. Les parents sont étroitement associés au parcours de soins de leur enfant.",
    category: 'Médecine',
    icon: Baby,
    points: [
      'Consultations pédiatriques et suivi de croissance',
      'Prise en charge des maladies infantiles',
      'Vaccinations selon le calendrier national',
      'Accompagnement et éducation des parents',
    ],
    image: IMAGES.MEDICAL_TEAM_2,
  },
  {
    id: 11,
    slug: 'gynecologie-obstetrique',
    title: 'Gynécologie-Obstétrique',
    description: 'Suivi de grossesse, accouchement, soins gynécologiques.',
    longDescription:
      "Le service de gynécologie-obstétrique assure le suivi de grossesse, l'accouchement et les soins gynécologiques. Une équipe dédiée accompagne la future mère de la consultation prénatale au post-partum, avec une maternité ouverte aux conjoints 24h/24.",
    category: 'Médecine',
    icon: Heart,
    points: [
      'Suivi de grossesse et consultations prénatales',
      'Accouchement assisté et post-partum',
      'Consultations et dépistages gynécologiques',
      'Maternité — conjoint autorisé 24h/24',
    ],
    image: IMAGES.PATIENT_CARE_2,
  },
  {
    id: 12,
    slug: 'neurologie',
    title: 'Neurologie',
    description: 'Pathologies du système nerveux central et périphérique.',
    longDescription:
      "Le service de neurologie diagnostique et traite les pathologies du système nerveux central et périphérique : épilepsie, céphalées, maladies neurodégénératives et atteintes des nerfs. Le suivi est assuré en lien avec l'imagerie médicale et la neurochirurgie.",
    category: 'Médecine',
    icon: Brain,
    points: [
      'Diagnostic de l\'épilepsie et des céphalées',
      'Suivi des maladies neurodégénératives',
      'Explorations en lien avec l\'imagerie médicale',
      'Coordination avec la neurochirurgie',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_4,
  },
  {
    id: 13,
    slug: 'pneumologie',
    title: 'Pneumologie',
    description: 'Maladies respiratoires et pathologies pulmonaires.',
    longDescription:
      "Le service de pneumologie prend en charge les maladies respiratoires et pulmonaires : asthme, bronchites, infections pulmonaires et insuffisance respiratoire. Explorations fonctionnelles et suivi thérapeutique sont assurés par une équipe spécialisée.",
    category: 'Médecine',
    icon: Wind,
    points: [
      'Prise en charge de l\'asthme et des bronchites',
      'Traitement des infections pulmonaires',
      'Évaluation de la fonction respiratoire',
      'Suivi de l\'insuffisance respiratoire',
    ],
    image: IMAGES.PATIENT_CARE_3,
  },
  {
    id: 14,
    slug: 'rhumatologie',
    title: 'Rhumatologie',
    description: 'Maladies des articulations, os et muscles.',
    longDescription:
      "Le service de rhumatologie diagnostique et traite les maladies des articulations, des os et des muscles : arthrose, polyarthrite, douleurs dorsales et ostéoporose. L'approche combine traitement médical et rééducation fonctionnelle.",
    category: 'Médecine',
    icon: Bone,
    points: [
      'Diagnostic des rhumatismes inflammatoires',
      'Prise en charge de l\'arthrose et de l\'ostéoporose',
      'Gestion des douleurs articulaires et dorsales',
      'Coordination avec la kinésithérapie',
    ],
    image: IMAGES.PATIENT_CARE_4,
  },
  {
    id: 15,
    slug: 'nutrition',
    title: 'Nutrition',
    description: 'Accompagnement nutritionnel et prise en charge des carences.',
    longDescription:
      "Le service de nutrition accompagne les patients dans la prévention et la prise en charge des troubles alimentaires et des carences. Des bilans nutritionnels personnalisés sont proposés, en lien avec les services de médecine et de pédiatrie.",
    category: 'Médecine',
    icon: Leaf,
    points: [
      'Bilans nutritionnels personnalisés',
      'Prise en charge des carences et de la malnutrition',
      'Éducation alimentaire des patients et familles',
      'Coordination avec les services de médecine',
    ],
    image: IMAGES.PATIENT_CARE_5,
  },
  {
    id: 16,
    slug: 'ophtalmologie',
    title: 'Ophtalmologie',
    description: 'Soins des yeux et traitement des pathologies visuelles.',
    longDescription:
      "Le service d'ophtalmologie assure les soins des yeux et le traitement des pathologies visuelles : troubles de la réfraction, cataracte, glaucome et infections oculaires. L'examen du fond d'œil permet aussi de dépister certaines maladies générales.",
    category: 'Spécialités',
    icon: Eye,
    points: [
      'Consultations et examens de la vue',
      'Dépistage et suivi de la cataracte et du glaucome',
      'Traitement des infections oculaires',
      'Dépistage des maladies générales par le fond d\'œil',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_3,
  },
  {
    id: 17,
    slug: 'orl',
    title: 'ORL',
    description: 'Oto-Rhino-Laryngologie : oreilles, nez, gorge.',
    longDescription:
      "Le service ORL traite les maladies des oreilles, du nez et de la gorge : otites, sinusites, troubles de l'audition et pathologies de la gorge. Les explorations fonctionnelles permettent un diagnostic précis et un traitement adapté.",
    category: 'Spécialités',
    icon: Activity,
    points: [
      'Traitement des otites et sinusites',
      'Évaluation et suivi de l\'audition',
      'Prise en charge des pathologies de la gorge',
      'Explorations fonctionnelles ORL',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_1,
  },
  {
    id: 18,
    slug: 'dentisterie',
    title: 'Dentisterie',
    description: 'Soins dentaires, extractions et chirurgie buccale.',
    longDescription:
      "Le service de dentisterie propose les soins dentaires courants, les extractions et la chirurgie buccale. L'accent est mis sur la prévention bucco-dentaire et l'hygiène, avec un suivi adapté à chaque patient.",
    category: 'Spécialités',
    icon: Smile,
    points: [
      'Soins dentaires et détartrage',
      'Extractions et chirurgie buccale',
      'Prévention et hygiène bucco-dentaire',
      'Suivi dentaire pédiatrique',
    ],
    image: IMAGES.MEDICAL_TEAM_3,
  },
  {
    id: 19,
    slug: 'dermatologie-venerologie',
    title: 'Dermatologie-Vénérologie',
    description: 'Maladies de la peau et infections sexuellement transmissibles.',
    longDescription:
      "Le service de dermatologie-vénérologie prend en charge les maladies de la peau, des cheveux et des ongles, ainsi que les infections sexuellement transmissibles. Un dépistage et un accompagnement confidentiels sont proposés.",
    category: 'Spécialités',
    icon: Shield,
    points: [
      'Diagnostic et traitement des maladies de la peau',
      'Dépistage et prise en charge des IST',
      'Suivi des dermatoses chroniques',
      'Accompagnement confidentiel',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_5,
  },
  {
    id: 20,
    slug: 'endocrinologie-diabetologie',
    title: 'Endocrinologie / Diabétologie',
    description: 'Diabète, thyroïde et troubles hormonaux.',
    longDescription:
      "Le service d'endocrinologie-diabétologie prend en charge le diabète, les maladies de la thyroïde et les troubles hormonaux. L'éducation thérapeutique du patient est au cœur du suivi, pour une gestion durable de la maladie.",
    category: 'Spécialités',
    icon: Activity,
    points: [
      'Suivi et éducation du patient diabétique',
      'Prise en charge des maladies de la thyroïde',
      'Traitement des troubles hormonaux',
      'Prévention des complications du diabète',
    ],
    image: IMAGES.MEDICAL_TEAM_4,
  },
  {
    id: 21,
    slug: 'urologie',
    title: 'Urologie',
    description: "Maladies de l'appareil urinaire et génital masculin.",
    longDescription:
      "Le service d'urologie prend en charge les maladies de l'appareil urinaire et génital masculin : infections urinaires, calculs, troubles de la prostate et affections rénales. Les explorations et traitements sont réalisés en lien avec l'imagerie médicale.",
    category: 'Spécialités',
    icon: Shield,
    points: [
      'Prise en charge des infections urinaires',
      'Traitement des calculs et de la prostate',
      'Explorations urologiques',
      'Coordination avec l\'imagerie médicale',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_7,
  },
  {
    id: 22,
    slug: 'kinesitherapie',
    title: 'Kinésithérapie',
    description: 'Rééducation fonctionnelle et physiothérapie.',
    longDescription:
      "Le service de kinésithérapie assure la rééducation fonctionnelle et la physiothérapie des patients après une intervention, un traumatisme ou une maladie. Les programmes de rééducation sont personnalisés et suivis avec l'équipe médicale.",
    category: 'Spécialités',
    icon: Dumbbell,
    points: [
      'Rééducation post-opératoire et post-traumatique',
      'Rééducation fonctionnelle personnalisée',
      'Physiothérapie et renforcement musculaire',
      'Coordination avec les services de chirurgie',
    ],
    image: IMAGES.PATIENT_CARE_6,
  },
  {
    id: 23,
    slug: 'pharmacie',
    title: 'Pharmacie',
    description: 'Dispensation des médicaments et conseil pharmaceutique.',
    longDescription:
      "La pharmacie hospitalière assure la dispensation des médicaments et le conseil pharmaceutique aux patients et aux équipes de soins. Le circuit du médicament est sécurisé et tracé, conformément aux exigences du système de management de la qualité.",
    category: 'Spécialités',
    icon: Pill,
    points: [
      'Dispensation sécurisée des médicaments',
      'Conseil pharmaceutique aux patients',
      'Gestion des stocks et des dates de péremption',
      'Sécurisation du circuit du médicament',
    ],
    image: IMAGES.MEDICAL_EQUIPMENT_5,
  },
  {
    id: 24,
    slug: 'hygiene',
    title: 'Hygiène',
    description: 'Hygiène hospitalière et prévention des infections.',
    longDescription:
      "Le service d'hygiène hospitalière pilote la prévention des infections associées aux soins : hygiène des mains, nettoyage des locaux, gestion des déchets et surveillance des infections. Il forme les équipes et veille à l'application rigoureuse des protocoles.",
    category: 'Spécialités',
    icon: Shield,
    points: [
      'Prévention des infections associées aux soins',
      'Hygiène des mains et des locaux',
      'Gestion des déchets hospitaliers',
      'Formation et contrôle des protocoles',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_9,
  },
  {
    id: 25,
    slug: 'imagerie-medicale',
    title: 'Imagerie Médicale',
    description: "Échographie, radiologie et examens d'imagerie médicale.",
    longDescription:
      "Le service d'imagerie médicale regroupe l'échographie, la radiologie et les examens d'imagerie diagnostique. Des technologies adaptées et un personnel qualifié assurent des images de qualité pour des diagnostics précis, en lien avec tous les services.",
    category: 'Imagerie & Labo',
    icon: Monitor,
    points: [
      'Échographie abdominale, pelvienne et obstétricale',
      'Radiographie standard',
      'Examens d\'imagerie diagnostique',
      'Comptes rendus rapides aux services prescripteurs',
    ],
    image: IMAGES.MEDICAL_EQUIPMENT_1,
  },
  {
    id: 26,
    slug: 'radiologie',
    title: 'Radiologie',
    description: 'Radiographies et imagerie diagnostique.',
    longDescription:
      "Le service de radiologie réalise les radiographies et les examens d'imagerie diagnostique demandés par les médecins. Les clichés sont interprétés par des radiologues et transmis rapidement aux services prescripteurs.",
    category: 'Imagerie & Labo',
    icon: Monitor,
    points: [
      'Radiographies thoraciques, osseuses et abdominales',
      'Interprétation par un radiologue',
      'Transmission rapide des comptes rendus',
      'Suivi des examens de contrôle',
    ],
    image: IMAGES.MEDICAL_EQUIPMENT_2,
  },
  {
    id: 27,
    slug: 'laboratoire-anapath',
    title: "Laboratoire d'ANAPATH",
    description: 'Analyses anatomopathologiques et biopsies.',
    longDescription:
      "Le laboratoire d'anatomie et cytologie pathologiques (ANAPATH) réalise l'analyse des biopsies et des pièces opératoires. Ses résultats contribuent au diagnostic précis des tumeurs et des pathologies tissulaires, en appui des services cliniques.",
    category: 'Imagerie & Labo',
    icon: Microscope,
    points: [
      'Analyse des biopsies et pièces opératoires',
      'Diagnostic des tumeurs et pathologies tissulaires',
      'Comptes rendus détaillés aux cliniciens',
      'Appui au diagnostic oncologique',
    ],
    image: IMAGES.MEDICAL_EQUIPMENT_4,
  },
  {
    id: 28,
    slug: 'buanderie',
    title: 'Buanderie',
    description: 'Service de blanchisserie hospitalière.',
    longDescription:
      "La buanderie hospitalière assure le traitement, le nettoyage et la stérilisation du linge de l'établissement. Ce service essentiel contribue à l'hygiène et au confort des patients, avec des circuits de linge propres et souillés strictement séparés.",
    category: 'Imagerie & Labo',
    icon: Shirt,
    points: [
      'Traitement du linge propre et des linges souillés',
      'Circuits séparés conformes aux règles d\'hygiène',
      'Approvisionnement régulier des services',
      'Contribution au confort et à l\'hygiène des patients',
    ],
    image: IMAGES.HOSPITAL_INTERIOR_1,
  },
];

export const CATEGORIES: Category[] = ['Urgences', 'Chirurgie', 'Médecine', 'Spécialités', 'Imagerie & Labo'];

export const CATEGORY_COUNT: Record<Category, number> = SERVICES.reduce(
  (acc, s) => {
    acc[s.category] = (acc[s.category] ?? 0) + 1;
    return acc;
  },
  { Urgences: 0, Chirurgie: 0, Médecine: 0, Spécialités: 0, 'Imagerie & Labo': 0 } as Record<Category, number>
);

export const getServiceBySlug = (slug: string): ServiceInfo | undefined =>
  SERVICES.find(s => s.slug === slug);

export const getRelatedServices = (service: ServiceInfo, limit = 3): ServiceInfo[] =>
  SERVICES.filter(s => s.category === service.category && s.id !== service.id).slice(0, limit);

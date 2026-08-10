import { IMAGES } from '@/assets/images';

export interface Article {
  id: number;
  slug: string;
  titre: string;
  date: string;
  categorie: string;
  auteur: string;
  image: string;
  extrait: string;
  contenu: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'campagne-sante-gratuite-extreme-nord-2025',
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
    slug: 'departement-cardiologie-services-medicaux',
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

export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  modules: {
    name: string;
    duration: number; // in hours
  }[];
};

export const COURSES_DATA: Course[] = [
  {
    id: "marketing-360",
    title: "Marketing Digital 360°",
    description: "Devenez un expert complet du marketing en ligne: SEO, SEA, réseaux sociaux, email-marketing et bien plus.",
    image: "https://picsum.photos/600/400?random=1",
    dataAiHint: "digital marketing",
    modules: [
        { name: "Introduction au Marketing Digital", duration: 2 },
        { name: "Stratégie de contenu et SEO", duration: 10 },
        { name: "Publicité en ligne (Google & Social Ads)", duration: 12 },
        { name: "Marketing par email et automatisation", duration: 8 },
        { name: "Analyse et optimisation des performances", duration: 6 },
    ],
  },
  {
    id: "business-lauch",
    title: "Business en Ligne: de Zéro à Héros",
    description: "Lancez votre business en ligne de A à Z. Trouvez votre idée, créez votre offre et réalisez vos premières ventes.",
    image: "https://picsum.photos/600/400?random=2",
    dataAiHint: "online business",
    modules: [
        { name: "Trouver une idée de business rentable", duration: 5 },
        { name: "Valider son marché et son offre", duration: 5 },
        { name: "Créer une marque impactante", duration: 4 },
        { name: "Construire son site et tunnel de vente", duration: 10 },
        { name: "Stratégies de lancement et acquisition client", duration: 15 },
    ],
  },
  {
    id: "productivity-master",
    title: "Productivité Maximale pour Entrepreneur",
    description: "Doublez votre efficacité et libérez du temps grâce à des systèmes et outils de productivité éprouvés.",
    image: "https://picsum.photos/600/400?random=3",
    dataAiHint: "productivity tools",
    modules: [
        { name: "Les fondations de la productivité", duration: 2 },
        { name: "Gestion du temps et des priorités", duration: 6 },
        { name: "Automatiser ses tâches avec les bons outils", duration: 8 },
        { name: "Mettre en place un 'second cerveau'", duration: 10 },
        { name: "Éviter le burnout et rester performant", duration: 4 },
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  comment: string;
};

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        name: "Claire D.",
        role: "Fondatrice, a-claire.com",
        avatar: "https://picsum.photos/id/237/56/56",
        comment: "La formation 'Business en Ligne' a été un véritable accélérateur. J'ai pu structurer mon projet et faire mes premières ventes en moins de 2 mois. Indispensable !",
    },
    {
        name: "Julien L.",
        role: "Consultant Marketing",
        avatar: "https://picsum.photos/id/238/56/56",
        comment: "Avec 'Marketing Digital 360', j'ai mis à jour mes compétences et je peux proposer des stratégies beaucoup plus complètes à mes clients. La qualité est au rendez-vous."
    },
    {
        name: "Sophie T.",
        role: "Freelance Rédactrice Web",
        avatar: "https://picsum.photos/id/239/56/56",
        comment: "La formation sur la productivité a changé ma vie. J'ai enfin un système qui fonctionne et je ne me sens plus débordée par mes missions. Merci Mat !",
    },
    {
        name: "Marc F.",
        role: "E-commerçant",
        avatar: "https://picsum.photos/id/240/56/56",
        comment: "Les modules sur la publicité en ligne sont incroyables. J'ai divisé par deux mon coût d'acquisition client grâce aux techniques enseignées. Je recommande à 100%.",
    }
]

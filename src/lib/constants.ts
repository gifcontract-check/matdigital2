
export type Course = {
  id: string;
  title: string;
  description?: string;
  image: string;
  dataAiHint: string;
  price: number;
  modules: {
    name: string;
    duration: number; // in hours
  }[];
};

export const COURSES_DATA: Course[] = [
  {
    id: "marketing-360",
    title: "(MDE) formation marketing digital + coaching privé + canal privé + 8 ebook offerts + MRR",
    image: "https://cdn.beacons.ai/user_content/Ugut7TmcPWh6Y0K3QJfnbMTC2w13/referenced_images/2b2901e7-5073-48d5-a506-2aa7bcf965b8__store__product-image__27fce2e6-b85d-4079-8f11-1811d7e62eb3__5a11f7ac-0f01-4dc8-87cc-eb0809c7bad4.webp?t=1756141389612",
    dataAiHint: "digital marketing",
    price: 49.99,
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
    title: "service de création et configuration de votre compte beacons 💻",
    image: "https://picsum.photos/600/400?random=2",
    dataAiHint: "online business",
    price: 14.99,
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
    title: "Pack de fournisseur premium 🚚",
    image: "https://picsum.photos/600/400?random=3",
    dataAiHint: "productivity tools",
    price: 19.99,
    modules: [
        { name: "Les fondations de la productivité", duration: 2 },
        { name: "Gestion du temps et des priorités", duration: 6 },
        { name: "Automatiser ses tâches avec les bons outils", duration: 8 },
        { name: "Mettre en place un 'second cerveau'", duration: 10 },
        { name: "Éviter le burnout et rester performant", duration: 4 },
    ],
  },
   {
    id: "ia-content-creator",
    title: "Plan détaillé sur le marketing digital sans montrer votre visage + MRR",
    image: "https://picsum.photos/600/400?random=4",
    dataAiHint: "ai content creation",
    price: 9.99,
    modules: [
        { name: "Introduction à la création de contenu par IA", duration: 2 },
        { name: "Maîtriser les prompts pour des résultats parfaits", duration: 6 },
        { name: "Générer des articles de blog et scripts vidéo", duration: 8 },
        { name: "Créer des visuels et images avec l'IA", duration: 6 },
    ],
  },
];

export type Testimonial = {
  name: string;
  initials: string;
  comment: string;
  rating: number;
};

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        name: "Claire D.",
        initials: "CD",
        comment: "La formation 'Business en Ligne' a été un véritable accélérateur. J'ai pu structurer mon projet et faire mes premières ventes en moins de 2 mois. Indispensable !",
        rating: 5,
    },
    {
        name: "Julien L.",
        initials: "JL",
        comment: "Avec 'Marketing Digital 360', j'ai mis à jour mes compétences et je peux proposer des stratégies beaucoup plus complètes à mes clients. La qualité est au rendez-vous.",
        rating: 5,
    },
    {
        name: "Sophie T.",
        initials: "ST",
        comment: "La formation sur la productivité a changé ma vie. J'ai enfin un système qui fonctionne et je ne me sens plus débordée. Merci Mat !",
        rating: 4.5,
    },
    {
        name: "Marc F.",
        initials: "MF",
        comment: "Les modules sur la publicité en ligne sont incroyables. J'ai divisé par deux mon coût d'acquisition client grâce aux techniques enseignées. Je recommande.",
        rating: 5,
    },
    {
        name: "Laura M.",
        initials: "LM",
        comment: "Le cours sur la création de contenu avec l'IA est une pépite. C'est un gain de temps énorme au quotidien.",
        rating: 4.5,
    }
]

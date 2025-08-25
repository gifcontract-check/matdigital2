
export type Course = {
  id: string;
  title: string;
  description?: string;
  image: string;
  dataAiHint: string;
  price: number;
  link: string;
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
    link: "https://matdigital.store/shop/27fce2e6-b85d-4079-8f11-1811d7e62eb3?pageViewSource=lib_view&referrer=https%3A%2F%2Fmatdigital.store%2F&show_back_button=true",
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
    image: "https://cdn.beacons.ai/user_content/Ugut7TmcPWh6Y0K3QJfnbMTC2w13/referenced_images/34242500-483c-4edd-9e69-bd304f54308d__store__product-image__eacbb141-d710-44f5-835e-f8ad49fc5697__ff90def1-fd51-4ae3-8a0b-b43d671b5143.webp?t=1755418230409",
    dataAiHint: "online business",
    price: 14.99,
    link: "https://matdigital.store/shop/eacbb141-d710-44f5-835e-f8ad49fc5697?pageViewSource=lib_view&referrer=https%3A%2F%2Fmatdigital.store%2F&show_back_button=true",
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
    image: "https://cdn.beacons.ai/user_content/Ugut7TmcPWh6Y0K3QJfnbMTC2w13/referenced_images/761a09e7-0f8e-4ba1-afc8-429e04732ef9__store__product-image__671f4fa7-7b87-443c-bf50-8d641f3b47f9__aee58792-d6e1-4aad-ba88-0482e63e5efb.webp?t=1755159599220",
    dataAiHint: "productivity tools",
    price: 19.99,
    link: "#",
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
    image: "https://cdn.beacons.ai/user_content/Ugut7TmcPWh6Y0K3QJfnbMTC2w13/referenced_images/f573b5eb-5dcd-4979-ae9b-5053df4d12bf__store__product-image__1077a332-da0e-40db-8813-8345db30a235__fb758dd6-3594-47d2-83a9-5f8eb19fb3e6.webp?t=1753480870067",
    dataAiHint: "ai content creation",
    price: 9.99,
    link: "#",
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

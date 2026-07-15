export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Web Design' | 'E-commerce' | 'Landing Page';
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Lumen Health Portal',
    category: 'Web Development',
    description: 'A patient-first healthcare platform with appointment scheduling and secure records.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    url: '#',
  },
  {
    id: 'p2',
    title: 'Northwind Fleet Dashboard',
    category: 'Web Development',
    description: 'Real-time logistics tracking with live maps and fleet analytics for dispatchers.',
    image: './logistics.png', 
    url: '#',
  },
  {
    id: 'p3',
    title: 'Vertex SaaS Landing',
    category: 'Landing Page',
    description: 'A high-converting product launch page with A/B-ready sections and live analytics.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    url: '#',
  },
  {
    id: 'p4',
    title: 'Atlas Industrial Catalog',
    category: 'Web Design',
    description: 'A modern product catalog with quote requests for a manufacturing leader.',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    url: '#',
  },
  {
    id: 'p5',
    title: 'Bloom Beauty Store',
    category: 'E-commerce',
    description: 'A headless storefront with personalized recommendations and one-page checkout.',
    image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    url: '#',
  },
  {
    id: 'p6',
    title: 'Skyline Realty Listings',
    category: 'Web Development',
    description: 'Interactive property maps and lead capture for a premium real estate brand.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    url: '#',
  },
];

export const projectCategories = [
  'All',
  'Web Development',
  'Web Design',
  'E-commerce',
  'Landing Page',
] as const;

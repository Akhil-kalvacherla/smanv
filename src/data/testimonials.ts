export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'SMANV IT rebuilt our platform from the ground up. Page speed tripled, leads doubled within a quarter, and the team felt like an extension of ours.',
    name: 'Sarah Mitchell',
    role: 'VP Marketing',
    company: 'Lumen Health',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'The redesign was seamless. They preserved every bit of our SEO equity while making the site feel like a completely new brand. Genuinely impressive.',
    name: 'David Chen',
    role: 'Founder & CEO',
    company: 'Northwind Logistics',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'Our landing page conversion jumped 38% after the rebuild. Clean code, sharp design, and they actually understood the campaign goals.',
    name: 'Aisha Rahman',
    role: 'Head of Growth',
    company: 'Vertex SaaS',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote:
      'Maintenance has been flawless. Zero downtime in 14 months, and their response time on the rare support ticket is under an hour.',
    name: 'Marcus Webb',
    role: 'COO',
    company: 'Atlas Manufacturing',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

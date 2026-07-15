import {
  HiCodeBracket,
  HiArrowPath,
  HiRocketLaunch,
  HiWrenchScrewdriver,
} from 'react-icons/hi2';
import type { IconType } from 'react-icons';

export interface Service {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  highlights: string[];
  accent: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'custom-development',
    icon: HiCodeBracket,
    title: 'Custom Website Development',
    description:
      'Tailor-made websites engineered from the ground up to match your brand, goals, and growth roadmap. Built on modern stacks with clean, scalable code.',
    highlights: ['React & Next.js', 'Headless CMS', 'API integrations', 'Accessible by default'],
    accent: 'from-primary-600 to-primary-400',
    image: '/Development.jpg',
  },
  {
    id: 'website-redesign',
    icon: HiArrowPath,
    title: 'Website Redesign',
    description:
      'Transform your outdated site into a high-converting, modern experience. We preserve your SEO equity while elevating design, speed, and usability.',
    highlights: ['UX audit', 'SEO migration', 'Brand refresh', 'Conversion focus'],
    accent: 'from-accent-500 to-primary-500',
    image: '/Redesign.jpg',
  },
  {
    id: 'landing-page',
    icon: HiRocketLaunch,
    title: 'Landing Page Development',
    description:
      'High-impact landing pages built to convert. Optimized for campaigns, product launches, and lead capture with A/B-ready architecture.',
    highlights: ['Conversion copy', 'A/B test ready', 'Sub-second load', 'Analytics wired'],
    accent: 'from-primary-700 to-accent-500',
    image: '/LandingPage.jpg',
  },
  {
    id: 'maintenance-support',
    icon: HiWrenchScrewdriver,
    title: 'Website Maintenance & Support',
    description:
      'Ongoing care that keeps your site fast, secure, and up to date. Monitoring, backups, updates, and a real human on call when you need one.',
    highlights: ['24/7 monitoring', 'Daily backups', 'Security patches', 'Priority support'],
    accent: 'from-primary-500 to-primary-700',
    image: '/Support.jpg',
  },
];

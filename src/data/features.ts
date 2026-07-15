import {
  HiPaintBrush,
  HiDevicePhoneMobile,
  HiBolt,
  HiMagnifyingGlass,
  HiShieldCheck,
  HiEnvelope,
  HiMapPin,
  HiPhoto,
  HiShare,
  HiChartBar,
  HiCommandLine,
  HiAdjustmentsHorizontal,
} from 'react-icons/hi2';
import type { IconType } from 'react-icons';

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  { icon: HiPaintBrush, title: 'Professional UI/UX', description: 'Crafted interfaces with clear hierarchy and intent.' },
  { icon: HiDevicePhoneMobile, title: 'Responsive Design', description: 'Pixel-perfect across every device and breakpoint.' },
  { icon: HiBolt, title: 'Fast Loading', description: 'Optimized assets and sub-second performance budgets.' },
  { icon: HiMagnifyingGlass, title: 'SEO Optimization', description: 'Structured data, meta, and clean semantic markup.' },
  { icon: HiShieldCheck, title: 'SSL Security', description: 'Encrypted connections and hardened headers.' },
  { icon: HiEnvelope, title: 'Contact Forms', description: 'Spam-protected forms that route to the right inbox.' },
  { icon: HiMapPin, title: 'Google Maps', description: 'Embedded, styled maps with location context.' },
  { icon: HiPhoto, title: 'Image Optimization', description: 'Next-gen formats and lazy loading by default.' },
  { icon: HiShare, title: 'Social Media Integration', description: 'Open Graph, sharing, and live feeds wired in.' },
  { icon: HiChartBar, title: 'Analytics Integration', description: 'Privacy-friendly analytics and event tracking.' },
  { icon: HiCommandLine, title: 'CMS Support', description: 'Edit content yourself with a friendly dashboard.' },
  { icon: HiAdjustmentsHorizontal, title: 'Performance Optimization', description: 'Core Web Vitals in the green, consistently.' },
];

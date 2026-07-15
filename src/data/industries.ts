import {
  HiHeart,
  HiAcademicCap,
  HiBanknotes,
  HiBuildingOffice2,
  HiBuildingStorefront,
  HiCog,
  HiTruck,
  HiHomeModern,
  HiShoppingBag,
  HiRocketLaunch,
} from 'react-icons/hi2';
import type { IconType } from 'react-icons';

export interface Industry {
  icon: IconType;
  name: string;
  blurb: string;
}

export const industries: Industry[] = [
  { icon: HiHeart, name: 'Healthcare', blurb: 'HIPAA-aware patient portals & clinic sites.' },
  { icon: HiAcademicCap, name: 'Education', blurb: 'LMS-ready platforms for schools & edtech.' },
  { icon: HiBanknotes, name: 'Finance', blurb: 'Secure, compliant fintech experiences.' },
  { icon: HiBuildingStorefront, name: 'Hospitality', blurb: 'Booking flows for hotels & restaurants.' },
  { icon: HiBuildingOffice2, name: 'Corporate', blurb: 'Enterprise sites that scale with you.' },
  { icon: HiCog, name: 'Manufacturing', blurb: 'Catalogs & quoting for industrial firms.' },
  { icon: HiTruck, name: 'Logistics', blurb: 'Tracking dashboards & fleet portals.' },
  { icon: HiHomeModern, name: 'Real Estate', blurb: 'Listings, maps & lead capture for property.' },
  { icon: HiShoppingBag, name: 'E-commerce', blurb: 'Headless storefronts built to convert.' },
  { icon: HiRocketLaunch, name: 'Startup', blurb: 'Launch-ready sites that grow with you.' },
];

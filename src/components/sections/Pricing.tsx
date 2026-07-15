import { motion } from 'framer-motion';
import { HiCheck, HiSparkles, HiPhone } from 'react-icons/hi2';
import { Section, SectionHeading } from '../ui/Section';
import { FaWhatsapp } from 'react-icons/fa';

const tiers = [
  {
    name: 'Starter Package',
    price: '₹9,999',
    period: 'one-time',
    description: 'Perfect for startups, local businesses, and personal portfolios needing a quick, elegant launch.',
    ctaText: 'Get Started Now',
    ctaLink: '#contact-form-hero',
    features: [
      '5 Pages Corporate Website or Premium Landing Page',
      '100% Mobile & Tablet Responsive Layout',
      'Basic On-Page SEO (Meta Titles, Descriptions)',
      'WhatsApp & Phone Call Integration',
      'Secure Lead Capture Contact Form',
      'Free Domain & Hosting Setup Guidance',
      '30 Days Free Maintenance & Bug Support',
    ],
    isPopular: false,
    color: 'border-ink-100 bg-white hover:border-primary-300',
  },
  {
    name: 'Business Pro',
    price: '₹19,999',
    period: 'one-time',
    description: 'The ultimate professional package built to dominate local Google search and convert high-intent visitors.',
    ctaText: 'Get Best Package',
    ctaLink: '#contact-form-hero',
    features: [
      'Up to 10 Pages Premium Custom Website',
      'Custom Unique Modern Layout (No Cookie-Cutter Templates)',
      'Advanced Google SEO Setup & Schema Markup',
      'Blazing-Fast Speed Optimization (90+ Google PageSpeed)',
      'WhatsApp + Live Chatbot Integration',
      'Automated Lead Notification System',
      'Google Maps & Google Business Profile Setup',
      'Free Domain, High-Speed Hosting & G-Suite Guidance',
      '30 Days Premium Maintenance Support',
    ],
    isPopular: true,
    color: 'border-primary-500 bg-gradient-to-b from-blue-50/40 to-white shadow-glow ring-2 ring-primary-500/20',
  },
  {
    name: 'E-Commerce / Custom',
    price: '₹39,999+',
    period: 'one-time',
    description: 'For brands needing a high-end online storefront, customer dashboards, or complex web applications.',
    ctaText: 'Consult Our Experts',
    ctaLink: '#contact-form-hero',
    features: [
      'Custom Multi-page Dynamic E-Commerce Store',
      'Unlimited Products & Category Catalog Integration',
      'Secure Payment Gateway Setup (UPI, Cards, Netbanking)',
      'Automatic Invoice Generation & Email Alerts',
      'Simple Admin Dashboard to Manage Products & Orders',
      'Advanced Analytics & Facebook Pixel Tracking',
      'Robust SQL / Cloud Database Backend Integration',
      'Highest Grade Cyber-Security & SSL Setup',
      '60 Days Premium Extended Maintenance Support',
    ],
    isPopular: false,
    color: 'border-ink-100 bg-white hover:border-primary-300',
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-ink-50/45 border-t border-b border-ink-100">
      <SectionHeading
        eyebrow="Simple, Transparent Pricing"
        title={<>Choose the <span className="text-gradient">Right Package</span> for Your Business</>}
        description="High-converting website development with zero hidden costs. Quality engineering starting from ₹9,999."
      />

      {/* Trust Quote / Qualification Banner */}
      <div className="mx-auto max-w-3xl text-center mt-4 mb-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-800 border border-emerald-100">
          <HiSparkles className="h-4 w-4 text-emerald-600 animate-pulse" />
          No Tech Overwhelm • Transparent Milestones • 100% Refund Policy on Design Rejections
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3 items-stretch">
        {tiers.map((tier, idx) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-card ${tier.color}`}
          >
            {tier.isPopular && (
              <span className="absolute right-0 top-0 rounded-bl-2xl bg-primary-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1 shadow-sm">
                <HiSparkles className="h-3 w-3 fill-current" />
                Most Popular
              </span>
            )}

            <div>
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-ink-900">{tier.name}</h3>
                <p className="mt-2 text-xs text-ink-500 leading-relaxed min-h-[40px]">{tier.description}</p>
                
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-ink-900 tracking-tight sm:text-4xl">{tier.price}</span>
                  <span className="text-xs text-ink-400 font-medium">/{tier.period}</span>
                </div>
              </div>

              {/* Card Divider */}
              <div className="border-t border-ink-100 my-5" />

              {/* Features List */}
              <ul className="space-y-3.5 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs font-medium text-ink-700 leading-normal">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 mt-0.5">
                      <HiCheck className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto pt-4">
              <a
                href={tier.ctaLink}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form-hero')?.scrollIntoView({ behavior: 'smooth' });
                  document.getElementById('hero-name-input')?.focus();
                }}
                className={`inline-flex w-full h-11 items-center justify-center gap-2 rounded-xl text-xs font-bold transition duration-200 text-center ${
                  tier.isPopular
                    ? 'bg-primary-600 text-white shadow-md hover:bg-primary-700'
                    : 'border border-ink-200 bg-white text-ink-800 hover:bg-ink-50 hover:border-ink-300'
                }`}
              >
                {tier.ctaText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Immediate CTAs below packages */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row text-center border-t border-ink-100/60 pt-8">
        <span className="text-xs font-medium text-ink-500">Need a custom combination or have questions?</span>
        <div className="flex gap-3">
          <a
            href="tel:+917989692202"
            className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 transition"
          >
            <HiPhone className="h-4 w-4" />
            +91 79896 92202
          </a>
          <span className="text-ink-200">|</span>
          <a
            href="https://wa.me/917989692202?text=Hi%20SMANV%20IT,%20I'm%20interested%20in%20a%20custom%20website%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition"
          >
            <FaWhatsapp className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}

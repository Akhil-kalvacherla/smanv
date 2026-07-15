export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How much does website development cost?',
    answer:
      'Every project is scoped to your goals. Landing pages typically start around $2,500, custom business sites range $6,000–$18,000, and complex platforms are quoted after a free discovery call. You always get a fixed, transparent quote before any work begins.',
  },
  {
    question: 'How long does development take?',
    answer:
      'Landing pages ship in 1–2 weeks, standard business sites in 3–5 weeks, and larger platforms in 8–12 weeks. We share a milestone roadmap up front so you always know what is happening and when.',
  },
  {
    question: 'Is SEO included?',
    answer:
      'Yes. Every site we build ships with semantic markup, structured data, optimized metadata, fast Core Web Vitals, and an SEO-friendly URL structure. Advanced ongoing SEO strategy is available as a separate retainer.',
  },
  {
    question: 'Can I update my website myself?',
    answer:
      'Absolutely. We integrate a friendly CMS so your team can edit text, images, and pages without touching code. We also provide a personalized walkthrough and documentation at launch.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Yes. Our care plans include monitoring, daily backups, security patches, performance checks, and priority support. You can choose monthly or annual billing, and cancel anytime.',
  },
  {
    question: 'Can you redesign existing websites?',
    answer:
      'Yes. We specialize in SEO-safe redesigns that preserve your rankings and traffic while modernizing design, speed, and conversions. We handle content migration and redirects so nothing slips.',
  },
];

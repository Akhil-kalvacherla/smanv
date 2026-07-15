import { motion } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section';
import { features } from '../../data/features';

export default function Features() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Everything included"
        title={<>What every website <span className="text-gradient">includes</span></>}
        description="No hidden add-ons. Every project ships with these essentials baked in — so your site is fast, secure, and ready to grow from day one."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary-300 hover:shadow-glow"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
              </span>

              <h3 className="mt-4 text-base font-semibold text-ink-900">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{feature.description}</p>

              <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-300 group-hover:w-full" />
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

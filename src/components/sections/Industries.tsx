import { motion } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section';
import { industries } from '../../data/industries';

export default function Industries() {
  return (
    <Section id="industries" className="overflow-hidden bg-ink-50/60">
      <SectionHeading
        eyebrow="Industries we serve"
        title={<>Built for <span className="text-gradient">every industry</span></>}
        description="From healthcare to e-commerce, we tailor architecture, compliance, and UX to the way your industry actually works."
      />

      <div className="relative mt-16">
        

        {/* Cards grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:border-primary-300 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 w-full">
                  <h3 className="text-xs font-semibold text-ink-900 break-words sm:text-sm">{industry.name}</h3>
                  <p className="mt-1 text-[10px] leading-snug text-ink-400 break-words sm:text-xs">{industry.blurb}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { Section, SectionHeading } from '../ui/Section';
import { projects, projectCategories } from '../../data/projects';

export default function Portfolio() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow="Recent work"
        title={<>Projects we are <span className="text-gradient">proud of</span></>}
        description="A selection of recent websites and platforms we have designed and built for clients across industries."
      />

      {/* Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? 'bg-primary-600 text-white shadow-soft'
                : 'border border-ink-200 bg-white text-ink-600 hover:border-primary-300 hover:text-primary-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink-900">{project.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

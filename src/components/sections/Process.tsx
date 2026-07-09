import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section';
import { processSteps } from '../../data/site';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.4'],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="process" className="overflow-hidden bg-ink-50/60">
      <SectionHeading
        title={<>Our Website <span className="text-gradient">Development Process</span></>}
        description="A clear four-step process keeps your website project focused from the first discussion through launch."
      />

      <div ref={ref} className="relative mx-auto mt-16 max-w-6xl">
        {/* Curved SVG path with animation */}
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          className="absolute inset-0 h-full w-full pointer-events-none"
          preserveAspectRatio="none"
        >
          {/* Background track */}
          <motion.path
            d="M 100 200 C 300 100, 400 300, 600 200 C 800 100, 900 300, 1100 200"
            stroke="#e2e8f0"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Animated gradient path */}
          <motion.path
            d="M 100 200 C 300 100, 400 300, 600 200 C 800 100, 900 300, 1100 200"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength, opacity: pathLength }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Process steps positioned along the curve */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.slice(0, 4).map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="group relative">
                {/* Number badge */}
                <div className="absolute -top-6 -left-6 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white font-black text-xl shadow-lg shadow-blue-500/30"
                  >
                    {step.step.replace('0', '')}
                  </motion.div>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <h3 className="text-xl font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{step.description}</p>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                      className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

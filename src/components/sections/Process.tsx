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

      <div ref={ref} className="relative mx-auto mt-12 max-w-6xl sm:mt-16">
        {/* Curved SVG path — only visible on large screens */}
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          className="absolute inset-0 h-full w-full pointer-events-none hidden lg:block"
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
        <div className="relative grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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
                {/* Number badge — absolute on all sizes to overlap card */}
                <div className="absolute -top-4 -left-4 z-20 sm:-top-6 sm:-left-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white font-black text-lg shadow-lg shadow-blue-500/30 sm:h-14 sm:w-14 sm:text-xl sm:rounded-2xl"
                  >
                    {step.step.replace('0', '')}
                  </motion.div>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6 sm:rounded-3xl lg:p-7 lg:mt-6">
                  <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 sm:mb-4 sm:w-12" />
                  <h3 className="text-base font-bold text-ink-900 sm:text-lg lg:text-xl">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-600 sm:mt-3 sm:text-sm">{step.description}</p>
                  
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

              {/* Vertical animated connector between cards on mobile/tablet */}
              {i < 3 && (
                <div className="mx-auto mt-4 h-8 w-1 overflow-hidden rounded-full bg-ink-200 lg:hidden">
                  <motion.div
                    style={{ scaleY: pathLength, transformOrigin: 'top' }}
                    className="h-full w-full bg-gradient-to-b from-blue-500 to-cyan-500"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

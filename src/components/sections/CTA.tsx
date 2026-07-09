import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="container-px py-8 sm:py-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-blue-100 px-6 py-8 text-center text-blue-900 shadow-glow sm:rounded-[2.5rem] sm:px-12 sm:py-10">
        {/* Animated background shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-2xl"
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-1/4 top-10 h-24 w-24 rounded-full border border-blue-300/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 bg-dots opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-blue-200/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-800 backdrop-blur"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HiSparkles className="h-4 w-4" />
            Let's build together
          </motion.span>

          <motion.h2
            className="mt-4 text-2xl font-extrabold leading-tight text-blue-900 sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Ready To Grow Your Business Online?
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-700 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            Book a free 30-minute consultation. We will audit your current site, map opportunities, and show you exactly what is possible — no strings attached.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <Button href="#contact" size="lg" variant="primary" rightIcon={<HiArrowRight className="h-5 w-5" />}>
              Get Free Consultation
            </Button>
            <span className="text-sm font-medium text-blue-700">No commitment · Reply within 1 business hour</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

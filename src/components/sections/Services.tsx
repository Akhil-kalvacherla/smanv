import { motion } from 'framer-motion';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi2';
import { Section, SectionHeading } from '../ui/Section';
import Button from '../ui/Button';
import { services } from '../../data/services';

export default function Services() {
  return (
    <Section id="services" className="bg-ink-50/60">
      <SectionHeading
        eyebrow="What we do"
        title={<>Services built to <span className="text-gradient">grow your business</span></>}
        description="Four focused offerings that cover the full lifecycle of a modern website — from first sketch to ongoing care."
      />

      <div className="mt-12 flex flex-col gap-12 sm:mt-16 sm:gap-16 lg:gap-24">
        {services.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button href="#contact" size="lg" rightIcon={<HiArrowRight className="h-5 w-5" />}>
          Start your project
        </Button>
      </div>
    </Section>
  );
}

function ServiceRow({ service, index }: { service: (typeof services)[number]; index: number }) {
  const reversed = index % 2 === 1;
  const Icon = service.icon;

  return (
    <div className="grid items-center gap-6 lg:gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={reversed ? 'lg:order-2' : ''}
      >
        <div className="flex items-center gap-3">
          <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-soft`}>
            <Icon className="h-6 w-6" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Service {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold sm:text-2xl lg:text-3xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base lg:text-lg">{service.description}</p>

        <ul className="mt-5 grid grid-cols-1 gap-2 sm:mt-6 sm:grid-cols-2">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm font-medium text-ink-700">
              <HiCheckCircle className="h-5 w-5 shrink-0 text-primary-600" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <Button href="#contact" variant="outline" size="md" rightIcon={<HiArrowRight className="h-4 w-4" />}>
            Learn more
          </Button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={reversed ? 'lg:order-1' : ''}
      >
        <ServiceIllustration image={service.image} accent={service.accent} />
      </motion.div>
    </div>
  );
}

function ServiceIllustration({
  image,
  accent,
}: {
  image: string;
  accent: string;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card sm:aspect-[4/3]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-100/60 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-accent-400/20 blur-2xl" />
      
      <img
        src={image}
        alt="Service illustration"
        className="h-full w-full object-cover"
        loading="lazy"
      />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10`} />
    </div>
  );
}

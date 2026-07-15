import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { HiStar, HiCheckCircle, HiArrowRight } from 'react-icons/hi2';
import { Section } from '../ui/Section';
import Button from '../ui/Button';
import { testimonials } from '../../data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const bullets = [
  'Senior engineers, no juniors learning on your budget',
  'Fixed quotes — no surprise invoices, ever',
  'SEO-safe builds that protect and grow your traffic',
  'A real human on call, with under-1-hour response',
  'You own all code, assets, and accounts outright',
];

export default function WhyChooseUs() {
  return (
    <Section id="whychooseus">
      <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            A partner that <span className="text-gradient">treats your site like their own</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:mt-4 sm:text-base sm:text-lg">
            We are not a body shop. We are a small, senior team obsessed with the details that move the needle — speed, clarity, and conversions. Here is what you get when you work with SMANV IT.
          </p>

          <ul className="mt-5 space-y-3 sm:mt-7 sm:space-y-3.5">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 sm:h-5 sm:w-5" />
                <span className="text-xs font-medium text-ink-700 sm:text-sm sm:text-base">{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-8">
            <Button href="#contact" size="lg" rightIcon={<HiArrowRight className="h-4 w-4" />}>
              Work with us
            </Button>
          </div>
        </motion.div>

        {/* Right - testimonial slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full min-w-0"
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-200/40 to-accent-400/20 blur-2xl" />
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              loop
              className="!pb-14"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <figure className="glass rounded-2xl border border-white/60 p-5 shadow-card sm:p-7 sm:rounded-3xl lg:p-9">
                    <div className="flex items-center gap-1 text-amber-500" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, i) => (
                        <HiStar key={i} className="h-3 w-3 sm:h-4 sm:w-4" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-base leading-relaxed text-ink-800 sm:mt-5 sm:text-lg">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3.5">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-primary-100 sm:h-12 sm:w-12"
                      />
                      <div>
                        <div className="text-xs font-semibold text-ink-900 sm:text-sm">{t.name}</div>
                        <div className="text-[10px] text-ink-500 sm:text-xs">
                          {t.role}, {t.company}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

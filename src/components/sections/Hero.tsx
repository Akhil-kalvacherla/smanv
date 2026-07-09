import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiArrowRight, HiUser, HiPhone, HiEnvelope, HiBuildingOffice, HiGlobeAlt, HiBriefcase, HiChatBubbleLeft, HiSparkles, HiCheckCircle } from 'react-icons/hi2';
import Button from '../ui/Button';
import Counter from '../ui/Counter';
import { heroStats, clientLogos } from '../../data/site';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  company: string;
  website: string;
  businessType: string;
  requirement: string;
  message: string;
}

const businessTypes = ['Startup', 'Small Business', 'Mid-size Company', 'Enterprise', 'Agency', 'Other'];
const requirements = ['Custom Website Development', 'Website Redesign', 'Landing Page Development', 'Maintenance & Support', 'Not sure yet'];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Only apply parallax on larger screens to prevent mobile overflow
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const [submitted, setSubmitted] = useState(false);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      
      console.log("EmailJS Config:", { serviceId, templateId });
      
      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration missing. Please check environment variables.");
      }
      
      // Send email using EmailJS
      const templateParams = {
        to_email: "akhilkalvacherla@gmail.com",
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company,
        website: data.website,
        business_type: data.businessType,
        requirement: data.requirement,
        message: data.message,
      };

      console.log("Sending email with params:", templateParams);
      const response = await emailjs.send(serviceId, templateId, templateParams);
      console.log("Email sent successfully:", response);
      
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again or contact us directly at akhilkalvacherla@gmail.com");
    }
  };

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
      </div>

      <div className="container-px grid items-start gap-8 lg:items-center lg:gap-12 lg:grid-cols-2">
        {/* Left — text content (always first in DOM = first on mobile) */}
        <motion.div
          style={isMobile ? {} : { y: yLeft, opacity }}
          className="relative z-10 w-full min-w-0"
        >
          <motion.h1
            className="font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            We build Websites That <span className="text-gradient">Grow Your Business</span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base lg:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Build a powerful online presence with custom website development services from SMANV Info Tech. We design fast, responsive, SEO-ready websites that help businesses generate more enquiries, build trust, and increase sales.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:flex-wrap"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <Button href="#contact" size="lg" rightIcon={<HiArrowRight className="h-5 w-5" />} className="w-full sm:w-auto">
              Get Free Consultation
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink-100 bg-white/70 p-3 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-card sm:p-4"
              >
                <div className="text-xl font-bold text-ink-900 sm:text-2xl lg:text-3xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-[10px] font-medium text-ink-500 sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          style={isMobile ? {} : { y: yRight }}
          className="relative z-10 w-full min-w-0 lg:max-w-md lg:ml-auto"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl border border-ink-100 bg-white p-4 shadow-card sm:p-5 lg:p-6 lg:rounded-3xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full flex-col items-center justify-center py-16 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-green-100 text-green-600"
                  >
                    <HiCheckCircle className="h-12 w-12" />
                  </motion.span>
                  <h3 className="mt-6 text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-500">
                    Thanks for reaching out. We'll get back to you within one business hour.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="grid grid-cols-1 gap-3 sm:gap-4"
                >
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="text"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="John Smith"
                      {...register('name', { required: 'Name is required' })}
                    />
                  </div>

                  <div className="relative">
                    <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="tel"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="+91 00000 00000"
                      {...register('phone', { required: 'Phone is required' })}
                    />
                  </div>

                  <div className="relative">
                    <HiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="email"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Email"
                      {...register('email', { required: 'Email is required' })}
                    />
                  </div>

                  <div className="relative">
                    <HiBuildingOffice className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="text"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Company Name"
                      {...register('company')}
                    />
                  </div>

                  <div className="relative">
                    <HiGlobeAlt className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="url"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Website Link"
                      {...register('website')}
                    />
                  </div>

                  <div className="relative">
                    <HiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <select className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400" {...register('businessType')}>
                      <option value="">Business Type</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <HiChatBubbleLeft className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <select className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400" {...register('requirement')}>
                      <option value="">Website Requirement</option>
                      {requirements.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <HiChatBubbleLeft className="absolute left-3 top-4 h-5 w-5 text-ink-400" />
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 resize-none"
                      placeholder="Your Message"
                      {...register('message', { required: 'Message is required' })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} leftIcon={isSubmitting ? undefined : <HiSparkles className="h-5 w-5" />} rightIcon={isSubmitting ? undefined : <HiArrowRight className="h-5 w-5" />}>
                    {isSubmitting ? 'Sending...' : 'Get In Touch'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

   
    </section>
  );
}

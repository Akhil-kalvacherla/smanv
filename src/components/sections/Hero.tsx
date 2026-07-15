import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  HiStar,
  HiPhone,
  HiChatBubbleLeftRight,
  HiDevicePhoneMobile,
  HiMagnifyingGlass,
  HiClock,
  HiShieldCheck,
} from 'react-icons/hi2';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import Hero3DAnimation from '../ui/Hero3DAnimation';

const highlightBadges = [
  {
    title: 'Free Consultation',
    desc: 'Expert strategic blueprint & planning session.',
    icon: HiChatBubbleLeftRight,
    gradient: 'from-[#6C63FF]/10 to-indigo-500/10 hover:from-[#6C63FF]/20 hover:to-indigo-500/20 border-[#6C63FF]/30 text-[#00E5FF]',
    dotColor: 'bg-[#6C63FF]',
  },
  {
    title: 'Mobile-Friendly',
    desc: '100% pixel-perfect responsive layout on all devices.',
    icon: HiDevicePhoneMobile,
    gradient: 'from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-500/30 text-purple-400',
    dotColor: 'bg-purple-500',
  },
  {
    title: 'SEO Ready',
    desc: 'Optimized standard structure to rank fast on Google.',
    icon: HiMagnifyingGlass,
    gradient: 'from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 border-amber-500/30 text-amber-400',
    dotColor: 'bg-amber-500',
  },
  {
    title: 'Fast 7-Day Delivery',
    desc: 'Rapid development and launch in just one week.',
    icon: HiClock,
    gradient: 'from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border-emerald-500/30 text-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  {
    title: '30 Days Free Support',
    desc: 'Post-launch maintenance, security, and content updates.',
    icon: HiShieldCheck,
    gradient: 'from-rose-500/10 to-red-500/10 hover:from-rose-500/20 hover:to-red-500/20 border-rose-500/30 text-rose-400',
    dotColor: 'bg-rose-500',
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Only apply parallax on larger screens to prevent mobile overflow
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);



  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 bg-[#050816]">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#6C63FF]/20 blur-3xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-[#00E5FF]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container-px grid items-start gap-12 lg:items-start lg:grid-cols-12">
        {/* Left Side Content - 6 cols */}
        <motion.div
          style={isMobile ? {} : { y: yLeft, opacity }}
          className="relative z-10 w-full min-w-0 lg:col-span-6 flex flex-col items-start"
        >
          {/* Trust Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-[#6C63FF]/20"
          >
            <span className="flex items-center gap-0.5 text-[#00E5FF]">
              <HiStar className="h-4 w-4 fill-current" />
              <HiStar className="h-4 w-4 fill-current" />
              <HiStar className="h-4 w-4 fill-current" />
              <HiStar className="h-4 w-4 fill-current" />
              <HiStar className="h-4 w-4 fill-current" />
            </span>
            <span className="text-gray-200">4.9/5 Google Rating (150+ Websites Delivered)</span>
          </motion.div>

          {/* New Optimized Headline (Point 1) */}
          <motion.h1
            className="mt-4 font-extrabold tracking-tight text-white leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Get a Professional Business Website in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00E5FF]">7 Days</span> – Starting at <span className="line-through text-gray-500 font-normal text-[0.7em] mr-2">₹22,000</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00E5FF]">₹9,999</span>
          </motion.h1>

          {/* Subheadline Highlight Grid (Point 1 & 6) */}
          <div className="mt-5 grid grid-cols-2 gap-2 max-w-lg w-full">
            {highlightBadges.map((badge, idx) => {
              const Icon = badge.icon;
              const isLast = idx === highlightBadges.length - 1;
              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border bg-gradient-to-r ${badge.gradient} backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${isLast ? 'col-span-2' : ''}`}
                >
                  {/* Icon Box */}
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#050816]/80 backdrop-blur-sm shadow-lg border border-[#6C63FF]/20 text-current">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[11px] sm:text-xs font-extrabold text-white tracking-tight truncate">
                      {badge.title}
                    </h4>
                  </div>
                  <span className={`inline-block h-1 w-1 rounded-full ${badge.dotColor} animate-pulse shrink-0`} />
                </motion.div>
              );
            })}
          </div>

          {/* Above-the-fold CTA Buttons (Point 2) */}
          <motion.div
            className="mt-6 flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  // Focus the name input inside the contact form after scroll transition
                  setTimeout(() => {
                    const nameInput = contactSection.querySelector('input[name="name"]') as HTMLInputElement;
                    if (nameInput) nameInput.focus();
                  }, 800);
                }
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] px-6 text-sm font-bold text-white shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50 transition duration-200 text-center cursor-pointer"
            >
           
              Get Free Quote
            </a>

            <a
              href="tel:+917989692202"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#6C63FF]/30 bg-[#050816]/80 backdrop-blur-sm px-6 text-sm font-bold text-white shadow-lg hover:bg-[#6C63FF]/20 transition duration-200 text-center"
            >
              <HiPhone className="h-5 w-5 text-[#00E5FF]" />
              Call Now
            </a>

            <a
              href="https://wa.me/917989692202?text=Hi%20SMANV%20IT,%20I'm%20interested%20in%20a%20professional%20business%20website%20starting%20at%20%E2%82%B99,999."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition duration-200 text-center"
            >
              <FaWhatsapp className="h-5 w-5 text-white" />
              WhatsApp Now
            </a>
          </motion.div>

          {/* Social Media Links (Visible on all devices, especially optimized for mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center gap-3 bg-[#050816]/60 backdrop-blur-sm border border-[#6C63FF]/20 rounded-2xl px-4 py-2.5 shadow-lg"
          >
            <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">Follow Us:</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/smanvgroups"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#6C63FF]/30 bg-[#050816]/80 backdrop-blur-sm text-gray-300 shadow-lg transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[0_0_12px_rgba(24,119,242,0.35)]"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/smanv_groups/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#6C63FF]/30 bg-[#050816]/80 backdrop-blur-sm text-gray-300 shadow-lg transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-[#ee2a7b] hover:shadow-[0_0_12px_rgba(238,42,123,0.35)]"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/smanv-groups/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#6C63FF]/30 bg-[#050816]/80 backdrop-blur-sm text-gray-300 shadow-lg transition-all duration-300 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] hover:shadow-[0_0_12px_rgba(0,119,181,0.35)]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </motion.div>


        </motion.div>

        {/* Right Side Simulator Animation (replaces Form) */}
        <motion.div
          style={isMobile ? {} : { y: yRight }}
          className="relative z-10 w-full min-w-0 lg:col-span-6 lg:ml-auto lg:mt-0 lg:pt-0"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero3DAnimation />
        </motion.div>
      </div>
    </section>
  );
}

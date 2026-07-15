import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiCheckCircle,
  HiArrowLeft,
  HiSparkles,
  HiRocketLaunch,
  HiEnvelope,
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-redirect countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/website-development-services');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="relative min-h-[90vh] w-full bg-slate-50/50 flex flex-col items-center justify-center py-16 px-4 overflow-hidden select-none">
      {/* 1. LAYERED GLOWS & BACKGROUND BLURS */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-blue-400/10 blur-[80px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-emerald-400/10 blur-[90px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none -z-10" />

      {/* 2. CARD WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', duration: 0.8, bounce: 0.15 }}
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-ink-100 shadow-soft overflow-hidden p-8 sm:p-12 text-center"
      >
        {/* Top Gradient Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-blue-600 to-emerald-400" />

        {/* 3. CELEBRATORY MULTI-STAGE VECTOR ANIMATION */}
        <div className="relative h-44 w-full flex items-center justify-center mb-8 overflow-visible">
          {/* Pulsating background rings */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.4, 0.15] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute h-36 w-36 rounded-full border-2 border-emerald-400/30"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute h-44 w-44 rounded-full border border-blue-400/20"
          />

          {/* Interactive Floating Sparkles */}
          <motion.div
            animate={{ y: [-8, 8, -8], scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute top-4 left-[20%] text-emerald-500"
          >
            <HiSparkles className="h-7 w-7" />
          </motion.div>
          <motion.div
            animate={{ y: [6, -6, 6], scale: [0.9, 1.15, 0.9] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-6 right-[22%] text-primary-500"
          >
            <HiSparkles className="h-5 w-5" />
          </motion.div>

          {/* Core Animating Rocket Illustration (representing launch/project kick-off) */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{ y: [0, -10, 0], opacity: 1, scale: 1 }}
            transition={{
              y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-blue-600 text-white shadow-glow border-4 border-white"
          >
            <HiRocketLaunch className="h-14 w-14 rotate-45 text-white" />
          </motion.div>

          {/* Success Checkmark overlay badges */}
          <motion.div
            initial={{ scale: 0, x: 20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ type: 'spring', delay: 0.4, stiffness: 200 }}
            className="absolute top-[60%] left-[58%] z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-500 shadow-md border border-emerald-100"
          >
            <HiCheckCircle className="h-6 w-6" />
          </motion.div>
        </div>

        {/* 4. CONTENT & HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-100 uppercase tracking-wider mb-3">
            Inquiry Successfully Transmitted
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight">
            Thank You for <span className="text-gradient">Choosing smanvIT!</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-600 max-w-xl mx-auto leading-relaxed">
            Your custom website project proposal has been locked. Our Senior Tech Lead &amp; Project Strategist are already compiling your tailored wireframe options.
          </p>
        </motion.div>

        {/* 5. MULTI-CHANNEL IMMEDIATE CONTACTS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 max-w-lg mx-auto"
        >
          {/* WhatsApp Quick Direct Link */}
          <a
            href="https://wa.me/917975363425"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 hover:border-emerald-200 rounded-2xl text-emerald-950 transition duration-200 shadow-sm group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm group-hover:scale-110 transition duration-150">
              <FaWhatsapp className="h-5 w-5 fill-white" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Chat Instantly</div>
              <div className="text-sm font-extrabold">+91 79896 92202</div>
            </div>
          </a>

          {/* Email Quick Mailto */}
          <a
            href="mailto:smanvgroupsdigital@gmail.com"
            className="flex items-center justify-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 border border-blue-100 hover:border-blue-200 rounded-2xl text-blue-950 transition duration-200 shadow-sm group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm group-hover:scale-110 transition duration-150">
              <HiEnvelope className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">Email Direct</div>
              <div className="text-sm font-extrabold">admin@smanv.com</div>
            </div>
          </a>
        </motion.div>

        {/* 6. COUNTDOWN DOCK & BUTTON ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 pt-8 border-t border-ink-100 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Circular Countdown Gauge */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex h-12 w-12 items-center justify-center">
              {/* Outer stroke circle */}
              <svg className="absolute inset-0 h-full w-full rotate-[-90deg]">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="3.5"
                />
                <motion.circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3.5"
                  strokeDasharray="125.6"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: (125.6 * (8 - countdown)) / 8 }}
                  transition={{ duration: 1, ease: 'linear' }}
                />
              </svg>
              <span className="text-sm font-extrabold text-blue-600">{countdown}s</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-ink-800">Auto-redirecting Home</p>
              <p className="text-[10px] font-medium text-ink-400">Sit back while we sync your portal...</p>
            </div>
          </div>

          {/* Instant Return Button */}
          <button
            onClick={() => navigate('/website-development-services')}
            className="flex h-12 items-center justify-center gap-2 px-6 rounded-2xl bg-ink-950 hover:bg-ink-900 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
          >
            <HiArrowLeft className="h-4 w-4" />
            Return Home Instantly
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

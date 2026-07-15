import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowRight, HiPhone } from 'react-icons/hi2';
import Logo from './Logo';
import Button from './ui/Button';
import { navLinks } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/website-development-services';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = true; // Always show solid background with blur

  return (
    <>
      <motion.header
        className="
fixed top-0 left-0 right-0 z-50

bg-gradient-to-r
from-white/15
via-white/10
to-white/15

backdrop-blur-3xl
backdrop-saturate-200

border-b border-white/20

shadow-[0_8px_32px_rgba(0,0,0,0.08)]
"
      >
        <nav className="container-px flex h-16 items-center justify-between lg:h-20" aria-label="Primary">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={isHome ? link.href : `/website-development-services${link.href}`}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    solid ? 'text-ink-600 hover:text-primary-700 hover:bg-primary-50' : 'text-ink-700 hover:text-primary-700 hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="tel:+917989692202" size="md" leftIcon={<HiPhone className="h-4 w-4" />}>
              Call Us +917989692202
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 min-h-[44px] min-w-[44px] place-items-center rounded-xl border border-ink-200 bg-white/80 text-ink-800 backdrop-blur transition hover:bg-primary-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <HiXMark className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span key="bars" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <HiBars3 className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-white pt-20 pb-8 shadow-lift overflow-y-auto max-h-screen"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="container-px">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                    >
                      <a
                        href={isHome ? link.href : `/website-development-services${link.href}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink-800 transition hover:bg-primary-50 hover:text-primary-700"
                      >
                        {link.label}
                        <HiArrowRight className="h-4 w-4 text-ink-300" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                >
                  <Button href="tel:+917989692202" size="lg" className="w-full" leftIcon={<HiPhone className="h-5 w-5" />} onClick={() => setOpen(false)}>
                    Call Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

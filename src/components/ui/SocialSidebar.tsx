import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa6';

const socials = [
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://www.facebook.com/smanvgroups',
    color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    glow: 'hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/smanv_groups/',
    color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-[#ee2a7b]',
    glow: 'hover:shadow-[0_0_15px_rgba(238,42,123,0.4)]',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/smanv-groups/?viewAsMember=true',
    color: 'hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]',
    glow: 'hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]',
  },
];

export default function SocialSidebar() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 items-center">
      {/* Decorative vertical connection line on top of buttons */}
      <div className="w-[1.5px] h-10 bg-gradient-to-b from-transparent to-ink-200" />

      {/* Button dock */}
      <div className="flex flex-col gap-3 p-2 bg-white/90 backdrop-blur-md rounded-2xl border border-ink-100 shadow-lg">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-xl border border-ink-100 bg-white text-ink-600 shadow-sm transition-all duration-300 ${social.color} ${social.glow}`}
              aria-label={`Visit our ${social.label} page`}
            >
              <Icon className="h-4.5 w-4.5 transition duration-200" />

              {/* Tooltip */}
              <span className="absolute right-12 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-ink-950 text-white font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-md whitespace-nowrap pointer-events-none border border-ink-800">
                {social.label}
                {/* Micro tooltip arrow */}
                <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-2 h-2 rotate-45 bg-ink-950 border-r border-t border-ink-800" />
              </span>
            </motion.a>
          );
        })}
      </div>

      {/* Decorative vertical connection line below buttons */}
      <div className="w-[1.5px] h-10 bg-gradient-to-t from-transparent to-ink-200" />
    </div>
  );
}

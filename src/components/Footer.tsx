import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { navLinks } from "../data/site";
import { services } from "../data/services";

const socials = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/smanv-groups/?viewAsMember=true",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/smanvgroups",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/smanv_groups/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-100 bg-white">

      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />

      {/* Huge Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <h2
          className="
            whitespace-nowrap
            text-[120px]
            sm:text-[180px]
            lg:text-[280px]
            xl:text-[320px]
            font-black
            uppercase
            tracking-[-0.08em]
            text-gray-300
            opacity-30
            leading-none
          "
          aria-hidden="true"
        >
          SMANV
        </h2>
      </div>

      {/* Main Content */}
      <div className="container-px relative z-10 py-12 sm:py-16">
        {/* Top grid — 1 col on mobile, 2 col on sm/md, 12-col on lg */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand — full width on mobile, 2 cols on sm, 4 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Premium website development, redesign, and maintenance for
              businesses that care about the details.
            </p>

            <div className="mt-5 space-y-2 text-xs text-ink-500 font-medium">
              <p className="flex items-start gap-1.5">
                <span className="font-bold text-ink-800">Address:</span>
                <span>4-72, Nacharam, Uppal, Hyderabad, Telangana, India</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="font-bold text-ink-800">GSTIN:</span>
                <span>36AAGCS8331P1Z9 (GST Registered Invoice Provided)</span>
              </p>
            </div>
          </div>

          {/* Quick Links — 1 col on sm, 2 cols on lg */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-ink-900">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-500 transition hover:text-primary-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 1 col on sm, 3 cols on lg */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-ink-900">
              Services
            </h4>

            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-ink-500 transition hover:text-primary-700"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA — 1 col on sm, 3 cols on lg */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-ink-900">
              Follow Us
            </h4>

            <div className="mt-4 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="
                      flex
                      h-11
                      w-11
                      min-h-[44px]
                      min-w-[44px]
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      text-gray-700
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                      hover:shadow-lg
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gray-900
                px-5
                py-3
                min-h-[44px]
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-gray-800
              "
            >
              Start a Project
              <HiArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:mt-12">

          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} SMANV Info Tech Pvt. Ltd. • Smarter Technology. Stronger Business.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-gray-500 transition hover:text-blue-600"
            >
              Privacy Policy
            </Link>

            {/* <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-blue-600"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-blue-600"
            >
              Cookies
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
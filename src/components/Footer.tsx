import { useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";
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
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setDone(true);
    setEmail("");

    setTimeout(() => {
      setDone(false);
    }, 3000);
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink-100 bg-white">

      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />

      {/* Huge Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <h1
          className="
            whitespace-nowrap
            text-[180px]
            sm:text-[240px]
            lg:text-[320px]
            font-black
            uppercase
            tracking-[-0.08em]
            text-gray-300
            opacity-30
            leading-none
          "
        >
          SMANV
        </h1>
      </div>

      {/* Main Content */}
      <div className="container-px relative z-10 py-16">
        <div className="grid gap-10 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Premium website development, redesign, and maintenance for
              businesses that care about the details.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Services */}
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

          {/* Social */}
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} SMANV Info Tech Pvt. Ltd. • Smarter Technology. Stronger Business.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-blue-600"
            >
              Privacy Policy
            </a>

            <a
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
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
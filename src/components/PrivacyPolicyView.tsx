import { motion } from 'framer-motion';
import { HiArrowLeft, HiEnvelope, HiPhone, HiMapPin, HiShieldCheck, HiOutlineDocumentText } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function PrivacyPolicyView() {
  // Automatically scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50/30 pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Decorative gradient blur */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-100/20 blur-3xl" />

      <div className="container-px relative z-10 max-w-4xl mx-auto">
        
        {/* Top Back Button */}
        <div className="mb-8">
          <Link
            to="/website-development-services"
            className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white/80 px-4 py-2 text-xs font-semibold text-ink-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary-700 hover:shadow-md"
          >
            <HiArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Card Header & Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-primary-700 px-6 py-10 text-white sm:px-12 sm:py-14">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                <HiShieldCheck className="h-6 w-6 text-blue-200" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Trust & Transparency</span>
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-blue-100 font-medium">
              SMANV Info Tech Pvt. Ltd.
            </p>
          </div>

          {/* Policy Body Content */}
          <div className="px-6 py-8 text-sm leading-relaxed text-ink-600 sm:px-12 sm:py-12 space-y-8">
            <p className="text-base text-ink-700 font-medium">
              At SMANV Info Tech Pvt. Ltd. (“SMANV”, “we”, “us”, or “our”), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>

            <hr className="border-slate-100" />

            {/* Section: Information Collection */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">1</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">Information Collection</h2>
              </div>
              <p className="pl-8 text-ink-600">
                We collect personal information that you voluntarily provide to us, such as your name, email address, phone number, company name, website link, business type, and project or service requirements, when you fill out our “Get Free Consultation” / “Get In Touch” forms or otherwise communicate with us directly.
              </p>
            </section>

            {/* Section: Usage of Information */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">2</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">Usage of Information</h2>
              </div>
              <div className="pl-8 space-y-2">
                <p className="text-ink-600">The information we collect is used to:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-ink-600">
                  <li>Provide and improve our IT services and digital marketing services.</li>
                  <li>Respond to inquiries and support requests.</li>
                  <li>Send you updates, newsletters, or promotional content (only if you opt in).</li>
                  <li>Ensure compliance with our legal and regulatory obligations, including under India's Digital Personal Data Protection Act, 2023.</li>
                </ul>
              </div>
            </section>

            {/* Section: Data Security */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">3</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">Data Security</h2>
              </div>
              <p className="pl-8 text-ink-600">
                We take appropriate technical and organizational security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Client credentials are never stored beyond what is necessary and are only used for the immediate purpose for which they are shared.
              </p>
            </section>

            {/* Section: Cookies */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">4</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">Cookies</h2>
              </div>
              <p className="pl-8 text-ink-600">
                Our website may use cookies to enhance user experience and analyze traffic. You can choose to accept or decline cookies through your browser settings.
              </p>
            </section>

            {/* Section: Third-Party Sharing */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">5</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">Third-Party Sharing</h2>
              </div>
              <p className="pl-8 text-ink-600">
                We do not sell, trade, or rent your personal information to third parties. Information may be shared only with trusted partners who assist us in operating our website or delivering our services, and only under confidentiality agreements.
              </p>
            </section>

            {/* Section: External Links */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">6</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">External Links</h2>
              </div>
              <p className="pl-8 text-ink-600">
                Our website may contain links to external sites. We are not responsible for the content or privacy practices of those websites.
              </p>
            </section>

            {/* Section: Your Rights */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">7</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">Your Rights</h2>
              </div>
              <p className="pl-8 text-ink-600">
                You have the right to access, update, or request deletion of your personal information. To exercise these rights, please contact us using the details below.
              </p>
            </section>

            {/* Section: Policy Updates */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 font-semibold text-xs">8</span>
                <h2 className="text-base font-black text-ink-900 tracking-tight">Policy Updates</h2>
              </div>
              <p className="pl-8 text-ink-600">
                This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. We encourage users to review it periodically.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section: Contact Us */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-blue-700">
                <HiOutlineDocumentText className="h-5 w-5" />
                <h2 className="text-base font-black tracking-tight">Contact Us</h2>
              </div>
              <p className="text-ink-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-xs pt-2">
                <a href="mailto:admin@smanv.com" className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 text-ink-600 transition hover:border-blue-300 hover:text-blue-600">
                  <HiEnvelope className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="truncate font-medium">admin@smanv.com</span>
                </a>
                <a href="tel:+917989692202" className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 text-ink-600 transition hover:border-blue-300 hover:text-blue-600">
                  <HiPhone className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="truncate font-medium">+91 79896 92202</span>
                </a>
                <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 text-ink-600">
                  <HiMapPin className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="truncate font-medium">Nacharam, Hyderabad</span>
                </div>
              </div>
            </section>

            {/* Legal Footnote */}
            <div className="pt-6 border-t border-slate-100 text-center text-xs text-ink-400 font-semibold space-y-1">
              <p>SMANV Info Tech Pvt. Ltd. — Registered under MSME (Udyam)</p>
              <p>© 2026 SMANV Info Tech Pvt. Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/website-development-services"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <HiArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

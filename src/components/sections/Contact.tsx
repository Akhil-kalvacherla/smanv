import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiCheckCircle,
  HiClock,
  HiArrowRight,
  HiSparkles,
  HiUser,
  HiBuildingOffice,
  HiGlobeAlt,
  HiBriefcase,
  HiChatBubbleLeft,
} from 'react-icons/hi2';
import { Section, SectionHeading } from '../ui/Section';
import Button from '../ui/Button';
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

const benefits = [
  'Free 30-minute consultation',
  'No-pressure, honest recommendations',
  'Fixed quote within 1 business day',
  'Your data stays private — never shared',
];

const contactItems = [
  { icon: HiPhone, label: 'Call us', value: '+91 79896 92202' },
  { icon: HiEnvelope, label: 'Email us', value: 'admin@smanv.com' },
  { icon: HiMapPin, label: 'Visit us', value: '4-72, Nacharam, Uppal, Hyderabad, Telangana, India' },
];

export default function Contact() {
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
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-gradient">your project</span></>}
        description="Tell us what you are building. We will get back within one business hour with concrete next steps."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Left info card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-1"
        >
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-blue-100 to-blue-100 p-8 text-blue-900 shadow-glow">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent-400/30 blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold text-blue-900">Why reach out?</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-800">
                A real, senior person reads every message. No bots, no call centers.
              </p>

              <ul className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm font-medium text-blue-900">
                    <HiCheckCircle className="h-5 w-5 shrink-0 text-blue-600" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4 border-t border-blue-400/30 pt-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3.5">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/20 backdrop-blur">
                        <Icon className="h-5 w-5 text-blue-700" />
                      </span>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-blue-700">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-blue-900">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-blue-500/20 p-4 backdrop-blur">
                <HiClock className="h-6 w-6 shrink-0 text-blue-700" />
                <div className="text-sm">
                  <div className="font-semibold text-blue-900">Average response time</div>
                  <div className="text-blue-700">Under 1 business hour</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-1"
        >
          <div className="relative h-full mx-auto max-w-md rounded-3xl border border-ink-100 bg-white p-5 shadow-card sm:p-6">
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
                    Thanks for reaching out. A senior team member will reply within one business hour.
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
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="text"
                      className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="John Smith"
                      {...register('name', { required: 'Name is required' })}
                    />
                  </div>

                  <div className="relative">
                    <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="tel"
                      className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="+91 00000 00000"
                      {...register('phone', { required: 'Phone is required' })}
                    />
                  </div>

                  <div className="relative">
                    <HiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="email"
                      className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Email"
                      {...register('email', { required: 'Email is required' })}
                    />
                  </div>

                  <div className="relative">
                    <HiBuildingOffice className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="text"
                      className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Company Name"
                      {...register('company')}
                    />
                  </div>

                  <div className="relative">
                    <HiGlobeAlt className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="url"
                      className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Website Link"
                      {...register('website')}
                    />
                  </div>

                  <div className="relative">
                    <HiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <select className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400" {...register('businessType')}>
                      <option value="">Business Type</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <HiChatBubbleLeft className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <select className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400" {...register('requirement')}>
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
                  <p className="text-center text-xs text-ink-400">
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

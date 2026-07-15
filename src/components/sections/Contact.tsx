import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  HiBriefcase,
  HiChatBubbleLeftRight,
} from 'react-icons/hi2';
import { Section, SectionHeading } from '../ui/Section';
import Button from '../ui/Button';
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  businessType: string;
  message: string;
}

const businessTypes = [
  'Startup',
  'Small Business',
  'Mid-size Company',
  'Enterprise',
  'Agency',
  'Other',
];

const benefits = [
  'Free 30-minute consultation',
  'No-pressure, honest recommendations',
  'Fixed quote within 1 business day',
  'Your data stays private — never shared',
];

const contactItems = [
  { icon: HiPhone, label: 'Call / WhatsApp us', value: '+91 79896 92202' },
  { icon: HiEnvelope, label: 'Email us', value: 'admin@smanv.com' },
  { icon: HiMapPin, label: 'Visit us', value: '4-72, Nacharam, Uppal, Hyderabad, Telangana, India' },
];

export default function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const [submitted, setSubmitted] = useState(false);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Lucsdrq5WEBSOhQWF";
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8rn1x2f";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_uy1crui";
      const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

      console.log("EmailJS Config:", { serviceId, templateId });

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration missing. Please check environment variables.");
      }

      // Send email using EmailJS with simplified fields
      const templateParams = {
        to_email: "smanvgroupsdigital@gmail.com",
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        business_type: data.businessType,
        company: "N/A",
        website: "N/A",
        requirement: "Website Development Inquiry",
        message: `Business Type: ${data.businessType}\n\nMessage:\n${data.message}`,
      };

      console.log("Sending email with contact form params:", templateParams);
      const response = await emailjs.send(serviceId, templateId, templateParams);
      console.log("Email sent successfully:", response);

      // Save to Google Sheets if URL is configured
      if (googleSheetsUrl) {
        try {
          const submissionData = {
            timestamp: new Date().toISOString(),
            name: data.name,
            email: data.email,
            phone: data.phone,
            businessType: data.businessType,
            message: data.message,
            source: window.location.href,
            status: 'New'
          };

          console.log("Saving to Google Sheets:", submissionData);
          
          // Use form-encoded data for better compatibility with Google Apps Script
          const formData = new URLSearchParams();
          Object.keys(submissionData).forEach(key => {
            formData.append(key, submissionData[key as keyof typeof submissionData]);
          });

          const sheetResponse = await fetch(googleSheetsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
          });
          console.log("Google Sheets request sent");
        } catch (sheetError) {
          console.error("Failed to save to Google Sheets:", sheetError);
          // Don't throw error - email was sent successfully
        }
      }

      reset();
      navigate('/thank-you');
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again or contact us directly at smanvgroupsdigital@gmail.com");
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-gradient">your project</span></>}
        description="Tell us what you are building. We will get back within one business hour with concrete next steps."
      />

      <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
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
                A senior website consultant reviews every message. No automated bots or call centers.
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

              {/* Added GST Details note for trust (Point 4) */}
              <div className="mt-4 text-xs text-blue-700/80 font-medium pl-14">
                Company Reg: Hyderabad Office • GST Registered Invoice Available
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-blue-500/20 p-4 backdrop-blur">
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
          <div className="relative w-full rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:p-6 lg:p-7 lg:rounded-3xl">
            <h3 className="text-lg font-bold text-ink-900 mb-3">Quick Lead Form</h3>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full flex-col items-center justify-center py-12 text-center sm:py-16"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600 sm:h-20 sm:w-20"
                  >
                    <HiCheckCircle className="h-10 w-10 sm:h-12 sm:w-12" />
                  </motion.span>
                  <h3 className="mt-4 text-xl font-bold sm:mt-6 sm:text-2xl">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-xs text-ink-500 sm:text-sm">
                    Thanks for reaching out. We will get back to you within one business hour.
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
                  {/* Name Input */}
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="text"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Your Full Name"
                      {...register('name', { required: 'Name is required' })}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="tel"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="WhatsApp / Phone Number"
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <HiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="email"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Email Address"
                      {...register('email', { required: 'Email address is required' })}
                    />
                  </div>

                  {/* Business Type Select */}
                  <div className="relative">
                    <HiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <select
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 appearance-none"
                      {...register('businessType', { required: 'Please select business type' })}
                    >
                      <option value="">Select Business Type</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Your Message Input */}
                  <div className="relative">
                    <HiChatBubbleLeftRight className="absolute left-3 top-3 h-5 w-5 text-ink-400" />
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-ink-200 bg-white pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 resize-none"
                      placeholder="Your Message (Tell us what you are building)"
                      {...register('message', { required: 'Message is required' })}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2"
                    disabled={isSubmitting}
                    rightIcon={isSubmitting ? undefined : <HiArrowRight className="h-5 w-5" />}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
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

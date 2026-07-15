import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {
  HiXMark,
  HiUser,
  HiPhone,
  HiEnvelope,
  HiBriefcase,
  HiSparkles,
  HiArrowRight,
  HiCheckCircle,
  HiClock,
} from 'react-icons/hi2';

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  businessType: string;
}

interface CallNowFormValues {
  name: string;
  phone: string;
  preferredTime: string;
}

const businessTypes = [
  'Startup',
  'Small Business',
  'Mid-size Company',
  'Enterprise',
  'Agency',
  'Other',
];

const preferredTimes = [
  'ASAP (Within 15 Minutes)',
  'Morning (9:00 AM - 12:00 PM)',
  'Afternoon (12:00 PM - 4:00 PM)',
  'Evening (4:00 PM - 8:00 PM)',
];

export default function PopupContactForm() {
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState<'contact' | 'callNow' | null>(null);
  const contactSubmitted = false;
  const callSubmitted = false;

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    reset: resetContact,
    formState: { isSubmitting: isContactSubmitting },
  } = useForm<ContactFormValues>();

  const {
    register: registerCall,
    handleSubmit: handleSubmitCall,
    reset: resetCall,
    formState: { isSubmitting: isCallSubmitting },
  } = useForm<CallNowFormValues>();

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Lucsdrq5WEBSOhQWF";
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Trigger popups sequentially
  useEffect(() => {
    // Check if both popups have been fully processed in this session
    const contactDone = sessionStorage.getItem('smanv_contact_popup_done') === 'true';
    if (contactDone) {
      const callDone = sessionStorage.getItem('smanv_call_popup_done') === 'true';
      if (!callDone) {
        // Contact is done, but call isn't. Trigger call now after 2 seconds
        const callTimer = setTimeout(() => {
          setActivePopup('callNow');
        }, 2000);
        return () => clearTimeout(callTimer);
      }
      return;
    }

    // Trigger first popup (Contact Form) after exactly 4 seconds
    const contactTimer = setTimeout(() => {
      setActivePopup('contact');
    }, 4000);

    return () => clearTimeout(contactTimer);
  }, []);

  // Listen for custom event to trigger contact popup
  useEffect(() => {
    const handleTriggerPopup = () => {
      setActivePopup('contact');
    };
    window.addEventListener('trigger-contact-popup', handleTriggerPopup);
    return () => window.removeEventListener('trigger-contact-popup', handleTriggerPopup);
  }, []);

  const handleCloseContact = () => {
    setActivePopup(null);
    sessionStorage.setItem('smanv_contact_popup_done', 'true');

    // Automatically queue the Call Now popup after a short 1.2 seconds delay
    const callDone = sessionStorage.getItem('smanv_call_popup_done') === 'true';
    if (!callDone) {
      setTimeout(() => {
        setActivePopup('callNow');
      }, 1200);
    }
  };

  const handleCloseCallNow = () => {
    setActivePopup(null);
    sessionStorage.setItem('smanv_call_popup_done', 'true');
  };

  // Submit Handler for Contact Form
  const onContactSubmit = async (data: ContactFormValues) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8rn1x2f";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_uy1crui";

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration missing. Please check environment variables.");
      }

      const templateParams = {
        to_email: "smanvgroupsdigital@gmail.com",
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        business_type: data.businessType,
        company: "N/A",
        website: "N/A",
        requirement: "Popup Contact Form Inquiry",
        message: `Business Type: ${data.businessType}. Quick inquiry from website auto-popup.`,
      };

      // Send EmailJS (primary) - this is what we wait for
      await emailjs.send(serviceId, templateId, templateParams);

      // Google Sheets - fire and forget, don't wait for it
      fetch("https://script.google.com/macros/s/AKfycbzN-xskk7sliMtdpWpUvTINqeZ3Xpx8Xx4s0ZmA6_iUAyQDyUFP1oduk_1KbI5sXTGk0w/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch(err => console.log("Google Sheets sync failed (non-critical):", err));

      resetContact();
      setActivePopup(null);
      sessionStorage.setItem('smanv_contact_popup_done', 'true');
      navigate('/thank-you');
    } catch (error) {
      console.error("Failed to send contact inquiry:", error);
      alert("Failed to send message. Please try again or contact us directly at smanvgroupsdigital@gmail.com");
    }
  };

  // Submit Handler for Call Now Form
  const onCallSubmit = async (data: CallNowFormValues) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8rn1x2f";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_uy1crui";

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration missing.");
      }

      const templateParams = {
        to_email: "smanvgroupsdigital@gmail.com",
        from_name: data.name,
        from_email: "no-email@smanv.com",
        phone: data.phone,
        business_type: "Instant Callback Request",
        company: "N/A",
        website: "N/A",
        requirement: "Callback Schedule Request",
        message: `Callback scheduled. Preferred time slot: ${data.preferredTime}. Customer Name: ${data.name}.`,
      };

      // Send EmailJS (primary) - this is what we wait for
      await emailjs.send(serviceId, templateId, templateParams);

      // Google Sheets - fire and forget, don't wait for it
      fetch("https://script.google.com/macros/s/AKfycbzN-xskk7sliMtdpWpUvTINqeZ3Xpx8Xx4s0ZmA6_iUAyQDyUFP1oduk_1KbI5sXTGk0w/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch(err => console.log("Google Sheets sync failed (non-critical):", err));

      resetCall();
      setActivePopup(null);
      sessionStorage.setItem('smanv_call_popup_done', 'true');
      navigate('/thank-you');
    } catch (error) {
      console.error("Failed to schedule callback:", error);
      alert("Failed to send request. Please try again or call us at +91-7975363425");
    }
  };

  return (
    <AnimatePresence>
      {/* 1. CONTACT FORM POPUP */}
      {activePopup === 'contact' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseContact}
            className="absolute inset-0 bg-ink-950/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8"
          >
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-blue-600 to-emerald-500" />

            {/* Close Button */}
            <button
              onClick={handleCloseContact}
              className="absolute right-4 top-4 rounded-xl p-1.5 text-ink-400 hover:bg-ink-100 hover:text-ink-700 transition duration-150"
              aria-label="Close modal"
            >
              <HiXMark className="h-6 w-6" />
            </button>

            {/* Header Content */}
            <div className="mb-6 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-700 uppercase tracking-wider mb-2">
                <HiSparkles className="h-3.5 w-3.5" />
                Special Online Offer
              </span>
              <h3 className="text-2xl font-extrabold text-ink-900 tracking-tight">
                Launch Your Website in 7 Days!
              </h3>
              <p className="mt-1.5 text-xs text-ink-500 font-medium px-4 leading-relaxed">
                Fill this 10-second form and receive a custom blueprint + quotation in under 1 hour.
              </p>
            </div>

            {/* Form / Success States */}
            <AnimatePresence mode="wait">
              {contactSubmitted ? (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600"
                  >
                    <HiCheckCircle className="h-10 w-10" />
                  </motion.div>
                  <h4 className="mt-4 text-xl font-bold text-ink-900">Consultation Booked!</h4>
                  <p className="mt-2 text-xs text-ink-500 max-w-xs leading-relaxed">
                    Our Senior Tech Lead is reviewing details and will contact you via Phone/WhatsApp within 1 business hour.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmitContact(onContactSubmit)}
                  noValidate
                  className="space-y-4"
                >
                  {/* Name Input */}
                  <div className="relative">
                    <HiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="text"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-11 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Your Full Name"
                      {...registerContact('name', { required: 'Name is required' })}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <HiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="tel"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-11 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="WhatsApp / Phone Number"
                      {...registerContact('phone', { required: 'Phone number is required' })}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <HiEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <input
                      type="email"
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-11 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400"
                      placeholder="Email Address"
                      {...registerContact('email', { required: 'Email address is required' })}
                    />
                  </div>

                  {/* Business Type Select */}
                  <div className="relative">
                    <HiBriefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" />
                    <select
                      className="w-full min-h-[44px] rounded-xl border border-ink-200 bg-white pl-11 pr-10 py-2.5 text-sm text-ink-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 appearance-none"
                      {...registerContact('businessType', { required: 'Please select business type' })}
                    >
                      <option value="">Select Business Type</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isContactSubmitting}
                    className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-600 text-sm font-extrabold text-white shadow-md hover:bg-primary-700 transition duration-200 disabled:bg-primary-400 cursor-pointer"
                  >
                    {isContactSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                       
                        Get Free Quote
                        <HiArrowRight className="h-5 w-5 ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-ink-400 font-medium">
                    🛡️ No-spam guaranteed. Your data is 100% confidential.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

    </AnimatePresence>
  );
}

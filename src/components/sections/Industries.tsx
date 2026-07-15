// import { motion } from 'framer-motion';
// import { Section, SectionHeading } from '../ui/Section';
// import { industries } from '../../data/industries';

// export default function Industries() {
//   return (
//     <Section id="industries" className="overflow-hidden bg-ink-50/60">
//       <SectionHeading
//         eyebrow="Industries we serve"
//         title={<>Built for <span className="text-gradient">every industry</span></>}
//         description="From healthcare to e-commerce, we tailor architecture, compliance, and UX to the way your industry actually works."
//       />

//       <div className="relative mt-16">
        

//         {/* Cards grid */}
//         <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
//           {industries.map((industry, i) => {
//             const Icon = industry.icon;
//             return (
//               <motion.article
//                 key={industry.name}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, margin: '-50px' }}
//                 transition={{ duration: 0.45, delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
//                 whileHover={{ y: -6, scale: 1.03 }}
//                 className="group relative flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:border-primary-300 hover:shadow-glow"
//               >
//                 <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary-600 group-hover:text-white">
//                   <Icon className="h-6 w-6" />
//                 </span>
//                 <div className="min-w-0 w-full">
//                   <h3 className="text-xs font-semibold text-ink-900 break-words sm:text-sm">{industry.name}</h3>
//                   <p className="mt-1 text-[10px] leading-snug text-ink-400 break-words sm:text-xs">{industry.blurb}</p>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </Section>
//   );
// }


// 

import { createFileRoute } from "@tanstack/react-router";
import { motion } from 'framer-motion';
import heroImg from "../assets/industries-hero.png";

// Import your images
import frame1 from "../assets/healthcare.jpg";
import frame2 from "../assets/hospitality.jpg";
import frame3 from "../assets/finance.jpg";
import frame4 from "../assets/education.jpg";
import frame5 from "../assets/manufacturing.jpg";
import frame6 from "../assets/ecommerce.jpg";
import frame7 from "../assets/corporate.jpg";
import frame8 from "../assets/realestate.jpg";
import frame9 from "../assets/logistics.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve" },
      {
        name: "description",
        content:
          "We create websites tailored to the specific needs of your business across many industries.",
      },
    ],
  }),
  component: IndustriesPage,
});

type Item = {
  label: string;
  image: string;
};

const items: Item[] = [
  { label: "Healthcare", image: frame1 },
  { label: "Hospitality", image: frame2 },
  { label: "Finance", image: frame3 },
  { label: "Education", image: frame4 },
  { label: "Manufacturing", image: frame5 },
  { label: "E-Commerce", image: frame6 },
  { label: "Corporate", image: frame7 },
  { label: "Real Estate", image: frame8 },
  { label: "Logistics", image: frame9 },
];

function Pill({
  item,
  className = "",
  style,
}: {
  item: Item;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { label, image } = item;

  return (
    <div
      className={`group inline-flex items-center gap-3 rounded-full border border-blue-300 bg-white pl-1.5 pr-6 py-1.5 shadow-[0_2px_10px_rgba(37,99,235,0.10)] whitespace-nowrap hover:border-blue-500 hover:shadow-[0_4px_18px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer select-none ${className}`}
      style={style}
    >
      <span className="h-10 w-10 overflow-hidden rounded-full border border-blue-200 flex-shrink-0">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover will-change-transform"
          loading="lazy"
          decoding="async"
        />
      </span>

      <span className="text-[13px] font-medium text-slate-800 group-hover:text-blue-900 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

function IndustriesPage() {
  const mobileOrder = [
    "Hospitality",
    "Finance",
    "Manufacturing",
    "Corporate",
    "Logistics",
    "Real Estate",
    "E-Commerce",
    "Education",
    "Healthcare",
  ];

  const byLabel = Object.fromEntries(items.map((i) => [i.label, i]));

  const positions: Record<string, { top: string; left: string }> = {
    Hospitality: { top: "6%", left: "48%" },
    Healthcare: { top: "15%", left: "26%" },
    Finance: { top: "16%", left: "70%" },
    Education: { top: "40%", left: "17%" },
    Manufacturing: { top: "42%", left: "80%" },
    "E-Commerce": { top: "60%", left: "19%" },
    Corporate: { top: "62%", left: "76%" },
    "Real Estate": { top: "82%", left: "32%" },
    Logistics: { top: "84%", left: "55%" },
  };

  const floatClasses: Record<string, string> = {
    Hospitality: "animate-float-p1",
    Healthcare: "animate-float-p2",
    Finance: "animate-float-p3",
    Education: "animate-float-p4",
    Manufacturing: "animate-float-p5",
    "E-Commerce": "animate-float-p6",
    Corporate: "animate-float-p7",
    "Real Estate": "animate-float-p8",
    Logistics: "animate-float-p9",
  };

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] md:text-sm text-slate-600 leading-relaxed">
            We understand that every industry has unique customers, goals, and
            challenges.
            <br className="hidden md:block" />
            That's why we create websites tailored to the specific needs of your
            business.
          </p>
        </div>

        {/* Desktop */}
        <div
          className="relative mx-auto mt-10 hidden lg:block"
          style={{ height: 620 }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-illustration-float">
            <img
              src={heroImg}
              alt="Business collaboration illustration"
              className="h-[360px] w-[360px] object-contain will-change-transform"
              loading="lazy"
              decoding="async"
            />
          </div>

          {items.map((item, idx) => {
            const delay = `${idx * 0.45}s`;

            return (
              <div
                key={item.label}
                className={`absolute -translate-x-1/2 -translate-y-1/2 ${floatClasses[item.label]}`}
                style={{
                  top: positions[item.label].top,
                  left: positions[item.label].left,
                }}
              >
                <Pill
                  item={item}
                  className="animate-pill-blink"
                  style={{ animationDelay: delay }}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="mt-8 lg:hidden">
          <img
            src={heroImg}
            alt="Business collaboration illustration"
            className="mx-auto h-56 w-56 object-contain animate-illustration-float will-change-transform"
            loading="lazy"
            decoding="async"
          />

          <div className="mt-6 flex flex-col items-stretch gap-3 max-w-xs mx-auto">
            {mobileOrder.map((label, idx) => {
              const delay = `${idx * 0.3}s`;

              return (
                <Pill
                  key={label}
                  item={byLabel[label]}
                  className="animate-pill-blink"
                  style={{ animationDelay: delay }}
                />
              );
            })}
          </div>
        </div>

        {/* Request a Proposal Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('trigger-contact-popup'))}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] px-8 text-base font-bold text-white shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50 transition duration-200 cursor-pointer"
          >
            Request a Proposal
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesPage;
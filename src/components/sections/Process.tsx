// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Section, SectionHeading } from '../ui/Section';
// import { processSteps } from '../../data/site';

// export default function Process() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start 0.8', 'end 0.4'],
//   });
//   const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <Section id="process" className="overflow-hidden bg-ink-50/60">
//       <SectionHeading
//         title={<>Our Website <span className="text-gradient">Development Process</span></>}
//         description="A clear four-step process keeps your website project focused from the first discussion through launch."
//       />

//       <div ref={ref} className="relative mx-auto mt-12 max-w-6xl sm:mt-16">
//         {/* Curved SVG path — only visible on large screens */}
//         <svg
//           viewBox="0 0 1200 400"
//           fill="none"
//           className="absolute inset-0 h-full w-full pointer-events-none hidden lg:block"
//           preserveAspectRatio="none"
//         >
//           {/* Background track */}
//           <motion.path
//             d="M 100 200 C 300 100, 400 300, 600 200 C 800 100, 900 300, 1100 200"
//             stroke="#e2e8f0"
//             strokeWidth="6"
//             strokeLinecap="round"
//             fill="none"
//           />
//           {/* Animated gradient path */}
//           <motion.path
//             d="M 100 200 C 300 100, 400 300, 600 200 C 800 100, 900 300, 1100 200"
//             stroke="url(#gradient)"
//             strokeWidth="6"
//             strokeLinecap="round"
//             fill="none"
//             style={{ pathLength, opacity: pathLength }}
//           />
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#3b82f6" />
//               <stop offset="50%" stopColor="#8b5cf6" />
//               <stop offset="100%" stopColor="#06b6d4" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Process steps positioned along the curve */}
//         <div className="relative grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
//           {processSteps.slice(0, 4).map((step, i) => (
//             <motion.div
//               key={step.step}
//               initial={{ opacity: 0, y: 30, scale: 0.9 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true, margin: '-80px' }}
//               transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
//               className="relative"
//             >
//               <div className="group relative">
//                 {/* Number badge — absolute on all sizes to overlap card */}
//                 <div className="absolute -top-4 -left-4 z-20 sm:-top-6 sm:-left-6">
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white font-black text-lg shadow-lg shadow-blue-500/30 sm:h-14 sm:w-14 sm:text-xl sm:rounded-2xl"
//                   >
//                     {step.step.replace('0', '')}
//                   </motion.div>
//                 </div>

//                 {/* Card */}
//                 <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6 sm:rounded-3xl lg:p-7 lg:mt-6">
//                   <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 sm:mb-4 sm:w-12" />
//                   <h3 className="text-base font-bold text-ink-900 sm:text-lg lg:text-xl">{step.title}</h3>
//                   <p className="mt-2 text-xs leading-relaxed text-ink-600 sm:mt-3 sm:text-sm">{step.description}</p>
                  
//                   {/* Hover effect indicator */}
//                   <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                     <motion.div
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
//                       className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center"
//                     >
//                       <div className="h-2 w-2 rounded-full bg-blue-500" />
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>

//               {/* Vertical animated connector between cards on mobile/tablet */}
//               {i < 3 && (
//                 <div className="mx-auto mt-4 h-8 w-1 overflow-hidden rounded-full bg-ink-200 lg:hidden">
//                   <motion.div
//                     style={{ scaleY: pathLength, transformOrigin: 'top' }}
//                     className="h-full w-full bg-gradient-to-b from-blue-500 to-cyan-500"
//                   />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Website Development Process" },
      {
        name: "description",
        content:
          "A clear four-step process keeps your website project focused from the first discussion through launch.",
      },
    ],
  }),
  component: ProcessPage,
});

type Step = { n: string; title: string; desc: string };

const steps: Step[] = [
  {
    n: "1",
    title: "Requirement Discussion",
    desc: "We understand your business goals, audience, and website requirements.",
  },
  {
    n: "2",
    title: "Planning & Design",
    desc: "Our designers create a modern layout based on your brand and project goals.",
  },
  {
    n: "3",
    title: "Development",
    desc: "Our developers build a responsive, fast, and SEO-ready website.",
  },
  {
    n: "4",
    title: "Testing & Launch",
    desc: "We thoroughly test your website across key devices before making it live.",
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="group w-[248px] rounded-xl bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-100 hover:ring-indigo-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12),0_4px_10px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default select-none">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-[11px] font-semibold text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
        {step.n}
      </span>
      <h3 className="mt-4 text-[14px] font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
        {step.title}
      </h3>
      <p className="mt-1.5 text-[12px] leading-[1.55] text-slate-600">{step.desc}</p>
    </div>
  );
}

function ProcessPage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // iPad screen width starts at 768px.
      // Since our layout is 900px wide, we scale it down proportionally when screen width is under 950px (including padding).
      if (window.innerWidth >= 768 && window.innerWidth < 950) {
        setScale((window.innerWidth - 48) / 900);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const BLUE = "#2f5cff";
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-slate-900">
            Our Website Development Process
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13px] text-slate-600 leading-relaxed">
            A clear four-step process keeps your website project focused from the first discussion
            through launch.
          </p>
        </div>

        {/* Desktop / iPad View */}
        <div
          className="relative mx-auto mt-8 hidden md:block overflow-visible"
          style={{
            width: 900 * scale,
            height: 760 * scale,
            transition: "width 0.2s ease-out, height 0.2s ease-out",
          }}
        >
          <div
            className="origin-top-left"
            style={{
              transform: `scale(${scale})`,
              width: 900,
              height: 760,
            }}
          >
            <svg
              viewBox="0 0 900 760"
              width="900"
              height="760"
              className="absolute inset-0"
              fill="none"
              aria-hidden="true"
            >
              {/* Connector background track */}
              <path
                d="
                  M 388 300
                  C 250 300, 140 360, 150 460
                  C 158 545, 300 470, 470 380
                  C 620 305, 720 260, 700 375
                  C 690 470, 640 540, 522 592
                "
                stroke={BLUE}
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                className="opacity-15"
              />
              {/* Connector flowing animated overlay */}
              <path
                d="
                  M 388 300
                  C 250 300, 140 360, 150 460
                  C 158 545, 300 470, 470 380
                  C 620 305, 720 260, 700 375
                  C 690 470, 640 540, 522 592
                "
                stroke={BLUE}
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              // className="animate-line-flow"
              />

              {/* Dots & Blinking Radar Glows */}
              {/* Dot 1 */}
              <circle
                cx="388"
                cy="300"
                r="14"
                fill={BLUE}
                className="animate-dot-ping"
                style={{ animationDelay: "0s" }}
              />
              <circle cx="388" cy="300" r="8" fill={BLUE} className="ring-4 ring-white" />

              {/* Dot 2 */}
              <circle
                cx="150"
                cy="460"
                r="14"
                fill={BLUE}
                className="animate-dot-ping"
                style={{ animationDelay: "0.6s" }}
              />
              <circle cx="150" cy="460" r="8" fill={BLUE} className="ring-4 ring-white" />

              {/* Dot 3 */}
              <circle
                cx="700"
                cy="375"
                r="14"
                fill={BLUE}
                className="animate-dot-ping"
                style={{ animationDelay: "1.2s" }}
              />
              <circle cx="700" cy="375" r="8" fill={BLUE} className="ring-4 ring-white" />

              {/* Dot 4 */}
              <circle
                cx="522"
                cy="592"
                r="14"
                fill={BLUE}
                className="animate-dot-ping"
                style={{ animationDelay: "1.8s" }}
              />
              <circle cx="522" cy="592" r="8" fill={BLUE} className="ring-4 ring-white" />
            </svg>

            {/* Card 1 — Top Left */}
            <div className="absolute animate-float-1" style={{ left: 130, top: 140 }}>
              <StepCard step={steps[0]} />
            </div>
            {/* Card 3 — Top Right */}
            <div className="absolute animate-float-3" style={{ left: 750, top: 250 }}>
              <StepCard step={steps[2]} />
            </div>
            {/* Card 2 — Bottom Left */}
            <div className="absolute animate-float-2" style={{ left: 65, top: 530 }}>
              <StepCard step={steps[1]} />
            </div>
            {/* Card 4 — Bottom Right */}
            <div className="absolute animate-float-4" style={{ left: 435, top: 620 }}>
              <StepCard step={steps[3]} />
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mt-10 flex flex-col items-center gap-5 md:hidden">
          {steps.map((s) => (
            <StepCard key={s.n} step={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessPage;

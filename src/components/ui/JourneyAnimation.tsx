import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MessageSquare,
  Palette,
  Code,
  CheckCircle2
} from 'lucide-react';

interface ProcessStep {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  planetColor: string;
  orbitRadius: number;
  planetSize: number;
}

const processSteps: ProcessStep[] = [
  {
    title: 'Requirement Discussion',
    icon: MessageSquare,
    color: 'text-cyan-400',
    planetColor: '#0ea5e9',
    orbitRadius: 65,
    planetSize: 10,
  },
  {
    title: 'Planning & Design',
    icon: Palette,
    color: 'text-purple-400',
    planetColor: '#a855f7',
    orbitRadius: 100,
    planetSize: 12,
  },
  {
    title: 'Development',
    icon: Code,
    color: 'text-blue-400',
    planetColor: '#3b82f6',
    orbitRadius: 135,
    planetSize: 14,
  },
  {
    title: 'Testing',
    icon: CheckCircle2,
    color: 'text-pink-400',
    planetColor: '#ec4899',
    orbitRadius: 170,
    planetSize: 11,
  },
];

export default function JourneyAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [baseAngle, setBaseAngle] = useState(0);

  // 1. Smooth high-performance continuous rotation animation frame
  useEffect(() => {
    let animationFrameId: number;
    const updateAngle = () => {
      setBaseAngle((prev) => (prev + 0.3) % 360);
      animationFrameId = requestAnimationFrame(updateAngle);
    };
    animationFrameId = requestAnimationFrame(updateAngle);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // 2. Auto-cycle active planet at equal 5-second intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentStep = processSteps[activeIndex];

  // Center coordinates of the globe system (adjusted vertically for extra height)
  const centerX = 300;
  const centerY = 210;

  // Horizontal ellipse scale factors (increased vertically to occupy more vertical space)
  const rxScale = 1.35;
  const ryScale = 0.92;

  return (
    <div
      className="w-full bg-slate-50/80 rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-[0_15px_40px_rgba(15,23,42,0.06)] backdrop-blur-md relative overflow-visible select-none flex flex-col items-center justify-center"
      id="journey-solar-system"
    >
      {/* Dynamic background glow following the active planet's color theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full blur-[130px] opacity-[0.14] pointer-events-none transition-all duration-1000 ease-in-out"
        style={{
          backgroundColor: currentStep.planetColor,
        }}
      />

      {/* Futuristic Header Tag */}
      <div className="absolute top-4 left-6 flex items-center gap-2">
        <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500 animate-ping" />
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
          Holographic Process Hub
        </h3>
      </div>

      {/* THE ENLARGED HORIZONTAL ELLIPSE GLOBE */}
      <div className="relative w-full aspect-[16/12] max-w-[620px] flex items-center justify-center overflow-visible mt-2">
        
        <svg
          viewBox="0 0 600 420"
          className="w-full h-full overflow-visible pointer-events-none z-10"
        >
          <defs>
            {/* Ambient Sun backglow */}
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#ca8a04" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Tracking laser line connecting center to active planet */}
            <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.95" />
              <stop offset="100%" stopColor={currentStep.planetColor} stopOpacity="0.15" />
            </linearGradient>

            {/* Circle text path for outer rotating badge */}
            <path
              id="sunTextPath"
              d={`M ${centerX},${centerY} m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0`}
            />
          </defs>

          {/* 1. Concentric Elliptical Orbit Paths */}
          {processSteps.map((srv, i) => {
            const isSelected = i === activeIndex;
            return (
              <ellipse
                key={`orbit-${i}`}
                cx={centerX}
                cy={centerY}
                rx={srv.orbitRadius * rxScale}
                ry={srv.orbitRadius * ryScale}
                fill="none"
                stroke={isSelected ? srv.planetColor : 'rgba(71, 85, 105, 0.18)'}
                strokeWidth={isSelected ? '2' : '1'}
                strokeDasharray={isSelected ? 'none' : '4 6'}
                className="transition-all duration-700"
              />
            );
          })}

          {/* 2. THE CENTRAL GLOWING SUN (SMANV Core) */}
          <g>
            <circle cx={centerX} cy={centerY} r="60" fill="url(#sunGlow)" />
            
            {/* Sleek multi-layered tech Sun sphere */}
            <circle cx={centerX} cy={centerY} r="28" fill="#090d16" stroke="#eab308" strokeWidth="2.5" />
            <circle cx={centerX} cy={centerY} r="22" fill="none" stroke="#facc15" strokeWidth="1" className="animate-pulse" />
            <circle cx={centerX} cy={centerY} r="8" fill="#facc15" />

            {/* Centered monospace branding */}
            <text
              x={centerX}
              y={centerY + 3}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="9"
              fontWeight="900"
              fontFamily="monospace"
              letterSpacing="1.2"
            >
              SMANV
            </text>

            {/* Orbit text rotation */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              style={{ transformOrigin: `${centerX}px ${centerY}px` }}
            >
              <text fill="#ca8a04" fontSize="6" fontWeight="bold" fontFamily="monospace" letterSpacing="1.2" opacity="0.6">
                <textPath href="#sunTextPath" startOffset="0%">
                  SMANV INFO TECH • NAVIGATING PROGRESS •
                </textPath>
              </text>
            </motion.g>
          </g>

          {/* 3. PLANETS & DETAILED POINT BADGES (Rendered dynamically using Elliptical math) */}
          {processSteps.map((srv, i) => {
            const isSelected = i === activeIndex;
            
            // Calculate coordinates along the elliptical orbit dynamically
            const angleDeg = (baseAngle + i * (360 / processSteps.length)) % 360;
            const angleRad = angleDeg * (Math.PI / 180);
            
            const x = centerX + srv.orbitRadius * rxScale * Math.cos(angleRad);
            const y = centerY + srv.orbitRadius * ryScale * Math.sin(angleRad);

            // Active step components
            const PlanetIcon = srv.icon;

            // Smart tooltip positioning to prevent viewport clipping
            const isLeft = x < centerX;
            const badgeX = isLeft ? x - 185 : x + 25;
            const badgeY = y - 28;

            return (
              <g key={`planet-step-${i}`}>
                
                {/* Connection laser beam targeting the active zoomed-in planet */}
                {isSelected && (
                  <motion.line
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="url(#laserBeam)"
                    strokeWidth="2.2"
                    strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: [-20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                )}

                {/* Animated active radar rings */}
                {isSelected && (
                  <motion.circle
                    cx={x}
                    cy={y}
                    animate={{
                      r: srv.planetSize * 2.8,
                      opacity: [0.65, 0, 0.65],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                    fill="none"
                    stroke={srv.planetColor}
                    strokeWidth="1.5"
                  />
                )}

                {/* Planet Circle itself (Zooms in dramatically when selected!) */}
                <motion.circle
                  cx={x}
                  cy={y}
                  animate={{
                    r: isSelected ? srv.planetSize * 2.1 : srv.planetSize,
                    strokeWidth: isSelected ? 3.5 : 1.5,
                  }}
                  fill={isSelected ? srv.planetColor : '#090d16'}
                  stroke={isSelected ? '#ffffff' : srv.planetColor}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="cursor-pointer pointer-events-auto"
                  onClick={() => setActiveIndex(i)}
                />

                {/* Inner sphere accent core */}
                <motion.circle
                  cx={x}
                  cy={y}
                  animate={{
                    r: isSelected ? (srv.planetSize * 2.1) / 2.5 : srv.planetSize / 2.5
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  fill={isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.15)'}
                />

                {/* ELEGANT HOLOGRAPHIC TOOLTIP BADGE: Shows the exact "point of it" */}
                <AnimatePresence>
                  {isSelected && (
                    <foreignObject
                      x={badgeX}
                      y={badgeY}
                      width="170"
                      height="60"
                      className="overflow-visible pointer-events-none z-50"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-slate-950/95 border border-cyan-500/40 rounded-xl p-2 shadow-[0_4px_25px_rgba(34,211,238,0.3)] flex items-center gap-2.5 relative"
                      >
                        {/* Glow indicator line on active card edge */}
                        <div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 rounded-r-md"
                          style={{ backgroundColor: srv.planetColor }}
                        />

                        {/* Sparkle decorative aura */}
                        <div className="absolute -top-1.5 -right-1.5 bg-cyan-500/10 rounded-full p-0.5 border border-cyan-500/30">
                          <Sparkles className="h-2 w-2 text-cyan-400" />
                        </div>

                        {/* Miniature Icon Frame */}
                        <div className={`p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 ml-1`}>
                          <PlanetIcon className="w-4.5 h-4.5" />
                        </div>

                        {/* Title text */}
                        <div className="flex flex-col min-w-0">
                          <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500 font-bold leading-none mb-1">
                            Active Step 0{i + 1}
                          </span>
                          <span className="text-xs font-black text-white tracking-tight leading-tight truncate">
                            {srv.title}
                          </span>
                        </div>
                      </motion.div>
                    </foreignObject>
                  )}
                </AnimatePresence>

              </g>
            );
          })}
        </svg>

        {/* Real-time sync diagnostic feedback in page corners */}
        <div className="absolute bottom-2 right-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          CYCLE STABLE // 5000MS
        </div>
      </div>
    </div>
  );
}

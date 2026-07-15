import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  HiCloud, 
  HiServer, 
  HiShieldCheck,
  HiChartBar,
  HiCpuChip,
  HiGlobeAlt,
  HiCircleStack,
  HiLockClosed
} from 'react-icons/hi2';

const FloatingCard = ({ children, delay, className }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      style={{
        rotateX: mousePosition.y,
        rotateY: mousePosition.x,
      }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CodeSnippet = ({ code, delay, className }: any) => {
  return (
    <FloatingCard delay={delay} className={className}>
      <div className="bg-[#0a0f1e]/90 backdrop-blur-xl rounded-xl border border-[#6C63FF]/30 p-4 shadow-2xl">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <pre className="text-xs font-mono text-gray-300 overflow-hidden">
          <code>{code}</code>
        </pre>
      </div>
    </FloatingCard>
  );
};

const TechIcon = ({ Icon, delay, className, size = 40 }: any) => {
  return (
    <FloatingCard delay={delay} className={className}>
      <div 
        className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#00E5FF]/20 backdrop-blur-xl border border-[#6C63FF]/30 p-4 shadow-2xl"
        style={{ width: size, height: size }}
      >
        <Icon className="text-[#00E5FF]" style={{ fontSize: size * 0.5 }} />
      </div>
    </FloatingCard>
  );
};

const Particle = ({ delay, className }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0], 
        scale: [0, 1, 0],
        y: [0, -100, -200],
      }}
      transition={{ 
        duration: 4, 
        delay, 
        repeat: Infinity,
        repeatDelay: 2,
      }}
      className={`absolute w-2 h-2 rounded-full bg-[#6C63FF] ${className}`}
      style={{
        boxShadow: '0 0 20px #6C63FF, 0 0 40px #6C63FF',
      }}
    />
  );
};

export default function Hero3DAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const codeSnippets = [
    `const buildApp = () => {
  return {
    scalable: true,
    secure: true,
    performance: '100%'
  }
}`,
    `// Enterprise Solution
export const API = {
  endpoint: '/api/v1',
  auth: 'JWT',
  rateLimit: '1000/h'
}`,
    `interface Solution {
  frontend: React
  backend: Node.js
  database: PostgreSQL
  cloud: AWS
}`,
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00E5FF]/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle 
            key={i} 
            delay={i * 0.2} 
            className={`left-[${10 + (i % 9) * 10}%] top-[${20 + Math.floor(i / 9) * 20}%]`}
          />
        ))}
      </div>

      {/* Central Laptop Display */}
      <motion.div
        style={{ y: y1, rotate }}
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          {/* Laptop Screen */}
          <div className="w-72 h-48 lg:w-96 lg:h-64 bg-gradient-to-br from-[#0a0f1e] to-[#1a1f2e] rounded-t-2xl border-2 border-[#6C63FF]/50 shadow-2xl overflow-hidden">
            {/* Screen Content */}
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-[#050816]/80 rounded-lg p-3 overflow-hidden">
                <div className="space-y-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-2 bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] rounded"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '80%' }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-2 bg-[#6C63FF]/50 rounded"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    className="h-2 bg-[#00E5FF]/50 rounded"
                  />
                </div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6C63FF]/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Laptop Base */}
          <div className="w-80 lg:w-[28rem] h-4 bg-gradient-to-b from-[#1a1f2e] to-[#0a0f1e] rounded-b-lg border-x-2 border-b-2 border-[#6C63FF]/30 shadow-2xl mx-auto -mt-1" />
        </div>
      </motion.div>

      {/* Floating Code Snippets */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 pointer-events-none">
        <CodeSnippet 
          code={codeSnippets[0]} 
          delay={0.4} 
          className="top-[10%] left-[5%]"
        />
        <CodeSnippet 
          code={codeSnippets[1]} 
          delay={0.5} 
          className="bottom-[20%] right-[5%]"
        />
        <CodeSnippet 
          code={codeSnippets[2]} 
          delay={0.6} 
          className="top-[40%] right-[10%]"
        />
      </motion.div>

      {/* Floating Tech Icons */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 pointer-events-none">
        <TechIcon Icon={HiCloud} delay={0.7} className="top-[15%] right-[20%]" size={50} />
        <TechIcon Icon={HiServer} delay={0.8} className="bottom-[25%] left-[15%]" size={45} />
        <TechIcon Icon={HiShieldCheck} delay={0.9} className="top-[60%] left-[8%]" size={40} />
        <TechIcon Icon={HiChartBar} delay={1.0} className="bottom-[15%] right-[25%]" size={48} />
        <TechIcon Icon={HiCpuChip} delay={1.1} className="top-[30%] left-[25%]" size={42} />
        <TechIcon Icon={HiGlobeAlt} delay={1.2} className="top-[70%] right-[15%]" size={46} />
        <TechIcon Icon={HiCircleStack} delay={1.3} className="bottom-[40%] left-[20%]" size={44} />
        <TechIcon Icon={HiLockClosed} delay={1.4} className="top-[20%] left-[40%]" size={38} />
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <motion.line
          x1="20%"
          y1="30%"
          x2="50%"
          y2="50%"
          stroke="#6C63FF"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.line
          x1="80%"
          y1="40%"
          x2="50%"
          y2="50%"
          stroke="#00E5FF"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.7 }}
        />
        <motion.line
          x1="30%"
          y1="70%"
          x2="50%"
          y2="50%"
          stroke="#6C63FF"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.9 }}
        />
      </svg>
    </div>
  );
}

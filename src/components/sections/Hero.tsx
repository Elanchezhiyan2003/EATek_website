import { Button } from '@/components/ui/button';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate background gradients
    if (bgRef.current) {
      gsap.to(bgRef.current.children, {
        scale: 1.1,
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }

    // Animate scroll indicator
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: scrolled * 0.5,
          opacity: 1 - scrolled / 500,
          duration: 0.5,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden  min-h-screen max-h-20 flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
      {/* Modern background grid */}
      <div className="absolute  inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          className="relative py-16 sm:py-20 md:py-28 lg:py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Building the Future of Digital Experiences
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              variants={itemVariants}
            >
              <motion.span
                className="block text-slate-900 dark:text-slate-50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Beyond the
              </motion.span>
              <motion.span
                className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Binary
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
              variants={itemVariants}
            >
              Bridging Education, Art, Technology, and Emotion to create transformative digital experiences. 
              We build the future through innovative SaaS solutions, creative commerce, and educational programs.
            </motion.p>
            
            <motion.div
              className="mt-12 flex items-center justify-center gap-4 flex-wrap"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base font-semibold rounded-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base font-semibold rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats preview */}
            {/* <motion.div
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Clients', value: '30+' },
                { label: 'Innovation', value: '3+ Years' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>


          {/* Scroll Indicator */}
          <motion.div
            ref={scrollIndicatorRef}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
            >
              <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
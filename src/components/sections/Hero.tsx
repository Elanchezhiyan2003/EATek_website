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
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
      {/* ✨ Modern Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_70%,transparent_110%)]" />

      {/* 🎨 Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-40 w-96 h-[30rem] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* 🧭 Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.div
          className="py-20 sm:py-24 md:py-28 flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 🔖 Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Building the Future of Digital Experiences
            </span>
          </motion.div>

          {/* 🧠 Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight"
            variants={prefersReducedMotion ? undefined : itemVariants}
          >
            <motion.span
              className="block text-slate-900 dark:text-slate-50"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.2 }}
            >
              Beyond the
            </motion.span>
            <motion.span
              className="block mt-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.4 }}
            >
              Binary
            </motion.span>
          </motion.h1>

          {/* 🪶 Description */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            variants={prefersReducedMotion ? undefined : itemVariants}
          >
            Bridging Education, Art, Technology, and Emotion to create
            transformative digital experiences. We build the future through
            innovative SaaS solutions, creative commerce, and educational
            programs.
          </motion.p>

          {/* 🎯 Action Buttons */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-4"
            variants={prefersReducedMotion ? undefined : itemVariants}
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl"
                onClick={() => (window.location.href = "/services")}
              >
                Services
              </Button>
            </motion.div>
          </motion.div>

          {/* 🧭 Scroll Indicator */}
          <motion.div
            ref={scrollIndicatorRef}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <span className="text-sm text-muted-foreground font-medium">
                Scroll to explore
              </span>
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
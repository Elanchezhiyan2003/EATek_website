import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function CTABanner() {
  const containerRef = useRef(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (bg1Ref.current && bg2Ref.current) {
      // Continuous floating animation
      gsap.to(bg1Ref.current, {
        x: "+=30",
        y: "+=30",
        rotation: "+=360",
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(bg2Ref.current, {
        x: "-=30",
        y: "-=30",
        rotation: "-=360",
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

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
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Modern mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-purple-600/20 to-transparent" />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          ref={bg1Ref}
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          ref={bg2Ref}
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-24 sm:py-32 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="mx-auto max-w-3xl">
            <motion.div
              className="flex justify-center mb-6"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255,255,255,0.3)",
                    "0 0 20px rgba(255,255,255,0.4)",
                    "0 0 0px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                </motion.div>
                Ready to transform your ideas?
              </motion.div>
            </motion.div>
            
            <motion.h2
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              variants={itemVariants}
            >
              Let's Build Beyond
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ["0%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                the Binary
              </motion.span>
            </motion.h2>
            
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100"
              variants={itemVariants}
            >
              Join us in creating the future of technology, education, and innovation. 
              Whether you're a student, entrepreneur, or enterprise, we're here to help 
              you build something extraordinary.
            </motion.p>
            
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                >
                  Start Your Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm rounded-xl bg-white/5"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-blue-100"
              variants={itemVariants}
            >
              {[
                { color: "bg-green-400", text: "Free Consultation" },
                { color: "bg-yellow-400", text: "Custom Solutions" },
                { color: "bg-purple-400", text: "Expert Mentorship" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className={`h-2 w-2 rounded-full ${item.color} mr-2`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
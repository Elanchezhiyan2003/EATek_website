import React from "react";
import { Code2, Palette, GraduationCap, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const services = [
    {
      title: "Web & SaaS Development",
      desc: "We design and develop scalable web applications and SaaS platforms that power real-world impact through performance and precision.",
      icon: <Code2 className="h-10 w-10 text-[#40ffaa]" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "BrandOS Studio",
      desc: "Our creative arm that brings ideas to life through branding, design systems, storytelling, and digital identity experiences.",
      icon: <Palette className="h-10 w-10 text-[#40ffaa]" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Learning Platforms & EdTech",
      desc: "Building intelligent learning ecosystems that combine education, art, and technology — empowering the next generation of innovators.",
      icon: <GraduationCap className="h-10 w-10 text-[#40ffaa]" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Automation & AI Integration",
      desc: "From intelligent workflows to agentic systems, we integrate automation and AI solutions that enhance creativity and efficiency.",
      icon: <Cpu className="h-10 w-10 text-[#40ffaa]" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              What We Do
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Our ecosystem spans technology, creativity, and learning — each service crafted to bridge innovation with emotion.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 mb-6"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-blue-600 dark:text-blue-400">
                      {React.cloneElement(s.icon, { className: "h-6 w-6" })}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

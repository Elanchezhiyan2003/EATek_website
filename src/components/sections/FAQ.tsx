import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const faqs = [
    {
      q: "What is EAtek?",
      a: "EAtek is a convergence company blending Education, Art, and Technology — building ecosystems that move both the mind and the heart. We design learning platforms, SaaS tools, and creative systems for the next generation of innovators.",
    },
    {
      q: "What services does EAtek provide?",
      a: "Our services span Web & SaaS Development, Branding & Creative Design (BrandOS Studio), Learning & EdTech platforms, and Automation + AI integration.",
    },
    {
      q: "Who can collaborate with EAtek?",
      a: "We welcome startups, schools, creators, and tech enthusiasts who share our passion for learning, building, and innovating beyond the binary.",
    },
    {
      q: "What makes EAtek different?",
      a: "We combine technical excellence with emotional design — creating products and programs that are both functional and deeply human-centered.",
    },
    {
      q: "How can I join or partner with EAtek?",
      a: "You can reach out through our 'Contact Us' page or email us directly. We're always open to collaborations, internships, and partnership opportunities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Everything you need to know about our mission, services, and the way we work.
          </motion.p>
        </div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 text-left transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl overflow-hidden"
            >
              <motion.button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-lg font-bold text-slate-900 dark:text-slate-50">
                  {faq.q}
                </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

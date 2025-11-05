import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Portli",
    bgColor: "from-blue-600 via-blue-700 to-indigo-700",
    img: "/images/portli.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "Portfolio SaaS Platform",
    link: "/products",
  },
  {
    id: 2,
    name: "FlowBox",
    bgColor: "from-purple-600 via-purple-700 to-pink-700",
    img: "/images/flowbox.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "Intelligent Workflow Automation",
    link: "/products",
  },
  {
    id: 3,
    name: "Stasis Artis",
    bgColor: "from-green-600 via-emerald-700 to-teal-700",
    img: "/images/stasis.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "Creative Commerce Platform",
    link: "/products",
  },
  {
    id: 4,
    name: "BrandOS",
    bgColor: "from-orange-600 via-red-700 to-pink-700",
    img: "/images/brandos.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "Complete Brand Management",
    link: "/products",
  },
];

export default function ProjectsSuperScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <main ref={containerRef} className="w-full overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      
      {projects.map((project, index) => {
        // Scroll transforms for parallax effect
        const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
        const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
        const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

        return (
          <motion.section
            key={project.id}
            style={{ y, scale, opacity }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ${project.bgColor} text-white relative overflow-hidden`}
          >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Faint background text */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 0.1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-28 left-8 sm:left-20 text-[5rem] sm:text-[8rem] md:text-[12rem] font-bold select-none leading-none pointer-events-none"
            >
              {project.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl mb-8 font-light tracking-wide text-white/90 relative z-10"
            >
              Our Work
            </motion.h3>

            {/* Project description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg mb-8 text-white/80 font-medium relative z-10 max-w-2xl text-center px-4"
            >
              {project.description}
            </motion.p>

            {/* Image preview with subtle zoom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="shadow-2xl rounded-2xl overflow-hidden w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-6xl relative z-10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10 pointer-events-none" />
              <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                {/* Placeholder - shown by default */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold mb-4 opacity-50">{project.name.charAt(0)}</div>
                    <div className="text-xl font-semibold text-white">{project.name}</div>
                  </div>
                </div>
                {/* Image - overlays placeholder if loaded */}
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="absolute inset-0 rounded-2xl object-cover w-full h-full transition-transform duration-[4000ms] hover:scale-[1.02]"
                  onError={(e) => {
                    // Hide image if error, show placeholder
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col items-center space-y-4 relative z-10"
            >
              <Link to={project.link || "/products"}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className={`${project.btnColor} font-semibold px-8 py-4 rounded-xl flex items-center gap-2 shadow-2xl hover:shadow-3xl transition-all duration-300 text-base`}
                  >
                    View Project
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/products"
                  className="underline underline-offset-4 text-white/80 hover:text-white text-base sm:text-lg font-medium transition-colors"
                >
                  View All Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.section>
        );
      })}
    </main>
  );
}


// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// // Type definitions
// interface Project {
//   id: number;
//   name: string;
//   bgColor: string;
//   img: string;
//   btnColor: string;
//   description: string;
//   link: string;
// }

// interface ProjectsSuperScrollProps {
//   projects?: Project[];
// }

// // Sticky threshold: percentage of viewport height before next section becomes sticky
// // Tune this value (0.1 = 10% of viewport) to control sticky duration
// const STICKY_THRESHOLD = 0.1;

// /**
//  * Apple-style sticky scroll showcase component.
//  * Each project section sticks to the top as user scrolls, with smooth animations.
//  */
// export default function ProjectsSuperScroll({ projects: propProjects }: ProjectsSuperScrollProps = {}) {
//   const projects = propProjects || defaultProjects;
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Track which section is currently sticky using scroll position
//   useEffect(() => {
//     if (projects.length === 0) return;

//     let ticking = false;

//     const updateActive = () => {
//       ticking = false;
//       const thresholdPx = window.innerHeight * STICKY_THRESHOLD;
//       let nextActive = 0;
//       for (let i = 0; i < sectionRefs.current.length; i++) {
//         const el = sectionRefs.current[i];
//         if (!el) continue;
//         const rect = el.getBoundingClientRect();
//         // The last section whose top is above the threshold becomes active
//         if (rect.top <= thresholdPx) {
//           nextActive = i;
//         }
//       }
//       if (nextActive !== activeIndex) {
//         setActiveIndex(nextActive);
//       }
//     };

//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(updateActive);
//         ticking = true;
//       }
//     };

//     // Initial calculation and listener
//     updateActive();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', updateActive);

//     return () => {
//       window.removeEventListener('scroll', onScroll as EventListener);
//       window.removeEventListener('resize', updateActive as EventListener);
//     };
//   }, [projects.length, activeIndex]);

//   if (projects.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-slate-400">
//         <p>No projects to display.</p>
//       </div>
//     );
//   }

//   return (
//     <main ref={containerRef} className="relative w-full font-sans bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//       {/* Progress indicator on the left */}
//       <ProgressIndicator total={projects.length} activeIndex={activeIndex} />

//       {/* Project sections */}
//       <div className="relative">
//         {projects.map((project, index) => (
//           <StickyProjectSection
//             key={project.id}
//             project={project}
//             index={index}
//             isActive={activeIndex === index}
//             totalProjects={projects.length}
//             ref={(el) => {
//               sectionRefs.current[index] = el;
//             }}
//           />
//         ))}
//       </div>
//     </main>
//   );
// }

// /**
//  * Individual sticky project section.
//  * Uses position: sticky to stick to top when scrolled into view.
//  */
// const StickyProjectSection = React.forwardRef<HTMLDivElement, {
//   project: Project;
//   index: number;
//   isActive: boolean;
//   totalProjects: number;
// }>(({ project, index, isActive, totalProjects }, ref) => {
//   const controls = useAnimation();
//   const imageRef = useRef<HTMLDivElement>(null);

//   // Animate content when section becomes active (sticky)
//   useEffect(() => {
//     if (isActive) {
//       controls.start({
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.6,
//           ease: [0.25, 0.25, 0, 1],
//         },
//       });
//     } else {
//       // Reset animation state for next time
//       controls.set({
//         opacity: 0,
//         y: 20,
//         scale: 0.95,
//       });
//     }
//   }, [isActive, controls]);

//   // Combine refs - callback ref to handle both function and object refs
//   const setRefs = React.useCallback((node: HTMLDivElement | null) => {
//     if (typeof ref === 'function') {
//       ref(node);
//     } else if (ref) {
//       (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
//     }
//   }, [ref]);

//   return (
//     <section
//       ref={setRefs}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{
//         // Sticky positioning: section sticks to top when scrolled
//         position: 'sticky',
//         top: 0,
//         zIndex: totalProjects - index, // Higher z-index for later sections
//       }}
//     >
//       {/* Background gradient */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor}`} />

//       {/* Soft gradient orbs for depth */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/3 -left-1/4 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl animate-pulse" />
//         <div
//           className="absolute bottom-1/4 -right-1/4 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: '1s' }}
//         />
//       </div>

//       {/* Background title (watermark) */}
//       <motion.h1
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isActive ? 0.08 : 0 }}
//         transition={{ duration: 1 }}
//         className="absolute text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] font-black tracking-tight uppercase select-none pointer-events-none leading-none text-white/30"
//       >
//         {project.name}
//       </motion.h1>

//       {/* Content container */}
//       <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left column: Image */}
//           <motion.div
//             ref={imageRef}
//             className="relative order-2 lg:order-1"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 40 }}
//               animate={controls}
//               className="relative rounded-3xl overflow-hidden shadow-2xl group"
//             >
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-3xl" />
//               <img
//                 src={project.img}
//                 alt={project.name}
//                 loading={index < 2 ? 'eager' : 'lazy'}
//                 className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] rounded-3xl transition-transform duration-[3500ms] group-hover:scale-[1.03]"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.style.display = 'none';
//                 }}
//               />
//             </motion.div>
//           </motion.div>

//           {/* Right column: Text content */}
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={controls}
//             className="order-1 lg:order-2 text-white space-y-6"
//           >
//             {/* Section label */}
//             <motion.h3
//               initial={{ opacity: 0, y: 20 }}
//               animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="text-lg sm:text-xl md:text-2xl tracking-wide font-medium text-white/90"
//             >
//               Our Work
//             </motion.h3>

//             {/* Project name */}
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//             >
//               {project.name}
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-base sm:text-lg md:text-xl text-white/85 font-medium leading-relaxed max-w-xl"
//             >
//               {project.description}
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="flex flex-col sm:flex-row items-start gap-4 pt-4"
//             >
//               <Link to={project.link}>
//                 <Button
//                   className={`${project.btnColor} font-semibold px-8 py-4 rounded-xl flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all`}
//                 >
//                   View Project
//                   <ArrowRight className="w-5 h-5" />
//                 </Button>
//               </Link>

//               <Link
//                 to="/products"
//                 className="underline underline-offset-4 text-white/80 hover:text-white text-base sm:text-lg font-medium transition-colors self-center sm:self-start"
//               >
//                 View All Projects
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Spacer to ensure next section has room to scroll */}
//       <div className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none" />
//     </section>
//   );
// });

// StickyProjectSection.displayName = 'StickyProjectSection';

// /**
//  * Progress indicator showing which project is currently sticky.
//  * Vertical line with active dot on the left side of viewport.
//  */
// function ProgressIndicator({ total, activeIndex }: { total: number; activeIndex: number }) {
//   return (
//     <div className="fixed left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
//       <div className="relative flex flex-col items-center gap-3">
//         {/* Vertical line */}
//         <div className="absolute top-0 bottom-0 w-0.5 bg-white/20" />

//         {/* Dots for each project */}
//         {Array.from({ length: total }).map((_, index) => (
//           <motion.div
//             key={index}
//             className="relative z-10"
//             initial={false}
//             animate={{
//               scale: activeIndex === index ? 1.2 : 1,
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 activeIndex === index
//                   ? 'bg-white shadow-lg shadow-white/50'
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Default projects data (matches existing structure)
// const defaultProjects: Project[] = [
//   {
//     id: 1,
//     name: 'Pubg',
//     bgColor: 'from-blue-600 via-blue-700 to-indigo-700',
//     img: '/images/portli.png',
//     btnColor: 'bg-black text-white hover:bg-slate-100',
//     description: 'Portfolio SaaS Platform',
//     link: '/products',
//   },
//   {
//     id: 2,
//     name: 'FreeFire',
//     bgColor: 'from-purple-600 via-purple-700 to-pink-700',
//     img: '/images/flowbox.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Intelligent Workflow Automation',
//     link: '/products',
//   },
//   {
//     id: 3,
//     name: 'Stasis Artis',
//     bgColor: 'from-green-600 via-emerald-700 to-teal-700',
//     img: '/images/stasis.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Creative Commerce Platform',
//     link: '/products',
//   },
//   {
//     id: 4,
//     name: 'BrandOS',
//     bgColor: 'from-orange-600 via-red-700 to-pink-700',
//     img: '/images/brandos.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Complete Brand Management',
//     link: '/products',
//   },
//   {
//     id: 5,
//     name: 'DataVault',
//     bgColor: 'from-cyan-600 via-teal-700 to-blue-700',
//     img: '/images/datavault.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Secure Data Management System',
//     link: '/products',
//   },
//   {
//     id: 6,
//     name: 'CloudSync',
//     bgColor: 'from-rose-600 via-pink-700 to-fuchsia-700',
//     img: '/images/cloudsync.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Seamless Cloud Synchronization',
//     link: '/products',
//   },
//   {
//     id: 7,
//     name: 'NexusAI',
//     bgColor: 'from-amber-600 via-yellow-600 to-orange-600',
//     img: '/images/nexusai.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Advanced AI Integration Platform',
//     link: '/products',
//   },
//   {
//     id: 8,
//     name: 'StreamLine',
//     bgColor: 'from-indigo-600 via-violet-700 to-purple-700',
//     img: '/images/streamline.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Real-time Data Streaming Solution',
//     link: '/products',
//   },
//   {
//     id: 9,
//     name: 'EcoTech',
//     bgColor: 'from-emerald-600 via-cyan-700 to-teal-700',
//     img: '/images/ecotech.png',
//     btnColor: 'bg-white text-slate-900 hover:bg-slate-100',
//     description: 'Sustainable Technology Solutions',
//     link: '/products',
//   },
// ];


import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  bgColor: string;
  img: string;
  btnColor: string;
  description: string;
  link: string;
}

interface ProjectsSuperScrollProps {
  projects?: Project[];
}

const STICKY_THRESHOLD = 0.15; // 15% viewport for better trigger timing

export default function ProjectsSuperScroll({ projects: propProjects }: ProjectsSuperScrollProps = {}) {
  const projects = propProjects || defaultProjects;
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!projects.length) return;

    let ticking = false;

    const updateActive = () => {
      ticking = false;
      const threshold = window.innerHeight * STICKY_THRESHOLD;
      let nextActive = 0;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          nextActive = i;
        }
      }

      if (nextActive !== activeIndex) setActiveIndex(nextActive);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [projects.length, activeIndex]);

  if (!projects.length)
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        No projects found.
      </div>
    );

  return (
    <main className="relative w-full font-sans bg-slate-950">
      <ProgressIndicator total={projects.length} activeIndex={activeIndex} />

      {projects.map((project, index) => (
        <StickyProjectSection
          key={project.id}
          project={project}
          index={index}
          isActive={activeIndex === index}
          totalProjects={projects.length}
          ref={(el) => (sectionRefs.current[index] = el)}
        />
      ))}
    </main>
  );
}

const StickyProjectSection = React.forwardRef<
  HTMLDivElement,
  {
    project: Project;
    index: number;
    isActive: boolean;
    totalProjects: number;
  }
>(({ project, index, isActive, totalProjects }, ref) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] },
      });
    } else {
      controls.set({ opacity: 0.6, y: 50, scale: 0.96 });
    }
  }, [isActive, controls]);

  const setRefs = (node: HTMLDivElement | null) => {
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  return (
    <section
      ref={setRefs}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        position: "sticky",
        top: 0,
        zIndex: totalProjects - index,
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor}`} />

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[26rem] h-[26rem] bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Background watermark */}
      <motion.h1
        animate={{ opacity: isActive ? 0.08 : 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] font-extrabold uppercase tracking-tight text-white/20 select-none pointer-events-none leading-none"
      >
        {project.name}
      </motion.h1>

      {/* Project content */}
      <motion.div
        animate={controls}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={controls}
            className="order-2 lg:order-1 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-3xl" />
              <img
                src={project.img}
                alt={project.name}
                loading={index < 2 ? "eager" : "lazy"}
                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] rounded-3xl transition-transform duration-[3500ms] group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="order-1 lg:order-2 text-white space-y-6"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white/90">
              Our Work
            </h3>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {project.name}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link to={project.link}>
                <Button
                  className={`${project.btnColor} font-semibold px-8 py-4 rounded-xl flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all`}
                >
                  View Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link
                to="/products"
                className="underline underline-offset-4 text-white/80 hover:text-white text-base sm:text-lg font-medium transition-colors self-center sm:self-start"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Spacer for next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] pointer-events-none" />
    </section>
  );
});

StickyProjectSection.displayName = "StickyProjectSection";

function ProgressIndicator({ total, activeIndex }: { total: number; activeIndex: number }) {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="relative flex flex-col items-center gap-3">
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/20" />
        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: activeIndex === i ? 1.3 : 1 }}
            transition={{ duration: 0.3 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-white shadow-lg shadow-white/50" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const defaultProjects: Project[] = [
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
    description: "Workflow Automation Platform",
    link: "/products",
  },
  {
    id: 3,
    name: "NexusAI",
    bgColor: "from-yellow-600 via-yellow-600 to-orange-600",
    img: "/images/nexusai.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "AI-powered Automation Suite",
    link: "/products",
  },
  {
    id: 4,
    name: "NexusAI",
    bgColor: "from-pink-600 via-yellow-600 to-orange-600",
    img: "/images/nexusai.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "AI-powered Automation Suite",
    link: "/products",
  },
  {
    id: 5,
    name: "NexusAI",
    bgColor: "from-amber-600 via-yellow-600 to-orange-600",
    img: "/images/nexusai.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "AI-powered Automation Suite",
    link: "/products",
  },
  {
    id: 6,
    name: "NexusAI",
    bgColor: "from-red-600 via-yellow-600 to-orange-600",
    img: "/images/nexusai.png",
    btnColor: "bg-white text-slate-900 hover:bg-slate-100",
    description: "AI-powered Automation Suite",
    link: "/products",
  },
];

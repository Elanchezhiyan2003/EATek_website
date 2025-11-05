// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Briefcase, Workflow, Palette, Settings, ExternalLink, ArrowRight } from 'lucide-react';

// const products = [
//   {
//     icon: Briefcase,
//     name: 'Portli',
//     tagline: 'Portfolio SaaS',
//     description: 'Create stunning, professional portfolios that showcase your work and attract opportunities.',
//     features: ['Drag & Drop Builder', 'Custom Domains', 'Analytics Dashboard', 'SEO Optimized'],
//     color: 'from-blue-500 to-cyan-500',
//     status: 'Live',
//   },
//   {
//     icon: Workflow,
//     name: 'FlowBox',
//     tagline: 'Automation SaaS',
//     description: 'Streamline your workflows with intelligent automation and seamless integrations.',
//     features: ['Visual Workflow Builder', 'API Integrations', 'Real-time Monitoring', 'Team Collaboration'],
//     color: 'from-purple-500 to-pink-500',
//     status: 'Beta',
//   },
//   {
//     icon: Palette,
//     name: 'Stasis Artis',
//     tagline: 'Creative Commerce',
//     description: 'Empower artists and creators with tools to monetize their creativity and build communities.',
//     features: ['Creator Marketplace', 'NFT Support', 'Community Tools', 'Revenue Analytics'],
//     color: 'from-green-500 to-emerald-500',
//     status: 'Coming Soon',
//   },
//   {
//     icon: Settings,
//     name: 'BrandOS',
//     tagline: 'Service Suite',
//     description: 'Complete brand management platform for agencies and enterprises.',
//     features: ['Brand Guidelines', 'Asset Management', 'Team Workflows', 'Client Portals'],
//     color: 'from-orange-500 to-red-500',
//     status: 'Development',
//   },
// ];

// export function ProductShowcase() {
//   return (
//     <section className="py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//             Product Showcase
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-muted-foreground">
//             Innovative SaaS solutions designed to transform how you work, create, and connect.
//           </p>
//         </div>

//         <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
//           {products.map((product) => {
//             const Icon = product.icon;
//             return (
//               <Card key={product.name} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5`} />
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${product.color}`}>
//                         <Icon className="h-6 w-6 text-white" />
//                       </div>
//                       <div>
//                         <CardTitle className="text-xl">{product.name}</CardTitle>
//                         <p className="text-sm text-muted-foreground">{product.tagline}</p>
//                       </div>
//                     </div>
//                     <Badge 
//                       variant={product.status === 'Live' ? 'default' : 'secondary'}
//                       className={product.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : ''}
//                     >
//                       {product.status}
//                     </Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-muted-foreground">{product.description}</p>
                  
//                   <div className="space-y-2">
//                     <h4 className="text-sm font-medium">Key Features:</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {product.features.map((feature) => (
//                         <div key={feature} className="flex items-center text-sm">
//                           <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-2" />
//                           {feature}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex space-x-2 pt-2">
//                     <Button variant="outline" size="sm" className="flex-1">
//                       Learn More
//                       <ArrowRight className="ml-2 h-3 w-3" />
//                     </Button>
//                     {product.status === 'Live' && (
//                       <Button size="sm" className={`bg-gradient-to-r ${product.color} hover:opacity-90`}>
//                         <ExternalLink className="mr-2 h-3 w-3" />
//                         Try Now
//                       </Button>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         <div className="text-center mt-12">
//           <Button variant="outline" size="lg">
//             View All Products
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { Boxes, Layers, Sparkles, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "Portli",
      tagline: "Your Personal Web OS",
      desc: "A creator-first platform that helps individuals and teams manage, publish, and showcase digital identities, products, and portfolios effortlessly.",
      icon: <Boxes className="h-10 w-10 text-[#40ffaa]" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "FlowBox",
      tagline: "Intelligent Workflow Engine",
      desc: "An automation suite for startups and creators — integrate APIs, automate tasks, and scale operations without writing complex code.",
      icon: <Layers className="h-10 w-10 text-[#40ffaa]" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Stasis Artis",
      tagline: "Where Art Meets Code",
      desc: "A creative-commerce ecosystem connecting artists, technologists, and brands — merging storytelling with digital craftsmanship.",
      icon: <Sparkles className="h-10 w-10 text-[#40ffaa]" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "ELAN 20' BuildVerse",
      tagline: "Fellowship Beyond the Binary",
      desc: "Our flagship learning program for students — blending real-world projects, mentorship, and innovation to shape the next generation of creators.",
      icon: <GraduationCap className="h-10 w-10 text-[#40ffaa]" />,
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
      {/* Background pattern */}
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
              Our Products
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            We craft ecosystems that empower learning, creativity, and automation — 
            bridging the gap between technology and human imagination.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color}`} />
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                      <div className="text-blue-600 dark:text-blue-400">
                        {React.cloneElement(p.icon, { className: "h-6 w-6" })}
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                    {p.tagline}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
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

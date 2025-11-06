import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SplineScene } from '@/components/ui/splite';
import { 
  Globe, 
  Rocket, 
  Palette, 
  Bot, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Target,
  Code,
  Layers,
  Sparkles,
  MessageSquare,
  ShoppingCart,
  Beaker,
  Compass,
  Cpu,
  Cloud,
   Github,
    Linkedin, 
    Twitter, 
    Mail
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollStack from '@/components/ScrollStack';

interface ProfileCardProps {
  name: string;
  title: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

  const projects = [
    {
      id: 1,
      name: "Gazelle",
      bgColor: "from-yellow-400 to-yellow-500",
      img: "/images/gazelle.png",
      btnColor: "bg-black text-white",
    },
    {
      id: 2,
      name: "Biossun",
      bgColor: "from-green-700 to-green-600",
      img: "/images/biossun.png",
      btnColor: "bg-white text-black",
    },
    {
      id: 3,
      name: "Google Pay",
      bgColor: "from-slate-900 to-blue-900",
      img: "/images/googlepay.png",
      btnColor: "bg-green-400 text-black",
    },
    {
      id: 4,
      name: "Rerter",
      bgColor: "from-blue-700 to-blue-500",
      img: "/images/rerter.png",
      btnColor: "bg-green-500 text-black",
    },
  ];

const detailedServices = [
  {
    icon: Globe,
    title: 'Web & App Development',
    intro: 'We design and build modern websites and applications — from landing pages to enterprise platforms — using React, Next.js, and scalable stacks.',
    why: 'Businesses need digital solutions that are fast, secure, and adaptable.',
    positioning: 'EAtek delivers experiences that don\'t just work — they inspire and last.',
    features: ['React & Next.js', 'Enterprise Platforms', 'Mobile-First Design', 'Performance Optimized'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'SaaS Development & Deployment',
    intro: 'Turning ideas into SaaS products, from MVPs to global-scale launches.',
    why: 'Great ideas often fail without proper execution. We ensure engineering, deployment, and scalability are handled end-to-end.',
    positioning: 'Your concept → our engineering → the world.',
    features: ['MVP Development', 'Scalable Architecture', 'Cloud Deployment', 'Global Launch'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Branding & Creative Design',
    intro: 'Design is not about looks — it\'s about storytelling. We craft identities that speak.',
    why: 'A strong brand is the foundation of trust and connection.',
    positioning: 'Logos, systems, and narratives that make your brand unforgettable.',
    features: ['Brand Identity', 'Visual Systems', 'Storytelling', 'Brand Guidelines'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bot,
    title: 'Automation & AI Integration',
    intro: 'Integrating AI to make workflows smarter, faster, and human-centric.',
    why: 'Time is valuable. Automation frees people to focus on what matters.',
    positioning: 'EAtek builds automations that power education, commerce, and enterprise ecosystems.',
    features: ['AI Integration', 'Workflow Automation', 'Smart Systems', 'Human-Centric AI'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: GraduationCap,
    title: 'Custom Learning Platforms (LMS)',
    intro: 'Education deserves better platforms — we create scalable and interactive LMS systems.',
    why: 'Schools, colleges, and companies need modern tools for learners.',
    positioning: 'Custom learning platforms that evolve with institutions and empower communities.',
    features: ['Interactive LMS', 'Scalable Systems', 'Modern Tools', 'Community Features'],
    color: 'from-indigo-500 to-purple-500',
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and challenges.',
  },
  {
    icon: Layers,
    title: 'Design & Architecture',
    description: 'Creating scalable solutions with user-centric design principles.',
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Building with modern technologies and rigorous quality assurance.',
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Deploying your solution and supporting growth at every stage.',
  },
];

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Technologies Mastered', value: '20+' },
  { label: 'Years of Innovation', value: '3+' },
];

const services = [
    {
      icon: <Globe className="w-10 h-10 text-[#40ffaa]" />,
      title: "Custom Web & Mobile Application",
      desc: "End-to-end development of scalable, responsive web and mobile apps built with the latest frameworks and design systems.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-[#4079ff]" />,
      title: "SaaS & PaaP Solutions",
      desc: "Build, scale, and deploy product-first ecosystems that evolve into self-sustaining SaaS or Platform-as-a-Product models.",
    },
    {
      icon: <Palette className="w-10 h-10 text-[#40ffaa]" />,
      title: "Creative & Branding Solutions",
      desc: "We craft emotionally resonant identities, digital storytelling, and brand systems that bring your vision to life.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-[#4079ff]" />,
      title: "E-Commerce & Marketplace Development",
      desc: "From small-scale stores to full-scale digital marketplaces, we engineer systems built for performance and conversion.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#40ffaa]" />,
      title: "Learning & Fellowship Programs",
      desc: "Through ELAN20' and EAtek Learning Labs, we merge technology, creativity, and mentorship into real-world learning.",
    },
    {
      icon: <Beaker className="w-10 h-10 text-[#4079ff]" />,
      title: "R&D Innovation (EAtek Labs)",
      desc: "A sandbox for experimentation — developing emerging tech solutions in AI, AR, and system-level design.",
    },
    {
      icon: <Compass className="w-10 h-10 text-[#40ffaa]" />,
      title: "Consulting & Digital Strategy",
      desc: "Guiding institutions, startups, and brands through product architecture, scalability planning, and transformation.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#4079ff]" />,
      title: "Automation & AI Integration",
      desc: "Enhancing workflows, user experiences, and operations through custom automation and AI-powered pipelines.",
    },
  ];


  


export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  
     
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
        {/* Modern background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="relative py-24 sm:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 mb-8"
            >
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              End-to-End Digital Solutions
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block text-slate-900 dark:text-slate-50">From Ideas to</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Scalable Platforms
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-8 max-w-3xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              We transform your vision into reality through comprehensive digital services. 
              From web development to AI integration, we build solutions that scale with your ambitions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center justify-center gap-4 flex-wrap"
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl">
                Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                View Our Work
              </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

        <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                What We Offer
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
          Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
          Empowering ideas through creativity, technology, and strategic design.  
          We build ecosystems that scale with purpose.
            </motion.p>
      </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group">
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
                  
                  <div className="relative z-10">
                    <div className="mb-6">{React.cloneElement(s.icon, { className: "h-10 w-10" })}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              {s.title}
            </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
          </motion.div>
        ))}
          </div>
      </div>
    </section>

      {/* Services Grid */}
      {/* <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive digital solutions designed to transform your business and accelerate growth.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detailedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6"> */}
                    {/* Intro */}
                    {/* <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">What We Do</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.intro}</p>
                    </div> */}
                    
                    {/* Why */}
                    {/* <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Why It Matters</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.why}</p>
                    </div> */}

                    {/* Positioning */}
                    {/* <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-2">Our Approach</h4>
                      <p className="text-sm font-medium">{service.positioning}</p>
                    </div> */}

                    {/* Features */}
                    {/* <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Key Capabilities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                How We Work
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              A proven methodology that ensures your project's success from concept to launch.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4 shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                        Step {index + 1}
                      </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden lg:block">
                      <ArrowRight className="h-5 w-5 text-slate-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <main className="w-full overflow-hidden">
      {projects.map((project, index) => (
        <motion.section
          key={project.id}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ${project.bgColor} text-white relative`}
        > */}
          {/* Faint background text */}
          {/* <h1 className="absolute top-28 left-12 sm:left-20 text-[6rem] sm:text-[9rem] font-bold opacity-20 select-none leading-none">
            {project.name}
          </h1> */}

          {/* Subtitle */}
          {/* <h3 className="text-lg sm:text-2xl mb-6 font-light tracking-wide">
            Our Work
          </h3> */}

          {/* Image preview */}
          {/* <div className="shadow-2xl rounded-2xl overflow-hidden w-[85%] md:w-[65%] max-w-5xl">
            <img
              src={project.img}
              alt={project.name}
              loading="lazy"
              className="rounded-2xl object-cover w-full h-[45vh] md:h-[55vh]"
            />
          </div> */}

          {/* Action buttons */}
          {/* <div className="mt-10 flex flex-col items-center space-y-4">
            <Button
              className={`${project.btnColor} font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition-all duration-300`}
            >
              View Project
              <ArrowRight className="w-4 h-4" />
            </Button>
            <a
              href="#"
              className="underline underline-offset-4 text-white/80 hover:text-white text-base"
            >
              View All Projects
            </a>
          </div> */}
        {/* </motion.section>
      ))}
    </main> */}

      {/* Why Choose EAtek */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
              >
                    Why Choose EAtek?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                    We don't just build software — we craft experiences that bridge technology and human emotion.
              </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Lightning Fast", desc: "Rapid development with proven frameworks and methodologies.", color: "from-blue-600 to-purple-600" },
                { icon: Users, title: "Collaborative", desc: "We work as an extension of your team, not just a vendor.", color: "from-green-600 to-emerald-600" },
                { icon: Target, title: "Results-Driven", desc: "Every solution is designed to achieve your business objectives.", color: "from-purple-600 to-pink-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </motion.div>
                );
              })}
                </div>
          </div>
        </div>
      </section>

 

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-purple-600/20 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-6"
              >
                <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30">
                  <Rocket className="mr-2 h-4 w-4" />
                  Ready to Get Started?
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Hire EAtek for Your Project
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Transform your ideas into scalable digital solutions. Let's build something extraordinary together 
                that goes beyond the binary and creates lasting impact.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                    className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start a Project
                </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm rounded-xl bg-white/5"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-300"
              >
                {[
                  { color: "bg-green-400", text: "Free Consultation" },
                  { color: "bg-blue-400", text: "Custom Solutions" },
                  { color: "bg-purple-400", text: "Ongoing Support" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${item.color} mr-2`} />
                    {item.text}
                </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
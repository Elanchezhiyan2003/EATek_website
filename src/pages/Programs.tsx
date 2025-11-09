import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Code, 
  Briefcase, 
  Zap, 
  GitBranch, 
  Palette, 
  Brain,
  ArrowRight,
  Calendar,
  Clock,
  Target,
  Heart,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const fellowshipPhases = [
  {
    icon: Zap,
    name: 'Ignition',
    // duration: '2 weeks',
    duration: '2 Days',
    description: 'Spark curiosity with workshops & live sessions',
    details: 'Interactive workshops, tech talks, and hands-on sessions to ignite your passion for technology and creativity.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    name: 'Cohort Circle',
    duration: '1 weeks',
    description: 'Build a peer-learning community',
    details: 'Form lasting connections with fellow learners, collaborate on projects, and create your support network.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    name: 'BuildVerse',
    duration: '60 days',
    description: 'Intensive hands-on projects',
    details: 'Dive deep into real-world projects, build your portfolio, and develop skills that matter in the industry.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Briefcase,
    name: 'Internship Curve',
    duration: '3-6 months',
    description: 'Guided, real-world work experience',
    details: 'Apply your skills in professional settings with mentorship and guidance from industry experts.',
    color: 'from-green-500 to-emerald-500',
  },
];

const bootcamps = [
  {
    icon: GitBranch,
    title: 'DevTools + GitHub Flow Mastery',
    description: 'From CLI to GitHub Actions, master developer tools & workflows',
    duration: '3 days',
    level: 'Beginner to Intermediate',
    topics: ['Command Line Interface', 'Git & GitHub', 'GitHub Actions', 'CI/CD Pipelines', 'Code Review Process'],
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: Code,
    title: 'React + Firebase Crash Course',
    description: 'Build scalable apps with modern stacks',
    duration: '5 days',
    level: 'Intermediate',
    topics: ['React Fundamentals', 'Firebase Setup', 'Authentication', 'Real-time Database', 'Deployment'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Creative Tech Sessions',
    description: 'Where imagination meets execution - Design, SaaS, AI',
    duration: '4 days',
    level: 'All Levels',
    topics: ['Design Thinking', 'SaaS Architecture', 'AI Integration', 'Creative Coding', 'Product Design'],
    color: 'from-purple-500 to-pink-500',
  },
];

const mentorshipTracks = [
  {
    icon: Code,
    title: 'Tech Mentorship',
    description: 'Hands-on coding & project guidance',
    features: ['1-on-1 code reviews', 'Project architecture guidance', 'Technical skill development', 'Industry best practices'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Career Mentorship',
    description: 'Resume, portfolio, and industry prep',
    features: ['Resume optimization', 'Portfolio development', 'Interview preparation', 'Career path planning'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Creative Mentorship',
    description: 'Art, storytelling, and design-driven learning',
    features: ['Design critique sessions', 'Creative project guidance', 'Storytelling workshops', 'Brand development'],
    color: 'from-purple-500 to-pink-500',
  },
];

const testimonials = [
  {
    name: 'Arjun Patel',
    role: 'ELAN 20 Alumni',
    company: 'Software Engineer at TechCorp',
    quote: 'The fellowship transformed my understanding of technology. The mentorship and real-world projects prepared me for my career in ways I never expected.',
    image: '/api/placeholder/60/60',
  },
  {
    name: 'Priya Sharma',
    role: 'BuildVerse Graduate',
    company: 'Frontend Developer at StartupXYZ',
    quote: 'Beyond the Binary isn\'t just a tagline - it\'s a mindset that changed how I approach problems and build solutions.',
    image: '/api/placeholder/60/60',
  },
];

const programs = [
    {
      icon: <Briefcase className="w-10 h-10 text-[#40ffaa]" />,
      title: "Internship Curve",
      subtitle: "Real Projects. Real Impact.",
      desc: "Gain hands-on exposure by working with EAtek’s live SaaS and creative products. Learn team dynamics, real-world delivery, and problem-solving beyond the classroom.",
      gradient: "from-[#0a0f1f]/90 to-[#141a2e]/90",
      glow: "hover:shadow-[0_0_20px_#40ffaa55]",
      link: "#application-form",
    },
    {
      icon: <Layers className="w-10 h-10 text-[#4079ff]" />,
      title: "Apprenticeship Track",
      subtitle: "Learn by Building. Build by Learning.",
      desc: "A guided learning path where you work beside mentors, mastering workflows, codebases, and product logic while shaping your craft through mentorship and iteration.",
      gradient: "from-[#0a0f1f]/90 to-[#141a2e]/90",
      glow: "hover:shadow-[0_0_20px_#4079ff55]",
      link: "#application-form",
    },
  ];

export default function Programs() {
  type ApplicationFormState = {
    name: string;
    email: string;
    phone: string;
    role: string;
    program: string;
    message: string;
  };

  const initialFormState: ApplicationFormState = {
    name: "",
    email: "",
    phone: "",
    role: "Student",
    program: programs[0]?.title ?? "Internship Curve",
    message: "",
  };

  const [formData, setFormData] = useState<ApplicationFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  const handleChange = (field: keyof ApplicationFormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    setFeedback(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setFeedback("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1be551b0-0d7b-4764-9808-f76612002733",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          program: formData.program,
          message: formData.message,
          subject: `New Application: ${formData.program}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFeedback("success");
        setFormData(initialFormState);
      } else {
        setFeedback("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFeedback("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20"> */}
      <section className="relative sm:py-8 py-8  md:h-full min-h-[65vh] sm:w-[90vw] md:w-full flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
        {/* Modern background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 md:py-2 relative z-10">
          <div className="relative py-2 sm:py-22 -mt-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
            >
              <GraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm  font-medium text-slate-700 dark:text-slate-300">
              Empowering the Next Generation
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block text-slate-900 dark:text-slate-50">Beyond the Binary</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Fellowship
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-6 max-w-3xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              A transformative journey for 9th–12th grade students, freshers, and passionate learners. 
              Bridge the gap between learning and real-world building through mentorship, community, and hands-on experience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-2 flex items-center justify-center gap-2 flex-wrap"
            >
              {/* <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl">
                Apply for Fellowship
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                Learn More
              </Button>
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 text-center"
            >
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                💡 Beyond the Binary isn't just a tagline — it's a journey you live.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ELAN 20' BuildVerse Fellowship */}
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
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Fellowship Program
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              ELAN 20' BuildVerse Fellowship
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              A comprehensive program designed to bridge the gap between learning and real-world building
            </motion.p>
          </div>

          {/* Fellowship Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl mb-16"
          >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg">
                    {/* <Calendar className="mr-2 h-5 w-5" /> */}
                    {/* 20-Week Transformative Journey */}
                    Transformative Journey
                  </div>
                </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center">
                  A program for 9th–12th grade students, freshers, and passionate learners, designed to bridge 
                  the gap between learning and real-world building through four carefully crafted phases.
                </p>
          </div>
          </motion.div>

          {/* Fellowship Phases */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden lg:block" />
            
            <div className="space-y-12">
              {fellowshipPhases.map((phase, index) => (
                <div key={phase.name} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex-1 lg:pr-8"
                  >
                    <div className={`relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group ${index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'} max-w-md`}>
                      {/* Gradient accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color}`} />
                      
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${phase.color} shadow-lg flex-shrink-0`}>
                            <phase.icon className="h-6 w-6 text-white" />
                          </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">{phase.name}</h3>
                          <Badge variant="outline" className="text-xs">
                              <Clock className="mr-1 h-3 w-3" />
                              {phase.duration}
                            </Badge>
                          </div>
                        </div>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-50">{phase.description}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {phase.details}
                        </p>
                      </div>
                  </div>
                  </motion.div>
                  
                  <div className="hidden lg:flex items-center justify-center w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-background shadow-lg z-10">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 lg:pl-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* {Internship & Apprenticeship Programs */}
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
          Opportunities
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
      >
        Internship & Apprenticeship
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
      >
        Bridging theory and practice through immersive, hands-on experiences — where curiosity meets real-world creation.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {programs.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group"
        >
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className="mb-6">{React.cloneElement(p.icon, { className: "h-10 w-10" })}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                {p.title}
              </h3>
              <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {p.subtitle}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{p.desc}</p>
            </div>

            {/* Apply Now Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={p.link}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Application Form */}
    <motion.div
      id="application-form"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start"
    >
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-10 shadow-xl">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Application Form
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Tell us about yourself and the opportunity you’re excited about. Our team will review
          your application and get in touch with the next steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
              <input
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Enter your name"
                className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/50 px-4 py-3 text-base text-slate-900 dark:text-slate-100 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
              <input
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="name@example.com"
                className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/50 px-4 py-3 text-base text-slate-900 dark:text-slate-100 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
                required
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Phone / WhatsApp
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange("phone")}
                placeholder="Optional"
                className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/50 px-4 py-3 text-base text-slate-900 dark:text-slate-100 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Current Role
              <select
                value={formData.role}
                onChange={handleChange("role")}
                className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/50 px-4 py-3 text-base text-slate-900 dark:text-slate-100 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
              >
                {['Student', 'Recent Graduate', 'Working Professional', 'Other'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Opportunity of Interest
            <select
              value={formData.program}
              onChange={handleChange("program")}
              className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/50 px-4 py-3 text-base text-slate-900 dark:text-slate-100 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
            >
              {programs.map((program) => (
                <option key={program.title} value={program.title}>
                  {program.title}
                </option>
              ))}
              <option value="Mentorship">Mentorship</option>
              <option value="Bootcamp">Bootcamp</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Tell us about your goals
            <textarea
              value={formData.message}
              onChange={handleChange("message")}
              rows={4}
              placeholder="Share your interests, past experience, or what you want to build."
              className="rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/50 px-4 py-3 text-base text-slate-900 dark:text-slate-100 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition resize-none"
            />
          </label>

          {feedback === 'error' && (
            <p className="text-sm font-medium text-red-500">
              Please provide your name and a valid email so we can reach out to you.
            </p>
          )}
          {feedback === 'success' && (
            <p className="text-sm font-medium text-green-500">
              Thanks for applying! Our team will reach out soon.
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              By submitting, you agree to be contacted by the EAtek team.
            </span>
          </div>
        </form>
      </div>

      
    </motion.div>
  </div>
</section>


      {/* Bootcamps & Workshops */}
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
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Learning Programs
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Bootcamps & Workshops
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              Each bootcamp is practical, short, and impact-driven
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bootcamps.map((bootcamp) => {
              const Icon = bootcamp.icon;
              return (
                <motion.div
                  key={bootcamp.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${bootcamp.color}`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${bootcamp.color} mb-6 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 leading-tight">{bootcamp.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{bootcamp.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {bootcamp.duration}
                      </Badge>
                        <Badge variant="outline" className="text-xs">{bootcamp.level}</Badge>
                    </div>
                    
                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-slate-900 dark:text-slate-50 mb-2">What You'll Learn:</h4>
                      <div className="space-y-1">
                        {bootcamp.topics.map((topic) => (
                            <div key={topic} className="flex items-center text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>

                      <Button variant="outline" className="w-full rounded-lg">
                      {/* Register Now */}
                      Coming Soon
                      {/* <ArrowRight className="ml-2 h-3 w-3" /> */}
                    </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm font-medium text-muted-foreground mb-4">
              👉 Each bootcamp is practical, short, and impact-driven.
            </p>
            {/* <Button variant="outline" size="lg">
              View All Workshops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </section>

      {/* Mentorship & Cohort Learning */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
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
                Support & Growth
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Mentorship & Cohort Learning
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              We believe mentorship is the backbone of growth. Every learner at EAtek is paired with mentors, 
              peers, and guides who create an ecosystem of support.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {mentorshipTracks.map((track) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.color}`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${track.color} mb-6 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">{track.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{track.description}</p>
                    <div className="space-y-2">
                      {track.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <Heart className="h-3 w-3 text-red-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 px-6 py-3">
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                👉 Learn together, grow together, thrive together.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Success Stories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Alumni Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              Hear from our graduates who are now building the future
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-600 dark:text-slate-400 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-50">{testimonial.name}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-500">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-blue-600/20 to-transparent" />
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
                  Applications Open Now
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Ready to Go Beyond the Binary?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Join hundreds of passionate learners who are building the future through our fellowship programs, 
                bootcamps, and mentorship opportunities.
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
                  onClick={() => {
                    // prefill form for fellowship and scroll to application
                    setFormData((prev) => ({ ...prev, program: "Internship Curve" }));
                    const el = document.getElementById('application-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                    className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Apply for Fellowship
                </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="flex gap-4 items-center justify-center">
                  {/* <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      // prefill form for bootcamp, scroll to application and open WhatsApp for quick chat
                      setFormData((prev) => ({ ...prev, program: "Bootcamp" }));
                      const el = document.getElementById('application-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      const phone = '8838567933';
                      const message = encodeURIComponent("Hi, I'm interested in joining a Bootcamp at EAtek. Could you share next steps?");
                      window.open(`https://wa.me/91${phone}?text=${message}`, '_blank');
                    }}
                      className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm rounded-xl bg-white/5"
                  >
                    Join a Bootcamp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button> */}

                  {/* New: Join WhatsApp Group button */}
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      // open the EAtek WhatsApp group invite in a new tab
                      window.open('https://chat.whatsapp.com/BwCXJZ1njJoAcId2oaaP4T', '_blank');
                    }}
                    className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm rounded-xl bg-white/5"
                  >
                    Join a Bootcamp
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
                  { color: "bg-green-400", text: "Rolling Admissions" },
                  { color: "bg-yellow-400", text: "Scholarship Available" },
                  { color: "bg-blue-400", text: "Mentorship Included" },
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
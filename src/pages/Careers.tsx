import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Code, 
  Palette, 
  GraduationCap, 
  TrendingUp,
  ArrowRight,
  Users,
  Globe,
  Lightbulb,
  Target,
  MessageCircle,
  FileText,
  Coffee,
  Zap,
  Award,
  Rocket,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

const openRoles = [
  {
    icon: Code,
    title: 'Developers',
    subtitle: 'React, Next.js, SaaS Engineering',
    description: 'Build scalable applications and contribute to our open-source ecosystem.',
    skills: ['React/Next.js', 'TypeScript', 'Node.js', 'Cloud Platforms'],
    type: 'Full-time',
    location: 'Remote/Hybrid',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Designers',
    subtitle: 'UI/UX, Creative Systems',
    description: 'Craft beautiful, intuitive experiences that bridge technology and emotion.',
    skills: ['UI/UX Design', 'Design Systems', 'Figma', 'Creative Direction'],
    type: 'Full-time',
    location: 'Remote/Hybrid',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Educators & Mentors',
    subtitle: 'Learning Experience Design',
    description: 'Shape the future of education through innovative learning programs.',
    skills: ['Curriculum Design', 'Mentorship', 'Educational Technology', 'Community Building'],
    type: 'Full-time',
    location: 'Hybrid',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Community & Growth Managers',
    subtitle: 'Building Ecosystems',
    description: 'Grow our community and drive engagement across all platforms.',
    skills: ['Community Management', 'Content Strategy', 'Growth Marketing', 'Analytics'],
    type: 'Full-time',
    location: 'Remote/Hybrid',
    color: 'from-orange-500 to-red-500',
  },
];

const items = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#40ffaa]" />,
      title: "Innovation at the Core",
      text: "Work with emerging technologies — from AI to SaaS ecosystems — and contribute to projects that challenge the norm and push creative boundaries.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#4079ff]" />,
      title: "Collaborative by Design",
      text: "Our squads are built around trust, flow, and shared curiosity. We believe in open dialogue, co-creation, and giving every voice a space to shape what’s next.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#40ffaa]" />,
      title: "Learn. Lead. Evolve.",
      text: "From mentorship programs and build weeks to R&D exposure, your growth curve never stops. You’ll learn fast, fail forward, and evolve into your best self.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#4079ff]" />,
      title: "Purpose Beyond Paychecks",
      text: "We create technology that educates, empowers, and inspires. Every idea you bring helps us move closer to our vision — Beyond the Binary.",
    },
  ];

const cultureHighlights = [
  {
    icon: Globe,
    title: 'Flexible & Remote-Friendly',
    description: 'Work from anywhere with flexible hours that respect your life balance.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Cross-Functional Squads',
    description: 'Real ownership in small, autonomous teams that ship meaningful products.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lightbulb,
    title: 'Learning-First Environment',
    description: 'Continuous growth through mentorship, workshops, and real-world projects.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Innovation + Artistry',
    description: 'Where technical excellence meets creative expression in everything we build.',
    color: 'from-orange-500 to-red-500',
  },
];

const growthOpportunities = [
  {
    icon: Heart,
    title: 'Internal Mentorship & Peer-Learning',
    description: 'Learn from experienced team members and grow alongside passionate peers.',
    benefits: ['1-on-1 mentoring', 'Peer learning circles', 'Knowledge sharing sessions', 'Cross-team collaboration'],
  },
  {
    icon: Target,
    title: 'Real-World Products & Services',
    description: 'Work on live products used by thousands and services that impact real businesses.',
    benefits: ['Product ownership', 'Customer interaction', 'Market feedback', 'Scalable impact'],
  },
  {
    icon: Rocket,
    title: 'Leadership & Entrepreneurship Pathways',
    description: 'Develop leadership skills and explore entrepreneurial opportunities within EAtek.',
    benefits: ['Leadership training', 'Project ownership', 'Startup exposure', 'Innovation labs'],
  },
];

const applicationSteps = [
  {
    icon: FileText,
    title: 'Share Your Story',
    description: 'Send us your resume + portfolio/ideas that showcase your passion and creativity.',
    tip: 'We value curiosity and creativity over perfect credentials.',
  },
  {
    icon: MessageCircle,
    title: 'Have a Conversation',
    description: 'Join us for a friendly chat about your goals, our mission, and potential collaboration.',
    tip: 'It\'s a conversation, not an interrogation.',
  },
  {
    icon: Coffee,
    title: 'Join the Team',
    description: 'Start your journey with us where your skills find purpose and your growth is our priority.',
    tip: 'Welcome to the EAtek family!',
  },
];

const benefits = [
  'Competitive salary & equity',
  'Health & wellness support',
  'Learning & development budget',
  'Flexible working arrangements',
  'Annual team retreats',
  'Open source contribution time',
];

const faqs = [
  {
    q: "What kind of people thrive at EAtek?",
    a: "We welcome makers, dreamers, and learners who love to merge creativity with logic. If you’re curious, collaborative, and driven by purpose — you’ll fit right in.",
  },
  {
    q: "Do I need prior industry experience to apply?",
    a: "Not necessarily! We value potential over perfection. Freshers and students with a strong portfolio or learning mindset are equally welcome.",
  },
  {
    q: "How does EAtek support learning and growth?",
    a: "Through mentorship, project-based learning, fellowship programs, and hands-on product exposure. We make sure every role is a growth curve, not just a job.",
  },
  {
    q: "What does the hiring process look like?",
    a: "1️⃣ Apply online → 2️⃣ Short interaction → 3️⃣ Skill-based task → 4️⃣ Interview & offer. We focus on skill, attitude, and team fit — not just your resume.",
  },
  {
    q: "Are remote or hybrid opportunities available?",
    a: "Yes. EAtek believes in flexibility and trust. Some roles are remote-friendly, while others thrive in our collaborative studio space.",
  },
  {
    q: "How can I apply?",
    a: "Visit our Careers page or email us at careers@eatek.in with your portfolio and role of interest.",
  },
];
export default function Careers() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20"> */}
      <section className="relative overflow-hidden sm:py-4 py-10 md:py-0  md:h-full min-h-[60vh] sm:w-[90vw] md:w-full flex items-center bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20">
        {/* Modern background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-30 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-30 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="relative py-12 sm:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 mb-8"
            >
              <Heart className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Mission-Driven Careers
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block text-slate-900 dark:text-slate-50">Work With</span>
              <span className="block mt-0.5 bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Purpose
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-8 max-w-3xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              At EAtek, careers aren't just jobs — they're journeys where education, art, technology, and emotion converge. 
              Join a mission-driven company building soulful technology "Beyond the Binary."
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center justify-center gap-4 flex-wrap"
            >
              {/* <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl">
                View Open Roles
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                Learn About Culture
              </Button>
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-0 text-center"
            >
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                💡 People thrive when they align work with meaning.
              </p>
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
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Culture
              </span>
            </motion.div>
        <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
        >
          Why Join Us
        </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              At EAtek, your work isn't just code or design — it's creation with purpose. 
          Join a culture where education, art, and technology converge to move both the mind and the heart.
            </motion.p>
      </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="mb-4">{React.cloneElement(item.icon, { className: "h-8 w-8" })}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              {item.title}
            </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center text-slate-500 dark:text-slate-400 italic text-lg"
          >
            "At EAtek, you don't just join a team — you join a movement of makers." 🚀
          </motion.p>
        </div>
    </section>

      {/* Open Roles */}
      {/* <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Open Roles
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're a growing team looking for passionate learners, creators, and builders. 
              Roles that shape both your career and the future of tech-education ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openRoles.map((role) => {
              const Icon = role.icon;
              return (
                <Card key={role.title} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${role.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{role.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {role.type}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {role.location}
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Apply Now
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a perfect match? We're always open to exceptional talent.
            </p>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Send Us Your Story
            </Button>
          </div>
        </div>
      </section> */}

      {/* Life at EAtek */}
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
                Work Culture
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Life at EAtek
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              We're not a hierarchy — we're a creative circle where every voice matters. 
              A culture built on innovation, creativity, and shared growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl text-center overflow-hidden group">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color}`} />
                    
                    <div className="relative z-10">
                      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${highlight.color} mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-3">{highlight.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {highlight.description}
                    </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits */}
          {/* <div className="mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                  <p className="text-muted-foreground">
                    Comprehensive benefits that support your growth and well-being.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm">
                      <Award className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* Growth & Learning */}
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
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Development
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Growth & Learning
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              Your career at EAtek is a fellowship in itself. We grow together — personally, professionally, and purposefully.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {growthOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-purple-600" />
                    
                    <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-purple-600 shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50">{opportunity.title}</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{opportunity.description}</p>
                    
                    <div>
                        <h4 className="font-medium text-sm text-slate-900 dark:text-slate-50 mb-3">Opportunities Include</h4>
                      <div className="space-y-2">
                        {opportunity.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                            <Zap className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      {/* <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How to Apply
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We look for curiosity, creativity, and commitment — not just resumes. 
              Simple, human, and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                    <CardContent className="pt-8">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-purple-600 mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="mb-2 text-sm font-medium text-orange-600">
                        Step {index + 1}
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/20 px-3 py-1 text-xs text-orange-700 dark:text-orange-300">
                        💡 {step.tip}
                      </div>
                    </CardContent>
                  </Card>
                  {index < applicationSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden md:block">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

       <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                FAQ
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
          Career FAQs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
          Everything you need to know before joining the EAtek movement 🚀
            </motion.p>
      </div>

          <div className="space-y-4">
        {faqs.map((faq, index) => (
              <motion.div
            key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl">
            <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left text-lg font-bold text-slate-900 dark:text-slate-50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              {faq.q}
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </motion.div>
            </button>
            {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                {faq.a}
                    </motion.div>
            )}
          </div>
              </motion.div>
        ))}
          </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 ">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/20 via-purple-600/20 to-transparent" />
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
                  Join Our Mission
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Ready to Build With Us?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Join a team where your skills find purpose, your growth is our priority, and together we're building 
                technology that goes beyond the binary to create meaningful impact.
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
                      const subject = encodeURIComponent("Application: I'm interested in joining EAtek");
                      const body = encodeURIComponent("Hi EAtek team,%0D%0A%0D%0AI'd like to apply for roles at EAtek. Please find my resume attached when you reply for next steps.%0D%0A%0D%0AThanks,");
                      window.location.href = `mailto:careers@eatek.in?subject=${subject}&body=${body}`;
                    }}
                    className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Apply Now
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      const phone = '8838567933';
                      const message = encodeURIComponent("Hi, I have a question about careers at EAtek. Could you please help?");
                      window.open(`https://wa.me/91${phone}?text=${message}`, '_blank');
                    }}
                    className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm rounded-xl bg-white/5"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask Questions
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
                  { color: "bg-green-400", text: "Equal opportunity employer" },
                  { color: "bg-yellow-400", text: "Remote-friendly culture" },
                  { color: "bg-purple-400", text: "Growth-focused environment" },
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
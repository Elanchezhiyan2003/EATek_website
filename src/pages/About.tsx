import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion,  AnimatePresence, useScroll, useTransform  } from 'framer-motion';
import SplitText from '../components/SplitText';
import TrueFocus from '../components/TrueFocus';
import RotatingText from '@/components/RotatingText';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import GradientText from '@/components/GradientText';
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Palette, 
  Cpu, 
  Heart, 
  Target, 
  Eye, 
  Package, 
  BookOpen, 
  Users,
  Rocket,
  Lightbulb,
  Sprout,
  Handshake,
  Globe,
  Calendar,
  ArrowRight,
  Smartphone,
  PenTool,
  Sparkles,
  ChevronDown, 
  ChevronUp,
  Layers,
  Share2
} from 'lucide-react';
import FAQ from '@/components/FAQ';
import ProfileCard from '@/components/ProfileCard';

// Lightweight fallback for react-parallax-tilt when the package isn't installed.
// If you prefer the real behavior, run: npm install react-parallax-tilt --save
const Tilt = ({ children }: any) => <div>{children}</div>;

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const services = [
  {
    title: "Web Application Development",
    desc: "Building scalable, human-centered web ecosystems — blending aesthetics and performance for every pixel.",
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Mobile Application Development",
    desc: "Crafting seamless, intuitive mobile apps that connect creativity with usability — across Android and iOS.",
    icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Digital Marketing & Growth Strategy",
    desc: "Driving digital presence through intelligent marketing, social reach, and brand storytelling that resonates.",
    icon: <Rocket className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Content Creation & Visual Storytelling",
    desc: "From cinematic videos to sharp branding content — we narrate stories that move both hearts and minds.",
    icon: <PenTool className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Creative Systems & BrandOS",
    desc: "Where design meets automation — we engineer visual identities that adapt, scale, and evolve with purpose.",
    icon: <Cpu className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "EAtek Labs & Learning Initiatives",
    desc: "Our research and learning division bridging technology, education, and creativity for the next generation.",
    icon: <GraduationCap className="w-8 h-8 text-indigo-500" />,
  },
];

// const [active, setActive] = useState("mission");
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 300], [0, -80]); // parallax effect

  // glow effect handler
  // const glowColor = active === "mission" ? "from-blue-500 to-purple-600" : "from-purple-600 to-pink-600";

const words = [
  {
    text: "Where ",
  },
  {
    text: "creativity, ",
    className: "text-purple-500 dark:text-purple-500",
  },
  {
    text: "learning, ",
    className: "text-green-500 dark:text-green-500",
  },
  {
    text: "and ",
  },
  {
    text: "technology ",
    className: "text-red-500 dark:text-red-500",
  },
  {
    text: "converge ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "to ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "build",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "ecosystems ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "that ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: " move ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "both ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "the ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "mind ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "and ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "the ",
    // className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "heart.",
    // className: "text-blue-500 dark:text-blue-500",
  },
];

 const items = [
    {
      icon: <Layers className="w-10 h-10 text-blue-500" />,
      title: "Product",
      desc: "SaaS tools, platforms, and services that scale with people's needs.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-green-400" />,
      title: "Narrative",
      desc: "Story-driven design and branding that connect emotionally.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-cyan-400" />,
      title: "Distribution",
      desc: "Communities, mentorship, and ecosystems that carry ideas forward.",
    },
  ];

/* Removed duplicate default export CultureValues to resolve redeclaration and duplicate implementation errors. */

const storyElements = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Learning that transforms minds and opens possibilities',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Art',
    description: 'Creativity that brings soul to every solution',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Innovation that scales and empowers',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Emotion',
    description: 'The human connection that makes it all meaningful',
    color: 'from-red-500 to-orange-500',
  },
];

const frameworkElements = [
  {
    icon: Package,
    title: 'Product',
    description: 'SaaS tools, platforms, and services that scale with people\'s needs.',
    color: 'from-blue-600 to-purple-600',
  },
  {
    icon: BookOpen,
    title: 'Narrative',
    description: 'Story-driven design and branding that connect emotionally.',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: Users,
    title: 'Distribution',
    description: 'Communities, mentorship, and ecosystems that carry ideas forward.',
    color: 'from-pink-600 to-blue-600',
  },
];

const milestones = [
  {
    year: '2024',
    title: 'Foundation',
    description: 'EAtek founded by Elanchezhiyan Mahendiran with the vision "Beyond the Binary"',
    status: 'completed',
  },
  {
    year: '2024-25',
    title: 'Fellowship Launch',
    description: 'Launched ELAN 20\' BuildVerse Fellowship, training school & college learners',
    status: 'completed',
  },
  {
    year: '2025',
    title: 'Product Suite',
    description: 'Introduced SaaS products Portli & FlowBox, and Stasis Artis for creative commerce',
    status: 'current',
  },
  {
    year: '2025',
    title: 'Service Expansion',
    description: 'Expanded into agency-style services with BrandOS',
    status: 'current',
  },
  {
    year: 'Future',
    title: 'Global Scale',
    description: 'Scaling products globally while empowering the next generation of learners & creators',
    status: 'future',
  },
];

const teamMembers = [
  { name: 'Elanchezhiyan Mahendiran', role: 'Founder & CEO' },
  { name: 'Asmiya Bincy', role: 'Co-Founder' },
  { name: 'Promod', role: 'Academic Coordinator' },
  { name: 'HariHaran', role: 'Python Developer' },
  { name: 'Prasanth P', role: 'HR' },
  { name: 'Rathenavel', role: 'Designer' },
  { name: 'Arul Hepzi', role: 'Data Analyst' },
  { name: 'Jebastin Johnson', role: 'Domain Specialist (Web Development)' },
  { name: 'Rahul', role: 'React Developer' },
];

const values = [
  {
    icon: Rocket,
    title: 'Innovation with Purpose',
    description: 'Every product must solve real human needs',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Creativity at the Core',
    description: 'Technology and art are inseparable in our work',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sprout,
    title: 'Mentorship & Learning',
    description: 'Growth comes from sharing knowledge and guidance',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Handshake,
    title: 'Community First',
    description: 'We build for people, not just for markets',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Globe,
    title: 'Beyond the Binary',
    description: 'We question conventions and design for a limitless future',
    color: 'from-indigo-500 to-purple-500',
  },
];




export default function About() {

  const cards = [
    {
      id: "mission",
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Our Mission",
      desc: "To empower learners, creators, and innovators by merging art, education, and technology into soulful, high-impact ecosystems.",
      gradient: "from-blue-500 via-cyan-400 to-teal-500",
      delay: 0.1,
    },
    {
      id: "vision",
      icon: <Eye className="w-10 h-10 text-white" />,
      title: "Our Vision",
      desc: "To evolve into a global creative-tech movement that inspires minds, connects hearts, and builds futures — always Beyond the Binary.",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      delay: 0.2,
    },
  ];

  const [active, setActive] = useState("mission");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -80]); // parallax effect
  // glow effect handler
  const glowColor = active === "mission" ? "from-blue-500 to-purple-600" : "from-purple-600 to-pink-600";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-indigo-200 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950  py-[21%] md:py-[14%]  overflow-hidden">
{/* <section className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-indigo-200 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950 overflow-hidden py-40 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24  z-0 top-0 md:h-full min-h-screen sm:w-[90vw] md:w-full"> */}
  {/* Background Grid Overlay */}
    {/* <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/20 opacity-40" />
    </div> */}

  {/* Content Container */}
  <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-10 h-60">

    {/* Heading */}
    <h2 className="text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
      <SplitText
        text="About "
        className="inline-block text-gray-900 dark:text-white"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <SplitText
        text="Us"
        className="inline-block text-blue-400 bg-clip-text"
        delay={50}
        duration={1.5}
        ease="power3.inOut"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </h2>

    {/* Subheading / Tagline */}
    <p className="text-2xl sm:text-3xl  font-semibold text-gray-800 dark:text-gray-100">
      <TrueFocus
        sentence="Architecting the Soulful Economy"
        manualMode={false}
        blurAmount={5}
        borderColor="blue-600"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </p>
    {/* Typewriter Effect */}
  </div>
 {/* <TypewriterEffect words={words} /> */}
 {/* <div className="text-center">
  <TypewriterEffect 
    words={words} 
    className="text-2xl sm:text-xl md:text-3xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
  />
</div> */}

{/* <GradientText>
  <p className="mt-6 text-sm sm:text-md md:text-md font-medium text-gray-700 dark:text-gray-300 max-w-8xl mx-auto">
    <TypewriterEffect 
      words={words} 
      className="text-sm sm:text-sm md:text-sm font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
    />
  </p>
</GradientText> */}
<GradientText
  colors={["#00C6FF", "#8A2BE2", "#FF00FF", "#FF2E63", "#FF8C00"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class text-2xl py-8 text-center sm:text-xl md:text-3xl font-extrabold font-poppins w-[70%] mx-auto"
>
  Where creativity, learning, and technology converge to build ecosystems that move both the mind and the heart.
</GradientText>


</section>





      {/* Our Story */}
      {/* <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
        
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 flex flex-wrap justify-center items-center gap-2">
  {/* Static first word */}
  {/* <span> Our Story</span> */}

  {/* Rotating Text with highlight */}
  {/* <RotatingText
    texts={['Education', 'Art', 'Technology', 'Emotion']}
    mainClassName="px-3 py-1 bg-purple-600 text-white rounded-lg inline-block"
    staggerFrom="last"
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '-120%' }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden"
    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
    rotationInterval={2000}
  /> */}
{/* </h1> */}

            
            {/* <div className="flex items-center justify-center gap-2 text-lg font-medium">
              <span className="text-blue-600">Education</span>
              <span className="text-muted-foreground">+</span>
              <span className="text-purple-600">Art</span>
              <span className="text-muted-foreground">+</span>
              <span className="text-red-600">Technology</span>
              {/* <span className="text-muted-foreground">+</span>
              <span className="text-red-600">Emotion</span> */}
            {/* </div> */}
          {/* </motion.div>  */} 

          {/* Story Content */}
          {/* <motion.div 
            className="mx-auto max-w-4xl mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 lg:p-12 text-center overflow-hidden">
          
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  At EAtek, we believe that technology is more than just code — it's an experience shaped by creativity, learning, and human emotion.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Traditional solutions often feel mechanical. We're building something different — a space where design meets function, 
                  where learning meets innovation, and where every project carries a soul.
                </p>
              </div>
            </div>
          </motion.div> */}

          {/* Story Elements Grid */}
          {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {storyElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <motion.div
                  key={element.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-white dark:bg-slate-900/50 backdrop-blur-sm">
                    <CardContent className="pt-8 pb-6 px-6">
                      <motion.div 
                        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${element.color} mb-4 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {element.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {element.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div> */}
        {/* </div> */}
      {/* </section> */}

      {/* Mission & Vision */}
<section className="relative py-28 bg-white dark:bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Beyond Purpose, Into Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-900 text-lg max-w-2xl mx-auto"
        >
          EAtek stands at the intersection of design, technology, and empathy — crafting digital ecosystems that move the mind and heart.
        </motion.p>

        <div className="mt-20 grid sm:grid-cols-2 gap-10">
          {cards.map((card) => (
            <Tilt key={card.id} glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: card.delay }}
                whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
                className={`group relative bg-gradient-to-br ${card.gradient} p-[2px] rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)]`}
              >
                <div className="bg-white-950 rounded-3xl p-8 sm:p-10 transition-all duration-300 group-hover:bg-opacity-80">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-full p-4 shadow-lg">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {card.title}
                  </h3>
                  <p className="text-white leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Gradient glow orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full" />
    </section>

{/* What we do */}

    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 py-28">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-violet-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            What We Do
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At EAtek, we design <span className="font-semibold text-indigo-500">digital ecosystems</span> where technology, art, and learning 
            converge — crafting experiences that empower, educate, and evolve.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-indigo-500/40 via-violet-500/30 to-transparent hover:from-indigo-500 hover:via-violet-500 hover:to-blue-500 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className="h-full bg-white/70 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between border border-white/20">
                <div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 text-sm text-indigo-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  → Explore more
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center text-xl italic text-slate-700 dark:text-slate-300"
        >
          “We don’t just build products — we architect <span className="font-semibold text-indigo-500">possibilities</span> that
          connect imagination with innovation.”
        </motion.p>
      </div>
    </section>

    {/* <section className="bg-gradient-to-b from-[#0a0f1f] to-[#141a2e] py-20 px-6 md:px-16 text-white"> */}
    <section className="bg-slte-100 py-20 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-poppins bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent mb-10">
          Culture & Values
        </h2>

        <p className="text-black text-lg md:text-xl w-[80%] mx-auto leading-relaxed mb-14">
          At <span className="text-[#40ffaa] font-semibold">EAtek</span>, culture isn’t an afterthought — it’s the framework behind how we think, build, and grow.  
          We believe in creating with purpose, learning with empathy, and innovating beyond the binary.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-[#1b243b]/70 border border-[#2a3557] backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center hover:bg-[#22304e]/80 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{item.icon && React.createElement(item.icon)}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#40ffaa]">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Synchronicity Framework */}

       {/* <section className="py-20 bg-gradient-to-b from-[#0a0f1c] to-[#101827] text-white text-center"> */}
       <section className="py-20 bg-slate-100 text-white text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Synchronicity Framework
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-16 text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A unique model that brings harmony between <span className="text-blue-400 font-semibold">Product</span>,{" "}
        <span className="text-green-400 font-semibold">Narrative</span>, and{" "}
        <span className="text-cyan-400 font-semibold">Distribution</span>.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#111b2e]/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-white">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Founder Profile Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
              {/* Meet the Founder */}
              Meet Our Founder
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The visionary behind EAtek's mission to bridge technology, creativity, and education
            </p>
          </motion.div>

          {/* Founder Content Grid */}
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <ProfileCard
                name="Elanchezhiyan Mahendiran"
                title="Founder & CEO"
                handle="elanchezhiyan"
                status="Online"
                contactText="Get in Touch"
                avatarUrl="/profile.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => {
                  window.location.href = '/contact';
                }}
                socials={{
                  github: 'https://github.com/Elanchezhiyan2003',
                  linkedin: 'https://www.linkedin.com/in/elanchezhiyanmahendiran',
                  // twitter: 'https://twitter.com',
                  email: 'emailto:chezhiyanmahi2020@gmail.com',
                  instagram: 'https://www.instagram.com/chezhiyanmahendiran/',
                }}
              />
              {/* <ProfileCard
                name="Asmiya Bincy"
                title="Co-Founder & MD"
                handle="elanchezhiyan"
                status="Online"
                contactText="Get in Touch"
                avatarUrl="/Asmiya.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => {
                  window.location.href = '/contact';
                }}
                socials={{
                  github: 'https://github.com',
                  linkedin: 'https://linkedin.com',
                  twitter: 'https://twitter.com',
                  email: 'contact@eatek.ai',
                }}
              /> */}
            </motion.div>

            {/* Founder Bio & Quote */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Visionary Leader
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Elanchezhiyan Mahendiran founded EAtek with a clear vision: to create a space where 
                        technology, creativity, and education converge. His passion for empowering learners and 
                        creators drives EAtek's mission to build ecosystems that move both the mind and the heart.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50"
              >
                <div className="absolute top-4 left-4 text-6xl text-blue-500/20 dark:text-blue-400/20 font-serif">"</div>
                <blockquote className="relative text-lg md:text-xl italic text-slate-700 dark:text-slate-200 leading-relaxed pl-8">
                  Beyond the Binary isn't just our tagline — it's our philosophy. We believe in creating 
                  solutions that transcend traditional boundaries, where art meets code, education meets innovation, 
                  and every project carries a soul.
                </blockquote>
                <div className="mt-4 flex items-center gap-3 pl-8">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Elanchezhiyan Mahendiran
                  </p>
                </div>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    2024
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Founded EAtek
                  </div>
                </div>
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    ELAN 20'
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    BuildVerse Fellowship
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Synchronicity Framework
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A unique model that brings harmony between Product, Narrative, and Distribution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {frameworkElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div key={element.title} className="relative">
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-8">
                      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${element.color} mb-6`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{element.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {element.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < frameworkElements.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden lg:block">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 lg:p-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Together, these create a cycle where innovation isn't just built — it's lived.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Journey & Milestones */}
      {/* <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Journey & Milestones
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our path from vision to reality
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <Card className={`border-0 shadow-lg ${index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'} max-w-md`}>
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-4">
                          <Badge 
                            variant={milestone.status === 'completed' ? 'default' : milestone.status === 'current' ? 'secondary' : 'outline'}
                            className={
                              milestone.status === 'completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                                : milestone.status === 'current'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                                : ''
                            }
                          >
                            <Calendar className="mr-1 h-3 w-3" />
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-background shadow-lg z-10" />
                  
                  <div className="flex-1 lg:pl-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Team */}
      {/* <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Core Team + Advisory Circle
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The passionate individuals driving EAtek's mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <Avatar className="mx-auto h-16 w-16 mb-4">
                    <AvatarImage src={`/api/placeholder/64/64`} alt={member.name} />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-muted px-6 py-3">
              <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">
                Supported by a fractional advisory circle of mentors & industry specialists who guide our growth
              </span>
            </div>
          </div>
        </div>
      </section> */}

  {/* FAQ Section */}
  <FAQ />

  {/* Culture & Values */}
      {/* <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Culture & Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${value.color} flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
}
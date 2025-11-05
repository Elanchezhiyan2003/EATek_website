# Welcome to your Altan project

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules

Start by editing src/pages/index.tsx

Core Sturcture:
Header:
EATek Logo
Home
About
Programs
Services
Careers
Contact us

Home page:
Hero section
About us
Who we are
Services
Our Products
Why choose us
Display Running Tech Tools
Testimonials
FAQ
Banner
Footer

About us:
Hero section
EATek Story
Vision Mission
What we do
Culture & Values
FAQ
Footer

Services:
Custom Web & Mobile Application
Saas & PaaP
Creative & Branding Solutions
E-Commerce & Marketplace Development
Learning & Fellowship Programs
R&D Innovation(EATek Labs)
Consulting & Digital Strategey
Automation & AI Itegration 

Programs:
Hero Section(About Elan20')
ELAN20'
Internship
Apprentenship
Mentorship & Cohort Learning
Alumini Stories
Banner
Footer

Career:
Hero Section
Why join us
Roles & Catalyst
Life at EATek
Growth & Learning
Banner
Footer

Contact:
Hero Section
Send Us a Message / Ways to Reach Us
Collaboration Channels
    => For Learning
    => For Business
    => For Creators
    => Banner
    => Footer



https://push.org/
https://www.autstand.com/
https://www.surinder.design/
https://www.rerter.com/
https://www.algolia.com/

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

<section className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-indigo-200 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950 py-24 sm:py-32 overflow-hidden">
  {/* Background Grid Overlay */}
    {/* <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/20 opacity-40" />
    </div> */}

  {/* Content Container */}
  <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center space-y-10 h-60">

    {/* Heading */}
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
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
    <p className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100">
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
 <div className="text-center">
  <TypewriterEffect 
    words={words} 
    className="text-2xl sm:text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
  />
</div>

</section>
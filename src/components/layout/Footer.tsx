// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Instagram, Linkedin, Github, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const navigationSections = [
//   { title: 'Company', links: [{ name: 'About Us', href: '/about' }, { name: 'Culture & Values', href: '/about' }, { name: 'Careers', href: '/careers' }, { name: 'Contact', href: '/contact' }] },
//   { title: 'Programs', links: [{ name: 'BuildVerse Fellowship', href: '/programs' }, { name: 'Bootcamps & Workshops', href: '/programs' }, { name: 'Mentorship', href: '/programs' }] },
//   { title: 'Services', links: [{ name: 'Web & App Development', href: '/services' }, { name: 'SaaS Development', href: '/services' }, { name: 'Branding & Design', href: '/services' }, { name: 'Automation & AI', href: '/services' }, { name: 'Learning Platforms (LMS)', href: '/services' }] },
//   { title: 'Products', links: [{ name: 'Portli', href: '/products' }, { name: 'FlowBox', href: '/products' }, { name: 'Stasis Artis', href: '/products' }, { name: 'BrandOS', href: '/products' }] },
//   // { title: 'Community', links: [{ name: 'Fellowship Network', href: '/community' }, { name: 'Mentorship Circle', href: '/community' }, { name: 'Open Source', href: '/community' }, { name: 'Impact Stories', href: '/community' }] },
//   // { title: 'Insights', links: [{ name: 'Blog', href: '/insights' }, { name: 'Case Studies', href: '/insights' }, { name: 'Research & Whitepapers', href: '/insights' }, { name: 'News & Updates', href: '/insights' }] },
// ];

// const socialLinks = [
//   { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/EATek.in', color: 'hover:text-pink-500' },
//   { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/EATek', color: 'hover:text-blue-600' },
//   { name: 'GitHub', icon: Github, href: 'https://github.com/EATek-org', color: 'hover:text-gray-900 dark:hover:text-gray-100' },
//   { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/EATek_in', color: 'hover:text-gray-900 dark:hover:text-gray-100' },
//   { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@EATek', color: 'hover:text-red-600' },
// ];

// const cultureSnippets = [
//   { emoji: '🚀', text: 'Innovation with Purpose' },
//   { emoji: '🎨', text: 'Creativity at the Core' },
//   { emoji: '🌱', text: 'Mentorship & Learning' },
//   { emoji: '🤝', text: 'Community First' },
//   { emoji: '🌐', text: 'Beyond the Binary' },
// ];

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           <div className="lg:col-span-4 mb-6">
//             <Link to="/" className="flex items-center space-x-3 mb-4">
//               <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">E</span>
//               </div>
//               <div>
//                 <div className="text-xl font-bold">EATek</div>
//                 <div className="text-sm text-gray-400">Beyond the Binary</div>
//               </div>
//             </Link>
//             <p className="text-gray-300 leading-relaxed mb-6">A creative-tech company blending Education, Art, Technology, and Emotion into soulful solutions. We build technology that goes beyond the binary to create meaningful impact.</p>
//             <div className="space-y-3 text-sm text-slate-400">
//               <div className="flex items-center space-x-3"><Mail className="h-4 w-4" /><a href="mailto:connect@EATek.in" className="hover:text-white transition-colors">connect@EATek.in</a></div>
//               <div className="flex items-center space-x-3"><Phone className="h-4 w-4" /><a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91-XXXXXXXXXX</a></div>
//               <div className="flex items-center space-x-3"><MapPin className="h-4 w-4" /><span>Hybrid HQ: India</span></div>
//             </div>
//           </div>
//           <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             {navigationSections.map((section) => (
//               <div key={section.title}>
//                 <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
//                 <ul className="space-y-3">
//                   {section.links.map((link) => (
//                     <li key={link.name}><Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-16 pt-12 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-3">Stay ahead with EATek insights, stories, and launches.</h3>
//             <div className="flex gap-3 mb-2">
//               <Input type="email" placeholder="your.email@example.com" className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400" />
//               <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">Subscribe <ArrowRight className="ml-2 h-4 w-4" /></Button>
//             </div>
//             <p className="text-xs text-gray-400">No spam, ever. Unsubscribe anytime.</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-3">Join the Fellowship Community</h3>
//             <p className="text-gray-300 mb-4">Learn, Build, Grow with peers & mentors.</p>
//             <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">Join Community <ArrowRight className="ml-2 h-4 w-4" /></Button>
//           </div>
//         </div>
//         <div className="mt-12 pt-8 border-t border-gray-800 flex justify-center space-x-6">
//           {socialLinks.map((social) => { const Icon = social.icon; return (<a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-gray-400 transition-colors ${social.color}`} aria-label={social.name}><Icon className="h-5 w-5" /></a>); })}
//         </div>
//       </div>
//       <div className="bg-gray-950 py-4">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-sm">
//           {cultureSnippets.map((snippet, index) => (<div key={index} className="flex items-center space-x-2 text-gray-400"><span className="text-base">{snippet.emoji}</span><span>{snippet.text}</span></div>))}
//         </div>
//       </div>
//       <div className="bg-black py-6">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
//           <div className="mb-4 sm:mb-0">© 2025 EATek. All rights reserved.</div>
//           <div className="flex items-center space-x-6">
//             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
//           </div>
//         </div>
//         <div className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center">Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> at the intersection of Education, Art & Technology.</div>
//       </div>
//     </footer>
//   );
// }

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import EATek from '../../../public/EATek.png'
import {
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigationSections = [
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { name: 'BuildVerse Fellowship', href: '/programs' },
      { name: 'Bootcamps & Workshops', href: '/programs' },
      { name: 'Mentorship', href: '/programs' },
      { name: 'Internship & Apprenticeship', href: '/programs' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web & App Development', href: '/services' },
      { name: 'SaaS Development', href: '/services' },
      { name: 'Branding & Design', href: '/services' },
      { name: 'Automation & AI', href: '/services' },
      { name: 'Learning Platforms (LMS)', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Products', href: '/products' },
      { name: 'Community', href: '/community' },
      { name: 'Insights', href: '/insights' },
    ],
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/EATekofficial/',
    color: 'hover:text-pink-500',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/EATek',
    color: 'hover:text-blue-600',
  },
  // {
  //   name: 'GitHub',
  //   icon: Github,
  //   href: 'https://github.com/EATek-org',
  //   color: 'hover:text-gray-900 dark:hover:text-gray-100',
  // },
  // {
  //   name: 'X (Twitter)',
  //   icon: Twitter,
  //   href: 'https://twitter.com/EATek_in',
  //   color: 'hover:text-gray-900 dark:hover:text-gray-100',
  // },
  // {
  //   name: 'YouTube',
  //   icon: Youtube,
  //   href: 'https://youtube.com/@EATek',
  //   color: 'hover:text-red-600',
  // },
];

const cultureSnippets = [
  { emoji: '🚀', text: 'Innovation with Purpose' },
  { emoji: '🎨', text: 'Creativity at the Core' },
  { emoji: '🌱', text: 'Mentorship & Learning' },
  { emoji: '🤝', text: 'Community First' },
  { emoji: '🌐', text: 'Beyond the Binary' },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300 border-t border-slate-800/50 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      
      {/* Gradient orbs for visual depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>
      
      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/0 via-slate-950/50 to-slate-950 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        {/* Brand + Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Link to="/" className="flex items-center space-x-3 mb-6 no-underline group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                // className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center transition-transform duration-300 shadow-lg shadow-blue-600/25"
              >
                {/* <span className="text-white font-bold text-xl">E</span> */}
               <img src={EATek} alt="EATek Logo"  className="object-contain relative h-14 w-14 rounded-sm" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0  transition-all duration-300" />
              </motion.div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  EATek
                </div>
                <div className="text-sm text-slate-400 font-medium">Beyond the Binary</div>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm sm:text-base max-w-md">
              A creative-tech company blending <span className="text-white font-medium">Education, Art, Technology</span>, and
              Emotion into soulful solutions. We build technology that goes
              beyond the binary to create meaningful impact.
            </p>
            
            {/* Contact Info Cards */}
            <div className="space-y-3">
              <motion.a
                  href="mailto:info@eatek.in"
                whileHover={{ x: 4 }}
                className="group flex items-center space-x-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 no-underline"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 mb-0.5">Email</div>
          <div className="text-sm text-slate-300 group-hover:text-white transition-colors break-all">info@eatek.in</div>
              </div>
              </motion.a>
              
              <motion.a
                  href="tel:+918838567933"
                whileHover={{ x: 4 }}
                className="group flex items-center space-x-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 hover:border-purple-500/50 hover:bg-slate-900/80 transition-all duration-300 no-underline"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                  <Phone className="h-4 w-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                  <div className="text-sm text-slate-300 group-hover:text-white transition-colors">+91 8838567933</div>
                </div>
              </motion.a>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-500 mb-0.5">Location</div>
                  <div className="text-sm text-slate-300">Namakkal, Tamilnadu</div>
              </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {navigationSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-sm font-bold text-white mb-5 relative inline-block">
                  {section.title}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      <Link
                        to={link.href}
                        className="group/item relative text-sm text-slate-400 hover:text-white transition-all duration-300 no-underline block py-2 pl-0 hover:pl-3 border-l-2 border-transparent hover:border-blue-500/50"
                      >
                        <span className="relative inline-block">
                        {link.name}
                          <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter + Community */}
        {/* <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-800/50 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8"> */}
          {/* Newsletter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 lg:p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Newsletter
                </h3>
              </div>
              <p className="text-slate-400 mb-6 text-sm sm:text-base">
              Stay ahead with EATek insights, stories, and launches.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <Input
                type="email"
                placeholder="your.email@example.com"
                  className="flex-1 bg-slate-950/50 border-slate-700/50 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
              <p className="text-xs text-slate-500 flex items-center space-x-1">
                <Heart className="h-3 w-3 text-red-500" />
                <span>No spam, ever. Unsubscribe anytime.</span>
            </p>
          </div>
          </motion.div> */}

          {/* Community CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 lg:p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-5 w-5 text-white rotate-[-45deg]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Fellowship Community
            </h3>
              </div>
              <p className="text-slate-400 mb-6 text-sm sm:text-base">
                Learn, Build, Grow with peers & mentors in our vibrant ecosystem.
            </p>
              <Link to="/programs">
            <Button
              variant="outline"
                  className="border-slate-700/50 text-black hover:bg-slate-800/80 hover:border-purple-500/50 w-full sm:w-auto rounded-xl transition-all duration-300 group/btn shadow-lg hover:shadow-xl"
            >
                  Join Community <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
              </Link>
          </div>
          </motion.div> */}
        {/* </div> */}

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-10 border-t border-slate-800/50"
        >
          <div className="text-center mb-6">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Connect With Us</h4>
            <p className="text-xs text-slate-500">Follow our journey beyond the binary</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
                <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                  className="relative group"
                aria-label={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative h-12 w-12 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 flex items-center justify-center group-hover:bg-slate-800/50">
                    <Icon className={`h-5 w-5 text-slate-400 transition-colors ${social.color}`} />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
                  </div>
                  <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-400 whitespace-nowrap font-medium">
                    {social.name}
                  </span>
                </motion.a>
            );
          })}
        </div>
        </motion.div>
      </div>

      {/* Culture Snippets */}
      <div className="border-t border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950/50 backdrop-blur-sm py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Our Values</h4>
            <p className="text-xs text-slate-500">What drives us forward</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {cultureSnippets.map((snippet, index) => (
              <motion.div
              key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative"
              >
                <div className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 hover:bg-slate-900/80 transition-all duration-300 cursor-default">
                  <span className="text-lg">{snippet.emoji}</span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {snippet.text}
                  </span>
            </div>
              </motion.div>
          ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-sm py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 gap-6 sm:gap-0">
            <div className="text-center sm:text-left">
              <span className="font-medium text-slate-300">
                © {new Date().getFullYear()} EATek.
              </span>
              <span className="ml-1">All rights reserved.</span>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              to="/privacy"
                className="hover:text-white transition-colors no-underline relative group/legal"
            >
              Privacy Policy
                <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/legal:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/terms"
                className="hover:text-white transition-colors no-underline relative group/legal"
            >
              Terms of Service
                <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/legal:w-full transition-all duration-300" />
            </Link>
              <a
                  href="mailto:EATekofficial@gmail.com"
                  className="hover:text-white transition-colors no-underline relative group/legal"
                >
                  Legal
                  <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/legal:w-full transition-all duration-300" />
                </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 pt-6 border-t border-slate-800/30 text-center"
          >
            <div className="text-xs text-slate-500 flex items-center justify-center gap-2 flex-wrap">
              <span>Built with</span>
              {/* <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
              </motion.span> */}
              <span>at the intersection of</span>
              <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education, Art & Technology
              </span>
            </div>
          </motion.div>
        </div>
        </div>
    </footer>
  );
}

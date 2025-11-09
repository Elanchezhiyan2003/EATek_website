import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  GraduationCap,
  Briefcase,
  Palette,
  ArrowRight,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Send,
  Heart,
  Sparkles,
  Users,
  Globe,
  Handshake
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'eatekofficial@gmail.com',
    description: 'Drop us a line anytime',
    action: 'mailto:connect@eatek.in',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Phone/WhatsApp',
    value: '+91-8838567933',
    description: 'Call or message us directly',
    action: 'tel:+918838567933',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Namakkal, India',
    description: 'Hybrid + Remote-friendly',
    action: '#',
    color: 'from-purple-500 to-pink-500',
  },
];

const collaborationChannels = [
  {
    icon: GraduationCap,
    title: 'For Learners',
    description: 'Fellowship, workshops, and mentorship opportunities.',
    opportunities: ['ELAN 20\' BuildVerse Fellowship', 'Bootcamps & Workshops', 'Mentorship Programs', 'Community Access'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'For Businesses',
    description: 'Web, SaaS, branding, and AI-powered solutions.',
    opportunities: ['Custom Web Development', 'SaaS Product Development', 'Brand Identity Design', 'AI Integration Services'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'For Creators',
    description: 'Partnerships in design, art, and storytelling.',
    opportunities: ['Creative Collaborations', 'Art & Design Projects', 'Storytelling Partnerships', 'Portfolio Development'],
    color: 'from-purple-500 to-pink-500',
  },
];

// const socialLinks = [
//   {
//     icon: Instagram,
//     name: 'Instagram',
//     handle: '@eatek.in',
//     url: 'https://www.instagram.com/eatekofficial/',
//     color: 'from-pink-500 to-rose-500',
//   },
//   {
//     icon: Linkedin,
//     name: 'LinkedIn',
//     handle: 'EAtek',
//     url: 'https://linkedin.com/company/eatek',
//     color: 'from-blue-600 to-blue-700',
//   },
//   {
//     icon: Github,
//     name: 'GitHub',
//     handle: 'eatek-org',
//     url: 'https://github.com/eatekofficial',
//     color: 'from-gray-700 to-gray-900',
//   },
// {
//   icon: Twitter,
//   name: 'X (Twitter)',
//   handle: '@eatek_in',
//   url: 'https://twitter.com/eatek_in',
//   color: 'from-gray-800 to-black',
// },
// ];


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFeedback(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
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
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject || "Contact Form Submission",
          "Subject Field": formData.subject || "No subject provided",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFeedback("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
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
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20"> */}
      <section className="relative overflow-hidden sm:py-10 md:py-0  min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
        {/* Modern background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-30 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-30 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="relative py-20 sm:py-26 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 mb-8"
            >
              <Handshake className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Open for Collaboration
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block text-slate-900 dark:text-slate-50">Let's Build</span>
              <span className="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-8 max-w-3xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Whether you're a learner, creator, or business — EAtek is always open for collaboration.
              Great ideas grow faster when shared. This isn't just a contact page — it's an open door to meaningful conversations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center justify-center gap-4 flex-wrap"
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
                  onClick={() => {
                    // Prefill form for contact inquiry, scroll to form, and open WhatsApp for direct chat
                    setFormData((prev) => ({ ...prev, program: "General Inquiry" }));
                    const el = document.getElementById('application-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    const phone = '8838567933';
                    const message = encodeURIComponent(
                      "Hi EAtek,\nI'm interested in learning more about your programs and opportunities. Could we start a quick conversation?"
                    );
                    window.open(`https://wa.me/91${phone}?text=${message}`, '_blank');
                  }}

                >
                  Start a Conversation
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              {/* <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                View Opportunities
              </Button>
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                👉 Contact isn't the end — it's the beginning of collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Methods */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Tell us about your project, idea, or how you'd like to collaborate. We'll get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-900 dark:text-slate-50">First Name</Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name" 
                        className="mt-1 rounded-lg" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-900 dark:text-slate-50">Last Name</Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name" 
                        className="mt-1 rounded-lg" 
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-900 dark:text-slate-50">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      className="mt-1 rounded-lg" 
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-slate-900 dark:text-slate-50">Subject</Label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?" 
                      className="mt-1 rounded-lg" 
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-900 dark:text-slate-50">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, idea, or how you'd like to collaborate..."
                      className="mt-1 min-h-[120px] rounded-lg"
                      required
                    />
                  </div>

                  {feedback === 'error' && (
                    <p className="text-sm font-medium text-red-500">
                      Please fill in all required fields. If the problem persists, please contact us directly.
                    </p>
                  )}
                  {feedback === 'success' && (
                    <p className="text-sm font-medium text-green-500">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 rounded-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Ways to Reach Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent">
                  Ways to Reach Us
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Simple, direct, and human. Choose the method that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="flex items-center space-x-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} shadow-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50">{method.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{method.description}</p>
                            <a
                              href={method.action}
                              className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                            >
                              {method.value}
                            </a>
                          </div>
                          <ArrowRight className="h-5 w-5 text-slate-400" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 shadow-lg">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-50">Quick Response Promise</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We typically respond within 24 hours, often much sooner.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Channels */}
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
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Ways to Work Together
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Collaboration Channels
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              Whatever your path, EAtek has a space for you. Here's how we can work together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collaborationChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden group">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${channel.color}`} />

                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${channel.color} shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{channel.title}</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{channel.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-slate-900 dark:text-slate-50 mb-3">Opportunities</h4>
                        <div className="space-y-2">
                          {channel.opportunities.map((opportunity) => (
                            <div key={opportunity} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                              <Sparkles className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                              {opportunity}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <Button variant="outline" className="w-full rounded-lg group">
                        Get Started
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
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
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Connect
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent"
            >
              Stay Connected
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              Be part of our journey "Beyond the Binary." Follow our updates, insights, and community stories.
            </motion.p>
          </div>

          {/* Social Media Links */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl text-center">
                    <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${social.color} mb-3 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-50 mb-1">{social.name}</h3>
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {social.handle}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div> */}

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Join Our Newsletter</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Get updates, insights, and community stories delivered to your inbox.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    value="eatekofficial@gmail.com"
                    readOnly
                    className="flex-1 rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 cursor-default"
                  />
                  <Button
                    className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 rounded-lg shadow-lg"
                    onClick={() => window.open('mailto:eatekofficial@gmail.com')}
                  >
                    Subscribe
                  </Button>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-600/20 via-blue-600/20 to-transparent" />
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
                  <Users className="mr-2 h-4 w-4" />
                  Ready to Collaborate?
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Start the Conversation
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Whether you have a project in mind, want to join our community, or simply want to say hello —
                we're here and excited to hear from you.
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
                    onClick={() => window.open('mailto:eatekofficial@gmail.com')}
                    className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send a Message
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const phone = '8838567933';
                      const message = encodeURIComponent(
                        "Hi EAtek 👋,\nI’d like to schedule a quick call to discuss collaboration or opportunities. When would be a good time?"
                      );
                      window.open(`https://wa.me/91${phone}?text=${message}`, '_blank');
                    }}
                    className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm rounded-xl bg-white/5"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule a Call
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
                  { color: "bg-green-400", text: "Quick response guaranteed" },
                  { color: "bg-yellow-400", text: "No commitment required" },
                  { color: "bg-purple-400", text: "Always human, never automated" },
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
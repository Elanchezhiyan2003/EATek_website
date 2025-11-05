import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import EATek from '../../../public/ea.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // { name: 'Products', href: '/products' },
  { name: 'Programs', href: '/programs' },
  { name: 'Services', href: '/services' },
  // { name: 'Community', href: '/community' },
  // { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 shadow-lg shadow-slate-900/5 border-slate-200/50 dark:border-slate-800/50'
          : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-slate-900/40 border-slate-200/30 dark:border-slate-800/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="h-12 w-36 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img
                  src={EATek}
                  alt="EAtek Logo"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>


          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navigation.map((item, index) => (
              <motion.div key={item.name} variants={navItemVariants}>
                <Link
                  to={item.href}
                  className={`relative no-underline text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                      layoutId="activeNav"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-indigo-700 hover:to-indigo-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg px-6 py-2.5 border-0"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <motion.div
                className="flex flex-col space-y-4 mt-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`no-underline text-lg font-medium transition-colors hover:text-primary ${
                        location.pathname === item.href
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4 space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                >
                  <Link to="/services" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-slate-300 dark:border-slate-700">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-indigo-700 hover:to-indigo-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                      Contact Us
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
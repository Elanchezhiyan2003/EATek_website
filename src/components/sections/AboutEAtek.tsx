import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Emotion',
    description: 'We believe technology should connect hearts, not just devices.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries through creative problem-solving and cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Education',
    description: 'Empowering the next generation through mentorship and hands-on learning.',
  },
  {
    icon: Target,
    title: 'Purpose',
    description: 'Every project we build serves a greater mission of positive impact.',
  },
];

export function AboutEAtek() {
  return (
    // <section className="py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl text-center">

          
    //       <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
    //         About EAtek
    //       </h2>
    //       <p className="mt-6 text-lg leading-8 text-muted-foreground">
    //         Born from the intersection of Education, Art, Technology, and Emotion, 
    //         EAtek represents a new paradigm in digital innovation.
    //       </p>
    //     </div>

    //     <div className="mx-auto mt-16 max-w-5xl">
    //       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    //         {values.map((value) => {
    //           const Icon = value.icon;
    //           return (
    //             <Card key={value.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
    //               <CardContent className="pt-6">
    //                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
    //                   <Icon className="h-6 w-6 text-white" />
    //                 </div>
    //                 <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
    //                 <p className="mt-2 text-sm text-muted-foreground">
    //                   {value.description}
    //                 </p>
    //               </CardContent>
    //             </Card>
    //           );
    //         })}
    //       </div>
    //     </div>

    //     <div className="mx-auto mt-16 max-w-4xl">
    //       <div className="rounded-2xl bg-muted/50 p-8 lg:p-12">
    //         <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
    //         <p className="text-lg text-muted-foreground leading-relaxed">
    //           To bridge the gap between traditional education and modern technology by creating 
    //           innovative solutions that inspire, educate, and empower. We believe in building 
    //           beyond the binary - where logic meets creativity, where code meets art, and where 
    //           technology serves humanity's deepest aspirations.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    //  <section className="relative bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#0B1120] text-white py-20 px-6 md:px-16">
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"> 
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          {/* <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            About
          </span> */}
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-200 dark:to-slate-50 bg-clip-text text-transparent mb-8"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          We are a <span className="text-purple-600 dark:text-purple-400 font-semibold">convergence company</span> reimagining how{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">education</span>,{" "}
          <span className="text-pink-600 dark:text-pink-400 font-semibold">art</span>, and{" "}
          <span className="text-orange-600 dark:text-orange-400 font-semibold">technology</span> connect to inspire{" "}
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">innovation</span> and{" "}
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">emotion</span>.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mt-8 rounded-full"
        />
      </div>
    </section>
  );
}
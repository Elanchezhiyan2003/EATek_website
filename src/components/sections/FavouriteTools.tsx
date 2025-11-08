"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// All technology tools in one array for horizontal marquee
const allTools: string[] = [
  // Design
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
  // Frontend
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  // Backend
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  // Database & Cloud
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  // DevOps
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  // Development Tools
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
];

const FavouriteTools: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Technology Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Built with <span className="text-orange-500">Modern Tools</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            At EAtek, we harness cutting-edge technologies to deliver innovative solutions 
            that empower education and drive technological excellence.
          </p>
        </div>

        {/* Horizontal Marquee Rows */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 lg:gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...allTools, ...allTools, ...allTools].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl border border-orange-100 flex items-center justify-center p-2.5 sm:p-3 lg:p-4 transition-all duration-300 hover:scale-110 hover:border-orange-300"
                >
                  <img
                    src={src}
                    alt={`Technology ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 lg:gap-8"
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[...allTools, ...allTools, ...allTools].reverse().map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl border border-orange-100 flex items-center justify-center p-2.5 sm:p-3 lg:p-4 transition-all duration-300 hover:scale-110 hover:border-orange-300"
                >
                  <img
                    src={src}
                    alt={`Technology ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Third Row - Left to Right (Slower) */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 lg:gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
            >
              {[...allTools, ...allTools, ...allTools].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl border border-orange-100 flex items-center justify-center p-2.5 sm:p-3 lg:p-4 transition-all duration-300 hover:scale-110 hover:border-orange-300"
                >
                  <img
                    src={src}
                    alt={`Technology ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Our Tech Stack
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FavouriteTools;

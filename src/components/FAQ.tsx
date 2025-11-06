import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is EAtek?",
      answer:
        "EAtek is a convergence-driven company where education, art, and technology meet to craft soulful, scalable, and purposeful digital ecosystems.",
    },
    {
      question: "What kind of services do you provide?",
      answer:
        "We offer full-stack web and SaaS development, creative branding through BrandOS Studio, EdTech learning platforms, and automation with AI integration.",
    },
    {
      question: "Who can collaborate with EAtek?",
      answer:
        "We collaborate with startups, educational institutions, creative brands, and innovators who believe in building systems with both emotion and intelligence.",
    },
    {
      question: "How does EAtek support students and creators?",
      answer:
        "Through programs like the ELAN 20’ BuildVerse Fellowship and our mentorship tracks, we help students and creators gain hands-on industry experience.",
    },
    {
      question: "Where is EAtek based?",
      answer:
        "EAtek operates globally with a growing network of digital creators, technologists, and learners — headquartered in India.",
    },
  ];

  return (
    // <section className="bg-gradient-to-b from-[#141a2e] to-[#0a0f1f] py-20 px-6 md:px-16 text-white">
    <section className="bg-white py-20 px-6 md:px-16 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-poppins bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent mb-10">
          Frequently Asked Questions
        </h2>
        <p className="text-black text-lg mb-12">
          Answers to the most common questions about EAtek’s purpose, platforms, and possibilities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            // className="bg-[#1b243b]/70 border border-[#2a3557] backdrop-blur-md rounded-xl p-6 hover:bg-[#22304e]/80 transition-all duration-300"
            className="bg-white border border-slate-200 backdrop-blur-md rounded-xl p-6 hover:bg-white transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              {/* <span className="text-lg font-semibold text-[#40ffaa]"> */}
              <span className="text-lg font-semibold text-black">
                {faq.question}
              </span>
              {openIndex === index ? (
                // <ChevronUp className="text-[#4079ff]" />
                <ChevronUp className="text-black" />
              ) : (
                // <ChevronDown className="text-[#4079ff]" />
                <ChevronDown className="text-black" />
              )}
            </button>

            {openIndex === index && (
              // <div className="mt-4 text-gray-400 text-sm leading-relaxed">
              <div className="mt-4 text-black text-sm leading-relaxed bg-whi">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

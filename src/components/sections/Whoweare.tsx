import React from "react";

export default function WhoWeAre() {
  const values = [
    {
      title: "Collaboration",
      desc: "We grow together, blending diverse ideas into one creative rhythm.",
    },
    {
      title: "Innovation",
      desc: "We think beyond boundaries to craft purposeful, emotion-driven technology.",
    },
    {
      title: "Integrity",
      desc: "We build with honesty, trust, and a passion for doing what’s right.",
    },
    {
      title: "Creativity",
      desc: "We merge art and logic to design experiences that move minds and hearts.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 text-slate-900 py-20 px-6 md:px-16 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold font-poppins bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent mb-8">
          Who We Are
        </h2>
        <p className="text-slate-900 text-lg md:text-xl leading-relaxed mb-12">
          At <span className="text-[#40ffaa] font-semibold">EAtek</span>, we’re not just a team — we’re a collective of dreamers, builders, and creators shaping soulful digital ecosystems. Our culture thrives on curiosity, empathy, and the pursuit of meaningful innovation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-[#141a2e]/80 border border-[#2a3557] rounded-2xl p-6 hover:bg-[#1e2b48]/90 hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#40ffaa]">
                {v.title}
              </h3>
              <p className="text-gray-400 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

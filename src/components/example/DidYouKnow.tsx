import { TextRotate } from "./TextRotate";

const didYouKnowTips = [
  "Did you know? EAtek stands for Education, Art, Technology, and Emotion Kinetics - building soulful technology that bridges innovation and human connection.",
  "Did you know? EAtek's ELAN 20' BuildVerse Fellowship is a transformative program for 9th-12th grade students and passionate learners.",
  "Did you know? EAtek offers comprehensive services from web development to AI integration, SaaS solutions, and creative branding.",
  "Did you know? Beyond the Binary isn't just a tagline - it's EAtek's philosophy of merging technology with human emotion and creativity.",
  "Did you know? EAtek provides internship and apprenticeship opportunities for hands-on learning with real-world projects.",
  "Did you know? EAtek's fellowship program includes four phases: Ignition, Cohort Circle, BuildVerse, and Internship Curve.",
  "Did you know? EAtek builds scalable SaaS products and custom learning management systems for educational institutions.",
  "Did you know? EAtek's team combines technical excellence with creative expression in everything they build.",
  "Did you know? EAtek offers mentorship programs in tech, career development, and creative fields.",
  "Did you know? EAtek's mission is to create technology that educates, empowers, and inspires communities.",
].sort(() => Math.random() - 0.5);

export function DidYouKnow() {
  return (
    <div className="w-full flex justify-center">
      <TextRotate
        texts={didYouKnowTips}
        rotationInterval={7000}
        staggerFrom="first"
        staggerDuration={0.01}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        splitBy="words"
        mainClassName="text-[#333333] text-sm text-center w-full"
        splitLevelClassName="justify-center"
        elementLevelClassName="text-center"
      />
    </div>
  );
}

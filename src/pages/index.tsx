import { Hero } from '@/components/sections/Hero';
import { AboutEAtek } from '@/components/sections/AboutEAtek';
import { Offerings } from '@/components/sections/Offerings';
import { WhyEAtek } from '@/components/sections/WhyEAtek';
import { ProgramsFellowships } from '@/components/sections/ProgramsFellowships';
import ProductShowcase from '@/components/sections/ProductShowcase';
import { CommunityImpact } from '@/components/sections/CommunityImpact';
import { TeamHighlight } from '@/components/sections/TeamHighlight';
import { BlogInsights } from '@/components/sections/BlogInsights';
import { CTABanner } from '@/components/sections/CTABanner';
import WhoWeAre from '@/components/sections/Whoweare';
import Services from '@/components/sections/Services';
import FAQ from '@/components/sections/FAQ';
import LogoLoop from '@/components/LogoLoop';
import FavouriteTools from '@/components/sections/FavouriteTools';
import { TestimonialsStack } from '@/components/sections/TestimonialsStack';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutEAtek />
      <WhoWeAre />
      <Services />
      <ProductShowcase />
      <WhyEAtek />
      {/* <Offerings /> */}
      {/* <ProgramsFellowships /> */}
      <TestimonialsStack />
      {/* <CommunityImpact /> */}
      <FavouriteTools />
      {/* <TeamHighlight /> */}
      {/* <BlogInsights /> */}
      <FAQ />
      {/* <LogoLoop/> */}
      <CTABanner />
    </div>
  );
}
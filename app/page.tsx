import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import StatsBar from "@/components/sections/stats-bar";
import FeaturesOverview from "@/components/sections/features-overview";
import DataDecisions from "@/components/sections/data-decisions";
import RealResults from "@/components/sections/real-results";
import FeaturesGrid from "@/components/sections/features-grid";
import Testimonials from "@/components/sections/testimonials";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#050918" }}>
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturesOverview />
      <DataDecisions />
      <RealResults />
      <FeaturesGrid />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}

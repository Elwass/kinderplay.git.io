import FeatureStrip from "../components/sections/FeatureStrip";
import Hero from "../components/sections/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] font-fredoka text-text">
      <Hero />
      <FeatureStrip />
    </div>
  );
};

export default LandingPage;

import FeatureStrip from "../components/sections/FeatureStrip";
import Hero from "../components/sections/Hero";
import LearningFramework from "../components/sections/LearningFramework";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] font-fredoka text-text">
      <Hero />
      <FeatureStrip />
      <LearningFramework />
    </div>
  );
};

export default LandingPage;

import FeatureStrip from "../components/sections/FeatureStrip";
import Hero from "../components/sections/Hero";
import DaycareProgram from "../components/sections/DaycareProgram";
import LearningFramework from "../components/sections/LearningFramework";
import Readiness from "../components/sections/Readiness";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] font-fredoka text-text">
      <Hero />
      <FeatureStrip />
      <LearningFramework />
      <Readiness />
      <DaycareProgram />
    </div>
  );
};

export default LandingPage;

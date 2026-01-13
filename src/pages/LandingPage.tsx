import FeaturesBar from "../components/sections/FeaturesBar";
import Hero from "../components/sections/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] font-fredoka text-text">
      <Hero />
      <FeaturesBar />
    </div>
  );
};

export default LandingPage;

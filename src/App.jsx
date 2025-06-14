/** @format */
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7x1 mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;

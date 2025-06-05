/** @format */

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7x1 mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;

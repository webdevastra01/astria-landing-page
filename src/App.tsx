import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navigationbar";
import ProblemSection from "./components/ProblemSection";
import SocialProofBar from "./components/SocialProofBar";
import SolutionSection from "./components/SolutionSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
    </>
  );
}

export default App;

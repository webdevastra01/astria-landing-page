import Contact from "./components/Contact";
import Differentiation from "./components/Differentiation";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
import HeroSection from "./components/HeroSection";
import LeadMagnet from "./components/LeadMagnet";
import Navbar from "./components/Navigationbar";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import SocialProofBar from "./components/SocialProofBar";
import SolutionSection from "./components/SolutionSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <GoogleReviews />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <HowItWorks />
      <Differentiation />
      <LeadMagnet />
      <FinalCTA/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

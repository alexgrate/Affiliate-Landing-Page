import Noise from "./components/LandingPage/Noise";
import Particles from "./components/LandingPage/Particles";
import Navbar from "./components/LandingPage/Navbar";
import Hero from "./components/LandingPage/Hero";
import Marquee from "./components/LandingPage/Marquee";
import About from "./components/LandingPage/About";
import HowItWorks from "./components/LandingPage/HowItWorks";
import WhyMe from "./components/LandingPage/WhyMe";
import Trial from "./components/LandingPage/Trial";
import Contact from "./components/LandingPage/Contact";
import Footer from "./components/LandingPage/Footer";

const App = () => {
  return (
    <>
      <Noise />
      <Particles />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Marquee />
        <About />
        <HowItWorks />
        <WhyMe />
        <Trial />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;

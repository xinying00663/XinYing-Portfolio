import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import Achievements from "./sections/Achievements";
import Extracurricular from "./sections/Extracurricular";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Education />
    <WorkExperience />
    <ShowcaseSection />
    <FeatureCards />
    <TechStack />
    <Achievements />
    <Extracurricular />
    <Contact />
    <Footer />
  </>
);

export default App;
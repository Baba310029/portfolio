import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import PageDots from "./components/PageDots";
import WorkSection from "./sections/WorkSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <SocialRail /> */}
      <PageDots />
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

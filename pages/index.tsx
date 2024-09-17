// pages/index.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollTopToButton";
import GuidePrompt from "../components/GuidePrompt"; // Import the new component

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <GuidePrompt />
      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default Home;

import "./App.css";
import Model from "./components/3Dmodel";
import FeaturesSection from "./components/feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InnerSight from "./components/InnerSight";
import Insigt from "./components/Insigt";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Model />
      <Insigt />
      <InnerSight />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default App;

import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import HeroSection from "./hero/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;

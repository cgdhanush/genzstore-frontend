import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;

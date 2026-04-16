import Categories from "../components/Categories";
import Header from "../components/Header";
import Footer from "./Footer";
import HeroSection from "../components/HeroSection";
import BottomHero from "../components/BottomHero";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Products />
      <BottomHero />
      <Footer />
    </>
  );
};

export default Home;

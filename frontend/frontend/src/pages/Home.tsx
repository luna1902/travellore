import DestinationCarousel from "../components/DestinationCarousel";
import AiBanner from "../components/home/AIBanner";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import PopularDestination from "../components/home/PopularDestinations";
import SearchBar from "../components/home/SearchBar";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <DestinationCarousel />
      <SearchBar />
      <Features />
      <PopularDestination />
      <AiBanner/>
      <Footer/>
    </div>
  );
};

export default Home;

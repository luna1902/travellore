import DestinationCarousel from "../components/DestinationCarousel";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import PopularDestination from "../components/home/PopularDestinations";
import SearchBar from "../components/home/SearchBar";
import Navbar from "../components/layout/Navbar";

const Home = () => {
   return(
     < div className="">
    <Navbar/>
    
    
      <DestinationCarousel/>
      
       <SearchBar/>
       <Features/>
       <PopularDestination/>
    </div>
   )
}

export default Home;
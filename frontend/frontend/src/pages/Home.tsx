import DestinationCarousel from "../components/DestinationCarousel";
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import Navbar from "../components/layout/Navbar";

const Home = () => {
   return(
     < div className="">
    <Navbar/>
    
    
      <DestinationCarousel/>
      
       <SearchBar/>
   
    </div>
   )
}

export default Home;
import Buttons from "../common/Button";
import { DestinationTabs } from "../../constants/dsetinsationsTab";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation,Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation" 
import Line from "../common/line";

const PopularDestination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CARD_WIDTH = 320;
  const GAP = 0;
  const VISIBLE = 4;

  const nextSlide = () => {
    // if (currentIndex < DestinationTabs.length - VISIBLE)
    //   setCurrentIndex(currentIndex + 1);
    setCurrentIndex((prev)=>
    prev>=DestinationTabs.length-VISIBLE?0:prev+1)
  };
  const prevSlide = () => {
    // if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    setCurrentIndex((prev)=>
    prev===0?DestinationTabs.length-VISIBLE:prev-1)
  };
  return (
    <div className="">
       
      <div className="flex px-10 py-5 transition-all duration-300  justify-between">
        <div className=" text-left">
          <h2 className=" text-left font-semibold text-xl  ">Popular Destinations</h2>
          <p>Explore some of the most loved places around the world</p>
        </div>

        <Buttons content="View All" />
      </div>

      <section className=" p-10">

  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    spaceBetween={20}
    slidesPerView={4}
    breakpoints={{
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    }}
  >
    {DestinationTabs.map((dest) => (
      <SwiperSlide key={dest.id}>
        <div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer">

          <img
            src={dest.image}
            alt={dest.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-5 left-5">
            <h3 className="text-white text-xl font-bold">
              {dest.title}
            </h3>

            <p className="text-gray-200">
              From ₹{dest.cost}
            </p>
          </div>

        </div>
      </SwiperSlide>
    ))}
  </Swiper>

</section>
    </div>
  );
};

export default PopularDestination;

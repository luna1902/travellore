import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Fullscreen,
  Heart,
  MapPin,
  Star,
} from "lucide-react";

import { destinations } from "../constants/carouselData";
import SearchBar from "./home/SearchBar";

// const CARD_WIDTH = 420;
// const CARD_HEIGHT = 560;

// const X_RADIUS = 430;
// const Y_RADIUS = 70;

const AUTO_PLAY = 3500;

export default function DestinationCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const CARD_WIDTH = screenWidth > 1280 ? 420 : screenWidth > 768 ? 330 : 250;

  const CARD_HEIGHT = screenWidth > 1280 ? 560 : screenWidth > 768 ? 400 : 360;

  const X_RADIUS =
    screenWidth > 1280 ? 430 : screenWidth > 768 ? 260 : Fullscreen;

  const Y_RADIUS = screenWidth > 1280 ? 70 : screenWidth > 768 ? 50 : 25;
  const total = destinations.length;

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_PLAY);

    return () => clearInterval(timer);
  }, [paused, total]);

  const next = () => {
    setActive((prev) => (prev + 1) % total);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  const cards = useMemo(() => {
    return destinations.map((item, index) => {
      let offset = index - active;

      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const angle = screenWidth < 768 ? offset * 0.35 : offset * 0.7;

      const x = Math.sin(angle) * X_RADIUS;
      const y = Math.cos(angle) * Y_RADIUS;

      const depth = Math.cos(angle);

      const scale = 0.65 + ((depth + 1) / 2) * 0.35;

      const opacity = 0.25 + ((depth + 1) / 2) * 0.75;

      const rotateY = -x / 20;

      const blur = depth < 0 ? 3 : 0;

      const zIndex = Math.round((depth + 1) * 100);

      return {
        item,
        index,
        x,
        y,
        scale,
        rotateY,
        opacity,
        blur,
        zIndex,
        active: offset === 0,
      };
    });
  }, [active, total, screenWidth]);
  return (
    <section
      className="w-full min-h-screen h-[550px] md:h-[650px] lg:h-[400px]  bg-[#090916] flex justify-between  max-w-[1440px] mx-auto  md:px-12 lg:px-20 xl:px-8 overflow-hidden  "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className=" absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed40,transparent_70%)]" />
      <div className=" absolute left-0.5 translate-x-0.5 bottom-24 w-[90%] max-w-6xl  bg-gradient-to-r from-violet-600/25 via-blue-500/15
       to-cyan-400/10 mx-auto h-[220px] rounded-full blur-[120px]" />
      <div className="w-full lg:w-[42%] pr-8 relative z-20 text-left ">
        <h1 className="text-6xl  md:text-5xl lg:text-7xl leading-tight font-black text-white ">
          Explore
          <br />
          Beyond
          <br />
          <span className="text-violet-500">Boundaries</span>
        </h1>
        <div className=" mt-8 max-w-[520px]">
          <p className="text-gray-300 leading-8 text-sm md:text-base xl:text-lg ">
            Discover breathtaking destinations,plan perfect trips, connect with
            travelers and get personalised recommendations
          </p>
        </div>
      </div>
      <div
        className="relative w-[55%]  max-w-7xl h-[350px] md:h-[450px] lg:h-[550px] flex justify-center items-center "
        style={{
          perspective: 3000,
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.item.id}
            animate={{
              x: card.x,
              y: card.y,
              scale: card.scale,
              opacity: card.opacity,
              rotateY: card.rotateY,
              filter: `blur(${card.blur}px)`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              zIndex: card.zIndex,
            }}
            className={`absolute cursor-pointer ${screenWidth < 768 && Math.abs(card.index - active) > 1 ? "hidden" : ""}`}
            onClick={() => setActive(card.index)}
          >
            <div
              className={`relative overflow-hidden rounded-[32px]
  ${card.active ? "shadow-[0_0_60px_rgba(139,92,246,.45)]" : "shadow-2xl"}`}
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
              }}
            >
              {/* Background Image */}

              <img
                src={card.item.image}
                alt={card.item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Active Glow */}

              {card.active && (
                <div
                  className="
      absolute
      inset-0
      rounded-[32px]
      ring-2
      ring-violet-500/70
      pointer-events-none
      "
                />
              )}

              {/* Favourite */}

              <button
                className="
    absolute
    top-6
    right-6
    w-12
    h-12
    rounded-full
    backdrop-blur-xl
    bg-white/20
    flex
    items-center
    justify-center
    hover:scale-110
    duration-300
    "
              >
                <Heart size={20} className="text-white" />
              </button>

              {/* Shine */}

              <motion.div
                // animate={{

                //     x:["-150%","250%"]

                // }}

                transition={{
                  repeat: Infinity,

                  duration: 5,

                  ease: "linear",
                }}
                className="
  absolute
  top-0
  left-0
  w-24
  h-full
  bg-white/20
  blur-xl
  rotate-12
  "
              />

              {/* Bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <h2 className="text-3xl font-bold text-white">
                  {card.item.title}
                </h2>

                <div className="flex items-center gap-2 mt-2">
                  <MapPin size={16} className="text-violet-400" />
                  <span className="text-white/90 text-sm text-2xl">
                    {card.item.country}
                  </span>
                </div>

                {card.active && (
                  <p className=" text-sm text-white/80 leading-6 max-w-[260px] mb-8">
                    {card.item.description}
                  </p>
                )}

                {/* <div className="flex items-center gap-2 mt-4">
    <Star
      size={16}
      fill="currentColor"
      className=""
    />
    <span className="text-white font-semibold">
      {card.item.rating}
    </span>
  </div> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Left Arrow */}
      {/* <button
        onClick={previous}
        className="
        absolute
        left-8
        top-1/2
        -translate-y-1/2
        z-50
        w-12 md:w-16
        h-12 md:h-16
        rounded-full
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        hover:bg-violet-500/30
        transition-all
        duration-300
        "
      >
        <ChevronLeft className="mx-auto text-white" />
      </button> */}
{/* 
      <button
        onClick={next}
        className="
        absolute
        right-8
        top-1/2
        -translate-y-1/2
        z-50
        w-12 md:w-16
        h-12 md:h-16
        rounded-full
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        hover:bg-violet-500/30
        transition-all
        duration-300
        "
      >
        <ChevronRight className="mx-auto text-white" />
      </button> */}
    </section>
  );
}

import { Link } from "react-router-dom";
import { Compass, ArrowLeft } from "lucide-react";
import notFound from "../assets/images/nf.jpeg";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#090916] text-white overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-[1600px] items-center px-10 lg:px-20">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 z-10">

          

          <p className="uppercase tracking-[8px] text-violet-400 font-semibold mb-4">
            Error 404-PAGE NOT FOUND
          </p>

          <h1 className="text-6xl xl:text-6xl font-black leading-tight">
            You've <br />
            wandered <br />
            <span className="">off the map.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            The destination you're looking for doesn't exist,
            has been moved, or was never part of the itinerary.
            Let's get you back to somewhere amazing.
          </p>

          <div className="mt-12 flex gap-5">

            <Link
              to="/"
              className="flex items-center gap-3 border border-gray-600 rounded-full px-8 py-4 font-semibold transition hover:bg-violet-600"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <Link
              to="/destinations"
              className="rounded-full border border-gray-600 px-8 py-4 font-semibold transition hover:border-violet-400 hover:text-violet-300"
            >
              Explore Destinations
            </Link>

          </div>

        </div>
\
        <div className="hidden lg:flex w-1/2 justify-center relative">

        
          <div className="absolute h-screen w-[600px] rounded-full bg-violet-600/20 blur-[180px]" />

          <div className="relative overflow-hidden backdrop-blur-xl shadow-2xl">

            <img
              src={notFound}
              alt="404"
              className="h-[630px] w-[420px]  object-cover"
            />


            <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          
            <div className="absolute bottom-10 left-10">

              {/* <h2 className="text-4xl font-bold">
                Lost?
              </h2> */}

              <p className="mt-3 text-gray-300">
                Even the best travellers take a wrong turn.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NotFound;
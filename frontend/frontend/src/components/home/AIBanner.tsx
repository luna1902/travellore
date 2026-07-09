import { FaRobot, FaRProject, FaStar, FaStarAndCrescent } from "react-icons/fa"
import Buttons from "../common/Button"

const AiBanner=()=>{
    return(
       
          <div className=" flex flex-col transform translate-x-0.5   backdrop-blur-xl bg-[#12203a]/80 border border-gray-800 shadow-2xl  text-left">
           <div>
            <div className="relative flex flex-row gap-[1%] px-10 pt-5 font-semibold text-xl  ">
            <h2>Plan your dream trip with  </h2>
            <h2 className=" text-violet-600">AI</h2>
            <FaRobot className=" text-violet-500 text-xl "/>
            </div>

            <div className=" text-left px-10 pt-5">
                <p>Get personalised recommendations based on your preferences</p>
                <p>budget and travel style</p>
            </div>

            <div className=" px-10 py-5">
                <Buttons content="Get Started Free"/>
            </div>
           </div>
          </div>
       
    )
}

export default AiBanner
import { useState } from "react";
import { FaCalendarAlt, FaSearchLocation, FaUsers } from "react-icons/fa";
import { tabs } from "../../constants/tabs";
import SearchField from "../common/SearchField";

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState("destinations");
    

    return (
        <div className="  transform translate-x-0.5  max-w-fit backdrop-blur-xl bg-[#12203a]/80 border border-gray-800 shadow-2xl justify-center w-screen p-10">

            <div className=" flex flex-wrap gap-4 pt-5 px-5 justify-center">
               {tabs.map((tab)=>(
                <button
                onClick={()=>setActiveTab(tab)}
                className={`
                    rounded-full text-sm font-medium px-5 py-2.5 transition-all duration-300
                    ${activeTab===tab
                        ?"bg-violet-600 text-white shadow-lg shadow-violet-600/30 border border-violet-500"
                        :"bg-transparent text-gray-400  hover:text-white hover:bg-gray-800 hover:border-violet-500 border border-gray-700"
                    }
                `}
                > {tab} </button>
            ))}
            </div>

             <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-evenly p-6 rounded-3xl bg-[#12203a]/80 backdrop-blur-xl  shadow-2xl mt-6 text-overflow-hidden ">
                
                <div>
                    <SearchField
                     icon={<FaSearchLocation/>}
                     title="Destination"
                    >
                        <input 
                            placeholder="Destination"
                            className=" relative w-full items-center p-5 bg-transparent h-14 rounded-2xl border border-slate-700  text-white outline-none placeholder:text-gray-500 mt-1 overflow-hidden"
                        />
                    </SearchField>

                </div>
                <div>
                    <SearchField
                     icon={<FaCalendarAlt/>}
                     title="Check-in"
                    >
                        <input 
                            type="date"
                            className="bg-transparent   h-14 rounded-2xl border border-slate-700  text-white outline-none placeholder:text-gray-500 mt-1"
                        />
                    </SearchField>

                </div>
            
                <div>
                    <SearchField
                     icon={<FaUsers/>}
                     title="Guests"
                    ><select className=" bg-[#12203a]/80 text-white outline-none mt-1.5 h-14 rounded-2xl border border-slate-700" >
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2 rounded-t-full " value="" disabled>--Select Guests--</option>
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2 rounded-b-full">1 Traveller</option>
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2">2 Travellers</option>
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2">3 Travellers</option>
                    </select>
                    </SearchField>

                </div>

                <button className=" rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold hover:scale-105 transition h-10 mt-8">Search</button>


             </div>


        </div>
    )}

    export default SearchBar;
import { useState } from "react";
import { FaCalendarAlt, FaSearchLocation, FaUsers } from "react-icons/fa";
import { tabs } from "../../constants/tabs";
import SearchField from "../common/SearchField";

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState("destinations");

    return (
        <div className=" absolute transform translate-x-0.5 w-[92%] max-w-6xl backdrop-blur-xl bg-[#111827]/95 border border-gray-800 shadow-2xl justify-center">

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

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-6 ">
                
                <div>
                    <SearchField
                     icon={<FaSearchLocation/>}
                     title="Destination"
                    >
                        <input 
                            placeholder="where are you going?"
                            className="bg-transparent h-14 rounded-2xl border border-slate-700  text-white outline-none placeholder:text-gray-500 mt-1"
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
                            className="bg-transparent h-14 rounded-2xl border border-slate-700  text-white outline-none placeholder:text-gray-500 mt-1"
                        />
                    </SearchField>

                </div>
            
                <div>
                    <SearchField
                     icon={<FaUsers/>}
                     title="Guests"
                    ><select className=" bg-[#162033] text-white outline-none mt-1.5" >
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2 rounded-t-full " value="" disabled>--Select Guests--</option>
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2 rounded-b-full">1 Traveller</option>
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2">2 Travellers</option>
                        <option className=" bg-violet-900  hover:bg-violet-600 border-2">3 Travellers</option>
                    </select>
                    </SearchField>

                </div>


             </div>


        </div>
    )}

    export default SearchBar;
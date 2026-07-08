import {FaCompass} from 'react-icons/fa';
import { navLinks } from '../../constants/navbar';
const CommonNav = () => {
    return (
     <nav className=" flex justify-between px-15 lg:px-20 py-5 bg-[#090916]">
     <div className=" flex  gap-3 items-center">
     <FaCompass className=" text-amber-100 text-3xl mt-2"/>
     <h2 className=' text-white text-3xl'>Travellore</h2>
     </div>

     <div className=' flex'>
        <ul className=' flex gap-4 text-white mt-3'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.path}>{link.title}</a>
                </li>
            ))}
        </ul>
     </div>

     <div className='flex gap-4 mt-2'>
       
        <button className='text-white border border-gray-700 px-5 py-2 rounded-full '>Log out</button>
     </div>
     </nav>
    )
}
export default CommonNav;
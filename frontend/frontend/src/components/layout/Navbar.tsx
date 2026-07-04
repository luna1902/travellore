import {FaCompass} from 'react-icons/fa';
import { navLinks } from '../../constants/navbar';
const Navbar = () => {
    return (
     <nav className=" flex gap-72 px-15">
     <div className=" flex  gap-3">
     <FaCompass className=" text-amber-100"/>
     <h2 className=' text-white'>Travellore</h2>
     </div>

     <div className=' flex'>
        <ul className=' flex gap-4 text-white'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.path}>{link.title}</a>
                </li>
            ))}
        </ul>
     </div>

     <div className='flex gap-4'>
        <button className='text-white border border-gray-700 px-5 py-2 rounded-full '>Login</button> 
        <button className='text-white border border-gray-700 px-5 py-2 rounded-full '>SignUp</button>
     </div>
     </nav>
    )
}
export default Navbar;
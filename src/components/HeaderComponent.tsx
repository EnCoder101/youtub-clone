import { FaBell, FaSearch } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { MdAccountCircle, MdKeyboardVoice, MdOutlineMenu } from "react-icons/md";

export default function HeaderComponent(){
    return (
        <div className="flex justify-between content-center">
            <SliderWithLogo />
            <SearchBar />
            <ProfileIcon />
        </div>
    )
}

function SliderWithLogo(){
    return(
        <div className="flex mt-2">
            <div className="text-white ml-5 m-2 cursor-pointer">
                <MdOutlineMenu className="w-6 h-6" />
            </div>
            <div className="text-white"> 
                <div className="w-24 m-2">
                    <img src="https://ongpng.com/wp-content/uploads/2023/04/3-13.png" alt="" />
                </div>
            </div>
        </div>
    )
}

function SearchBar(){
    return(
        <div className="text-white flex justify-center items-center w-5/12"> 
            <input className="m-2 rounded-full pl-5 w-4/5 max-h-9 block p-4 ps-10 text-sm text-stone-900 border border-stone-500 dark:bg-stone-900 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white" type="text" placeholder="Search...." />
            <button className="m-2 text-white bg-stone-900 hover:bg-stone-900 focus:outline-none focus:ring-4 font-medium rounded-full px-3.5 py-2.5 dark:bg-stone-900 dark:hover:bg-stone-800 dark:focus:ring-stone-700 dark:border-stone-700"><FaSearch className="w-6 h-6" /></button>
            <button className="m-2 text-white bg-stone-900 hover:bg-stone-900 focus:outline-none focus:ring-4 font-medium rounded-full px-3.5 py-2.5 dark:bg-stone-900 dark:hover:bg-stone-800 dark:focus:ring-stone-700 dark:border-stone-700"><MdKeyboardVoice className="w-6 h-6" /></button>
        </div>
    )
}

function ProfileIcon(){
    return(
        <div className="flex item-center justify-center m-2 mr-3 mt-2">
            <div className="cursor-pointer m-0.5 mx-1.5 text-white bg-stone-900 hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-stone-300 font-medium rounded-full text-sm px-3.5 py-2.5 dark:bg-stone-900 dark:hover:bg-stone-800 dark:focus:ring-stone-700 dark:border-stone-700"><IoMdVideocam className="w-6 h-6" /></div>
            <div className="cursor-pointer m-0.5 mx-1.5 text-white bg-stone-900 hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-stone-300 font-medium rounded-full text-sm px-3.5 py-2.5 dark:bg-stone-900 dark:hover:bg-stone-800 dark:focus:ring-stone-700 dark:border-stone-700"><FaBell className="w-6 h-6" /></div>
            <div className="cursor-pointer m-0.5 mx-1.5 mr-0 text-white bg-stone-900 hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-stone-300 font-medium rounded-full text-sm px-3.5 py-2.5 dark:bg-stone-900 dark:hover:bg-stone-800 dark:focus:ring-stone-700 dark:border-stone-700"><MdAccountCircle className="w-6 h-6" /></div>
        </div>
    )
}
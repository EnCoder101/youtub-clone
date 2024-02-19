import { BsThreeDots } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { CiBellOn } from "react-icons/ci"
import { GrDislike, GrLike } from "react-icons/gr"
import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineFileDownload } from "react-icons/md"
import { PiArrowArcRightBold } from "react-icons/pi"

export function VideoOwnerProfile(){
    return(
        <div className="flex justify-between">
            <div className="flex">
                <ProfileIconAndName />
                <Subscribe />
            </div>
            <div className="flex">
                <Like />
                <Share />
                <Download />
                <More />
            </div>
        </div>
    )
}

function ProfileIconAndName(){
    return (
        <div className="flex flex-row mr-2">
            <div className="mr-2">
                <CgProfile className="w-9 h-9" />            
            </div>
            <div className="flex flex-col">
                <div className="text-sm font-semibold">
                    Adamya Agrawal
                </div>
                <div className="text-xs">
                    1 Crore Subscriber
                </div>
            </div>
        </div>
    )
}

function Subscribe(){
    return (
        <div className="ml-3">
            <button className="flex content-center justify-center pt-1 text-white bg-stone-800 hover:bg-stone-900  font-medium rounded-full text-sm px-3 py-1 me-2 mb-2 dark:bg-stone-800 dark:hover:bg-stone-700 dark:focus:ring-stone-700 dark:border-stone-700">
                <div className="mr-2">
                    <CiBellOn className="w-6 h-6" />
                </div>
                <div>
                    Subscribe
                </div>
                <div className="ml-2">
                    <IoIosArrowDown className="w-6 h-6" />
                </div>
            </button>
        </div>
    )

}

function Like(){
    return (
        <div className="flex mr-4">
            <button className="mr-2 pt-1 flex text-white bg-stone-800 hover:bg-stone-900  font-medium rounded-tl-2xl rounded-bl-2xl text-sm px-3 py-1 me-0 mb-2 dark:bg-stone-800 dark:hover:bg-stone-700 dark:border-stone-700">
                <div className="mr-1.5 pt-0.5">
                    <GrLike className="w-4 h-4" />
                </div>
                <div>
                    22k
                </div> 
            </button>
            <div className="bg-stone-800 h-8">
                |
            </div>
            <button className="flex  text-white bg-stone-800 hover:bg-stone-900  font-medium rounded-tr-2xl rounded-br-2xl text-sm px-3 py-1 me-0 mb-2 dark:bg-stone-800 dark:hover:bg-stone-700 dark:border-stone-700">
                <div className="pt-1">
                    <GrDislike className="w-4 h-4" />
                </div>
            </button>
        </div>
    )
}

function Share(){
    return (
        <button className="flex text-white bg-stone-800 hover:bg-stone-900  font-medium rounded-full text-sm px-3 py-1 me-2 mb-2 dark:bg-stone-800 dark:hover:bg-stone-700 dark:border-stone-700">
            <PiArrowArcRightBold className="w-6 h-6 mr-2" />
            <div>
                Share
            </div>
        </button>
    )
}

function Download(){
    return (
        <button className="flex text-white bg-stone-800 shover:bg-stone-900  font-medium rounded-full text-sm px-3 py-1 me-2 mb-2 dark:bg-stone-800 dark:hover:bg-stone-700 dark:border-stone-700">
            <MdOutlineFileDownload className="w-6 h-6" />
            <div>
                Download
            </div>
        </button>
    )
}

function More(){
    return (
        <button className=" text-white bg-stone-800 hover:bg-stone-900 focus:ring-stone-300 font-medium rounded-full text-sm px-3 py-1 me-2 mb-2 dark:bg-stone-800 dark:hover:bg-stone-700 dark:border-stone-700" >
            <BsThreeDots className="w-6 h-6" />
        </button>
    )
}
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { SlDislike, SlLike } from "react-icons/sl";

export function CommentCard({name,time,comment} :any){
    return(
        <div className="mt-4 flex">
            <div className="mr-3">
                <MdOutlineSupervisorAccount className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-center">
                    <div className="text-sm font-bold">
                        {name} &nbsp;
                    </div>
                    <div className="text-xs h-fit text-gray-400">
                        {time}
                    </div>
                </div>
                <div className="font-normal mb-1">
                    {comment}
                </div>
                <div className="m-1 flex items-center">
                    <button className="mr-3">
                        <SlLike />
                    </button>
                    <button className="ml-3">
                        <SlDislike />
                    </button>
                    <button className="ml-5 font-semibold">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

export function WrtingCommentSelf(){
    const [commentButton,setCommentButton] = useState(false);
    return(
        <div className="flex">
            <div className="mr-3">
                <MdOutlineAccountCircle className="w-10 h-10" />
            </div>
            <div className="w-full "> 
                <input className="h-fit mt-1 w-full bg-black border-b-2 border-stone-900 focus:border-stone-600 outline-none" type="text" onClick={()=> {setCommentButton(true)}} placeholder="Add a comments...." /> 
                {/* <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_comment" id="floating_comment" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comments</label>
                </div> */}
                {commentButton === false ? null : <CommentAndCancelButtom setCommentButton={setCommentButton} />}
            </div>
        </div>
    )
}

function CommentAndCancelButtom({setCommentButton} :any){
    return(
        <div className="flex justify-end mt-2">
            <div className=" w-fit">
                <button className="mr-2 p-2 px-3 hover:bg-slate-900 rounded-full" onClick={()=> setCommentButton(false)}>Cancel</button>
                <button className="p-2 px-3 mr-2 bg-slate-900 hover:bg-slate-800 rounded-full">Comment</button>
            </div>
        </div>
    )
}
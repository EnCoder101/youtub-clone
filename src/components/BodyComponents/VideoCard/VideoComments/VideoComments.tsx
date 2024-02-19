import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { WrtingCommentSelf } from "./WritingCommentSelf";
import { CommentCard } from "./WritingCommentCard";

export function VideoComments(){
    const comments = [
        {
        name: "Adamya Agrawal",
        time: "1 month ago",
        comment: "Adamya",
        },
        {
        name: "Naleen Verma",
        time: "3 month ago",
        comment: "Bhadwa",
        },
        {
        name: "Abhist Pandey",
        time: "6 month ago",
        comment: "Ding Ding",
        },
    ]
    return(
        <div className="mb-5 mt-5">
            <NoOfCommentsAndSortBy />
            <WrtingCommentSelf />
            {comments.map((val)=>(
                <CommentCard 
                    name={val.name}
                    time={val.time}
                    comment={val.comment}
                />
            ))}
            {/* <CommentCard /> */}
        </div>
    )
}


function NoOfCommentsAndSortBy(){
    return(
        <div className="flex items-end mb-5">
            <div className="font-bold text-xl pr-4 h-fit">
                1,746 Comments 
            </div>
            <button className="px-3 mt-1 flex  h-8">
                <div className="pr-1 pt-0.5">
                    <HiOutlineMenuAlt1 className="w-5 h-5" /> 
                </div>
                <div>
                    Sort by
                </div>
            </button>
        </div>
    )
}
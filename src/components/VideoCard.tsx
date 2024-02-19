import { VideoComments } from "./VideoComments"
import { VideoDescription } from "./VideoDescription"
import { VideoOwnerProfile } from "./VideoOwnerProfile"

export function VideoCard(){
    return (
        <div className="col-span-2 mr-10">
            <div className="flex flex-col">
                <Video />
                <VideoHeader />
                <VideoOwnerProfile />
                <VideoDescription />
                <VideoComments />
            </div>
        </div>
    )
}


function Video(){
    return(
        <div className="border mb-5 rounded-2xl">
            <img className="w-full" src="https://media.istockphoto.com/id/1310634705/vector/video-player-template-for-web-or-mobile-apps-blogging.jpg?s=612x612&w=0&k=20&c=P8YKj3U-gl_5hHxHHPV524eE-7VpAzo2UAirg4RjWoI=" alt="" />
        </div>
    )    
}

function VideoHeader(){
    return(
        <div className="font-bold text-xl mb-2.5">
            MARTIN GARRIX LIVE @ IDEM (Amsterdam RAI 2023)
        </div>
    )
}


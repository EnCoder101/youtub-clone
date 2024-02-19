import { SearchRecomendation } from "./SearchRecomendation"
import { VideoCard } from "./VideoCard"

export function BodyComponent(){
    return (
        <div className="text-white"> 
            <div className="grid grid-cols-3 mx-16 mt-8">
                <VideoCard />
                <SearchRecomendation />
            </div>
        </div>
    )
}


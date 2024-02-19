export function VideoDescription(){
    const VideoDescriptionValue = {
        time: "6 Months Ago",
        views :  "27 Lakhs Views",
        description : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        header : "MARTIN GARRIX LIVE @ IDEM (Amsterdam RAI 2023)" 
    }
    return(
        <div className="w-full mt-3 mb-3">            
            <div className="block pl-4 pr-3 pt-2 pb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-900 dark:border-stone-800 dark:hover:bg-stone-800">
                <div className="mb-1 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{VideoDescriptionValue.views} &nbsp; {VideoDescriptionValue.time} </div>
                <div className="mb-0.5 text-l font-bold tracking-tight text-gray-900 dark:text-white">{VideoDescriptionValue.header} </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">{VideoDescriptionValue.description} </p>
                <div>
                    ...more
                </div>
            </div>
        </div>
    )
}
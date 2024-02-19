export function SearchRecomendation(){
    const videoCardValues= [
        {
            linkUrl: "https://www.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Create%20a%20Video%20Background%20With%20CSS.jpeg",
            title : "Godzilla x Kong: The New Empire | Official Trailer 2",
            channel : "Tommorowland",
            Views : "14 Lakh",
            uploadedTime : "6 Months Ago"
        },
        {
            linkUrl: "https://blog.hubspot.com/hubfs/css-wordwrap.webp",
            title : "Godzilla x Kong: The New Empire | Official Trailer 1",
            channel : "Warner Hoes",
            Views : "2 Lakh",
            uploadedTime : "1 Year Ago"
        }
]
    return (
        <div>
            <SearchTypes />
            {/* <VideoRecomendationCard /> */}
            {videoCardValues.map((obj)=>(
                <VideoRecomendationCard 
                title={obj.title} 
                channel={obj.channel} 
                views={obj.Views} 
                uploadedTime={obj.uploadedTime} 
                />
            ))}
        </div>
    )
}

function SearchTypes(){
    const values = ["All","From Mobu","Mobu","Noleen","Abhisht"] 
    return (
        <div className="flex flex-wrap">
            {values.map((val)=>(
                <SearchTypesCardButton buttonVal={val}/>
            ))}
        </div>
    )
}

function SearchTypesCardButton({buttonVal} : any){
    return (
        <div>
            <button className="flex mb-3 content-center justify-center pt-1 text-white bg-stone-800 hover:bg-stone-900 font-medium rounded text-m px-4 py-2 me-3 dark:bg-stone-800 dark:hover:bg-stone-700 dark:focus:ring-stone-700 dark:border-stone-700">
                {buttonVal}
            </button>
        </div>
    )
}


function VideoRecomendationCard({linkUrl,title,channel,views,uploadedTime} : any){
    return (
        <div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-stone-900 dark:hover:bg-stone-800 mb-3">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Create%20a%20Video%20Background%20With%20CSS.jpeg" alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title} </div>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{channel} </p>
                    <div className="flex">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{views} ~ &nbsp;</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{uploadedTime} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


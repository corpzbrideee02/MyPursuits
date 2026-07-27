import React from "react";
const Films = ({ items, loading }) => {
    if (loading) {
        return <main className="flex items-center justify-center" >
            <h1>Videos Loading...</h1>
        </main>
    }
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {items.map((item) => (
                    <div className="mb-6 lg:mb-2" key={item.id}>
                        <div className="travelPicDiv shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">

                            {/* <img src={require(`../images/nature/${item.src}.jpg`)} className="w-full" alt={item.alt} loading={"lazy"} /> */}
                            <iframe
                                className="w-full aspect-video"
                                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                                title={item.alt}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <div
                                className="travelPic mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 pointer-events-none"
                            ></div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Films;



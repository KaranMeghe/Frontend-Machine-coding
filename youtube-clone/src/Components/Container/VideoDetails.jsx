import { useSelector } from "react-redux";
import { usePlayVideo } from "../../Hooks/usePlayVideo";
import { CommentsContainer } from "../index";

const VideoDetails = () => {
    const { videoId } = usePlayVideo();
    const videoData = useSelector((state) => state.videos.videoDetails);

    if (!videoData || !videoData.items || videoData.items.length === 0) {
        return <p className="text-white text-center mt-10">Loading video...</p>;
    }

    const videoDetails = videoData.items[0];
    const { snippet } = videoDetails;

    return (
        <div className="w-screen h-screen flex bg-black">
            <div className="w-[75%] flex flex-col items-center">
                <div className="w-[90%] h-[60vh] bg-black flex justify-center">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="w-[90%] text-white text-xl font-semibold mt-4">
                    {snippet.title}
                </div>


                <div className="w-[90%] h-[45vh] bg-gray-900 p-4 rounded-lg mt-4 overflow-y-auto">
                    <h2 className="text-lg font-semibold text-white mb-3">Comments</h2>
                    <CommentsContainer />
                </div>
            </div>


            <div className="w-[25%] h-screen bg-gray-800 text-white p-4 flex items-center justify-center">
                <p className="text-gray-400">Live Chat (Coming Soon...)</p>
            </div>
        </div>
    );
};

export default VideoDetails;

<iframe width="1920" height="823" src="https://www.youtube.com/embed/6x8HVdS_TJs?list=RD6x8HVdS_TJs" title="The Bilz &amp; Kashif - Tere Nainon Mein" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>;
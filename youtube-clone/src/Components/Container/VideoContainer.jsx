import { Link } from "react-router-dom";
import { useFetchVideos } from "../../Hooks/useFetchVideos";
import { VideoCard } from '../index';

const VideoContainer = () => {
    const { loading, videos, error } = useFetchVideos();
    console.log("Loading:", loading, "Videos:", videos, "Error:", error);
    return (
        <div className="flex flex-wrap justify-around gap-10 p-5 overflow-y-auto  whitespace-nowrap scrollbar-hide h-[100vh] w-full">
            {videos?.items?.map((video) => {
                return (<Link to={`/watch/${video.id}`} key={video.id} >
                    <VideoCard data={video} />
                </Link>);
            })}
        </div>
    );
};

export default VideoContainer;
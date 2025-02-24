import { useFetchVideos } from "../../Hooks/useFetchVideos";
import { VideoCard } from '../index';

const VideoContainer = () => {
    const { loading, videos, error } = useFetchVideos();
    console.log("Loading:", loading, "Videos:", videos, "Error:", error);
    return (
        <div className="flex flex-wrap gap-20 p-5 overflow-y-auto  whitespace-nowrap scrollbar-hide h-[100vh] w-full">
            {videos?.items?.map((video) => {
                return <VideoCard data={video} key={video.id} />;
            })}
        </div>
    );
};

export default VideoContainer;
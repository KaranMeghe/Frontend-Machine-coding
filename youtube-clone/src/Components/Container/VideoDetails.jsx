import { useSelector } from "react-redux";
import { usePlayVideo } from "../../Hooks/usePlayVideo";

const VideoDetails = () => {
    const { videoId } = usePlayVideo();
    const videoData = useSelector((state) => state.videos.videoDetails);
    const videoDetails = videoData.items[0];
    const { snippet, statistics } = videoDetails;

    return (
        <div className="col-span-80 overflow-hidden flex flex-col gap-5">
            <iframe width="1200" height="600"
                src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <p className="text-xl font-medium w-full">
                {snippet.title}
            </p>
        </div>
    );
};

export default VideoDetails;
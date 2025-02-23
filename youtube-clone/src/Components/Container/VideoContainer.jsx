import { useFetchVideos } from "../../Hooks/useFetchVideos";

const VideoContainer = () => {
    const { loading, videos, error } = useFetchVideos();
    console.log("Loading:", loading, "Videos:", videos, "Error:", error);
    return (
        <div>VideoContainer</div>
    );
};

export default VideoContainer;
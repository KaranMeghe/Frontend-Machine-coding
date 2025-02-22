import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FETCH_YOUTUBE_VIDEOS } from "../../Config/services";
import { fetchVideosFailure, fetchVideoStart, fetchVideoSuccess } from '../../Redux/store';

const VideoContainer = () => {
    const dispatch = useDispatch();
    const { loading, videos, error } = useSelector((state) => state.videos);
    console.log("LOADING", loading, "VIDEOS", videos, "EROOR", error);

    useEffect(() => {
        const getVideos = async () => {
            dispatch(fetchVideoStart());
            try {
                const data = await FETCH_YOUTUBE_VIDEOS();
                dispatch(fetchVideoSuccess(data));
            } catch (error) {
                dispatch(fetchVideosFailure(error.message));
            }
        };
        getVideos();
    }, []);


    return (
        <div>VideoContainer</div>
    );
};

export default VideoContainer;
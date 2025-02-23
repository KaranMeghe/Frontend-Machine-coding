import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_YOUTUBE_VIDEOS } from "../Config/services";
import { fetchVideoStart, fetchVideoSuccess, fetchVideosFailure } from "../Redux/store";

export const useFetchVideos = () => {
    const dispatch = useDispatch();
    const { loading, error, videos } = useSelector((state) => state.videos);

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

    return { loading, videos, error };
};
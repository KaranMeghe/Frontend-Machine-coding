import { fetchVideoDetails, store } from "../Redux/store";
import { FETCH_VIDEO_DETAILS } from "./services";

export const videoDetailsLoader = async ({ params }) => {
    const { videoId } = params;

    const existingVideoDetails = store.getState().videos.videoDetails;
    if (existingVideoDetails?.id === videoId) return existingVideoDetails;

    const videoDetails = await FETCH_VIDEO_DETAILS(videoId);
    store.dispatch(fetchVideoDetails(videoDetails));

    return videoDetails;
};
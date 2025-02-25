import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`;

export const FETCH_YOUTUBE_VIDEOS = async () => {
    try {
        const { data } = await axios.get(YOUTUBE_VIDEO_API);
        return data;
    } catch (error) {
        console.error("Error Fetching Youtube Videos:", error);
    }
};


export const FETCH_VIDEO_DETAILS = async (videoId) => {
    try {
        const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
        return data;
    } catch (error) {
        console.error("Error Fetching Youtube Video Information:", error);
    }
};
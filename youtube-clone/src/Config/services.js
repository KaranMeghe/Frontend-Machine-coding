import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;


const YOUTUBE_SEARCH_INPUT_API = 'https://thingproxy.freeboard.io/fetch/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';




export const FETCH_YOUTUBE_VIDEOS = async () => {
    try {
        const { data } = await axios.get(YOUTUBE_VIDEO_API);
        return data;
    } catch (error) {
        console.error("Error Fetching Youtube Videos:", error);
        return { error: true, message: "Failed to fetch youtube videos." };
    }
};


export const FETCH_VIDEO_DETAILS = async (videoId) => {
    try {
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

        const { data } = await axios.get(url);
        return data;

    } catch (error) {
        console.error("Error Fetching Youtube Video Information:", error);
        return { error: true, message: "Failed to fetch video information." };
    }
};

export const FETCH_SEARCHED_INPUT = async (searchQuery) => {
    try {
        const url = `${YOUTUBE_SEARCH_INPUT_API}${encodeURIComponent(searchQuery)}`;
        const { data } = await axios.get(url);
        return data;
    }
    catch (error) {
        console.error("Error Fetching Searched Videos:", error);
        return { error: true, message: "Failed to fetch searched videos." };
    }
};


export const FETCH_SEARCH_VIDEOS = async (searchQuery) => {
    try {
        const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}`);
        return data;
    } catch (error) {
        console.error("Error Fetching Search Videos:", error);
        return { error: true, message: "Failed to fetch search videos." };
    }
};
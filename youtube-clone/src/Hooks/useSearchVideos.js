import { FETCH_SEARCHED_VIDEOS } from "../Config/services";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../Redux/store";
import { useEffect } from "react";



const useSearchVideos = (searchQuery) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getSearchResults = async () => {
            if (!searchQuery.trim()) return;

            try {
                const data = await FETCH_SEARCHED_VIDEOS(searchQuery);
                return dispatch(fetchSearchData(data));

            } catch (error) {
                console.log(error, "Error Fetching Searched Videos");
                return { error: true, message: "Failed to fetch searched videos." };
            }
        };

        getSearchResults();

    }, [searchQuery, dispatch]);

};

export default useSearchVideos;
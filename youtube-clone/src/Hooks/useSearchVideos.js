import { FETCH_SEARCHED_VIDEOS } from "../Config/services";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../Redux/store";
import { useEffect } from "react";



const useSearchVideos = (searchQuery, setSearchQuery) => {
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

        const timer = setTimeout(() => {
            getSearchResults();
        }, 200);

        return () => clearTimeout(timer);

    }, [searchQuery, dispatch]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery("");
        dispatch(fetchSearchData(null));
    };

    return { handleChange, handleSubmit };

};

export default useSearchVideos;
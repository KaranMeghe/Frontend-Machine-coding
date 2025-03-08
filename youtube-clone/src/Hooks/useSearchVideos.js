import { FETCH_SEARCHED_INPUT } from "../Config/services";
import { useDispatch } from "react-redux";
import { searchInput } from "../Redux/store";
import { useEffect } from "react";



const useSearchVideos = (searchQuery, setSearchQuery) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getSearchResults = async () => {
            if (!searchQuery.trim()) return;

            try {
                const data = await FETCH_SEARCHED_INPUT(searchQuery);
                dispatch(searchInput(data));


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
        dispatch(searchInput(null));
    };

    return { handleChange, handleSubmit };

};

export default useSearchVideos;
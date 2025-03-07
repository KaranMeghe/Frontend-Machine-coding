import { Input, Button } from '../../UI/index';
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import useSearchVideos from '../../Hooks/useSearchVideos';
import { ShowSearchInput } from '../../Components/index';
import { fetchSearchData } from '../../Redux/store';


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const { searchData } = useSelector((state) => state.videos);
    const { handleChange, handleSubmit } = useSearchVideos(searchQuery, setSearchQuery);

    return <form className='flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex gap-4'>
            <Input value={searchQuery} onChange={handleChange} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} className="border border-gray-600 rounded-full p-2 w-xl" placeholder="Search" />
            <Button className="bg-red-500 border border-red-500 rounded-full px-4 w-22">
                {<CiSearch className='font-bold text-2xl text-center w-full' />}
            </Button>
        </div>

        <div className='absolute top-16 w-2xl'>
            {searchData && showSuggestions && <ShowSearchInput searchData={searchData} />}
        </div>
    </form>;
};

export default SearchBar;
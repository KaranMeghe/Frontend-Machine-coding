import { Input, Button } from '../../UI/index';
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import useSearchInput from '../../Hooks/useSearchInput';
import { ShowSearchInput } from '../index';
import { searchInput } from '../../Redux/store';


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);

    const { searchQueryInput } = useSelector((state) => state.videos);
    const { handleChange, handleSubmit } = useSearchInput(searchQuery, setSearchQuery);

    return (
        <form className='flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex gap-4'>
                <Input value={searchQuery} onChange={handleChange} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} className="border border-gray-600 rounded-full p-2 w-xl" placeholder="Search" />
                <Button className="bg-red-500 border border-red-500 rounded-full px-4 w-22">
                    {<CiSearch className='font-bold text-2xl text-center w-full' />}
                </Button>
            </div>

            <div className='absolute top-16 w-2xl'>
                {searchQuery && showSuggestions && <ShowSearchInput searchQueryInput={searchQueryInput} />}
            </div>

        </form>
    );
};

export default SearchBar;
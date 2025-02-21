import { Input, Button } from '../../UI/index';
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {
    return <form className='flex gap-4'>
        <Input className="border border-gray-600 rounded-full p-2 w-xl " placeholder="Search" />
        <Button className="bg-red-500 border border-red-500 rounded-full px-4 w-22">
            {<CiSearch className='font-bold text-2xl text-center w-full' />}
        </Button>
    </form>;
};

export default SearchBar;
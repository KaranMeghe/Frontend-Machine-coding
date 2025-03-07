const ShowSearchInput = ({ searchData }) => {
    if (!searchData || !Array.isArray(searchData[1])) return null;

    return (
        <ul className="border border-gray-800 bg-gray-900 shadow-md rounded-lg p-2 w-full">
            {searchData[1].map((item) => (
                <li key={item} className="px-2 py-1 hover:bg-gray-200 hover:text-black cursor-pointer">
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default ShowSearchInput;

import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";


const Sidebar = () => {
    return (
        <div className="border p-4 col-span-1">
            <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center"><IoMdHome className="text-2xl" />Home</li>
                <li className="flex gap-2 items-center"><SiYoutubeshorts className="text-2xl" />Shorts</li>
                <li className="flex gap-2 items-center"><MdSubscriptions className="text-2xl" /> Subscriptions</li>
                <li className="flex gap-2 items-center"> <SiYoutubemusic className="text-2xl" />  Youtube Music</li>
            </ul>
        </div>
    );
};

export default Sidebar;
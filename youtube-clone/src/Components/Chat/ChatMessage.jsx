import { HiOutlineUserCircle } from "react-icons/hi2";

const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center gap-4 my-2">
            <div className="w-10 h-10 bg-gray-500 rounded-full">
                <HiOutlineUserCircle className="text-white w-6 h-6 m-2" />
            </div>
            <div className="ml-2">
                <div className="flex items-center">
                    <p className="text-white font-semibold">{name}</p>
                </div>
                <p className="text-white">{message}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
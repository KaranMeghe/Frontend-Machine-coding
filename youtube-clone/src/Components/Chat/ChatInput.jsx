import { Input } from "../../UI";

const ChatInput = () => {
    return (
        <div className="sticky bottom-0 w-full bg-gray-800 p-4 flex items-center">
            <Input placeholder="Type a message..." className="border rounded-full p-2 w-full" />
        </div>
    );
};

export default ChatInput;
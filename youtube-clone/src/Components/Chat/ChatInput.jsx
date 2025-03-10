import { Input } from "../../UI";
import useLiveChat from '../../Hooks/useLiveChat';


const ChatInput = () => {
    const { handleSubmit, handleOnChange, liveChatMessage } = useLiveChat();
    return (
        <form className="sticky bottom-0 w-full bg-gray-800 p-4 flex items-center" onSubmit={handleSubmit}>
            <Input value={liveChatMessage} onChange={handleOnChange} placeholder="Type a message..." className="border rounded-full p-2 w-full" />
        </form>
    );
};

export default ChatInput;
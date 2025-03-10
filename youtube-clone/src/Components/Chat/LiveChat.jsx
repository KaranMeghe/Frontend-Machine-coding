import { ChatInput, ChatMessage } from '../index';
import { useSelector } from 'react-redux';
import useLiveChat from '../../Hooks/useLiveChat';

const LiveChat = () => {
    const liveChatMessages = useSelector((state) => state.chats.messages);
    const { handleFetchLiveChat } = useLiveChat();
    handleFetchLiveChat();
    return (
        <div className='w-full h-full bg-gray-800 flex flex-col'>
            <div className='w-full h-full bg-gray-800 p-4 overflow-y-auto flex flex-col-reverse'>
                {liveChatMessages.map((message, index) => (
                    <ChatMessage key={index} name={message.username} message={message.message} />
                ))}
            </div>
            <ChatInput />
        </div>
    );
};

export default LiveChat;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { liveChatMessages } from "../Config/Config";
import { addLiveChatMessage } from "../Redux/store";

const useLiveChat = () => {
    const dispatch = useDispatch();
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (messageIndex < liveChatMessages.length) {
                dispatch(addLiveChatMessage(liveChatMessages[messageIndex]));
                setMessageIndex((prev) => prev + 1);
            }
        }, 2000);

        return () => clearInterval(timer);
    }, [messageIndex, dispatch]);

    return null;
};

export default useLiveChat;

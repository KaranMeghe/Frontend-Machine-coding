import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { liveChatMessages } from "../Config/Config";
import { addLiveChatMessage } from "../Redux/store";

const useLiveChat = () => {
    const dispatch = useDispatch();
    const [messageIndex, setMessageIndex] = useState(0);
    const [liveChatMessage, setLiveChatMessage] = useState("");


    const handleFetchLiveChat = () => {
        useEffect(() => {
            const timer = setInterval(() => {
                if (messageIndex < liveChatMessages.length) {
                    dispatch(addLiveChatMessage(liveChatMessages[messageIndex]));
                    setMessageIndex((prev) => prev + 1);
                }
            }, 1000);

            return () => clearInterval(timer);
        }, [messageIndex, dispatch]);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLiveChatMessage("");
        dispatch(addLiveChatMessage({ username: "Karan Meghe", message: liveChatMessage, userId: "#teygbg68" }));
    };

    const handleOnChange = (e) => {
        setLiveChatMessage(e.target.value);
    };

    return { handleFetchLiveChat, handleSubmit, handleOnChange, liveChatMessage };
};

export default useLiveChat;

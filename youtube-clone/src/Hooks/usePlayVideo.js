import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeMenu } from "../Redux/store";

export const usePlayVideo = () => {
    const dispatch = useDispatch();
    const { videoId } = useParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return { videoId };
};
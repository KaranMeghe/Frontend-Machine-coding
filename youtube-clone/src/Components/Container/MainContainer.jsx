import { ButtonList, VideoContainer } from "../index";


const MainContainer = () => {
    return (
        <div className="w-5/6 border flex flex-col gap-2">
            <ButtonList />
            <VideoContainer />
        </div>
    );
};

export default MainContainer;
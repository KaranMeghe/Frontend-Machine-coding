import { SideBar, MainContainer } from "../index";
import useHandleSideBar from "../../Hooks/useHandleSideBar";
const Body = () => {
    const { isHamburgerOpen } = useHandleSideBar();

    if (!isHamburgerOpen) return null;
    return (
        <div className="grid grid-flow-col w-full">
            <SideBar />
            <MainContainer />
        </div>
    );
};

export default Body;
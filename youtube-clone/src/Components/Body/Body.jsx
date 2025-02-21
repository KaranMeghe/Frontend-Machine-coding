import { SideBar, MainContainer } from "../index";
import useHandleSideBar from "../../Hooks/useHandleSideBar";
const Body = () => {
    const { isHamburgerOpen } = useHandleSideBar();
    return (
        <div className="grid grid-flow-col w-full">
            {isHamburgerOpen && <SideBar />}
            <MainContainer />
        </div>
    );
};

export default Body;
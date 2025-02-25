import { SideBar, MainContainer } from "../index";
import useHandleSideBar from "../../Hooks/useHandleSideBar";
import { Outlet } from "react-router-dom";
const Body = () => {
    const { isHamburgerOpen } = useHandleSideBar();

    return (
        <div className="grid grid-flow-col w-full h-[100vh] overflow-y-hidden">
            {isHamburgerOpen && <SideBar />}
            <Outlet />
        </div>
    );
};

export default Body;

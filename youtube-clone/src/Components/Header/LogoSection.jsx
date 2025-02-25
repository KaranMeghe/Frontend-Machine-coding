import { Logo } from "../../UI/index";
import { RxHamburgerMenu } from "react-icons/rx";
import useHandleSideBar from "../../Hooks/useHandleSideBar";
import { Link } from "react-router-dom";

const LogoSection = () => {
    const { handleToggleHamburger } = useHandleSideBar();

    return (
        <div className="flex gap-2 items-center cursor-pointer">
            <RxHamburgerMenu className="text-3xl" onClick={handleToggleHamburger} />
            <Link to="/"><Logo /></Link>
        </div>
    );
};

export default LogoSection;
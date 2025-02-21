import { Logo } from "../../UI/index";
import { RxHamburgerMenu } from "react-icons/rx";
import useHandleSideBar from "../../Hooks/useHandleSideBar";

const LogoSection = () => {
    const { handleToggleHamburger } = useHandleSideBar();

    return (
        <div className="flex gap-2 items-center">
            <RxHamburgerMenu className="text-3xl" onClick={handleToggleHamburger} />
            <Logo />
        </div>
    );
};

export default LogoSection;
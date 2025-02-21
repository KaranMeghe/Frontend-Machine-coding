import { Logo } from "../../UI/index";
import { RxHamburgerMenu } from "react-icons/rx";

const LogoSection = () => {
    return (
        <div className="flex gap-2 items-center">
            <RxHamburgerMenu className="text-3xl" />
            <Logo />
        </div>
    );
};

export default LogoSection;
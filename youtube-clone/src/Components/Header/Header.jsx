import { LogoSection, SearchBar, User } from "../index";

const Header = () => {
    return (
        <header className="flex justify-between">
            <LogoSection />
            <SearchBar />
            <User />
        </header>
    );
};

export default Header;
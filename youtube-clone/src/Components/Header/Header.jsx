import { LogoSection, SearchBar, User } from "../index";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <LogoSection />
            <SearchBar />
            <User />
        </header>
    );
};

export default Header;
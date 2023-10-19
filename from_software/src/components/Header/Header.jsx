import { TbSearch } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"

import "./Header.scss";

const Header = () => {
    return (
    <header className="main-header">
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>Categories</li>
            </ul>
            <div className="center">Elden ring guide</div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
            </div>
        </div>
    </header>
    );
};

export default Header;
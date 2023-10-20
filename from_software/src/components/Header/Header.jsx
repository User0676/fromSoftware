import { TbSearch } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"

import "./Header.scss";

const Header = () => {
    return (
    <header className="main-header">
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>Categories</li>
            </ul>
            <div className="center">BookStore</div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <CgShoppingCart />
            </div>
        </div>
    </header>
    );
};

export default Header;
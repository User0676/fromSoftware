import { TbSearch } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    return (
    <header className="main-header">
        <div className="header-content">
            <ul className="left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products/:id">Products</Link></li>
                <li><Link to="/barnes">Barnes</Link></li>
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
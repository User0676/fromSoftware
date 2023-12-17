import { useEffect, useState } from "react";

import { TbSearch } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"
import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";
import Search from "./Search/Search";

import "./Header.scss";
import React from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handleScroll = ()=>{
        const offset = window.scrollY
        if(offset>60){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    
    return (
        <>
            <header className={`main-header ${scrolled? 'sticky-header' : ''}` }>
                <div className="header-content">
                    <ul className="left">
                        <li><Link to="/" className="router-link">Home</Link></li>
                        <li><Link to="/category/1" className="router-link">Category</Link></li>
                    </ul>
                    <div className="center"><Link to="/" className="router-link">BookStore</Link></div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <span 
                            className="cart-icon" 
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {/* <span>5</span> */}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
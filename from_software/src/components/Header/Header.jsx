import { useEffect, useState } from "react";

import { TbSearch } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"

import Cart from "../Cart/Cart";

import "./Header.scss";
import React from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = ()=>{
        const offset = window.scrollY
        if(offset>200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    }, [])
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            <header className={`main-header ${scrolled? 'sticky-header' : ''}` }>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">BookStore</div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span 
                            className="cart-icon" 
                            onClick={()=>setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {/* <span>5</span> */}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
        </>
    );
};

export default Header;
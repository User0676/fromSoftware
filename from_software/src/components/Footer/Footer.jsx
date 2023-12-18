import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <hr></hr>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Here, in Bookstore you can purchase any book you want 
                        without any problems at a bargain price!
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contacts</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Ulica Tole bi, 59
                            050000/A05H1T2, Almaty
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: +7 777 777 77 77
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: bookstore@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={() => navigate("/category/1")}>Horrors</span>
                    <span className="text" onClick={() => navigate("/category/2")}>Science fiction</span>
                    <span className="text" onClick={() => navigate("/category/3")}>Mystery</span>
                    <span className="text" onClick={() => navigate("/category/4")}>Fantasy</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Contact Us</span>
                    <span className="text">Liked Books</span>
                    <span className="text">Cart</span>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            BOOKSTORE 2023 CREATED BY VISUAL STUDIO CODE, CODED BY FROMSOFTWARE.  
                        </div>
                        {/* <img src={Payment} /> */}
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
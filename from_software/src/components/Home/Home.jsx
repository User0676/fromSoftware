import "./Home.scss";
import { Link } from "react-router-dom";
//import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
    return (
        <div className="banner">
           <Link to="/barnes"> <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/09/27/27677_Quote_A1_DiscoverShortlistAnnouncement_09-27.jpg" alt="banner"></img></Link>

            <div className="main-content">

                <div className="layout">
                <Category/>
                <Products/>


                </div>
            </div>
        </div>
    );
};

export default Home;
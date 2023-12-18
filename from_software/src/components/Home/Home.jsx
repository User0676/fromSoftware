import { useEffect, useContext } from "react";
import "./Home.scss";

import { Link } from "react-router-dom";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {

    const {categories, setCategories, products, setProducts} = useContext(Context);

    useEffect(() => {
        getProducts();
        getCategories();
        // eslint-disable-next-line
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res)
            setProducts(res)
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res)
            setCategories(res)
        });
    };

    return (
        <div className="banner">
            <Link to="/barnes"> <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/09/27/27677_Quote_A1_DiscoverShortlistAnnouncement_09-27.jpg" alt="banner" className="banner"></img></Link>
            <div className="main-content">
                <div className="layout">
                    <div className="sec-heading">Categories</div>
                    <Category categories={categories} />
                    <div className="titles">
                        <span className="horrors">Horrors</span>
                        <span className="fantasy">Science fiction</span>
                        <span className="mystery">Mystery</span>
                        <span className="science">Fantasy</span>
                    </div>
                    <Products 
                        products={products} 
                        headingText="Popular Products"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
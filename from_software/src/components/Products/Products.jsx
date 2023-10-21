import "./Products.scss";
import Product from "./Product/Product";
import Product2 from "./Product/Product"

const Products = ({ innerPage }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">Products</div>}
            <div className="products">
                <Product />

            </div>
        </div>
    
    );
};

export default Products;
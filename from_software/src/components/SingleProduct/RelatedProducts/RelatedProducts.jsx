import React from "react";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
    return (
        <div className="related-products">
            <Products headingText="Related Products" products/>
        </div>
    );
};

export default RelatedProducts;
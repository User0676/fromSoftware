import "./Product.scss"
import ProductList from "./ProductList";



function Product({product}) {
  return (
    <div className="product-card">
        <div className="thumbnail">
        <img src={`/images/${product.image}`} alt={product.title} className="product-image"  />
        </div>
        <div className="prod-details">
          <span className="name">Product name</span>
          <span className="price"> 499 KZT</span>
        </div>
    </div>
  )
}


export default Product;

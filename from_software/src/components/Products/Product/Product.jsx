import "./Product.scss"
import ProductList from "./ProductList";



function Product({product}) {
  return (
    <div className="product-card">
        <div className="thumbnail">
          <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780374609870_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="book" className="product-image" />
        </div>
        <div className="prod-details">
          <span className="name">Product name</span>
          <span className="price"> 499 KZT</span>
        </div>
    </div>
  )
}


export default Product;

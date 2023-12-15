import { MdClose } from "react-icons/md";
import "./CartItem.scss";

const CartItem = () =>{
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780374609870_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">product name</span>
                    <MdClose className="close-bth" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span className="highlight">1234</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem
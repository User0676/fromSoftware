import { MdClose } from "react-icons/md";
import "./Search.scss"

const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input 
                    type="text" 
                    autoFocus
                    placeholder="Search for products"
                />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780374609870_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="desc">product description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
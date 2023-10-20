import Product from './Product';



const ProductData = [
    {id:1,title:'book1',price:'Author 1', image:'book1.jpg'},
    {id:2,title:'book2',price:'Author 2', image:'book2.jpg'},
    {id:3,title:'book3',price:'Author 3', image:'book3.jpg'},
    {id:4,title:'book4',price:'Author 4', image:'book4.jpg'},
    {id:5,title:'book5',price:'Author 5', image:'book5.jpg'},
    {id:6,title:'book6',price:'Author 6', image:'book6.jpg'},
    {id:7,title:'book7',price:'Author 7', image:'book7.jpg'},
    {id:8,title:'book8',price:'Author 8', image:'book8.jpg'},
];

function ProductList(){
    return(
        <div>
            {ProductData.map((Product)   => (
                <Product key = {Product.id} Product = {Product}/>)
            )
            }
        </div>
    );
}


export default ProductList;
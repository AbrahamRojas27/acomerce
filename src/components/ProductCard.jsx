import { useDispatch, useSelector } from "react-redux"
import AddCart from "./AddCart"
import { addProductToCart } from "../redux/productsSlice"

function ProductCard({image, id, price, title}){
    const addedToCart = useSelector(state => state.addedToCart)
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()

    const addTocart = (productId) =>{
        dispatch(addProductToCart(productId))
    }

    console.log(addedToCart)
    return(
        <div className="product-card">
            <div className="cart-container">
                <button onClick={() => addTocart(id)} className="cart-button">
                    <AddCart/>
                </button>
            </div>
            <figure className="product-card-img">
                <img src={image} alt="" />
            </figure>
            <div className="product-card-info">
                <h2 className="card-product-title">{title}</h2>
                <p className="card-product-price">{price}</p>
            </div>
        </div>
    )
}

export default ProductCard
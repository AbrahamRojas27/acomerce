import { useEffect } from "react"
import ProductCard from "./ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/productsSlice"

function ProductsContainer(){
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getProducts())
    }, [])

    return(
        <section>
            <div className="products-container">
                {
                    products.map(product =>(
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            image = {product.image}
                            title = {product.title}
                            price = {product.price}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ProductsContainer
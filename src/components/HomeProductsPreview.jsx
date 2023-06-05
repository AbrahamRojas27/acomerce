import { useEffect, useState } from "react"
import fetchApi from "../api/fetchApi"

const api = 'https://fakestoreapi.com/products/category/electronics'

function HomeProductsPreview(){
    const [products, setProducts] = useState([])
    useEffect(() =>{
        const fetchProducts = async () =>{
            const products = await fetchApi(api)
            setProducts(products)
        }

        fetchProducts()
    }, [])
    return(
        <section>
            <h2 className="home-title">OTHERS PRODUCTS</h2>
            <div className="home-products-preview"> 
                {
                    products.map(product =>(
                        <div className="home-product-card" key={product.id}>
                            <figure className="home-product-img">
                                <img src={product.image} alt={product.title} />
                            </figure>
                            <div>
                                <h3 className="home-product-title">{product.title}</h3>
                                <p className="home-product-price">{product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default HomeProductsPreview
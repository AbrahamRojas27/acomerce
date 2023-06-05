import { useEffect, useState } from "react"
import fetchApi from "../api/fetchApi"

const api = 'https://fakestoreapi.com/products?limit=10'

function FeaturedProducts(){
    const [products, setProducts] = useState([])
    useEffect(() =>{
        const fetchProducts = async () => {
            const products = await fetchApi(api)
            setProducts(products)
        }

        fetchProducts()
    }, [])


    return(
        <section className="featured-products-container">
            <h3 className="featured-products-title">FEATURED PRODUCTS</h3>
            <div className="featured-products-slider">
                <div className="featured-products">
                    {
                        products.map(product =>(
                            <div className="home-product-card" key={product.id}>
                                <figure className="home-product-img">
                                    <img src={product.image} alt={product.name} />
                                </figure>
                                <div>
                                    <h2 className="home-product-title">{product.title}</h2>
                                    <p className="home-product-price">{product.price}$</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts
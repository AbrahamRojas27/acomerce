import { useEffect, useState } from "react"
import fetchApi from "../api/fetchApi"
import img from '/assets/woman-3857758_1280-min.jpg'

const api = 'https://fakestoreapi.com/products/category/jewelery'

function ProductBanner(){
    const [products, setProducts] = useState([])

    useEffect(() =>{
        const fetchProducts = async() =>{
            const products = await fetchApi(api)
            setProducts(products)
        }
        fetchProducts()
    }, [])


    return(
        <section className="home-banner-container">
            <div className="product-banner">
                <div className="banner-text-container">
                    <p className="banner-title">The best in high quality products.</p>
                    <button>
                        see more
                    </button>
                </div>
                <div className="product-banner-jewelery-slider">
                    {
                        products.map(product =>(
                            <div key={product.id} className="product-banner-jewelery-slide">
                                <figure className="product-banner-jewelery-img">
                                    <img src={product.image} alt="" />
                                </figure>
                                <div className="product-banner-info">
                                    <p className="banner-product-title">{product.title}</p>
                                    <p className="banner-product-price">{product.price}$</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="product-banner">
                    <div className="banner-text-container">
                        <p className="banner-title">
                            You can find the best style here
                        </p>
                    </div>
                    <figure className="banner-img">
                        <img src={img} alt="banner" />
                    </figure>
            </div>
        </section>
    )
}

export default ProductBanner
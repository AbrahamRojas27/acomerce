import HomeHero from "../components/HomeHero"
import FeaturedProducts from "../components/FeaturedProducts"
import ProductBanner from "../components/ProductBanner"
import HomeProductsPreview from "../components/HomeProductsPreview"

function Home(){
    return(
        <div>
            <HomeHero/>
            <FeaturedProducts/>
            <ProductBanner/>
            <HomeProductsPreview/>
        </div>
    )
}

export default Home
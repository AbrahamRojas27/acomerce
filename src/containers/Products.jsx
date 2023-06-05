import ProductsFilter from "../components/ProducstFilter"
import ProductsContainer from "../components/ProductsContainer"

function Products(){
    return(
        <div className="products">
            <ProductsFilter/>
            <ProductsContainer/>
        </div>
    )
}

export default Products
import SearchIcon from "./SearchIcon"

function ProductsFilter(){
    return(
        <>
            <aside className="products-category">
                <p>Category</p>
                <button className="category-button">Electronics</button>
                <button className="category-button">Jewelery</button>
                <button className="category-button">Men's clothing</button>
                <button className="category-button">Women's clothing</button>
            </aside>

            <div>
                <div className="search-container">
                    <input className="input-search" type="text" name="search" placeholder="Search" />
                    <SearchIcon/>
                </div>

                <div className="product-category-mobile">
                    <button className="category-button">Electronics</button>
                    <button className="category-button">Jewelery</button>
                    <button className="category-button">Men's clothing</button>
                    <button className="category-button">Women's clothing</button>
                </div>
            </div>
            
        </>
    )
}

export default ProductsFilter
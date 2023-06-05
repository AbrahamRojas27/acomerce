function ShoppingCar(){
    return(
        <section className="shopping-car">
            <div className='product-list'>
                <div className="product-item">
                    <div className="product-item-content">
                        <figure className="product-img"> 
                            <img src="" alt="" />
                        </figure>

                        <div className="product-info">
                            <p>product</p>
                            <p>price</p>
                        </div>
                    </div>

                    <div className="product-quantity">
                        <button>+</button>
                        <p>cantidad</p>
                        <button>-</button>
                    </div>
                </div>
            </div>

            <div className="total-price-container">
                <div>
                    <p className="total-price-text">Total</p>
                    <p className="total-price">10$</p>
                </div>

                <button>
                    Chekout
                </button>
            </div>
        </section>
    )
}

export default ShoppingCar
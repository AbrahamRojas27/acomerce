function Payment(){
    return(
        <section className="order-sumary-container">
            <div className="order-summary">
                <h2>Order summary</h2>
                <div className="order-list">
                    <div className="order-item">
                        <p>item</p>
                        <span>10$</span>
                    </div>
                </div>
            </div>
            <button>Pago con Paypal</button>
        </section>
    )
}

export default Payment
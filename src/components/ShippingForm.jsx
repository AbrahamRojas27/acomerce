function ShippingForm(){
    return(
        <section className="shipping-information">
            <div className="shipping-form-container">
                <h2>Shipping information</h2>
                <div>
                    <form className="shipping-form" action="">
                        <input type="text" className="input-form" placeholder='Full name' name='full name'/>
                        <input type="text" className="input-form" placeholder='E-mail' name='e-mail'/>
                        <input type="text" className="input-form" placeholder='Address' name='address'/>
                        <input type="text" className="input-form" placeholder='Apto' name='apto'/>
                        <input type="text" className="input-form" placeholder='City' name='city'/>
                        <input type="text" className="input-form" placeholder='Country' name='country'/>
                        <input type="text" className="input-form" placeholder='State' name='state'/>
                        <input type="text" className="input-form" placeholder='Zip code' name='zp' />
                        <input type="text" className="input-form" placeholder='Phone' name='phone'/>
                    </form>
                </div>
            </div>

            <div className="order-list-container">
                <div className="order-list">
                    <div className="order-list-item">
                        <p>Item name</p>
                        <span>10$</span>
                    </div>
                </div>

                <div className="shipping-information-buttons">
                    <button>
                        Back
                    </button>

                    <button>
                        Next
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ShippingForm
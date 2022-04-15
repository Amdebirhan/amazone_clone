import React from 'react'
import './Checkout.css'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonGo/Engagment/Promotions/2022/Q1BreakfastPromo/AmazonGo_BreakfastPromo_WalletStripe_desktop_1500x200.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">
                        Your Shoping Basket
                    </h2>

                </div>
            </div>
            <div className="checkout__right">
                <h3>sub total</h3>
            </div>
        </div>
    )
}

export default Checkout
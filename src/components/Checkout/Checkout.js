import React from 'react'
import './Checkout.css'
import { useStateValue } from '../States/StateProvider';
import Subtotal from './components/Subtotal'
import CheckoutProduct from './components/CheckoutProduct';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonGo/Engagment/Promotions/2022/Q1BreakfastPromo/AmazonGo_BreakfastPromo_WalletStripe_desktop_1500x200.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">
                        Your Shoping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
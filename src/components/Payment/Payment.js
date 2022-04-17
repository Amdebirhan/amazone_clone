import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from '../Checkout/components/CheckoutProduct';
import { useStateValue } from '../States/StateProvider'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout(<Link to={'/checkout'} >{basket?.length} items</Link>)</h1>
                {/*payment section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>address</p>
                        <p>specific address</p>
                    </div>
                </div>
                {/*review section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Item and Delivery.</h3>
                        <div className="payment__items">
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
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__detail">
                        {/**strip api goes here */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Payment
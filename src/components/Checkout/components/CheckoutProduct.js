import React from 'react'
import { useStateValue } from '../../States/StateProvider';
import './CheckoutProduct.css'
function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //dispatch item to the data layer
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })


    }
    return (
        <div>
            <div className="checkout__components">
                <img className='checkout__image' src={image} alt="" />
                <div className='row__checkout__components'>
                    <h5 className='product__title'><strong>{title}</strong></h5>
                    <h5 className='product__price'><strong>${price}</strong></h5>
                    <h5 className='product__rating'>{Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}</h5>
                    <div className='remove__checkout'>
                        <button onClick={removeFromBasket}><strong>remove from basket</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
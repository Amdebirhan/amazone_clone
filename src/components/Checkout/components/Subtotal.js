import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../States/reducer';
import { useStateValue } from '../../States/StateProvider'
import { useHistory } from 'react-router-dom'
import './Subtotal.css'

function Subtotal() {
    const history = useHistory()
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" /> this order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')} >
                Procced to Checkout
            </button>
        </div>
    )
}

export default Subtotal
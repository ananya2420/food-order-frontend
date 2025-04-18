import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  
    const {getTotalCartAmount} = useContext(StoreContext)
  
  
    return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className="title">Food Delivery Information</p>

            <div className="multi-fields">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>

            </div>
            <input type="email" placeholder='Email address'/>
            <input type="text" placeholder='Street'/>
            <div className="multi-fields">
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='State'/>

            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Zip code'/>
                <input type="text" placeholder='Country'/>

            </div>
            <input type="text" placeholder='Phone'/>

        </div>
        <div className="place-order-right">

        </div>
        
        <div className="cart-total">
                    <h2>Cart totals</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()=== 0 ? 70 : 2}</p>

                    </div>
                    <div className="cart-total-details">
                        <p>Order free</p>
                        <p>${getTotalCartAmount()=== 0 ? 5 : 2}</p>

                    </div>
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>${getTotalCartAmount()=== 0 ? 75 : 2}</b>

                    </div>
                    <button>Proceed to Payment</button>
                </div>

    </form>
  )
}

export default PlaceOrder

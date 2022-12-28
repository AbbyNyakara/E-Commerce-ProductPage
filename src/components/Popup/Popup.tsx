import { useDispatch, useSelector } from 'react-redux';
import './popup.scss';
import {emptyCart} from '../../features/itemsSlice';
import thumbnail1 from '/images/image-product-1-thumbnail.jpg';
import { StyledButton } from '../../styled_components/Button';

const Popup = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.shopping.addCart);
  // const empty = useSelector((state: any) => state.shopping.emptyCart)

  let total = 125 * cartItems

  return (
    <div className='popup'>
      <div className="popup__top">
        <p>Cart</p>
      </div>
      <div className="popup__details">
        {
          cartItems ? 
          <div>
            <div className="popup__top">
              <img src={thumbnail1} alt="" className='popup__thumbnail'/>
              <div className="popup__pricing">
                <p>Fall Limited Edition Sneakers</p>
                <div className="items__purchased">
                  <p>$125.00 x {cartItems} = <span>{total}</span> </p> 
                  <img src="/images/icon-delete.svg" alt="" className='delete__icon' onClick={() => dispatch(emptyCart())}/>
                </div>
                <br />
              </div>
            </div>
            <StyledButton className='checkout__btn' onClick={() => dispatch(emptyCart())}>Checkout</StyledButton>
          </div>
          : 
          <p>Your cart is empty</p> 
        }
      </div>
    </div>
  )
}

export default Popup
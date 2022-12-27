import { useDispatch, useSelector } from 'react-redux';
import './popup.scss';
import {addCart, emptyCart} from '../../features/itemsSlice';
import thumbnail1 from '/images/image-product-1-thumbnail.jpg';
import deleteIcon from '/images/icon-delete.svg';

const Popup = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.shopping.addCart);

  let total = 125 * cartItems

  return (
    <div className='popup'>
      <div className="popup__top">
        <p>Cart</p>
      </div>
      <div className="popup__details">
        {
          cartItems ? 
          <div className="popup__top">
            <img src={thumbnail1} alt="" className='popup__thumbnail'/>
            <div className="div">
              <p>Fall Limited Edition Sneakers</p> 
              <p>$125.00 x {cartItems} = {total}</p> 
            </div>
          </div>
          : 
          <p>Your cart is empty</p> 
        }
      </div>
    </div>
  )
}

export default Popup
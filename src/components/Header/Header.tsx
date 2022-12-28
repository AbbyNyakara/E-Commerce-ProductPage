import './header.scss';
import { Avatar } from '../../styled_components/Avatar';
import { useSelector } from 'react-redux';
import { toggleCart} from '../../features/itemsSlice';
import { useDispatch } from 'react-redux';

const Header = () => {

  const { addCart } = useSelector((state: any) => state.shopping)

  const dispatch = useDispatch();

  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__logo">
          <p>sneakers</p>
        </div>
        <div className="header__links">
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      
      <div className="header__profile">
        <img src="/images/icon-cart.svg" alt="" className='cart' onClick={() => dispatch(toggleCart())}/>
        {
          addCart ? <small className='cart__number'>{addCart}</small> : ""
        }
        <Avatar src='images/image-avatar.png' className='avatar' />
      </div>
    </div>
  )
}

export default Header
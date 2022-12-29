import './header.scss';
import { Avatar } from '../../styled_components/Avatar';
import { useSelector } from 'react-redux';
import { toggleCart, toggleMenu} from '../../features/itemsSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const { addCart } = useSelector((state: any) => state.shopping);
  const dispatch = useDispatch();
  const { menu } = useSelector((state: any) => state.shopping)

  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__logo">
          <p>sneakers</p>
        </div>
        <div className="header__links" id={menu ? "showMenu" : ""}>
          {/* why is this not working?? */}
          <img src="/images/icon-close.svg" alt="" className='close__menu' onClick={() => dispatch(toggleMenu())}/>
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="navbar__desktop">
          <img src="/images/icon-menu.svg" alt=""  onClick={() => dispatch(toggleMenu())}/>
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
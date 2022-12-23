import React, { useState } from 'react'
import './header.scss';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Avatar } from '../../styled_components/Avatar';

const Header = () => {

  const [cart, setCart] = useState(false);

  const toggleCart = () => {
    setCart(!cart)
  }

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
        {/* <AiOutlineShoppingCart /> */}
        <img src="/images/icon-cart.svg" alt="" className='cart' onClick={toggleCart}/>
        <Avatar src='images/image-avatar.png' className='avatar' />
      </div>
    </div>
  )
}

export default Header
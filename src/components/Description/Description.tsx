import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../../styled_components/Button';
import { store } from '../../features/store';
import itemsReducer, { increment, decrement } from '../../features/itemsSlice';
import './description.scss'


const Description = () => {

  // Read the state.
  // const value = useSelector((state: any) => state.shopping.value)
  const {value} = useSelector((state: any) => state.shopping);

  // The dispatch is what will dispatch the action
  const dispatch = useDispatch()

  return (
    <div className='description'>
      <h2 className='description__title'>sneaker company</h2>
      <p className='description__heading'>fall limited edition <br /> sneakers</p>
      <p className='description__item-description'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything 
        the weather can offer
      </p>
      <div className="description__pricing">
        <p className='description__pricing-discounted'>$125.00 <span>50%</span> </p>
        <p className='description__pricing-original'>$250.00</p>
      </div>
      <div className="description__add-items">
        {/* Add the actions */}
        <div className="add">
          <button className='description__subtract-button' onClick={() => dispatch(decrement())}>-</button>
          <button className='description__number-added'>{value}</button>
          <button className='description__add-buttondescription__add-button' onClick={() => dispatch(increment())}>+</button>
        </div>
        
        <StyledButton className='add-to-cart'>
          <img src="/images/icon-cart.svg" alt="" />
          Add to cart
        </StyledButton>
      </div>
    </div>
  )
}

export default Description
import './popup.scss';

const Popup = () => {

  return (
    <div className='popup'>
      <div className="popup__top">
        <p>Cart</p>
      </div>
      <div className="popup__details">
        <p>Your cart is empty</p>
      </div>
    </div>
  )
}

export default Popup
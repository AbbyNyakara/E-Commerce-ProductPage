import { useState } from 'react';
import './photoDisplay.scss';
import img1 from '/images/image-product-1.jpg';
import img2 from '/images/image-product-2.jpg';
import img3 from '/images/image-product-3.jpg';
import img4 from '/images/image-product-4.jpg';
import thumbnail1 from '/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '/images/image-product-4-thumbnail.jpg';

const PhotoDisplay = () => {
  const [ image, setImage ] = useState(img1);
  const [ active, setActive ] = useState(false)

  const toggleImg = (mainImg: any) => {
    setImage(mainImg)
    setActive(!active)
  }

  return (
    <div className='photo-display'>
      <div className="photo-display__main-img">
        <img src={image} alt="" />
      </div>
      <div className="photo-display__small-img">
        <img src={thumbnail1} alt="image-thumbnail" onClick={() => toggleImg(img1)} /> 
        <img src={thumbnail2} alt="image-thumbnail" onClick={() => toggleImg(img2)} />
        <img src={thumbnail3} alt="image-thumbnail" onClick={() => toggleImg(img3)} />
        <img src={thumbnail4} alt="image-thumbnail" onClick={() => toggleImg(img4)} />
      </div>
    </div>
  )
}

export default PhotoDisplay

import './photoDisplay.scss';
import img1 from '/images/image-product-1.jpg';
import img2 from '/images/image-product-2.jpg';
import img3 from '/images/image-product-3.jpg';
import img4 from '/images/image-product-4.jpg';
import thumbnail1 from '/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '/images/image-product-4-thumbnail.jpg';

// @ts-ignore
import Data from './photos.js';


const PhotoDisplay = () => {
  return (
    <div className='photo-display'>
      {
        Data.map((photo: any, index: number) => {
          return(
            <div className="img__display" key={index}>
              <div className="photo-display__main-img">
                <img src={photo.img} alt="" />
              </div>
              <div className="photo-display__small-img">
                <img src={photo.thumbnail} className='photo-display__thumbnail-img' alt="image-thumbnail" />
              </div>  
            </div>
          )
        })
      }
    </div>
  )
}

export default PhotoDisplay
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
  return (
    <div className='photo-display'>
      <div className="photo-display__main-img">
        <img src={img1} alt="" />
      </div>
      <div className="photo-display__small-img">
        <img src={thumbnail1} className='photo-display__thumbnail-img' alt="image-thumbnail" />
        <img src={thumbnail2} className='photo-display__thumbnail-img' alt="image-thumbnail" />
        <img src={thumbnail3} className='photo-display__thumbnail-img' alt="image-thumbnail" />
        <img src={thumbnail4} className='photo-display__thumbnail-img' alt="image-thumbnail" />
      </div>
    </div>
  )
}

export default PhotoDisplay
import React from 'react'
import './Gallery.css'
import gallery_1 from '../Navbar/assets/gallery.png'
import gallery_2 from '../Navbar/assets/gallery1.png'
import gallery_3 from '../Navbar/assets/gallery2.png'
function Gallery() {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Our Campus Moments</h2>
      <div className="gallery-photos">
        <img src={gallery_2}alt="Campus 1" />
        <img src={gallery_1 } alt="Campus 2" />
        <img src={gallery_3} alt="Campus 3" />
       
      </div>
       <button className='gbtn'> see more </button>
    </div>
  );
}

export default Gallery;
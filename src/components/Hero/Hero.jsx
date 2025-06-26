import React from 'react'
import './Hero.css';
import back3  from '../Navbar/assets/back3.png'

function Hero() {
  return (
    <div className="Hero">
       <div className="hero-text"> 
        <h1>we ensure better education for a better world</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ipsam fuga consectetur libero, omnis sequi molestiae earum, autem ipsum sint corrupti tenetur sapiente consequatur nobis. Laudantium officia natus aspernatur odio! Modi ea ab neque suscipit autem error eveniet unde aliquid, obcaecati aperiam rem illum? Illum corporis sit excepturi. Esse.
        <button className='btn'>explore more <img src="back3" alt="" /></button>
        
        </div> 
    </div>
  );
}

export default Hero;
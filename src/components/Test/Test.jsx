import React, { useRef } from 'react'
import './Test.css'
import next_icon1 from '../Navbar/assets/test.png'
import next_icon2 from '../Navbar/assets/test1.png'
import user_1 from '../Navbar/assets/test2.png'
import user_2 from '../Navbar/assets/test3.png'
import user_3 from '../Navbar/assets/test4.png'
import user_4 from '../Navbar/assets/test5.png'
function Test() {

    const slider = useRef();
    const tx = useRef(0);

  const slideForward=()=>{
   
    if(tx.current>-50){
      tx.current -=25;
    }
    slider.current.style.transform=`translateX(${tx.current}%)`;
  }
  const slideBackward=()=>{
   
    if(tx.current<0){
      tx.current +=25;
    }
    slider.current.style.transform=`translateX(${tx.current}%)`;
  }
  return (
    <div className='testimonials'>
      <h4>Testimonials</h4>
      <h1>what student says</h1>
        <img src={next_icon1} alt=""  className="next-btn" onClick={slideForward}/>
        <img src={next_icon2} alt=""  className="back-btn" onClick={slideBackward}/>
       <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt="" /> 
              
              <h3>william jackson</h3>
               </div>
              <span>Edusty,USA</span>
               
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odio minima, facilis nam voluptates alias temporibus recusandae autem tempore! Nisi porro adipisci, eligendi qui accusantium delectus consequatur neque facere blanditiis, minus aliquid harum eum perferendis atque excepturi alias reiciendis culpa laudantium voluptatum rerum nulla illo architecto molestiae nesciunt. Vitae, illum?</p>
            
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt="" /> 
           
              <h3>william jackson</h3>   </div>
              <span>Edusty,USA</span>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odio minima, facilis nam voluptates alias temporibus recusandae autem tempore! Nisi porro adipisci, eligendi qui accusantium delectus consequatur neque facere blanditiis, minus aliquid harum eum perferendis atque excepturi alias reiciendis culpa laudantium voluptatum rerum nulla illo architecto molestiae nesciunt. Vitae, illum?</p>
              
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt="" /> 
             
              <h3>william jackson</h3>    </div>
              <span>Edusty,USA</span>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odio minima, facilis nam voluptates alias temporibus recusandae autem tempore! Nisi porro adipisci, eligendi qui accusantium delectus consequatur neque facere blanditiis, minus aliquid harum eum perferendis atque excepturi alias reiciendis culpa laudantium voluptatum rerum nulla illo architecto molestiae nesciunt. Vitae, illum?</p>
           
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt="" /> 
              
              <h3>william jackson</h3></div>
              <span>Edusty,USA</span>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odio minima, facilis nam voluptates alias temporibus recusandae autem tempore! Nisi porro adipisci, eligendi qui accusantium delectus consequatur neque facere blanditiis, minus aliquid harum eum perferendis atque excepturi alias reiciendis culpa laudantium voluptatum rerum nulla illo architecto molestiae nesciunt. Vitae, illum?</p>
              
            </div>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default Test;
import React from 'react'
import './Program.css'
import program_1 from '../Navbar/assets/program1.png'
import program_2 from '../Navbar/assets/program2.png'
import program_3 from '../Navbar/assets/program3.png'
import program_icon_1 from '../Navbar/assets/degree.png'
import program_icon_2 from '../Navbar/assets/degree2.png'
import program_icon_3 from '../Navbar/assets/degree3.png'

function programs() {
  return (
    <div className='programs'>
      <div className='program'> 
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>

        </div>
         <div className='program'> 
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
        </div>
         <div className='program'> 
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Degree</p>
        </div>
        </div>
     
    </div>
  )
}

export default programs
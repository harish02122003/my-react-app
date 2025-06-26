import React from 'react'
import './About.css'
import about_img from '../Navbar/assets/about.png'
import play_icon from '../Navbar/assets/about1.png'
function About() {
  return (
    <div className="about">
      <img src={about_img} alt="About" className="about-img" />
      <div className="content">
        <h3>ABOUT UNIVERSITY</h3>
        <p>This is some text content placed next to the image. You can describe the image or Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nihil laboriosam sed corrupti natus beatae facere ratione? Similique maiores praesentium consequatur fugiat facilis dolorem aperiam dignissimos adipisci. Sequi inventore repellendus, debitis repellat eius omnis iste magni accusantium temporibus soluta iure sapiente dolorem iusto vitae error recusandae ad? Quaerat temporibus itaque assumenda ad velit, suscipit nihil nam laborum, illum tempora inventore exercitationem pariatur. Voluptatibus tempore earum, doloribus eligendi ratione eius. Libero repellat laborum esse iure velit possimus eaque in quo officia ducimus eius optio placeat, officiis earum assumenda consequatur recusandae error odit. Tenetur vitae quod ad incidunt fuga? Rem, cumque impedit.100
           provide related information Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam, delectus distinctio labore soluta, iure nesciunt temporibus, non culpa reiciendis pariatur blanditiis eveniet? Quia explicabo, dignissimos tempora ullam nesciunt doloribus. Deleniti inventore ab iste nostrum nesciunt rem quia nam consectetur quasi exercitationem possimus ducimus unde totam,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius rem perferendis omnis maxime beatae accusamus reiciendis, alias cupiditate fugit consequuntur eum ut ipsa nulla quisquam consectetur molestias quo est quidem velit quis nemo? Reprehenderit velit quo debitis perferendis deleniti fugit commodi repudiandae, accusantium dolores aliquid et, architecto quasi. Odio temporibus veritatis debitis necessitatibus accusamus at nisi quae ullam corporis sunt? praesentium itaque libero odit?here.</p>
      </div>
    </div>
  );
}

export default About;
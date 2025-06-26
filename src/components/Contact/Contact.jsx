import React from 'react'
import './Contact.css'
import mg_icon from '../Navbar/assets/contact.png'
import mail_icon from '../Navbar/assets/mail.png'
import call1 from '../Navbar/assets/call.png'
import loca from '../Navbar/assets/location.png'
function Contact() {
const [result, setResult] = React.useState("");

 const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f737e5ee-fc66-4fb0-873f-e31a1c62e653");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    
    <div className='contact'>
        <h4>Contact</h4>
        <h1>Get in touch</h1>
        <div className='contact-col'>
            <h3>Send a message <img src={mg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga iste tempora perspiciatis voluptate consequuntur adipisci earum vero qui ab totam facilis excepturi. Voluptatibus, quo laborum! Fugit nostrum qui incidunt harum vitae veritatis commodi! Nulla unde nobis harum autem. Cumque veritatis architecto obcaecati ipsum rem sunt ratione odit dolor eos.</p>
              <ul>
                
                <li><img src={mail_icon} alt="" />hariscoep95y842@gmail.com</li>
                <li><img src={call1} alt="" />34873274</li>
                <li><img src={loca} alt="" />23,dlfa,foof,ofhw</li>
              </ul>
              </div>
              <div className='contact-col'>
                <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label htmlFor="">Write your mesages here</label>
                <textarea name="message"  rows='6' placeholder='enter your msg' required></textarea>
              <button type='submit' className='dark-btn'> SUBMIT</button>
              </form>
              <span>{result}</span>
              </div>
    </div>
  )
}

export default Contact
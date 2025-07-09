import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import bg from "../../assets/img/contact-background.webp"
import bg2 from "../../assets/img/contact-background2.jpg"
import github from "../../assets/icons/Github_icon.png"
import ig from "../../assets/icons/Instagram_icon_black.png"


const Contact = ({lightMode, setIsVisible, setNotification}) => {

  const form = useRef();
  const [sending, setSending] = useState();

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
      setNotification(null);
    }, 5000);
  };

  const sendEmail = (e) => {
    setSending(true);

    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(
      (result) => {
        showNotification("success", "Email sent successfully!");
        form.current.reset();
        setSending(false)
      },
      (error) => {
        showNotification("error", "Something went wrong during sending email.");
        setSending(false)
        
        console.error('EmailJS error:', error.text);
      }
    );
  };

  return (
    <div className={`container ${lightMode ? 'light' : 'dark'}`} id='Contact'>
      <h1>Contact</h1>
      <div className="flex">
        <form ref={form} onSubmit={sendEmail}>
          <h3>Send an email !</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required />
          {sending ? 
            <button type="submit" disabled>
                <div className="spinner"></div>
            </button>
            :
            <button type="submit">
                "Send"
            </button>  
          }
        </form>
        <div className="right">
          <div className="item">
            <img src={bg} alt="first decorative image" />
          </div>
          <div className="item">
            <h3>Get in Touch</h3>
          </div>
          <div className="item">
            <span className="material-symbols-outlined icon">email</span>
            <p>Email<br/> mazurek321.93@wp.pl</p>
          </div>
          <div className="item">
              <img src={github} className='github icon'/>
              <p>Github<br/>mazurek321</p>
          </div>
          <div className="item">
            <img src={ig} className='instagram icon'/>
            <p>Instagram<br/>_bartekmazurkiewicz</p>
          </div>
          <div className="item">
            <img src={bg2} alt="second decorative image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import bg from "../../assets/img/contact-background.webp"
import bg2 from "../../assets/img/contact-background2.jpg"
import github from "../../assets/icons/Github_icon.png"
// import ig from "../../assets/icons/Instagram_icon_black.png"
import li from "../../assets/icons/li_black.png"
import useInView from '../../hooks/useInView';



const Contact = ({lightMode, setIsVisible, setNotification}) => {
  const [formRef, formVisible] = useInView(); 
  const [caffelsRef, caffelsVisible] = useInView(); 

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
    <div className={`container ${lightMode ? '' : 'dark'}`} id='Contact'
      ref={(el) => {
        formRef.current = el;
        caffelsRef.current = el;
      }}
    >
      <h1>Contact</h1>
      <div className='flex'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`${formVisible ? 'visible' : ''}`}
        >
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
                Send
            </button>  
          }
        </form>
        <div className={`right ${caffelsVisible ? 'visible' : ''}`}>
          <div className="item">
            <img loading="lazy" src={bg} alt="first decorative image" />
          </div>
          <div className="item">
            <h3>Get in Touch</h3>
          </div>
          <div className="item">
            <span className="material-symbols-outlined icon">email</span>
            <p>Email<br/> mazurek321.93@wp.pl</p>
          </div>
          <a href='https://github.com/mazurek321' className="item" target='_blank'>
              <img loading="lazy" src={github} className='github icon'/>
              <p>GitHub<br/>mazurek321</p>
          </a>
          <a href='https://www.linkedin.com/in/mazurek321/' className="item" target='_blank'>
            <img loading="lazy" src={li} className='linkedin icon'/>
            <p>LinkedIn<br/>mazurek321</p>
          </a>
          <div className="item">
            <img loading="lazy" src={bg2} alt="second decorative image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from "@emailjs/browser";
import "./Contact.css"

interface FormData {
  email: string;
  message: string;
  honeypot: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({ email: "", message: "", honeypot: "" });
    const [status, setStatus] = useState<{ type: "success" | "error" | null; text: string }>({
      type: null,
      text: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanEmail || !cleanMessage) {
      setStatus({ type: "error", text: "Wszystkie pola są wymagane." });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, text: "" }); 

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    const templateParams = {
      email: cleanEmail,
      message: cleanMessage,
      to_name: "Portfolio",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus({ type: "success", text: "Wiadomość została wysłana!" });
        setFormData({ email: "", message: "", honeypot: "" });
      })
      .catch(() => {
        setStatus({ type: "error", text: "Wystąpił błąd, spróbuj ponownie." });
      })
      .finally(() => {
        setIsLoading(false); 
        
        setTimeout(() => setStatus({ type: null, text: "" }), 5000);
      }); 
  };

  return (
    <section className="contact-section" id="contact-section">
      <h1 className='skills-title'>Kontakt</h1>
      
      <div className="contact-container">
        <div className="contact-form-card">
          <h2>Wyślij e-mail !</h2>
          <form className="contact-form" onSubmit={handleManualSubmit}>
            <input 
              type="text" 
              name="honeypot" 
              style={{ display: 'none' }} 
              value={formData.honeypot} 
              onChange={handleChange} 
            />
            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Twój e-mail" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <textarea 
                name="message" 
                placeholder="Wiadomość" 
                rows={6} 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? "Wysyłanie..." : "WYŚLIJ"}
            </button>
            {status.text && (
              <p className={`status-message ${status.type}`}>{status.text}</p>
            )}
          </form>
        </div>

        <div className="contact-bento-grid">
          <div className="bento-card image-card">
            <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600" alt="Code"/>
          </div>
          <div className="bento-card title-card">
            <h3>Skontaktuj się</h3>
          </div>
          <div className="bento-card info-card">
            <div className="orange-icon"><FaEnvelope /></div>
            <span className="label">Email</span>
            <span className="value">mazurek321.93@wp.pl</span>
          </div>
          <div className="bento-card info-card">
            <div className="orange-icon"><FaGithub /></div>
            <span className="label">GitHub</span>
            <span className="value">mazurek321</span>
          </div>
          <div className="bento-card info-card">
            <div className="orange-icon"><FaLinkedin /></div>
            <span className="label">LinkedIn</span>
            <span className="value">mazurek321</span>
          </div>
          <div className="bento-card image-card">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600" alt="Earth"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
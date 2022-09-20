import React from 'react'
import { Codepen, GitHub, Mail } from 'react-feather'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-link">
        <a href="https://github.com/mperezpizarro">
          <GitHub />
        </a>
      </div>
      <div className="contact-link">
        <a href="mailto:marioperezpizarro@gmail.com?subject=Contacto%20portfolio">
          <Mail />
        </a>
      </div>
      <div className="contact-link">
        <a href="https://codepen.io/mperezpizarro">
          <Codepen />
        </a>
      </div>
    </div>
  )
}

export default Contact
import React from 'react';
import phoneImage from '../../assets/contact.png';

const ContactScreen = () => {
  return (
    <div>
      <img src={phoneImage} alt='contact us' />
      <h2> Contact Us</h2>
      <article>
        <h4>Contact us Today!</h4>
        <p>(555) 555-5555</p>
      </article>
    </div>
  )
}

export default ContactScreen;
import React from 'react';
import './contact.css';

export default function Contact() {
    return (
        <div>
            <div className='contact-header-div'>
                <h1 className='contact-intro-header'>Contact Me</h1>

                <div className="contact-sections-container">
                    <div className="contact-section">
                        <h2 className='contact-contact-title'>
                            <a className="contactLink" href="https://www.linkedin.com/in/logan-watkins-b69531128/">LinkedIn</a>
                        </h2>
                    </div>
                    <div className="contact-section">
                        <h2 className='contact-contact-title'>
                            <a className="contactLink" href="https://github.com/lowat/">GitHub</a>
                        </h2>
                    </div>
                    <div className="contact-section">
                        <h2 className='contact-contact-title'>
                            <a className="contactLink" href="mailto:lw2014wa@gmail.com">Email</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

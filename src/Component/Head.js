import React from 'react';
import vidio from '../Component/Vidio/1692838271862179.MP4'

import insta from './Icons/instagram.png';
import social from './Icons/github.png';
import mail from './Icons/mail.png';

const Head = () => {
  return (
        <div className="video-container">

            <div className='head-bl'>
                <h1>I'm Front-End Web Developer</h1>
                <p>Development, innovation, and creative solutions - that's my world. As a Front-end web developer, I offer you the keys to creating unique and interactive websites. Ready to bring your ideas to life? Let's embark on this exciting journey, click 'Get Started'.</p>
                <button>Get Start</button>
                <div className="icons-bl">
                  <img src={insta} alt="Instagram" className="icon" />
                  <img src={social} alt="GitHub" className="icon" />
                  <img src={mail} alt="Mail" className="icon" />
                </div>
            </div>

            <video autoPlay muted loop playsInline disablePictureInPicture disableRemotePlayback>
            <source src={vidio} type="video/mp4" />
            </video>
        </div>
  );
};

export default Head;
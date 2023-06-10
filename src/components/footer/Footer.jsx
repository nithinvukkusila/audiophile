import { socialMedia } from '../../data';
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <h1>audiophile</h1>
      <div className="nav-menu">
        <div>home</div>
        <div>headphones</div>
        <div>speakers</div>
        <div>earphones</div>
      </div>
      <p className='about-company'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
     <p className='copyright'>
     Copyright 2023. All Rights Reserved
     </p>
     <div className='social-media'>
        { socialMedia.map((media) => {
            return <div key={media.id} className="icon">
                <img src={media.icon} />
            </div>
        }) }
     </div>
    </div>
  );
};

export default Footer;

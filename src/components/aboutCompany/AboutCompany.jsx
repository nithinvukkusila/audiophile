import image1 from '../../assets/shared/desktop/image-best-gear.jpg'
import './AboutCompany.scss'
const AboutCompany = () => {
    return(
     <div className="about-company">
        <img src={image1} alt='person with head phones' />
        <h2 className='quote'>
        Bringing you the <span>best</span> audio gear
        </h2>
        <p className='content'>
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. 
        </p>
     </div>
    )
}

export default AboutCompany
import PrimaryButton from "../primaryButton/PrimaryButton";
import "./PopularProduct.scss";
import product1 from '../../assets/home/mobile/image-speaker-zx9.png'
import product2 from '../../assets/home/mobile/image-speaker-zx7.jpg'
import product3 from '../../assets/home/mobile/image-earphones-yx1.jpg'

const PopularProduct = () => {
  return (
    <div className="popular-products">
      <div className="product1">
        <div className="product-image" >
           <img  src={product1} />
        </div>
        <h1 className="product-name">zx9 speaker</h1>
        <p className="about-product">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <PrimaryButton color="white" bgColor="black" />
      </div>
      <div className="product2">
        <img src={product2} />
        <div className="about-product">
        <h1 className="product-name">zx7 speaker</h1>
        <PrimaryButton color='black' bgColor='transparent' border="1px solid black"/>
        </div>
      </div>
      <div className="product3">
        <img src={product3}/>
        <div className="about-product">
          <h1 className="product-name"> yx1 earphones </h1>
          <PrimaryButton color='black' border='1px solid black' bgColor='transparent' />
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;

import AboutCompany from '../../components/aboutCompany/AboutCompany';
import Categories from '../../components/categories/categories';
import PopularProduct from '../../components/popularProducts/PopularProduct';
import PrimaryButton from '../../components/primaryButton/PrimaryButton';
import './LandingPage.scss'
const LandingPage = () => {
  return (
   <>
    <div className="landing-page">
      <div className="new-product">
        <p className='title'>new launch</p>
        <h1 className='product-name'> XX99 Mark II HeadphoneS </h1>
        <p className='about-new-product'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
            <PrimaryButton/>
      </div>
    </div>
    <Categories/>
    <PopularProduct />
    <AboutCompany/>
    </>
  );
};

export default LandingPage;

import './Header.scss'
import cart from '../../assets/cart.png'
const Header = () => {
    return(
        <div className='header'>
            <div className='menu-icon'>
                <div className='hamburger-menu'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
            <div className='company-logo'>
                audiophile
            </div>
            <div className='cart'>
                <img src={cart} alt="cart" />
            </div>
        </div>
    )
}

export default Header
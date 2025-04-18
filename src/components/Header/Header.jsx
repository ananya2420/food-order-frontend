import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order now!</h2>
        <p>Look at some items that might suit your taste.</p>
        <a href="#explore-menu" className='button-link'>
          <button className='buttonwl'>View Menu</button>
        </a>
        <img className='header-img' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header;



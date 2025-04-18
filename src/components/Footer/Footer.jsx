import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {

    return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.add_icon_green} alt="" />
                <p>This website is just for my portfolio.</p>
                <div className="footer-social-icon">
                    <img src={assets.basket_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

    


            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Order</li>
                    <li>Private Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>01232301023012030</li>
                    <li>support@Gourab.com</li>
                </ul>

            </div>

        </div>
        <hr />
        <p className="copyright">Copyright 2024 © Gourab.com - All rights reserved.</p>
      
    </div>
  )
}

export default Footer

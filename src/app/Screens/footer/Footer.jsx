import './Footer.scss'
import Logo from '../../../Assets/Images/Nexahive.png'
const Footer = () => {
    return(
        <section className="footer">
            <div className="first-footer">
                <div className="top-footer">
                    <div className="footer__img--container">
                        <img src={Logo} alt="" className='footer__img' />
                </div>
                <p>xx, Niger Road, Ilorin, Kwara State, Nigeria.</p>
            </div>
            <div className="bottom-footer">
                <div className="footer-category">
                    <div className="title">
                        <h2>Product</h2>
                        <>
                            <li>Featured</li>
                            <li>Technology</li>
                            <li>Performance & Rating</li>
                            <li>Quality Management</li>
                        </>
                    </div>
                </div>
                <div className="footer-category">
                    <div className="title">
                        <h2>Support</h2>
                        <>
                            <li>Help Center</li>
                            <li>Ticket Support</li>
                            <li>Contact Us</li>
                            <li>Community</li>
                        </>
                    </div>
                </div>
                <div className="footer-category">
                    <div className="title">
                        <h2>Company</h2>
                        <>
                            <li>About Us</li>
                            <li>Leadership</li>
                            <li>Careers</li>
                            <li>News & Article</li>
                            <li>Partner</li>
                        </>
                    </div>
                </div>
                <div className="footer-category">
                    <div className="title">
                        <h2>Legal</h2>
                        <>
                            <li>Term of use</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </>
                    </div>
                </div>
            </div>
            </div>
            <hr/>
            <div className="last-footer">
                <>
                    <p>Copyright 2022 Newtonian's Solution, All right reserved.</p>
                </>
            </div>
            
        </section>
    )
}
export default Footer;
import React from "react";
import "./Footer.css";
const Footer = () => {

    return(
        <>
        <footer className="footer">
            <div className="footer__container container">

                <ul className="footer__list">
                    <li>
                        <a href="#about"
                         className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                </ul>
                <div className="footer__social">
                        <a href="https://www.facebook.com/mari.guchmazashvili.5" className='footer__social-link' target="_blank">
                            <i class="bx bxl-facebook"></i> 

                        </a>

                        <a href="https://www.linkedin.com/in/mariam-guchmazashvili-4b127b222/" className='footer__social-link' target="_blank">
                            <i class="bx bxl-linkedin"></i>
                        </a>

                        <a href="https://github.com/guchmazashvilimm" className='footer__social-link' target="_blank">
                            <i class="bx bxl-github"></i>
                        </a>
                </div>

                <span className="footer__copy"><b>Thank You For Your Time</b> <br></br>
                <small>Guchmazashvili Mariami.2023</small></span>
               

            </div>
        </footer>

        </>
    )
}
export default Footer;

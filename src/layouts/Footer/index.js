import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const Footer = () => {
  return (
    <div className="page-footer">
      <div className="footer content">
        <div className="w footerV1">
          <div className="footer-v1-content row flex-md-nowrap">
            <div className="col-md-6 col-sm-12 col-xs-12 mobile-toggle address-v3">
                <div>
                  <p className="details-v3 mb-3">
                    ©2022 LAMPLIGHT FARMS INC. All Rights Reserved.
                  </p>
                  <p className="list_page mb-3">
                    <Link href="" title="Privacy Notice">
                      Privacy
                    </Link>
                    <span tabIndex={-1}>&nbsp;|&nbsp;</span>
                    <Link href="" title="Terms of Use">
                      Terms of Use
                    </Link>
                    <span tabIndex={-1}>&nbsp;|&nbsp;</span>
                    <Link href="" title="Accessibility">
                      Accessibility
                    </Link>
                    <span tabIndex={-1}>&nbsp;|&nbsp;</span>
                    <Link href="" aria-label="California Transparency in Supply Chains Act Disclosure - CTCSA Disclosure" title="California Transparency in Supply Chains Act Disclosure - CTCSA">
                      CTCSA Disclosure
                    </Link>
                    <span tabIndex={-1}>&nbsp;|&nbsp;</span>
                    <Link href="" aria-label="California Consumer Privacy Act - CCPA" title="California Consumer Privacy Act - CCPA">
                      CCPA
                    </Link>
                  </p>
                  <div className="mg-mobile">
                    <Link href="" className="social-icons si-colored si-facebook" aria-label="TIKI Facebook" title="TIKI Facebook" target="_blank">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                    <Link href="" className="social-icons si-colored si-instagram" aria-label="TIKI Instagram" title="TIKI Instagram" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="" className="social-icons si-colored si-pinterest" aria-label="TIKI Pinterest" title="TIKI Pinterest" target="_blank">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </Link>
                  </div>
                  <p className="list_hashTag mb-3">
                    <span className="mr-3" aria-label="hashtag Tiki Brand">
                      #TIKIBrand
                    </span>
                    <span className="mr-3" aria-label="hashtag Tiki Fire Pit">
                      #TIKIFirePit
                    </span>
                  </p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mobile-toggle">
              <ul className="footer-v3-list">
                <li className="mb-2"><Link href="" aria-label="About Us" title="About Us" className="color-tiki-red">ABOUT US</Link></li>
                <li className="mb-2"><Link href="" target="_blank" title="Careers" className="color-tiki-red">CAREERS</Link></li>
                <li className="mb-2"><Link href="" aria-label="Contact Us" title="Contact Us" className="color-tiki-red">CONTACT US</Link></li>
                <li className="mb-2"><Link href="" title="Press Room" className="color-tiki-red">PRESS ROOM</Link></li>
                <li className="mb-2"><Link href="" target="_blank" title="SUBMIT A PRODUCT IDEA" className="color-tiki-red">SUBMIT A PRODUCT IDEA</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mobile-toggle">
              <ul className="footer-v3-list">
                <li className="mb-2"><Link href="" title="Customer Service" className="color-tiki-red">CUSTOMER SERVICE</Link></li>
                <li className="mb-2"><Link href="" title="Email Sign-Up" className="color-tiki-red">EMAIL SIGN-UP</Link></li>
                <li className="mb-2"><Link href="" title="Usage & Instructions" className="color-tiki-red">USAGE &amp; INSTRUCTIONS</Link></li>
                <li className="mb-2"><Link href="" title="Our Guarantee" className="color-tiki-red">OUR GUARANTEE</Link></li>
                <li className="mb-2"><Link href="" title="Subscriptions & Discounts" className="color-tiki-red">SUBSCRIPTIONS &amp; OFFERS</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

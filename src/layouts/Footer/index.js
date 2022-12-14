import React from "react";
import { Link } from "react-router-dom";
import ig from "../../assects/images/ig.PNG"
import "./styles.scss";

import { useEffect } from "react";
const Footer = () => {
  const list1 = ["ABOUT US", "CAREERS", "CONTACT US", "PRESS ROOM", "FAQS"]
  const list2 = ["CUSTOMER SERVICE", "EMAIL SIGN-UP", "USAGE & INSTRUCTIONS", "SHIPPING GUARANTEE", "SUBSCRIPTIONS & OFFERS"]

  const renderFooterList = (data) => {
    return <>
      <ul className="footer-v3-list">
        {
          data.map((item, index) => {
            return <li key={index} className="item"><Link href="" aria-label={item} title={item} className="color-tiki-red">{item}</Link></li>
          })
        }

      </ul>
    </>
  }
  return (
    <div className="page-footer">
      <div className="footer content">
        <div className="w footerV1">
          <div className="footer-v1-content row flex-md-nowrap">
            <div className="col-md-6 col-sm-12 col-xs-12 mobile-toggle address-v3">
              <div>
                <p className="details-v3">
                  ©2022 LAMPLIGHT FARMS INC. All Rights Reserved.
                </p>
                <p className="list_page">
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
                    <img src={ig} alt="" />
                  </Link>
                  <Link href="" className="social-icons si-colored si-pinterest" aria-label="TIKI Pinterest" title="TIKI Pinterest" target="_blank">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
                <p className="list_hashTag ">
                  <span className="mr-right" aria-label="hashtag Tiki Brand">
                    #TIKIBrand
                  </span>
                  <span className="mr-right" aria-label="hashtag Tiki Fire Pit">
                    #TIKIFirePit
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 mg_l">
              <div className="row"> 
                  <div className="col-6 mobile-toggle">
                    {renderFooterList(list1)}
                  </div>
                  <div className="col-6 mobile-toggle">
                    {renderFooterList(list2)}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Beadcrumb from "../../components/Beadcrumb";
import "./styles.scss";
const CustomerService = () => {
    const beadcrumbProp = [
        { name: "HOME", status: "", url: "/" },
        { name: "CUSTOMER SERVICE", status: "ACTIVE", url: "/customer-service" },
    ];
    const dataList = [
        {
            title: "GETTING HELP",
            data:[

            ]
        },
        {
            title: "MORE ABOUT OUR PRODUCTS",
            data:[
                
            ]
        },
        {
            title: "MORE ABOUT OUR COMPANY",
            data:[
                
            ]
        }
    ]
    return (
        <div id="customer_service">
            <div className="bcrumCS">
                <Beadcrumb beadcrumbProp={beadcrumbProp} />
            </div>
            <div className="cus_ser_content">
                <div>
                    <div className="cus_container">
                        <h1 className="heading">Customer Service</h1>
                        <div>
                            <p>
                                You, our customers, are the most important thing to TIKI® Brand.
                                Below find links to various resources to help you find the
                                information you are looking for. Please{" "}
                                <a href="https://www.tikibrand.com/contact">contact us</a>
                                &nbsp;if we can help!
                            </p>
                        </div>
                        <h2>GETTING HELP</h2>
                        <div>
                            <ul>
                                <li>
                                    <a title="Tiki Brand Contact Us" href="/contact">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Our Guarantee"
                                        href="/customer-service/our-guarantee"
                                    >
                                        Our Guarantee (Product Shipping, Warranty &amp; Return
                                        Information)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Account Information"
                                        href="/customer/account/login/referer/"
                                    >
                                        Account Information
                                    </a>
                                </li>
                                <li>
                                    <a title="Tiki Brand Order Lookup" href="/orderlookup">
                                        Track An Order
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Email Sign-up"
                                        href="customer-service/signup"
                                    >
                                        Email Sign-up
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Where to Buy"
                                        href="/customer-service/where-to-buy"
                                    >
                                        Where to Buy
                                    </a>
                                </li>
                                <li>
                                    <a title="TIKI Brand FAQs" href="/faqs">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h2>MORE ABOUT OUR PRODUCTS</h2>
                        <div>
                            <ul>
                                <li>
                                    <a
                                        title="Tiki Brand Subscriptions & Discounts"
                                        href="/customer-service/subscriptions-and-offers"
                                    >
                                        Subscriptions &amp; Offers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Product Usage & Instructions"
                                        href="/customer-service/product-usage-and-instructions"
                                    >
                                        Product Usage &amp; Instructions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Material Safety"
                                        href="customer-service/material-safety"
                                    >
                                        Material Safety
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Product Recalls"
                                        href="customer-service/recalls"
                                    >
                                        Product Recalls
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Patents"
                                        href="/customer-service/patents"
                                    >
                                        Patents
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Idea Submission"
                                        href="http://www.submitmyinvention.com/submit/tikibrand"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Submit a Product Idea
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="TIKI Brand Press Room"
                                        href="/customer-service/press"
                                    >
                                        Press Room
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h2>MORE ABOUT OUR COMPANY</h2>
                        <div>
                            <ul>
                                <li>
                                    <a title="Tiki Brand About Us" href="/customer-service/about">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Careers"
                                        href="https://jobs.wcbradley.com/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Privacy Notice"
                                        href="/customer-service/privacy-notice"
                                    >
                                        Privacy Notice
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Terms of Use"
                                        href="/customer-service/terms-of-use"
                                    >
                                        Terms of Use
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand CTCSA Disclosure"
                                        href="/customer-service/supply-chains-act"
                                    >
                                        CTCSA Disclosure
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="California Consumer Privacy Act"
                                        href="/customer-service/california-consumer-privacy-act"
                                    >
                                        CCPA
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Accessibility"
                                        href="/customer-service/accessibility"
                                    >
                                        Accessibility
                                    </a>
                                </li>
                                <li>
                                    <a
                                        title="Tiki Brand Sweepstakes Rules"
                                        href="/customer-service/rules"
                                    >
                                        Promo Code &amp; Sweepstakes Rules
                                    </a>
                                </li>
                                <li>
                                    <a title="TIKI Love" href="/tikilove">
                                        TIKI Love
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;

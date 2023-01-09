import React from "react";
import { Link } from "react-router-dom";
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
                {
                    name: "Contact Us",
                    url: ""
                },
                {
                    name : "Our Guarantee (Product Shipping, Warranty &amp; Return Information)",
                    url: ""
                },
                {
                    name: "Account Information",
                    url: ""
                },
                {
                    name : "Track An Order",
                    url: ""
                },
                {
                    name : "Email Sign-up",
                    url: "/customer-service/signup"
                },
                {
                    name: "Where to Buy",
                    url: ""
                },
                {
                    name : "FAQs",
                    url: ""
                },

            ]
        },
        {
            title: "MORE ABOUT OUR PRODUCTS",
            data:[
                {
                    name : "Subscriptions & Offers",
                    url: ""
                },
                {
                    name : "Product Usage & Instructions",
                    url: ""
                },
                {
                    name : "Material Safety",
                    url: ""
                },
                {
                    name : "Product Recalls",
                    url: ""
                },
                {
                    name : "Patents",
                    url: ""
                },
                {
                    name : "Submit a Product Idea",
                    url: ""
                },
                {
                    name : "Press Room",
                    url: ""
                },

            ]
        },
        {
            title: "MORE ABOUT OUR COMPANY",
            data:[
                {
                    name : "About Us",
                    url: ""
                },
                {
                    name : "Careers",
                    url: ""
                },
                {
                    name : "Privacy Notice",
                    url: ""
                },
                {
                    name : "Terms of Use",
                    url: ""
                },
                {
                    name : "CTCSA Disclosure",
                    url: ""
                },
                {
                    name : "CCPA",
                    url: ""
                },
                {
                    name : "Accessibility",
                    url: ""
                },
                {
                    name : "Promo Code & Sweepstakes Rules",
                    url: ""
                },
                {
                    name : "TIKI Love",
                    url: ""
                },

            ]
        }
    ]


    const renderListService = () =>{
        return dataList.map((item)=>{
            return <>
                <h2>{item.title}</h2>
                <div>
                    <ul>
                        {
                            item.data.map((val)=>{
                                return <li>
                                    <Link to={val.url} title={val.name}>{val.name}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </>
        })
    }
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
                        {renderListService()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;

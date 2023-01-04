import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Beadcrumb from "../../components/Beadcrumb";
import "./styles.scss";
const BuyersGuide = () => {
    const [select, setSelect] = useState("all")
    const beadcrumbProp = [
        { name: "HOME", status: "", url: "/" },
        { name: "Buyer's Guide", status: "ACTIVE", url: "/" },
    ];
    const listNav = [
        {
            name:"ALL",
            url:"",
            id:"all"
        },
        {
            name:"COMPARE",
            url:"",
            id:"compare"
        },
        {
            name:"INSPIRATION",
            url:"",
            id:"inspiration"
        },
        {
            name:"ADVICE",
            url:"",
            id:"advice"
        },
    ]
    const selectNav = (e) =>{

        var elems = document.querySelector(".activeBuyer");
        if (elems !== null) {
            elems.classList.remove("activeBuyer");
        }
        // if (document.querySelector(".activeNav")) {
        //     document.querySelector(".activeNav").classList.remove("activeNav");
        // }
        e.target.className = "activeBuyer";
        setSelect(e.target.id)
    }
    const renderListNav = () =>{
        return listNav.map((item)=>{
            return <li className="nav-item">
                        <Link onClick={(e)=>{selectNav(e)}} id={item.id} className="item_nav_buyer" to={item.url}>{item.name}</Link>
                    </li>
        })
    }
    console.log("select",select)
    return (
        <div id="buyer_guide">
            <div className="bcrum_buyer">
                <Beadcrumb beadcrumbProp={beadcrumbProp} />
            </div>
            <div className="buyer_intro ">
                <h1 className="title text-center mb-5">
                    BUYER'S GUIDE
                </h1>
                <div className="list_intro_card row justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-6">
                                <a href="" className="intro_card d-block p-5">
                                    <img src="https://www.tikibrand.com/media/productline/buyers-guide-TIKI-brand-fire-pits.jpg" alt="" />
                                    <h2 className="text-center">FIRE PITS</h2>
                                </a>
                            </div>
                            <div className="col-md-3 col-6">
                                <a href="" className="intro_card d-block p-5">
                                    <img src="https://www.tikibrand.com/media/productline/buyers-guide-TIKI-brand-fire-pits.jpg" alt="" />
                                    <h2 className="text-center">FIRE PITS</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buyers-guide_nav">
                <ul id="nav_buyer" className="nav justify-content-center">
                    {renderListNav()}
                </ul>
            </div>
            <div className="list_card_nav">
                    asa
            </div>

        </div>
    );
};

export default BuyersGuide;

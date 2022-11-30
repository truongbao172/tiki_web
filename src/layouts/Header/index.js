import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cart from "../../assects/images/cart.PNG"
import search from "../../assects/images/search.PNG"
import './styles.scss'
const Header = () => {
    const [offset, setOffset] = useState(0);

    const listNav = [{name: "MY ACCOUNT", url:"/customer"},{name: "TIKI IDEAS", url:"/ideas/"}, {name: "CUSTOMER SERVICE", url:""} ,{name: "BUYER'S GUIDE", url:""} ,{name: "FAQS", url:""}]
    const listNav2 = [{name: "TORCHES & TABLETOP", url:"torches&tabletop"},{name: "OUTDOOR LIGHTING", url:"outdoor-lighting"}, {name: "FIRE PITS", url:"fire-pits"}, {name: "FUEL & WOOD PELLETS", url:""} ,{name: "PARTS & ACCESSORIES", url:"fuel-wood-pellets"} ,{name: "SALE", url:"sale"}]
    const renderListNav = () =>{
       return <>
        <ul>
        { listNav.map(item => {
            return <li>
                <Link onClick={(e)=>{handelClickNav1(e)}} to={item.url}>{item.name}</Link> 
            </li>
            }
            )}
        </ul>
       </>      
    }
    const handelClickNav1 = (e) =>{
        var elems = document.querySelector(".activeNav");
        if(elems !==null){
        elems.classList.remove("activeNav");
        }
        if(document.querySelector(".active")){
            document.querySelector(".active").classList.remove("active");
        }
        e.target.className = "activeNav";
    }

    const handelClick = (e) =>{
        var elems = document.querySelector(".active");
        if(elems !==null){
        elems.classList.remove("active");
        }
        if(document.querySelector(".activeNav")){
            document.querySelector(".activeNav").classList.remove("activeNav");
        }
        e.target.className = "active";
    } 

    const renderListNav2 = () =>{
        return <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        { listNav2.map(item => {
            return <li className="nav-item">
             <Link className="nav-link" to={`/product/${item.url}`}>
                <span onClick={(e)=>{handelClick(e)}}>
                    {item.name}
                </span>
             </Link>
             </li>
             }
             )}
        </ul>
        </> 
     }
       
    //  useEffect(()=>{
    //     var elems = document.querySelector(".activeNav");
    //     if(elems){
    //         document.querySelector(".activeNav").classList.remove("activeNav");
    //     }
        
    //  },[])

     useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
    

     
  return (
    <div>
    <div className={`header ${offset > 0 ? "fixed-top" : " "}`}>
        <div  className={`header_top ${offset > 0 ? "d-none" : " "}`}>
            <div className='headerV1 content'>
                <div className='headerV1_wrapper'>
                    <div className='navList'>
                        {renderListNav()}
                    </div>
                </div>
                <div className="search">
                    <form className="search-container">
                        <input type="text" id="search-bar" placeholder="Search entire store here" />
                        <Link to="" className='search-icon'>
                           <img src={search} alt="" />
                        </Link>
                    </form>
                    <div className='cart'>
                        <Link to="">
                            <img src={cart} alt="" />
                        </Link>
                    </div>
                </div>
            
            </div>
            <div className='header_logo text-center wlevel'>
                    <Link className="logo" to="/" title="TIKI Brand Logo" aria-label="TIKI Brand Logo">
                        <img src="https://www.tikibrand.com/media/logo/stores/1/tiki-brand-logo.png" title="TIKI Brand Logo" alt="TIKI Brand Logo"/>
                    </Link>
            </div>
        </div>
         
        <div className={`text-center ${offset > 0 ? "headerScroll" : "headerV2"} `}>
            <div className={`header_logo ${offset > 0 ? " " : "d-none"}`}>
                <Link className="logo" to="/" title="TIKI Brand Logo" aria-label="TIKI Brand Logo">
                    <img src="https://www.tikibrand.com/media/logo/stores/1/tiki-brand-logo.png" title="TIKI Brand Logo" alt="TIKI Brand Logo" width={170} height={68} />
                </Link>
                {/* <div className="search">
                    <form className="search-container">
                        <input type="text" id="search-bar" placeholder="Search entire store here" />
                        <Link to="" className='search-icon'>
                           <img src={search} alt="" />
                        </Link>
                    </form>
                    <div className='cart'>
                        <Link to="">
                            <img src={cart} alt="" />
                        </Link>
                    </div>
                </div> */}
            </div>
            <div className='header_nav'>
                <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {renderListNav2()}
                            </div>
                        </div>
                    </nav>
            </div>
        </div>
    </div>
    <div className={`${offset > 0 ? "sethight" : ""} `}>
    </div>
</div>
  )
}

export default Header
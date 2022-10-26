import React from 'react'
import './styles.scss'
const Header = () => {
    const listNav = [{name: "MY ACCOUNT", url:"/customer"},{name: "TIKI IDEAS", url:""}, {name: "CUSTOMER SERVIVE", url:""} ,{name: "BUYER'S GUIDE", url:""} ,{name: "FAQS", url:""}]
    const listNav2 = [{name: "TORCHES & TABLETOP", url:"/customer"},{name: "OUTDOORLIGHTIN", url:""}, {name: "FIRE PITS", url:""}, {name: "FUEL & WOOD PELLETS", url:""} ,{name: "PARTS & ACCESSORIES", url:""} ,{name: "SALE", url:""}]
    const renderListNav = () =>{
       return <>
        <ul>
        { listNav.map(item => {
            return <li>
                <a href={item.url}>{item.name}</a> 
            </li>
            }
            )}
        </ul>
       </>      
    }

    const renderListNav2 = () =>{
        return <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        { listNav2.map(item => {
            return <li className="nav-item">
             <a className="nav-link " href={item.url}>
                <span>
                    {item.name}
                </span>
             </a>
             </li>
             }
             )}
        </ul>
        </> 
     }
  return (
    <div className='header '>
        <div className='header_top'>
            <div className='headerV1 content'>
                <div className='headerV1_wrapper'>
                    <div className='navList'>
                        {renderListNav()}
                    </div>
                </div>
                <div className="search">
                    <form className="search-container">
                        <input type="text" id="search-bar" placeholder="Search entire store here" />
                        <a href="" className='search-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </a>
                    </form>
                    <div className='cart'>
                        <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        </a>
                    </div>
                </div>
            
            </div>
            <div className='header_logo text-center wlevel'>
                    <a className="logo" href="https://www.tikibrand.com/" title="TIKI Brand Logo" aria-label="TIKI Brand Logo">
                        <img src="https://www.tikibrand.com/media/logo/stores/1/tiki-brand-logo.png" title="TIKI Brand Logo" alt="TIKI Brand Logo" width={170} height={68} />
                    </a>
            </div>
        </div>
         
        <div className='headerV2 text-center'>
            <div className='header_logo d-none'>
                <a className="logo" href="https://www.tikibrand.com/" title="TIKI Brand Logo" aria-label="TIKI Brand Logo">
                    <img src="https://www.tikibrand.com/media/logo/stores/1/tiki-brand-logo.png" title="TIKI Brand Logo" alt="TIKI Brand Logo" width={170} height={68} />
                </a>
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
  )
}

export default Header
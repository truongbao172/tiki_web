import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
function IdeasPost({revert, seeProduct}) {
  return (
    <div id='ideaPost'>
      <div className='page-main mx-auto'>
        <div className={`row ideas-post ${revert ? "flex-row-reverse" : ""}`}>
          <div className='col-6 ideas-post-img order-md-1 order-1' style={{"backgroundImage":"url(https://www.tikibrand.com/media/ideas/THROWAFOOTBALLWATCHPARTYINYOURBACKYARD.jpg)"}}>
            {/* <img src="https://www.tikibrand.com/media/ideas/Outdoor_Movie_Night_1-updated.jpg" alt="" /> */}
          </div>
          <div className='col-6 ideas-post-desc order-md-2 order-2 bg-yellow'>
            <div className="subtitle">
              <Link title="OUTDOOR MOVIE NIGHT" to="/ideas" className="ideas-post-title text-decoration-underline color-tiki-black">TIKI IDEAS</Link>
            </div>
            <div className="ideas-post-number fw-bold">
              <span>NO.391</span>
            </div>
            <h2 className="ideas-post-heading mt-1 mb-3 fw-bold">
              THROW A FOOTBALL WATCH PARTY IN YOUR BACKYARD
            </h2>
            <p className="tiki-idea-post-text">
            Take your football party outside and watch the game on an outdoor screen in your backyard! Get the space ready by giving the lawn a fresh cut, have plenty of seating and add several torches for lighting. Fire up the grill for burgers or hot dogs, and don't forget the snacks and handheld sweets!
            </p>
            <p className="tiki-idea-post-tags text-uppercase">
              Topics:<Link className="ideas-tags" to=""><span clasNames="ideas-filters-option-outdoor-living-everyday"> EASY ENTERTAINING</span></Link><Link className="ideas-tags" to="/ideas/?cat=ideas-filters-option-space-backyard"><span class="ideas-filters-option-space-backyard">, Backyard</span></Link></p>
            {seeProduct && <a href="" className='btn set-border button-black'>SEE PRODUCT</a>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeasPost
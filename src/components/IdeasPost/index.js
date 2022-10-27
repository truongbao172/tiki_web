import React from 'react'
import "./styles.scss"
function IdeasPost() {
  return (
    <div id='ideaPost'>
      <div className='page-main mx-auto'>
        <div className='row ideas-post'>
          <div className='col-6 ideas-post-img order-md-1 order-1'>
            <img src="https://www.tikibrand.com/media/ideas/Outdoor_Movie_Night_1-updated.jpg" alt="" />
          </div>
          <div className='col-6 ideas-post-desc order-md-2 order-2 bg-yellow'>
            <div className="mt-5 mb-3">
              <a title="OUTDOOR MOVIE NIGHT" href="/ideas" className="ideas-post-title text-decoration-underline color-tiki-black">TIKI IDEAS</a>
            </div>
            <div className="ideas-post-number fw-bold">
              <span>NO.391</span>
            </div>
            <h2 className="ideas-post-heading mt-1 mb-3 fw-bold">
              OUTDOOR MOVIE NIGHT
            </h2>
            <p className="tiki-idea-post-text">
              Summer nights are very enjoyable, so take advantage of the weather by taking family movie night out to the backyard. Bring back a classic, stream your favorite game or turn on the latest hit-- at the end of the day, the memories you make are the greatest gifts these nights give us!
            </p>
            <p className="tiki-idea-post-tags text-uppercase pb-5">
              Topics:<a class="ideas-tags" href="/ideas/?cat=ideas-filters-option-outdoor-living-everyday"><span class="ideas-filters-option-outdoor-living-everyday"> Everyday</span></a><a class="ideas-tags" href="/ideas/?cat=ideas-filters-option-space-backyard"><span class="ideas-filters-option-space-backyard">, Backyard</span></a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeasPost
import React from 'react'
import "./styles.scss"
function CardHomePage({reverse}) {
  return (
    <div className='cardHomePage'>
        <div className="cart_content">
            <div className={`row ${reverse ? "flex-row-reverse img-shadow" : ""}`}>
              {/* d-flex flex-column flex-md-row flex-wrap flex-md-nowrap */}
                <div className='homepage-cta-img col-md-6 col-10 mb-md-4 mb-md-0 order-md-1 order-1 '>
                    <img src="https://www.tikibrand.com/media/homectablocks/FirePitWoodPack15501200WebCrop-updated.jpg" alt="" />
                </div>
                <div className='homepage-cta-content col-md-6 col-12 order-md-2 order-2'>
                        <h2>FIRE PITS</h2>
                        <div className="des">
                            <p>With the TIKI® Brand Fire Pit, we’ve redesigned the fire experience. When combined with the TIKI® Brand Wood Packs, the patent-pending airflow system creates low smoke and less mess.</p>
                        </div>
                        <div className="but">
                            <a className="text-uppercase d-inline-block button-black" id="fire-pits" href title="View All">
                                View All
                            </a>
                        </div>
                        <div className="anchor-tiki-black">
                            <p><span className="fw-bold">RELATED:</span>
                            <a className="fw-bold text-decoration-underline" href="/fuel-wood-pellets">
                                 Fuel &amp; Wood Pellets                              </a>
                            <span className="related-link-divider fw-bold px-1">|</span>
                            <a className="fw-bold text-decoration-underline" href="/parts-accessories">
                                Parts &amp; Accessories                              </a>
                            </p>
                        </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHomePage
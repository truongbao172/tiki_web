import React from 'react'
import "./styles.scss"
function CardHomePage({data,reverse}) {
    console.log("data",data)
  return (
    <div className='cardHomePage'>
        <div className="cart_content">
            <div className={`row ${reverse ? "flex-row-reverse img-shadow" : ""}`}>
              {/* d-flex flex-column flex-md-row flex-wrap flex-md-nowrap */}
                <div className='homepage-cta-img col-md-6 col-10 mb-md-4 mb-md-0 order-md-1 order-1 '>
                    <img src={data.image} alt="" />
                </div>
                <div className='homepage-cta-content col-md-6 col-12 order-md-2 order-2'>
                        <h2>{data.title}</h2>
                        <div className="des">
                            <p>{data.subTitle}</p>
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
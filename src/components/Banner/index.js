import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
function Banner() {
  return (
    <div id='Banner'>
        <div className='Banner_content'>
            <div className="Banner_img">
                <img src="https://www.tikibrand.com/media/homepage-banners/Culver_Camping.jpg" alt="" />
            </div>
            <div className='Banner_button text-center'>
                <div className='Banner_text'>
                    <span>All the Makings of a Cozy Evening</span>
                </div>
                <Link to='' className='btn_shop'>SHOP NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Banner
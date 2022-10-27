import React from 'react'
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
                    <span>Fall Vibes Anywhere You Want</span>
                </div>
                <a href='' className='btn_shop'>SHOP NOW</a>
            </div>
        </div>
    </div>
  )
}

export default Banner
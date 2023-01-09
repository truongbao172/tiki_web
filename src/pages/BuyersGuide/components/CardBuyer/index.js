import React from 'react'
import "./styles.scss"
const CardBuyer = () => {
  return (
    <div className='card_buyer'>
        <div className='row card-content'>
                <div className='col-12 col-md-3 text-center content-left'>
                    <a href="">
                    <img width="340" height="340" src="https://www.tikibrand.com/media/buyersguide/article/image/7/2/72_dpi_jpg-2022_shutterstock_brief_-_turn_on_ambiance_turn_off_mosquitos_3_.jpg" alt="" />
                    </a>
                </div>
                <div className='col-12 col-md-9 content-right'>
                    <div>
                    <h2 className='title'>
                        <a href="">STRING LIGHT INSTALLATIONS</a>
                    </h2>
                    <div className="icon">
                    <i class="far fa-comment-alt"></i>
                    </div>
                    <div className='sub_title'>
                        <p>You’ve done all the research, you’ve agonized over which set of string lights to purchase, and you decided on the TIKI Brand BiteFighter LED String Lights. Now you just need to figure out the perfect location to hang your string lights. Do not be overwhelmed by the numerous options! Here are some creative ways to utilize your String Lights for optimal repellency and ambiance.</p> 
                    </div>
                    <div className='read_more'>
                        <button>READ MORE</button>
                    </div>
                    </div>
                </div>
        </div>
    
    </div>
  )
}

export default CardBuyer
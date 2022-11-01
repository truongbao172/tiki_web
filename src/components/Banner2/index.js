import React from 'react'
import "./styles.scss"
function Banner2({data}) {
  return (
    <div id="bannerIdeas">
        <div className='banner_img'>
          <img src={data.img} alt="" />
        </div>
        <div className='banner_overplay'>
            <h1>{data.title}</h1>
        </div>
    </div>
  )
}

export default Banner2
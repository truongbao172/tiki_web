import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
function IdeasPost({ revert, data }) {

  const renderTopic = (arr) =>{
    return arr.map((item, index)=>{
    return <Link key={index} className="ideas-tags" to=""><span className="ideas">{item}, </span></Link>
    })
  }
  return (
    <div id='ideaPost'>
      <div className='page-main mx-auto'>
        <div className={`row ideas-post ${revert ? "flex-row-reverse" : ""}`}>
          <div className='col-6 ideas-post-img order-md-1 order-1' style={{ "backgroundImage": `url(${data.image})` }}>
          </div>
          <div className='col-6 ideas-post-desc order-md-2 order-2 bg-yellow'>
            <div className="subtitle">
              <Link title="OUTDOOR MOVIE NIGHT" to="/ideas" className="ideas-post-title text-decoration-underline color-tiki-black">TIKI IDEAS</Link>
            </div>
            <div className="ideas-post-number fw-bold">
              <span>{data.id}</span>
            </div>
            <h2 className="ideas-post-heading mt-1 mb-3 fw-bold">
              {data.title}
            </h2>
            <p className="tiki-idea-post-text">
              {data.subTitle}
            </p>
            <p className="tiki-idea-post-tags text-uppercase">
              Topics: {renderTopic(data.topic)}</p>
            {data.button && <a href="" className='btn set-border button-black-card-idea'>SEE PRODUCT</a>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeasPost
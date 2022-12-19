import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
function IdeasPost({ revert, data }) {

  const { id = "NO.235",
    topic = ["DINING AL FRESCO"],
    image = "https://www.tikibrand.com/media/ideas/FirePit_Lifestyle_FoxPoint_small-updated.jpg",
    title = "S'MORE PLEASE!",
    subTitle = "For a twist, try making a Pudgie Pie S'more. Place cut firewood in your Fire Pit and grease a pudgie pie iron generously. Put a slice of bread in one side of the greased pudgie pie iron, spread chocolate or hazelnut, sprinkle graham cracker crumbs and add 1-2 marshmallows. Top with another slice of bread and close the iron. Cook over the fire for just 1 minute, turning occasionally. Open up the iron carefully and enjoy the ooey, gooey goodness!",
    button = true
  } = data

  const renderTopic = (arr) => {
    return arr.map((item, index) => {
      return <Link key={index} className="ideas-tags" to=""><span className="ideas">{item} </span></Link>
    })
  }
  return (
    <div id='ideaPost'>
      <div className='page-main mx-auto'>
        <div className={`row ideas-post ${revert ? "flex-row-reverse" : ""}`}>
          <div className='col-6 ideas-post-img order-md-1 order-1' style={{ "backgroundImage": `url(${image})` }}>
          </div>
          <div className='col-6 ideas-post-desc order-md-2 order-2 bg-yellow'>
            <div className="subtitle">
              <Link title="OUTDOOR MOVIE NIGHT" to="/ideas" className="ideas-post-title text-decoration-underline color-tiki-black">TIKI IDEAS</Link>
            </div>
            <div className="ideas-post-number fw-bold">
              <span>{id}</span>
            </div>
            <h2 className="ideas-post-heading mt-1 mb-3 fw-bold">
              {title}
            </h2>
            <p className="tiki-idea-post-text">
              {subTitle}
            </p>
            <p className="tiki-idea-post-tags text-uppercase">
              Topics: {renderTopic(topic)}</p>
            {button && <a href="" className='btn set-border button-black-card-idea'>SEE PRODUCT</a>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeasPost
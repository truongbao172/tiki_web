import React from 'react'
import "./styles.scss"
import spinner from "../../assects/images/loading.gif"
function LoadingSpinner() {
  return (
    <div id='LoadingSpinner'>
            <div className='spinner'>
                <img src={spinner} alt="" />
            </div>
    </div>
  )
}

export default LoadingSpinner
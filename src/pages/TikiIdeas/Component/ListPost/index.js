import React from 'react'
import IdeasPost from '../../../../components/IdeasPost'
import "./style.scss"
const ListPost = () => {
  return (
    <div id='listPost'>
      <div className='pading'>
        <IdeasPost />
      </div>
      <div className='pading'>
        <IdeasPost revert />
      </div>
      <div className='pading'>
        <IdeasPost seeProduct />
      </div>
      <div className='pading'>
        <IdeasPost revert />
      </div>
    </div>
  )
}

export default ListPost
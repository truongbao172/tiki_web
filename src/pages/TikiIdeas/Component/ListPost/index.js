import React from 'react'
import IdeasPost from '../../../../components/IdeasPost'
import "./style.scss"
const ListPost = () => {
  return (
    <div id='listPost'>
        <IdeasPost/>
        <IdeasPost revert/>
        <IdeasPost seeProduct/>
        <IdeasPost revert/>

    </div>
  )
}

export default ListPost
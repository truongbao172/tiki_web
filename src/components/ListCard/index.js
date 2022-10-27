import React from 'react'
import CardHomePage from '../CardHomePage'
import "./styles.scss"
function ListCard() {
  return (
    <div className='listCard my-5'>
        <div className='listCard_content'>
            <CardHomePage/>
            <CardHomePage reverse/>
            <CardHomePage />
            <CardHomePage reverse/>
        </div>
    </div>
  )
}

export default ListCard
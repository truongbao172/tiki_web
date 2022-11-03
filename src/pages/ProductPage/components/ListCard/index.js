import React from 'react'
import Card from '../Card'
import "./styles.scss"
const ListCard = () => {
  return (
    <div className='product-list-card'>
        <div className='row'>
          <div className='col-md-4 col-6'>
            <Card/>
          </div>
          <div className='col-md-4 col-6'>
            <Card/>
          </div>
          <div className='col-md-4 col-6'>
            <Card/>
          </div>
          <div className='col-md-4 col-6'>
            <Card/>
          </div>
          <div className='col-md-4 col-6'>
            <Card/>
          </div>
          <div className='col-md-4 col-6'>
            <Card/>
          </div>
          <div className='col-md-4 col-6'>
            <Card/>
          </div>
          
        </div>
    </div>
  )
}

export default ListCard
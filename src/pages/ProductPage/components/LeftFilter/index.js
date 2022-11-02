import React from 'react'
import FilterList from '../FilterList'
import "./styles.scss"
const LeftFilter = () => {
  return (
    <div id='left_sidebar'>
      <div className='left_sidebar_content text-left'>
        <h2 className='product text-uppercase'>PRODUCTS</h2>
        <div>
          <FilterList />
        </div>
      </div>
    </div>
  )
}

export default LeftFilter
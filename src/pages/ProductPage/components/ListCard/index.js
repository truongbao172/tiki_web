import React from 'react'
import Card from '../Card'
import "./styles.scss"
const ListCard = (props) => {
  const { dataOfCategory } = props
  console.log("list card", dataOfCategory)

  const renderListCard = () =>{
    return dataOfCategory.map((item,index) =>{
      return <div className='col-md-4 col-6' key={index}>
                <Card data = {item}/>
        </div>
    })
  }
  return (
    <div className='product-list-card'>
        {
          dataOfCategory.length > 0 ? <div className='row'>
          {renderListCard()}
        </div> : <div className='text-center'><h2>NO DATA</h2></div>
        }
    </div>
  )
}

export default ListCard
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../../../components/LoadingSpinner'
import { getAllProductAction } from '../../../../redux/actions'
import Card from '../Card'
import "./styles.scss"
const ListCard = (props) => {
  const { dataOfCategory } = props
  console.log("list card", dataOfCategory)
  const dispatch = useDispatch();
  const action = getAllProductAction(); 
  useEffect(() => {
    dispatch(action);
  }, [])
  const renderListCard = () =>{
    return dataOfCategory.map((item,index) =>{
      return <div className='item col-md-4 col-6' key={index}>
                <Link to={`/${item._id}`} ><Card data = {item}/></Link>
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
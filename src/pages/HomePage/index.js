import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Banner from '../../components/Banner'
import IdeasPost from '../../components/IdeasPost'
import ListCard from '../../components/ListCard'
import { getAllDemoCategoryAction } from '../../redux/actions'
import "./styles.scss"
const Home = () => {
  const dispatch = useDispatch()
  const action = getAllDemoCategoryAction()
  useEffect(()=>{
      dispatch(action)
  },[])
  return (
    <div className='homePage'>
      <Banner/>
      <ListCard/>
      <IdeasPost data/>
    </div>
  )
}

export default Home

import React from 'react'
import Banner from '../../components/Banner'
import IdeasPost from '../../components/IdeasPost'
import ListCard from '../../components/ListCard'
import "./styles.scss"
const Home = () => {
  return (
    <div className='homePage'>
      <Banner/>
      <ListCard/>
      <IdeasPost/>
    </div>
  )
}

export default Home

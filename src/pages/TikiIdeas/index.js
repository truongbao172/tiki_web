import React from 'react'
import Beadcrumb from '../../components/Beadcrumb'
import IdeasPost from '../../components/IdeasPost'
import BannerIdeas from './Component/BannerIdeas'
import Filter from './Component/Filter'
import "./styles.scss"
const TikiIdeas = () => {
    const beadcrumbProp = [{name:'HOME',status:'',url:'/'},{name:'IDEAS',status:'ACTIVE',url:'/ideas/'}]
  return (
    <div id="tikiIdeas">
        <Beadcrumb beadcrumbProp={beadcrumbProp}/>
        <BannerIdeas/>
        <Filter/>
        <IdeasPost/>
    </div>
  )
}

export default TikiIdeas
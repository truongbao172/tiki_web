import React from 'react'
import Beadcrumb from '../../components/Beadcrumb'
import Banner2 from '../../components/Banner2'
import Filter from './Component/Filter'
import ListPost from './Component/ListPost'
import "./styles.scss"
const TikiIdeas = () => {
    const beadcrumbProp = [{name:'HOME',status:'',url:'/'},{name:'IDEAS',status:'ACTIVE',url:'/ideas/'}]
    const bannerProps = {img:"https://www.tikibrand.com/media/ideas_banners/default/Landing_Page_IDEAS.jpg", title: "TIKI IDEAS"}
    return (
    <div id="tikiIdeas">
        <Beadcrumb beadcrumbProp={beadcrumbProp}/>
        <Banner2 data={bannerProps}/>
        <Filter/>
        <ListPost/>
    </div>
  )
}

export default TikiIdeas
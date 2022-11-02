import React from 'react'
import Banner2 from '../../components/Banner2'
import Beadcrumb from '../../components/Beadcrumb'
import LeftFilter from './components/LeftFilter'
import ListCard from './components/ListCard'
import "./styles.scss"
const ProductPage = () => {
    const beadcrumbProp = [{name:'HOME',status:'',url:'/'},{name:'TORCHES & TABLETOP',status:'ACTIVE',url:'/'}]
    const bannerProps = {img:"https://www.tikibrand.com/media/ideas_banners/default/Landing_Page_IDEAS.jpg", title: "TORCHES & TABLETOP"}
  return (
    <div id="productPage">
        <div className='pro_beadcrum' style={{"marginLeft" : "15px"}}>
            <Beadcrumb beadcrumbProp={beadcrumbProp}/>
        </div>
        <div className='pro_banner'>
            <Banner2 data={bannerProps}/>
        </div>
        <div className='product_content'>
            <div className='row p-0 m-0'>
                <div className='col-3'>
                    <LeftFilter/>
                </div>
                <div className='col-9'>
                    <ListCard/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProductPage
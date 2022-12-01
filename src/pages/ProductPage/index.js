import React from 'react'
import { useParams } from 'react-router-dom'
import Banner2 from '../../components/Banner2'
import Beadcrumb from '../../components/Beadcrumb'
import LeftFilter from './components/LeftFilter'
import ListCard from './components/ListCard'
import SortProduct from './components/SortProduct'
import "./styles.scss"
const ProductPage = () => {
    let { nameId } = useParams();
    console.log("detail",nameId)
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
                <div className='left'>
                    <LeftFilter/>
                </div>
                <div className='right'>
                    <SortProduct/>
                    <ListCard/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProductPage
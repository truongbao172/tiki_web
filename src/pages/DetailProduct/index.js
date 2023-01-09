import React from 'react'
import { useParams } from 'react-router-dom';
import "./styles.scss"
const DetailProduct = () => {
    let { id } = useParams();
    console.log("id",id)
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct
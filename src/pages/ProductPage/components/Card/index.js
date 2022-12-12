import React from 'react'
import "./styles.scss"
const Card = (props) => {
  const { data } = props
  const { status, category, description, image, name, price, quatity, rating } = data

  const renderStar = (star) =>{
    return (
      <>
        {[...Array(star)].map((star) => {        
          return (         
            <i className="fa-sharp fa-solid fa-star"></i>       
          );
        })}
      </>
    );
  }
  return (
    <div className='card-item-product'>
      <div className='item product product-item'>
        <div className='product-item-info'>
          <div className='product_image'>
            <div className='image'>
              <a href="">
                <img src={image} alt="" />
              </a>
            </div>
            <div className='heart'>
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
          <div className='product-item-details'>
            <div className='name_card text-center'>
              <a href=""><h3>{name}</h3></a>
            </div>
            <div className='rating-star d-flex'>
              <div className='star-vote'>
                {renderStar(rating)}
              </div>
              <div className='cout-vote'>
                ({quatity})
              </div>
            </div>
            <div className='price text-center'>
              ${price}
            </div>
            <div className='btn_add_to_card text-center btn_card_product'>
              <a href="" className='btn btn_oran'>ADD TO CART</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
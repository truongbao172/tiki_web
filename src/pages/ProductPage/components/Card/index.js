import React from 'react'
import "./styles.scss"
const Card = () => {
  return (
    <div className='card-item-product'>
      <div className='item product product-item'>
        <div className='product-item-info'>
          <div className='product_image'>
            <div className='image'>
              <a href="">
                <img src="https://www.tikibrand.com/media/catalog/product/cache/77687483e7a6bfac08ae1e13eb6dacb4/1/3/132b290c3d686f40146d6d904a240900.jpg" alt="" />
              </a>
            </div>
            <div className='heart'>
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
          <div className='product-item-details'>
            <div className='name_card text-center'>
              <a href=""><h3>ISLAND KING LARGE FLAME TORCH WITH EASY INSTALL IN BLACK</h3></a>
            </div>
            <div className='rating-star d-flex'>
              <div className='star-vote'>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              </div>
              <div className='cout-vote'>
                  (56)
              </div>
            </div>
            <div className='price text-center'>
              $20.49
            </div>
            <div className='btn_add_to_card text-center'>
              <a href="" className='btn btn_oran'>ADD TO CART</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
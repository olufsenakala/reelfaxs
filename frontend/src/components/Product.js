import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div className="sug__prod__card">
      <Link to={`/product/${product._id}`}>
        <div className="sug__card__banner">
          <img src={product.image} alt="" />
        </div>
        <div className="sug__card__body ">
          <h5 className="sug__card__category">Games - Xbox One</h5>
          <h3 className="sug__card__title">
            {product.name}
          </h3>
          <span className="sug__card__rating">
            {/* {product.rating} from {product.numReviews} */}
            <Rating 
              value={product.rating} 
              text={`${product.numReviews} reviews`} 
            />
          </span>
          <p className="sug__card__price">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product;
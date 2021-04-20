import React, { useEffect } from 'react';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <>
      <div className="sug__prod">
        <div className="sug__prod__container">
          <div className="sug__prod__title">
            <h2>Our Products</h2>
          </div>
          <div className="sug__prod__filter">
            <div className="sug__prod__left">
              Bestsellers Newest
            </div>
            <div className="sug__prod__right">
              Price Range $15-$150
            </div>
          </div>
          <div className="sug__prod__card__wrapper">
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <>
                {products.map(product => (
                  <Product key={product._id} product={product} />
                ))}
              </>
            )}

          </div>
          <div className="sug__prod__more">
            <button type="button">Show More v</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomeScreen;
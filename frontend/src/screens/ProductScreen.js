import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  }

  return (
    <div className="prodetail__main__wrapper">
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <>
          <div className="prodetail__gallery">
            <Link to="/" className="temp">
                <img src="/images/detail_slide_control.png" alt="" />
            </Link>
            <div className="prodetail__gallery__image">
              <img src={product.image} alt={product.name} />
            </div>
            {/* <div className="prodetail__gallery__controls">
              <img src="/images/detail_main_control.png" alt="" />
            </div> */}
          </div>
          <div className="prodetail__main__content">
            <div className="prodetail__main">
              <div className="prodetail__main__header">
                <h1 className="title">{product.name}</h1>
              </div>
              <div className="prodetail__main__info">
                <p className="content">{product.description}</p>
              </div>
              <div className="prodetail__main__money">
                <h2 className="price">${product.price}</h2>
                <button 
                  onClick={addToCartHandler}
                  className="cart__button"
                  disabled={product.countInStock === 0}
                >
                  <div className="button__img">
                    <img src="/images/detail_discount.png" alt="" />
                  </div>
                  Add to cart
                </button>
              </div>
            </div>
            <section className="prodetail__tab">
              <div className="prodetail__tab__head">
                <div className="detail detial--active">
                  <p>Detail</p>
                </div>
                <div className="detail detial--ingredents">
                  <p>Ingredents</p>
                </div>
                <div className="detail detial--direction">
                  <p>Direction</p>
                </div>
              </div>
              <div className="prodetail__tab__body">
                <div className="prodetail_tab_body_image">
                  <img src="/images/detail_carausel1.png" alt="" />
                </div>
                <div className="prodetail_tab_info">
                  <div className="head">
                    <h2 className="title">Natural Ingredents</h2>
                    <h3 className="percent">66%</h3>
                  </div>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <aside className="prodetail__aside">
            <div className="prdtl__asd__item prodetail__aside__save">

            </div>
            <div className="prdtl__asd__item prodetail__aside__intro">

            </div>
            <div className="prdtl__asd__item prodetail__aside__purchase">
              {product.countInStock > 0 && (
                <select 
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              )}
            </div>

          </aside>
        </>
      ) }
    </div>
  )
}

export default ProductScreen;
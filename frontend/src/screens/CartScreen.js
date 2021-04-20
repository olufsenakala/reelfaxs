import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const tempHandler = () => {console.log('liebe')}

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  }

  return (
    <div className="cart">
      <div className="cart__contianer">
        <main className="cart__contianer__products__wrapper">
          <div className="bo_header">
            <img width="28" src="/images/cart_menu.png" alt="" />
            <img width="35" src="/images/cart_logo.png" alt="" />
          </div>
          <div className="cart__contianer__products">
            <h3 className="title">Your order</h3>
            <div className="cart__items__wrapper">
              {cartItems.length === 0 
                ? <Message>
                    Your cart is empty&nbsp;
                    <Link style={{textDecoration: 'underline'}} to="/">
                      Go Back
                    </Link>
                  </Message>
                : (
                    <ul className="cart__items">
                      {cartItems.map(item => (
                        <li key={item.product} className="cart__item">
                          <div className="cart__element cart__element--image">
                            <Link className="cart__item__link" to="#">
                              <img src={item.image} alt={item.name} />
                            </Link>
                          </div>
                          <div className="cart__element cart__element--detials">
                            <Link to={`/product/${item.product}`} className="cart__item__link">
                              <h3>{item.name}</h3>
                              <p>{item.description}</p>
                            </Link>
                          </div>
                          <div className="cart__element cart__element--number">
                            <select 
                              value={item.qty}
                              onChange={(e) => 
                                dispatch(
                                  addToCart(item.product, Number(e.target.value))
                                )
                              }
                            >
                              {[...Array(item.countInStock).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="cart__element cart__element--amount">
                            <p>${item.price}</p>
                          </div>
                          <div className="cart__element cart__element--remove">
                            <button
                              onClick={() => removeFromCartHandler(item.product)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                )
              }
            </div>
            <div className="cart__total__wrapper">
              <p>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) 
                items</p>
              <p className="order"> 
                <span className="tag">
                  Order Total:
                </span> $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
                </p>
            </div>
          </div>
        </main>
        <aside className="cart__contianer__card">
          <div className="aside__detials">
            <h2 className="title">Payment details</h2>
            <div className="cart__contianer__cardetails">
              <p className="cart__card__image_title">Card maker</p>

              <div className="cart__card__image__wrapper">
                <div className="cart__card__image">
                <img src="/images/cart_card.png" alt="" />
              </div>
                <div className="cart__card__service">
                <img className="left" src="/images/cart_left_arrow.png" alt="" />
                <img className="main" src="/images/cart_carrier.png" alt="" />
                <img className="right" src="/images/cart_left_arrow.png" alt="" />
              </div>
              </div>

            </div>
            <div className="cart__contianer__userdetails">
              <div className="cart__card__name">
                <p className="title">Name on card</p>
                <input type="text" value="Matthew Gledhill" onChange={tempHandler} />
              </div>
              <div className="cart__card__number">
                <p className="title">Card Number</p>
                <input type="text" value="... ... ... 1234" onChange={tempHandler} />
              </div>
              <div className="cart__card__expiry__wrapper">
                <div className="cart__card__expiry">
                  <p className="title">Expiry date</p>
                  <div className="cart__card__date">
                    <input className="month" type="text" value="01" onChange={tempHandler} />
                    <input className="year" type="text" value="2020" onChange={tempHandler} />
                    <img className="image" src="/images/cart_calendar.png" alt="" />
                  </div>
                </div>
                <div className="cart__card__cvv">
                  <p className="title">CVV Number</p>
                  <div className="cart__card__date">
                    <input className="cvv" type="text" value="* * *" onChange={tempHandler} />
                    <img className="img" src="/images/cart_question.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aside__purchase">
            <button 
              className="cart__pay" 
              type="button"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default CartScreen;
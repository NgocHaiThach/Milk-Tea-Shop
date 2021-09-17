import PropTypes from 'prop-types';
import React from 'react';
import CartHeaderCard from '../CartHeaderCard';
import './style.css'

CartHeaderList.propTypes = {
    cartList: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                idCategory: PropTypes.number.isRequired,
                name: PropTypes.string,
                image: PropTypes.string,
                price: PropTypes.string,
                description: PropTypes.string,
                inventory: PropTypes.number,
                rating: PropTypes.number,
            }),
            quantity: PropTypes.number,
        })),
};

CartHeaderList.defaultProps = {
}

function CartHeaderList(props) {
    const { cartList } = props
    const cartEmpty = cartList.length <= 0
    return (
        <>
            {/* <!-- SEARCH  CART --> */}
            <div className="header__cart">

                <div className="header__cart-wrap">
                    <i className="header__cart-icon fas fa-shopping-cart"></i>
                    {cartEmpty ? '' : <> <span className="header__cart-notice">{cartList.length}</span></>}

                    {/* <!-- No cart: header__cart-list--no-cart --> */}
                    <div className="header__cart-list">
                        {cartEmpty ?
                            <>
                                <img src='https://hoplongtech.com/uploads/1.0.1/emptycart.png' alt="" className="header__cart-no-cart-img" />
                                <span className="header__cart-list-no-cart-msg">
                                    Chưa có sản phẩm
                                </span>
                            </> :
                            <>
                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    {/* <!-- CART ITEM --> */}
                                    {cartList.map(cart => (
                                        <li key={cart.product.id} className="header__cart-item">
                                            <CartHeaderCard cart={cart} />
                                        </li>
                                    ))}

                                </ul>
                                <a href="/cart" className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a>
                            </>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartHeaderList;
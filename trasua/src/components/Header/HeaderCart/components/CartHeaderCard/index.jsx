import React from 'react';
import { formatPrice } from '../../../../../utils/FormatPrice';


CartHeaderCard.propTypes = {};

function CartHeaderCard(props) {
    const { cart } = props
    return (
        <>
            <img src={cart.product.image} alt={cart.product.name} className="header__cart-img" />
            <div className="header__cart-item-info">
                <div className="header__cart-item-head">
                    <h5 className="header__cart-item-name">{cart.product.name}</h5>
                    <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">{formatPrice(cart.product.price)}đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">{cart.quantity}</span>
                    </div>
                </div>
                <div className="header__cart-body">
                    <span className="header__cart-description">
                        Phân loại hàng: Bạc
                    </span>
                    <span className="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        </>
    );
}

export default CartHeaderCard;
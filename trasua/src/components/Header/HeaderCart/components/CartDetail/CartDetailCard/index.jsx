import React, { useState } from 'react';
import { formatPrice } from '../../../../../../utils/FormatPrice';

CartDetailCard.propTypes = {};

function CartDetailCard(props) {
    const { item, onDeleteItemInCartClick } = props
    const totalPrice = (+item.product.price * +item.quantity)

    const clickDeleteItem = (item) => {
        if (onDeleteItemInCartClick) {
            onDeleteItemInCartClick(item)
        }

    }
    const [quantity, setQuantity] = useState('1')
    const onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            setQuantity(quantity)
        }
    }
    const { itemQuantity } = item.quantity > 0 ? item.quantity : quantity


    return (
        <>
            <div className="product-item">

                <div className="col l-3 product-item__image">
                    <img src={item.product.image} />
                </div>
                <div className="col l-3 product-details">
                    <span className="product-item__title">{item.product.name}</span>
                    <p className="product-item__description">{item.product.description}</p>
                </div>
                <div className="col l-2 product-item__price">{formatPrice(item.product.price)}đ</div>
                <div className="col l-1 product-item__quantity">
                    <div className="product-quantity__number">
                        <span class="product-quantity__number-minus">- </span>
                        <input class="product-quantity__number-text" type="text" value={itemQuantity} />
                        <span
                            class="product-quantity__number-plus"
                            onClick={() => { onUpdateQuantity(item.product, item.quantity + 1) }}
                        > +</span>
                    </div>
                </div>
                <div className="col l-1 product-item__removal">
                    <span
                        className="remove__product-item"
                        onClick={() => { clickDeleteItem(item) }}
                    >
                        Xoá
                    </span>
                </div>
                <div className="col l-2 product-item__line-price">{formatPrice(totalPrice)}đ</div>
            </div>
            <div className="border-product"></div>
        </>
    );
}

export default CartDetailCard;
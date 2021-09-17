import React from 'react';
import CartDetailCard from '../CartDetailCard';
import CartDetailEmpty from '../CartDetailEmpty';
import CartDetailResult from '../CartDetailResult';
import CartDetailTitle from '../CartDetailTitle';

import './style.css'

CartDeatilList.propTypes = {};

function CartDeatilList(props) {
    const { cartList, handleDeleteItemInCart } = props
    const cartEmpty = cartList.length <= 0
    const showCartDeatilResult = (cartList) => {
        let result = null;
        if (cartList.length > 0) {
            result = <CartDetailResult cartList={cartList} />
        }
        return result
    }

    return (
        cartEmpty ?
            <>
                <CartDetailEmpty />
            </> :
            <div className="grid wide">

                <div className="shopping-cart">

                    <div className="row">
                        <div class="col l-12">
                            <CartDetailTitle />
                        </div>
                    </div>

                    <div className="row">
                        {cartList.map(cart => (
                            <div key={cart.product.id} className="col l-12">
                                <CartDetailCard
                                    item={cart}
                                    onDeleteItemInCartClick={handleDeleteItemInCart}
                                />

                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col l-12">
                            {showCartDeatilResult(cartList)}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CartDeatilList;
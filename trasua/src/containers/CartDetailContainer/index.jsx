import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CartDeatilList from '../../components/Header/HeaderCart/components/CartDetail/CartDetailList';
import { ToastContainer } from 'react-toastify';
import { removeCart } from '../HeaderCartContainer/cartSlice';

CartDetailContainer.propTypes = {};

function CartDetailContainer(props) {
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const style = {
        fontSize: 17
    }

    const handleDeleteItemInCart = (productItemValues) => {
        const action = removeCart(productItemValues)
        dispatch(action)
    }
    return (
        <>
            <CartDeatilList
                cartList={carts}
                handleDeleteItemInCart={handleDeleteItemInCart}
            />
            <ToastContainer style={style} />
        </>
    );
}

export default CartDetailContainer;
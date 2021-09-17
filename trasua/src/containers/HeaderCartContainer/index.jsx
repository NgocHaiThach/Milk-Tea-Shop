import React from 'react';
import { useSelector } from 'react-redux';
import CartHeaderList from '../../components/Header/HeaderCart/components/CartHeaderList';


HeaderCartContainer.propTypes = {};

function HeaderCartContainer(props) {
    const carts = useSelector(state => state.carts)
    console.log('list cart2', carts)
    return (
        <>
            <CartHeaderList cartList={carts} />
        </>
    );
}

export default HeaderCartContainer;
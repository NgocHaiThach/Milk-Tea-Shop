import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ProductList from '../../components/Container/Product/components/ProductList';
import { toSlug } from '../../utils/ToSlug';


ProductContainer.propTypes = {};

function ProductContainer(props) {
    const productList = useSelector(state => state.products)

    const history = useHistory()

    const handleProductItemClick = (product) => {
        console.log('detail', product)
        const slug = toSlug(product.product.name)
        const detailProductUrl = `/product/${slug}`
        history.push(detailProductUrl)
    }
    return (
        <div>
            <ProductList productList={productList} onProductItemClick={handleProductItemClick} />
        </div>
    );
}

export default ProductContainer;
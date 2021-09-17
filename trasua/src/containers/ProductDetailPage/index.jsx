import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProductItemDetail from '../../components/Container/Product/components/ProductItemDetail';
import { toSlug } from '../../utils/ToSlug';
import { addCart } from '../HeaderCartContainer/cartSlice';

ProductDetailPage.propTypes = {};


function ProductDetailPage(props) {

    const dispatch = useDispatch()
    const history = useHistory()
    const { slug } = useParams()
    const detailProduct = useSelector(state => {
        const foundProduct = state.products.find(x => toSlug(x.product.name) === slug)
        return foundProduct
    })

    const productItemValues = detailProduct

    const handleAddCartClick = (productValues) => {
        const action = addCart(productValues)
        dispatch(action)
    }

    const style = {
        fontSize: 17
    }

    return (
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className="col l-11">
                        <div class="card">
                            <ProductItemDetail
                                productItemValues={productItemValues}
                                handleAddCartClick={handleAddCartClick}
                            />
                            <ToastContainer style={style} />
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
import React from 'react';
import './style.css'
import './main.js'
import { formatPrice } from '../../../../../utils/FormatPrice';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ProductItemDetail.propTypes = {};

function ProductItemDetail(props) {
    const { productItemValues, handleAddCartClick } = props

    const onAddToCart = (productValues) => {
        handleAddCartClick(productValues)

        toast.info('Thêm vào giỏ hàng thành công', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    return (
        <>
            <div class="wrapper row">
                <div class="col l-6">
                    <div class="preview-pic tab-content">
                        <div class="tab-pane active" id="pic-1">
                            <img
                                src={productItemValues.product.image} />
                        </div>
                    </div>
                </div>
                <div class="col l-6">
                    <div className="product__detail">
                        <h3 class="product__title">{productItemValues.product.name}</h3>

                        <p class="product__description">{productItemValues.product.description}</p>
                        <h4 class="product__price">Tổng Giá: <span>{formatPrice(productItemValues.product.price)}đ</span></h4>

                        <h5 class="sizes">sizes:
                            <span class="size size__active">s</span>
                            <span class="size">m</span>
                            <span class="size">l</span>
                        </h5>
                        <div class="quantity">
                            <h5 class="quantity__title">số lượng:
                            </h5>
                            <div class="quantity__number">
                                <span class="quantity__number-minus">- </span>
                                <input class="quantity__number-text" type="text" value="1" />
                                <span class="quantity__number-plus"> +</span>
                            </div>
                        </div>
                        <div class="size-ice">
                            <p class="size-ice__title">Ice:</p>
                            <span class="size-ice__item">
                                <input checked="checked" type="radio" id="ice" name="ice" value="30" />
                                <label for="ice">25%</label><br />
                            </span>
                            <span class="size-ice__item">
                                <input type="radio" id="ice" name="ice" value="30" />
                                <label for="ice">50%</label><br />
                            </span>
                            <span class="size-ice__item">
                                <input type="radio" id="ice" name="ice" value="30" />
                                <label for="ice">75%</label><br />
                            </span>
                            <span class="size-ice__item">
                                <input type="radio" id="ice" name="ice" value="30" />
                                <label for="ice">100%</label><br />
                            </span>
                        </div>

                        <div class="size-sugar">
                            <p class="size-sugar__title">Sugar:</p>
                            <span class="size-sugar__item">
                                <input checked="checked" type="radio" id="sugar" name="sugar" value="30" />
                                <label for="sugar">25%</label><br />
                            </span>
                            <span class="size-sugar__item">
                                <input type="radio" id="sugar" name="sugar" value="30" />
                                <label for="sugar">50%</label><br />
                            </span>
                            <span class="size-sugar__item">
                                <input type="radio" id="sugar" name="sugar" value="30" />
                                <label for="sugar">75%</label><br />
                            </span>
                            <span class="size-sugar__item">
                                <input type="radio" id="sugar" name="sugar" value="30" />
                                <label for="sugar">100%</label><br />
                            </span>
                        </div>

                        <div class="action">
                            <button
                                onClick={() => { onAddToCart(productItemValues) }}
                                class="add-to-cart btn btn-default"
                                type="button">
                                Thêm vào giỏ
                            </button>
                            <div class="action-select-toping">

                                <select id="test">
                                    <option value="1">American Black Bear</option>
                                    <option value="2">Asiatic Black Bear</option>
                                    <option value="3">Brown Bear</option>
                                    <option value="4">Giant Panda</option>
                                    <option value="5">Sloth Bear</option>
                                    <option value="6">Sun Bear</option>
                                    <option value="7">Polar Bear</option>
                                    <option value="8">Spectacled Bear</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}

export default ProductItemDetail;
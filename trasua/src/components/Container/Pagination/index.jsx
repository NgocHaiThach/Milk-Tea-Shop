import React from 'react';
import './style.css'

Pagination.propTypes = {};

function Pagination(props) {
    return (
        <>
            <ul class="pagination home-product__pagination">
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        <i class="pagination-item__icon fas fa-angle-left"></i>
                    </a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link pagination-item--active">1</a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">2</a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">3</a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">4</a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">5</a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">...</a>
                </li>
                <li class="pagination-item">
                    <a href="" class="pagination-item__link">14</a>
                </li>

                <li class="pagination-item">
                    <a href="" class="pagination-item__link">
                        <i class="pagination-item__icon fas fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Pagination;
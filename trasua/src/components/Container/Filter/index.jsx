import React from 'react';
import './style.css'

Filter.propTypes = {};

function Filter(props) {
    return (
        <>
            <div class="home-filter hide-on-mobile-tablet">
                <span class="home-filter__lable">Sắp xếp theo</span>
                <button class="home-filter__btn btn">Phổ biến</button>
                <button class="home-filter__btn btn btn--primary">Mới nhất</button>
                <button class="home-filter__btn btn">Bán chạy</button>
                <div class="select-input">
                    <span class="select-input__lable">Giá</span>
                    <i class="select-input__icon fas fa-angle-down"></i>
                    <ul class="select-input__list">
                        <li class="select-input__item">
                            <a href="" class="select-input__link">Giá: Thấp đến Cao</a>
                        </li>
                        <li class="select-input__item">
                            <a href="" class="select-input__link">Giá: Cao đến Thấp</a>
                        </li>
                    </ul>
                </div>

                <div class="home-filter__page">
                    <span class="home-filter__page-num">
                        <span class="home-filter__page-current">1</span>/14
                    </span>

                    <div class="home-filter__page-control">
                        <a href="" class="home-filter__page-btn home-filter__page-btn--disabled">
                            <i class="home-filter__page-icon fas fa-angle-left"></i>
                        </a>
                        <a href="" class="home-filter__page-btn">
                            <i class="home-filter__page-icon fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;
import React from 'react';
import './style.css'

Category.propTypes = {};

function Category(props) {
    return (
        <div class="col l-2 m-0 c-0">
            <nav class="category">
                <h3 class="category__heading">
                    <i class="category__heading-icon fas fa-list"></i>
                    Danh Mục
                </h3>
                <ul class="category-list">
                    <li class="category-item category-item--active">
                        <a href="#" class="category-item__link">Trang điểm mặt</a>
                    </li>
                    <li class="category-item">
                        <a href="#" class="category-item__link">Trang điểm môi</a>
                    </li>
                    <li class="category-item">
                        <a href="#" class="category-item__link">Trang điểm mắt</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Category;
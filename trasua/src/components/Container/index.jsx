import React from 'react';
import ProductContainer from '../../containers/ProductContainer';
import Category from './Category';
import Filter from './Filter';
import Pagination from './Pagination';
import './style.css'

Container.propTypes = {

};

function Container(props) {
    return (
        <div class="app__container">
            <div class="grid wide">
                <div class="row sm-gutter app__content">
                    <Category />
                    <div class="col l-10 m-12 c-12">
                        <Filter />
                        <ProductContainer />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
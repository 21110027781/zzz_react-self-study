import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from './../../actions/indexActions';

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                );
            })
        }
        return result;
    }

    render() {
        var { products } = this.props;
        return (
            <div className="row row-product">
                {this.showProducts(products)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productsReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
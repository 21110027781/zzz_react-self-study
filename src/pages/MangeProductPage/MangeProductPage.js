import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/indexActions';
import ProductListManage from './../../components/ProductList/ProductListManage';
import ProductItemManage from './../../components/ProductItem/ProductItemManage';




class MangeProductPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItemManage
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }

    render() {
        let { products } = this.props;
        return (
            <div className="row">
                <div className="col-12">
                    <ProductListManage>
                        {this.showProducts(products)}
                    </ProductListManage>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.productsReducer
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MangeProductPage);
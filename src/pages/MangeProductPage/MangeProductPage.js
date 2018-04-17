import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/indexActions';
import ProductListManage from './../../components/ProductList/ProductListManage';
import ProductItemManage from './../../components/ProductItem/ProductItemManage';



class MangeProductPage extends Component {



    componentDidMount() {
        this.props.fetchAllProducts();
    }
    //e, { activePage }
    handlePaginationChange = (a, b) => {
        this.props.optionPaging.activePage = b.activePage;
        console.log(this.props.optionPaging.activePage);
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
        let { products, optionPaging } = this.props;
        return (
            <ProductListManage optionPaging={optionPaging} handlePaginationChange={this.handlePaginationChange}>
                {this.showProducts(products)}
            </ProductListManage>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.productsReducer,

        optionPaging: {
            activePage: 5,
            boundaryRange: 1,
            siblingRange: 1,
            showEllipsis: true,
            showFirstAndLastNav: true,
            showPreviousAndNextNav: true,
            totalPages: 50,
        }
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
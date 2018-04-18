import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/indexActions';
import ProductListManage from './../../components/ProductList/ProductListManage';
import ProductItemManage from './../../components/ProductItem/ProductItemManage';



class MangeProductPage extends Component {
    

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        let { optionPaging } = this.props;
        this.props.fetchAllProducts(optionPaging.activePage, optionPaging.limitItem);
        console.log('component DID MOUNT')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
        if(newProps){
            console.log(newProps);
            //this.props.fetchAllProducts(newProps.optionPaging.activePage);
        }
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('should Component Update')
        //this.props.fetchAllProducts(newProps.optionPaging.activePage, newProps.optionPaging.limitItem);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
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
        console.log('test')
        return (
            <ProductListManage>
                {this.showProducts(products)}
            </ProductListManage>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.productsReducer,
        optionPaging: state.pagingProductReducer
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: (page, limit) => {
            dispatch(actFetchProductsRequest(page, limit));
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MangeProductPage);
import React, { Component } from 'react';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from './../../actions/indexActions';
import ProductList from './../../components/ProductList/ProductList';
import CategoryList from './../../components/CategoryList/CategoryList';
import { Grid } from 'semantic-ui-react';


class ProductPage extends Component {
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
            <Grid container>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <CategoryList />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <ProductList>
                            {this.showProducts(products)}
                        </ProductList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            // <div className="row">
            //     <div className="col-3">

            //     </div>
            //     <div className="col-9">
            //         <ProductList>
            //             {this.showProducts(products)}
            //         </ProductList>
            //     </div>
            // </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
import React, { Component } from 'react';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actAddToCart } from './../../actions/indexActions';
import ProductList from './../../components/ProductList/ProductList';
import CategoryList from './../../components/CategoryList/CategoryList';
import { Grid } from 'semantic-ui-react';


class ProductPage extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    showProducts = (products) => {
        var result = null;
        let { onAddToCart } = this.props;
        let { match } = this.props;
        let url = match.url;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onAddToCart={onAddToCart}
                        urlTo={`${url}/${product.id}`}
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
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
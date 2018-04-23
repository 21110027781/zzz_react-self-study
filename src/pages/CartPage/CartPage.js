import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'semantic-ui-react';
import CartItem from './../../components/Cart/CartItem';
import CartResult from './../../components/Cart/CartResult';
import { actDeleteProductInCart, actUpdateProductInCart } from './../../actions/indexActions';


class CartPage extends Component {
    showItemCart = (cart) => {
        let result = <Table.Row>
            <Table.Cell colSpan="5" textAlign="center">Khong co san pham</Table.Cell>
        </Table.Row>;

        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={item.product.id}
                    indexStt={index + 1}
                    item={item}
                    onMinusProductInCart={this.props.onMinusProductInCart}
                    onPlusProductInCart={this.props.onPlusProductInCart}
                    onDeleteProductInCart={this.props.onDeleteProductInCart}
                />

            })
        }
        return result;
    }

    showResultCart = (cart) => {
        if (cart.length > 0) {
            return <CartResult cart={cart} />
        }
        return null;
    }

    render() {
        return (
            <Container>
                <Table celled inverted selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.showItemCart(this.props.cart)}
                        {this.showResultCart(this.props.cart)}
                    </Table.Body>
                </Table>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartProductReducer
    };
}
function mapDispatchToProps(dispatch, props) {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onPlusProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        },
        onMinusProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Cart extends Component {
    countItemInCart = (carts) => {
        var result = 0;
        if (carts.length) {
            carts.map((cart, index) => {
                return result += cart.quantity;
            })
        }
        return result;
    }

    render() {
        return (
            <Menu.Menu position='right'>
                <Menu.Item as={Link} to='/cart' name='cart' className={this.props.activeClass}>
                    Giỏ hàng có {this.countItemInCart(this.props.itemCarts)} sản phẩm
                </Menu.Item>
                <Menu.Item as={Link} to='/login' name='login'>
                    Login
                </Menu.Item>
            </Menu.Menu>
        );
    }
}
function mapStateToProps(state) {
    return {
        itemCarts: state.cartProductReducer
    };
}

export default connect(
    mapStateToProps,
)(Cart);
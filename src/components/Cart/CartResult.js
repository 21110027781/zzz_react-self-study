import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class CartResult extends Component {
    showTotalAmount = (cart) => {
        let total= 0;
        if(cart.length > 0){
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }
    render() {
        return (
            <Table.Row>
                <Table.Cell colSpan="4" textAlign="right">Tổng tiền</Table.Cell>
                <Table.Cell>{this.showTotalAmount(this.props.cart)} VND</Table.Cell>
            </Table.Row>
        );
    }
}

export default CartResult;
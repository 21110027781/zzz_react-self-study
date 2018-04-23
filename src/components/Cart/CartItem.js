import React, { Component } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';


class CartItem extends Component {
    render() {
        var { product, quantity } = this.props.item;
        var { indexStt } = this.props;
        return (
            <Table.Row>
                <Table.Cell>{indexStt}</Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                    {quantity}
                </Table.Cell>
                <Table.Cell>
                    <Button.Group color='blue'>
                        <Button onClick={() => this.props.onMinusProductInCart(product, quantity - 1)}><Icon name="minus" /></Button>
                        <Button onClick={() => this.props.onPlusProductInCart(product, quantity + 1)}><Icon name="plus" /></Button>
                    </Button.Group>
                    <Button color='red' onClick={() => this.props.onDeleteProductInCart(product)}>Delete</Button>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default CartItem;
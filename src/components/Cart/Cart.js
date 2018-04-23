import React from 'react';
import { Table, Container, Button } from 'semantic-ui-react';


const Cart = () => {
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
                    <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>
                            <Button color='blue'>Update</Button>
                            <Button color='red'>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan="4" textAlign="right">Tổng tiền</Table.Cell>
                        <Table.Cell>200.000 VND</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    );
};

export default Cart;
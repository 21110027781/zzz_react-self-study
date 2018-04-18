import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';


class ProductItemManage extends Component {

    onDelete = (id) => {
        if (confirm('Xóa sản phẩm')) { // eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        return (
            <Table.Row>
                <Table.Cell>{index+1}</Table.Cell>
                <Table.Cell>
                    <img width={50} src={product.imageUrl} alt={product.name} />
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>
                    <Button color='black'>Sửa</Button>
                    <Button color='red' onClick={() => this.onDelete(product.id)}>Xóa</Button>
                </Table.Cell>
            </Table.Row>
            // <tr>
            //     <th scope="row">{index}</th>
            //     <td><img width={50} src={product.imageUrl} alt={product.name} /></td>
            //     <td>{product.name}</td>
            //     <td>{product.description}</td>
            //     <td>

            //     </td>
            // </tr>
        );
    }
}

export default ProductItemManage;
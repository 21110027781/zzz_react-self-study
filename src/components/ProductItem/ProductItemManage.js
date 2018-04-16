import React, { Component } from 'react';

class ProductItemManage extends Component {

    onDelete = (id) => {
        if(confirm('Xóa sản phẩm')){ // eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        return (
            <tr>
                <th scope="row">{index}</th>
                <td><img width={50} src={product.imageUrl} alt={product.name} /></td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                    <button type="button" className="btn btn-secondary">Sửa</button>
                    <button type="button" className="btn btn-danger m-l-5" onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItemManage;
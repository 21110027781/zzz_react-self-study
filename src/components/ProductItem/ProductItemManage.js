import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ProductItemManage extends Component {

    onDelete = (id) => {
        if (confirm('Xóa sản phẩm')) { // eslint-disable-line
            this.props.onDelete(id);
        }
    }

    onEdit = (id) => {
        this.props.onGetDetail(id);
    }


    render() {
        var { product, index } = this.props;
        return (
            <Table.Row>
                <Table.Cell>{index}</Table.Cell>
                <Table.Cell>{product.id}</Table.Cell>
                <Table.Cell>
                    <img width={50} src={product.imageUrl} alt={product.name} />
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>
                    <Button color='teal' onClick={() => this.onEdit(product.id)}>Sửa</Button>
                    <Button color='red' onClick={() => this.onDelete(product.id)}>Xóa</Button>
                </Table.Cell>
            </Table.Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        //product: state.updateProductReducer,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // fetchAllProducts: (page, limit) => {
        //     dispatch(actFetchProductsRequest(page, limit));
        // }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItemManage);
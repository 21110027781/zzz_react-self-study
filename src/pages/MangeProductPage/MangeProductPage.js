import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    actFetchAllProductsRequest,
    actFetchProductsRequest,
    actDeleteProductRequest,
    pagingTask,
    actUpdateProductRequest,
    actGetProductRequest,
    closeModalEditProduct,
    openModalEditProduct,
    actClearProduct,
    actAddProductRequest,
    actSearchProductRequest,

} from './../../actions/indexActions';

import ProductListManage from './../../components/ProductList/ProductListManage';
import ProductItemManage from './../../components/ProductItem/ProductItemManage';
import { Modal, Button, Form, Container, Divider, Checkbox, Input } from 'semantic-ui-react';

class MangeProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false,
            description: '',
            price: ''
        }
        this.emitChangeDebounced = _.debounce(this.emitChangeSearch, 250);
    }

    componentWillMount() {
        this.props.fetchAllProducts();
    }

    componentDidMount() {
        let { optionPaging } = this.props;
        this.props.fetchAllPaginationProducts(optionPaging.activePage, optionPaging.limitItem);
        
    }

    componentWillReceiveProps(nextProps) {
        this.onClearFormEditProduct();
        if (nextProps && nextProps.product && nextProps.product.id) {
            this.setState({
                id: nextProps.product.id,
                name: nextProps.product.name,
                price: nextProps.product.price,
                status: nextProps.product.status,
                description: nextProps.product.description
            });
        } else if (!nextProps.product) {
            this.onClearFormEditProduct();
        }
    }

    showProducts = (products) => {
        let { optionPaging } = this.props;
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                let iStt = (optionPaging.activePage - 1) * optionPaging.limitItem + (index + 1);
                return (
                    <ProductItemManage
                        key={index}
                        product={product}
                        index={iStt}
                        onDelete={this.onDelete}
                        onUpdate={this.onUpdate}
                        onGetDetail={this.onGetDetail}
                    />
                )
            })
        }
        return result;
    }

    onPageChange = (data) => {
        this.props.changePaging(data);
        this.props.fetchAllPaginationProducts(data.activePage);
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    onUpdate = (data) => {
        this.props.onUpdateProduct(data);
    }

    onGetDetail = (id) => {
        this.props.onOpenModal();
        this.props.onGetProduct(id);
    }

    handleChange = (e, data) => {
        let target = e.target;
        let name;
        let value;
        if (data && data.type) {
            name = data.name;
            value = data.checked;
        } else if(data === undefined) {
            name = target.name;
            value = target.value;
        }

        if(name !== undefined && value !== undefined){
            this.setState({
                [name]: value
            })
        }
    }

    onClearFormEditProduct = () => {
        this.setState({
            id: '',
            name: '',
            status: false,
            description: '',
            price: ''
        })
    }

    onCloseModalEditProduct = () => {
        this.props.onResetState();
        this.props.onCloseModal();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { id, name, price, status, description } = this.state;
        let product = {
            id: id,
            name: name,
            price: price,
            status: status,
            description: description
        }
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        this.props.onCloseModal();
    }

    handleSearchDebounce = (e) => {
        this.emitChangeDebounced(e.target.value);
    }
    emitChangeSearch = (value) => {
        let { optionPaging } = this.props;
        this.props.onSearchProduct(value, optionPaging.activePage, optionPaging.limitItem);
    }


    render() {
        let { products, isDisplayModalEdit } = this.props;
        let { name, price, status, description } = this.state;
        return (
            <div>
                <Container>
                    <Button primary onClick={this.props.onOpenModal}>Thêm sản phẩm</Button>
                    <Divider hidden />
                    <Input 
                        onChange={this.handleSearchDebounce}
                        placeholder='Search...' 
                    />
                    <Divider hidden />
                </Container>
                <ProductListManage onPageChange={this.onPageChange} optionPaging={this.props.optionPaging}>
                    {this.showProducts(products)}
                </ProductListManage>

                <Modal open={isDisplayModalEdit} onClose={this.onCloseModalEditProduct}>
                    <Modal.Header>Edit Product</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Tên sản phẩm</label>
                                <input
                                    type="text"
                                    name='name'
                                    value={name}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Price</label>
                                <input
                                    type="text"
                                    name='price'
                                    value={price}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    name='status'
                                    checked={status}
                                    label='Status'
                                    onChange={this.handleChange}
                                />
                                {/* <input
                                    type="checkbox"
                                    name='status'
                                    value={status}
                                    onChange={this.handleChange}
                                /> */}
                            </Form.Field>
                            <Form.Field>
                                <label>Mô tả</label>
                                <input
                                    type="text"
                                    name='description'
                                    value={description}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Button type='submit' color='green'>Submit</Button>
                        </Form>
                    </Modal.Content>
                    {/* <Modal.Actions>
                        <Button color='black' onClick={this.onCloseModalEditProduct}>
                            Nope
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                    </Modal.Actions> */}
                </Modal>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.productsReducer,
        optionPaging: state.pagingProductReducer,
        product: state.updateProductReducer,
        isDisplayModalEdit: state.modalProductReducer
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPaginationProducts: (page, limit) => {
            dispatch(actFetchProductsRequest(page, limit));
        },
        fetchAllProducts: () => {
            dispatch(actFetchAllProductsRequest());
        },
        
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        },
        changePaging: (optionPaging) => {
            dispatch(pagingTask(optionPaging));
        },
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
        onOpenModal: () => {
            dispatch(openModalEditProduct());
        },
        onCloseModal: () => {
            dispatch(closeModalEditProduct());
        },
        onResetState: () => {
            dispatch(actClearProduct());
        },
        onGetProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onSearchProduct: (value, page, limit) => {
            dispatch(actSearchProductRequest(value, page, limit));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MangeProductPage);
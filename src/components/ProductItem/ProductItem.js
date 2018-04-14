import React, { Component } from 'react';


class ProductItem extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="col-sm-6 col-md-4">
                <div className="card">
                    <img className="card-img-top" src={product.imageUrl} alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.description}</p>
                        <a className="btn btn-primary text-white">Add To Cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
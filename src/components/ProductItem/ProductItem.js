import React, { Component } from 'react';


class ProductItem extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="card">
                    <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a className="btn btn-primary text-white">Add To Cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
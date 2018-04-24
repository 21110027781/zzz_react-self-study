import React, { Component } from 'react';

class ProductDetaiItem extends Component {
    render() {
        let { match } = this.props;
        let name = match.params.id;
        return (
            <div>
                Chi tiet san pham {name}
            </div>
        );
    }
}

export default ProductDetaiItem;
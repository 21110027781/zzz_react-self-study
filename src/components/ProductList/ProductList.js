import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class ProductList extends Component {
    render() {
        return (
            <Grid columns={4}>
                {this.props.children}
            </Grid>
        );
    }
}

export default ProductList;

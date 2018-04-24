import React, { Component } from 'react';
import { Grid, Button, Card, Image } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import ProductDetaiItem from './ProductDetaiItem';

class ProductItem extends Component {
    render() {
        var { product, urlTo } = this.props;
        return (
            <Grid.Column>
                <Route path="/products/:id" component={ProductDetaiItem} />
                <Card>
                    <NavLink to={urlTo}>
                        <Image src={product.imageUrl} alt={product.name} />
                    </NavLink>
                    <Card.Content>
                        <Card.Header>
                            {product.name}
                        </Card.Header>
                        <Card.Description>
                            {product.description}
                        </Card.Description>
                        <Card.Description>
                            {product.price} VNĐ
                        </Card.Description>
                        <Button onClick={() => this.props.onAddToCart(product)}>Add To Cart</Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
        );
    }
}

export default ProductItem;
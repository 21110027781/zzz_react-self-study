import React, { Component } from 'react';
import { Grid, Button, Card, Image } from 'semantic-ui-react';

class ProductItem extends Component {
    render() {
        var { product } = this.props;
        return (
            <Grid.Column>
                <Card>
                    <Image src={product.imageUrl} alt={product.name} />
                    <Card.Content>
                        <Card.Header>
                            {product.name}
                        </Card.Header>
                        <Card.Description>
                            {product.description}
                        </Card.Description>
                        <Button onClick={() => this.props.onAddToCart(product)}>Add To Cart</Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
            // <div className="col-sm-6 col-md-4">
            //     <div className="card">
            //         <img className="card-img-top" src={product.imageUrl} alt={product.name} />
            //         <div className="card-body">
            //             <h4 className="card-title">{product.name}</h4>
            //             <p className="card-text">{product.description}</p>
            //             <a className="btn btn-primary text-white">Add To Cart</a>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default ProductItem;
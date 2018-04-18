import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class CategoryList extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment>Máy ảnh</Segment>
                <Segment>Máy ảnh</Segment>
                <Segment>Đồ gia dụng</Segment>
                <Segment>Phụ kiện</Segment>
                <Segment>Sạc dự phòng</Segment>
            </Segment.Group>
        );
    }
}

export default CategoryList;
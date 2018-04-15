import React, { Component } from 'react';


class CategoryList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item active"><a>Điện thoại - Laptop</a></li>
                    <li className="list-group-item"><a>Máy ảnh</a></li>
                    <li className="list-group-item"><a>Đồ gia dụng</a></li>
                    <li className="list-group-item"><a>Phụ kiện</a></li>
                    <li className="list-group-item"><a>Sạc dự phòng</a></li>
                </ul>
            </div>
        );
    }
}

export default CategoryList;
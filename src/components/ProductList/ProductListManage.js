import React, { Component } from 'react';
import { Container, Table, Pagination } from 'semantic-ui-react';

class ProductListManage extends Component {

    


    

    render() {
        const {
            activePage,
            boundaryRange,
            siblingRange,
            showEllipsis,
            showFirstAndLastNav,
            showPreviousAndNextNav,
            totalPages,
        } = this.props.optionPaging;
        return (
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Hình ảnh</Table.HeaderCell>
                            <Table.HeaderCell>Tên sản phẩm</Table.HeaderCell>
                            <Table.HeaderCell>Mô tả</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.children}
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <Pagination
                                    activePage={activePage}
                                    boundaryRange={boundaryRange}
                                    onPageChange={(e, activePage) => this.props.handlePaginationChange(e,activePage)}
                                    size='mini'
                                    siblingRange={siblingRange}
                                    totalPages={totalPages}
                                    // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                                    ellipsisItem={showEllipsis ? undefined : null}
                                    firstItem={showFirstAndLastNav ? undefined : null}
                                    lastItem={showFirstAndLastNav ? undefined : null}
                                    prevItem={showPreviousAndNextNav ? undefined : null}
                                    nextItem={showPreviousAndNextNav ? undefined : null}
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>
            // <table className="table table-striped table-dark">
            //     <thead>
            //         <tr>
            //             <th scope="col">#</th>
            //             <th scope="col">Hình ảnh</th>
            //             <th scope="col">Tên sản phẩm</th>
            //             <th scope="col">Mô tả</th>
            //             <th scope="col">Action</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {this.props.children}
            //     </tbody>
            // </table>
        );
    }
}

export default ProductListManage;
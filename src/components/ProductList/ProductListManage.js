import React, { Component } from 'react';
import { Container, Table, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { pagingTask } from './../../actions/indexActions';


class ProductListManage extends Component {

    render() {
        let {
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
                                    onPageChange={(e, data) => this.props.changePaging(e, data)}
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
        );
    }
}


const  mapStateToProps = (state) => {
    return {
        optionPaging: state.pagingProductReducer
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        changePaging: (event, optionPaging) => {
            dispatch(pagingTask(optionPaging));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListManage);
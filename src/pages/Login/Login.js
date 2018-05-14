import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Form } from 'semantic-ui-react'


function mapStateToProps(state) {
    return {

    };
}

class Login extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.password,
            user: this.state.username
        }
        itemsRef.push(item);
        this.setState({
            password: '',
            username: ''
        });
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' onChange={this.handleChange} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(Login);
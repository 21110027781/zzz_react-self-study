import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Form, Grid } from 'semantic-ui-react'
import firebase, { auth, provider } from './../../firebase.js';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            passwordOne: '',
            passwordTwo: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {
            // username,
            email,
            passwordOne,
        } = this.state;

        auth.createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                console.log(authUser);
                this.props.history.push("/login");
            })
            .catch(error => {
                alert(error);
            });
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={4}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field>
                                    <label>Email</label>
                                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input type="text" name="passwordOne" onChange={this.handleChange} value={this.state.passwordOne} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Re-Password</label>
                                    <input type="text" name="passwordTwo" onChange={this.handleChange} value={this.state.passwordTwo} />
                                </Form.Field>
                                <Form.Field>
                                    <Button fluid type='submit' color="blue">Submit</Button>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Register;
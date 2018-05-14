import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Form, Grid } from 'semantic-ui-react'
import firebase, { auth, provider } from './../../firebase.js';
import { Link } from 'react-router-dom';



function mapStateToProps(state) {
    return {

    };
}

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            users: [],
            user: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });


        const usersRef = firebase.database().ref('users');
        usersRef.on('value', (snapshot) => {
            let users = snapshot.val();
            let newState = [];
            for (let user in users) {
                newState.push({
                    id: user,
                    email: users[user].email,
                    password: users[user].password
                });
            }
            this.setState({
                users: newState
            });
        });
    }
    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        
        const {
            // username,
            email,
            password,
        } = this.state;

        auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                this.setState({
                    user
                });
                //this.props.history.push("/");
            })
            .catch(error => {
                alert(error);
            });

        // const usersRef = firebase.database().ref('users');
        // const user = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // usersRef.push(user);
        // this.setState({
        //     email: '',
        //     password: ''
        // });
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={4}>
                            {this.state.user ?
                                <button onClick={this.logout}>Log Out</button>
                                :
                                <button onClick={this.login}>Log In</button>
                            }
                            <ul>
                                {this.state.users.map((user) => {
                                    return (
                                        <li key={user.id}>
                                            <h3>{user.email}</h3>
                                            <p>{user.password}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field>
                                    <label>Email</label>
                                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password} />
                                </Form.Field>
                                <Form.Field>
                                    <Button fluid type='submit' color="blue">Submit</Button>
                                </Form.Field>
                                <Button fluid as={Link} to="/register" color="green">Register</Button>

                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(Login);
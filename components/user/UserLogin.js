import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
// import Error from '../lib/ErrorMessage'
import { CURRENT_USER_QUERY } from '../PageWrapper'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import styled from 'styled-components'

const Form = styled.form`
    width: 80%;
    margin: 0 auto;
    max-width: 400px;
    display: flex;
    flex-direction: column;

    .submit-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 200px;
        padding: 7px;
        margin-top: 30px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: 0.4s;
        span {
            font-size: 24px;
        }

        &:hover {
            background: green;
            color: white;
            /* border: unset; */
        }
    }
`

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            name
        }
    }
`

class UserLogin extends Component {
    state = {
        name: '',
        password: '',
        email: '',
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [id]: val })
    }
    render() {
        return (
            <Mutation
                mutation={SIGNIN_MUTATION}
                variables={this.state}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
                {(login, { error, loading }) => (
                    <div className="text-content-title-wrapper">
                        <div className="text-content">
                            <Form
                                method="post"
                                onSubmit={async e => {
                                    e.preventDefault()
                                    await login()
                                    this.setState({
                                        name: '',
                                        email: '',
                                        password: '',
                                    })
                                    Router.push('/error', '/admin')
                                }}
                            >
                                <TextField
                                    type="text"
                                    id="email"
                                    label="email"
                                    className="textField"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />

                                <TextField
                                    type="password"
                                    id="password"
                                    label="password"
                                    className="textField"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />

                                <Button
                                    margin="normal"
                                    type="submit"
                                    variant="outlined"
                                    color="default"
                                    size="small"
                                    className="submit-btn"
                                >
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                )}
            </Mutation>
        )
    }
}

export default UserLogin

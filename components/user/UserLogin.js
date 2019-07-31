import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
import Error from '../lib/ErrorMessage'
import { CURRENT_USER_QUERY } from '../PageWrapper'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import styled from 'styled-components'

const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;

    .submit-btn {
        margin-top: 30px;
        width: 100px;
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
    // saveToState = e => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value

        this.setState({ [id]: val }, () => {
            // console.log('this.state.id = ', this.state)
        })
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
                                <h3>Log in...</h3>
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
                                    variant="contained"
                                    color="default"
                                    size="small"
                                    className="submit-btn"
                                >
                                    Login
                                    {/* <FileCopy className="icon" /> */}
                                </Button>

                                {/* <fieldset
                                    disabled={loading}
                                    aria-busy={loading}
                                >
                                    <Error error={error} />
                                    <label htmlFor="email">
                                        Email
                                        <input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.saveToState}
                                        />
                                    </label>
                                    <label htmlFor="password">
                                        Password
                                        <input
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.saveToState}
                                        />
                                    </label>

                                    <button type="submit">Sign In!</button>
                                </fieldset> */}
                            </Form>
                        </div>
                    </div>
                )}
            </Mutation>
        )
    }
}

export default UserLogin

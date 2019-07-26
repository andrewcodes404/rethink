import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
import Error from '../lib/ErrorMessage'
import { CURRENT_USER_QUERY } from '../PageWrapper'
import styled from 'styled-components'

const Form = styled.form`
    border: 1px solid grey;

    fieldset {
        display: flex;
        flex-direction: column;
    }
    label {
        margin: 20px 0;
    }
    input {
        margin-left: 20px;
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
    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value })
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
                        <h2 data-aos="my-anim">Log in...</h2>
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
                                <fieldset
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
                                </fieldset>
                            </Form>
                        </div>
                    </div>
                )}
            </Mutation>
        )
    }
}

export default UserLogin

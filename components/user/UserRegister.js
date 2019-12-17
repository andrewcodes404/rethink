import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
// import Form from '../style/compStyles/Form'
import styled from 'styled-components'
import Error from '../lib/ErrorMessage'

import NavAdmin from '../NavAdmin'

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

const MUTATION_SIGNUP = gql`
    mutation MUTATION_SIGNUP($email: String!, $name: String!, $password: String!) {
        UserRegister(email: $email, name: $name, password: $password) {
            id
            email
            name
        }
    }
`
class UserRegister extends React.Component {
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
            <div>
                <Mutation mutation={MUTATION_SIGNUP} variables={this.state}>
                    {(signup, { error, loading }) => (
                        <div className="text-content-title-wrapper">
                            <h2 data-aos="my-anim">Add a new user</h2>

                            <div className="text-content">
                                <Form
                                    method="post"
                                    onSubmit={async e => {
                                        e.preventDefault()
                                        await signup()
                                        this.setState({
                                            name: '',
                                            email: '',
                                            password: '',
                                        })
                                        alert('New User Registered')
                                    }}
                                >
                                    <fieldset disabled={loading} aria-busy={loading}>
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
                                        <label htmlFor="name">
                                            Name
                                            <input
                                                type="text"
                                                name="name"
                                                value={this.state.name}
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

                                        <button type="submit">Sign Up!</button>
                                    </fieldset>
                                </Form>
                            </div>
                        </div>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default UserRegister

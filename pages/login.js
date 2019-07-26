import React from 'react'
import PropTypes from 'prop-types'

import UserLogin from '../components/user/UserLogin'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import Router from 'next/router'

import styled from 'styled-components'

class Login extends React.Component {
    componentDidMount() {
        if (this.props.loggedIn) {
            Router.push('/error', '/admin')
        }
    }

    render() {
        return (
            <div>
                {this.props.loggedIn ? (
                    <p>re-routing</p>
                ) : (
                    <div>
                        <NavAdmin />
                        <UserLogin />
                    </div>
                )}
            </div>
        )
    }
}

Login.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Login

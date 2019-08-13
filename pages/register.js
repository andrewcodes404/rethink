import React from 'react'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import UserRegister from '../components/user/UserRegister'

import Router from 'next/router'
class Register extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            Router.push('/error', '/')
        }
    }

    render() {
        return (
            <div>
                {!this.props.loggedIn ? (
                    <div>
                        <p>re-routing from register.js</p>
                    </div>
                ) : (
                    <div>
                        <NavAdmin
                            userName={this.props.user.name}
                            loggedIn={this.props.loggedIn}
                        />
                        <UserRegister />
                    </div>
                )}
            </div>
        )
    }
}

export default Register

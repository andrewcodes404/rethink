import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import PageAdmin from '../components/PageAdmin'

class Admin extends React.Component {
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
                        <p>re-routing from admin.js</p>
                    </div>
                ) : (
                    <div>
                        <NavAdmin
                            userName={this.props.user.name}
                            loggedIn={this.props.loggedIn}
                        />
                        <PageAdmin />
                    </div>
                )}
            </div>
        )
    }
}

Admin.propTypes = {
    user: PropTypes.obj,
    loggedIn: PropTypes.bool,
}

export default Admin

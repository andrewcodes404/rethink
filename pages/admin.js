import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import PageAdmin from '../components/PageAdmin'
import Spinner from '../components/lib/Spinner'
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
                    <Spinner />
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
    user: PropTypes.object,
    loggedIn: PropTypes.bool,
}

export default Admin

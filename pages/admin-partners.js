import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import PageAdminPartners from '../components/PageAdminPartners'

class AdminPartners extends React.Component {
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
                        <p>re-routing from AdminPartners.js</p>
                    </div>
                ) : (
                    <div>
                        <NavAdmin
                            userName={this.props.user.name}
                            loggedIn={this.props.loggedIn}
                        />
                        <PageAdminPartners />
                    </div>
                )}
            </div>
        )
    }
}

AdminPartners.propTypes = {
    user: PropTypes.obj,
    loggedIn: PropTypes.bool,
}

export default AdminPartners

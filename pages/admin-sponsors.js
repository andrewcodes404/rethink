import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import PageAdminSponsors from '../components/PageAdminSponsors/Index'
class AdminSponsors extends React.Component {
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
                        <p>re-routing from AdminSponsors.js</p>
                    </div>
                ) : (
                    <div>
                        <NavAdmin
                            userName={this.props.user.name}
                            loggedIn={this.props.loggedIn}
                        />
                        <PageAdminSponsors />
                    </div>
                )}
            </div>
        )
    }
}

AdminSponsors.propTypes = {
    user: PropTypes.obj,
    loggedIn: PropTypes.bool,
}

export default AdminSponsors

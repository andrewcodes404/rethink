import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import PageAdminHostSpeakers from '../components/PageAdminHostSpeakers'
import Spinner from '../components/lib/Spinner'

class Index extends React.Component {
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
                        <NavAdmin userName={this.props.user.name} loggedIn={this.props.loggedIn} />
                        <PageAdminHostSpeakers />
                    </div>
                )}
            </div>
        )
    }
}

Index.propTypes = {
    user: PropTypes.object,
    loggedIn: PropTypes.bool,
}

export default Index

import React from 'react'
import PropTypes from 'prop-types'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import PageAdvCom from '../components/PageAdvCom'
import Router from 'next/router'
import Spinner from '../components/lib/Spinner'
class AdvCom extends React.Component {
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
                        <PageAdvCom />
                    </div>
                )}
            </div>
        )
    }
}

AdvCom.propTypes = {
    user: PropTypes.object,
    loggedIn: PropTypes.bool,
}

export default AdvCom

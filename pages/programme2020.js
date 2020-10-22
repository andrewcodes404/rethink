import React from 'react'
import PropTypes from 'prop-types'
import Programme from '../components/PageProgramme2020'
import { withRouter } from 'next/router'
class Index extends React.Component {
    render() {
        return <Programme loggedIn={this.props.loggedIn} day={this.props.router.query.day} />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
    day: PropTypes.string,
}

export default withRouter(Index)

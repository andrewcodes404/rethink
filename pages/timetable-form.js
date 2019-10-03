import React from 'react'
import PropTypes from 'prop-types'
import TimetableForm from '../components/TimetableForm'
class Index extends React.Component {
    render() {
        return <TimetableForm loggedIn={this.props.loggedIn} />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

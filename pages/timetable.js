import React from 'react'
import PropTypes from 'prop-types'
import Timetable from '../components/Timetable'
class Index extends React.Component {
    render() {
        return <Timetable loggedIn={this.props.loggedIn} />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

import React from 'react'
import PropTypes from 'prop-types'
import Programme from '../components/PageProgramme'
class Index extends React.Component {
    render() {
        return <Programme loggedIn={this.props.loggedIn} />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

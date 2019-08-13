import React from 'react'
import PropTypes from 'prop-types'
import PagePartners from '../components/PagePartners'

class Index extends React.Component {
    render() {
        return <PagePartners loggedIn={this.props.loggedIn} />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

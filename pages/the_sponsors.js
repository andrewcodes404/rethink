import React from 'react'
import PropTypes from 'prop-types'
import PageSponsors from '../components/PageSponsors'
class Index extends React.Component {
    render() {
        return <PageSponsors loggedIn={this.props.loggedIn} />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

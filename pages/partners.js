import React from 'react'
import PropTypes from 'prop-types'
import PagePartners from '../components/PagePartners'

class Index extends React.Component {
    render() {
        return <PagePartners />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

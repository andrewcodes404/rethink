import React from 'react'
import PropTypes from 'prop-types'
import PageHome from '../components/PageHome'

class Index extends React.Component {
    render() {
        return <PageHome />
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

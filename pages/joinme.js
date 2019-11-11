import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import Nav from '../components/PageHeadFooter/Nav/index'

import styled from 'styled-components'

const BlackScreen = styled.div`
    background: black;
    height: 100vh;
`

class Index extends React.Component {
    componentDidMount() {
        Router.push('/')
    }

    render() {
        return (
            <div>
                <Nav loggedIn={this.props.loggedIn} />
                <BlackScreen />
            </div>
        )
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

import React from 'react'
import Router from 'next/router'

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
                <BlackScreen />
            </div>
        )
    }
}

export default Index

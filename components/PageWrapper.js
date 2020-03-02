import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Spinner from './lib/Spinner'
// comps

import Footer from './Footer'
import styled from 'styled-components'

const PgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .push-down {
        flex: 1;
    }
`

const CURRENT_USER_QUERY = gql`
    query {
        user {
            id
            email
            name
            permissions
        }
    }
`

class PageWrapper extends React.Component {
    render() {
        // const loggedIn = false
        return (
            <div>
                <PgWrapper>
                    <div className="page-wrapper">
                        {React.Children.map(this.props.children, child => React.cloneElement(child))}
                    </div>

                    <div className="push-down" style={{ borderBottom: '4px solid green' }}></div>
                    <Footer />
                </PgWrapper>
            </div>
        )
    }
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageWrapper
export { CURRENT_USER_QUERY }

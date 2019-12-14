import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Spinner from './lib/Spinner'
// comps
import Meta from './PageHeadFooter/Meta'
import Footer from './PageHeadFooter/Footer'
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
        const loggedIn = false
        return (
            <>
                <Meta />

                <Query query={CURRENT_USER_QUERY}>
                    {({ data: { user }, error, loading }) => {
                        if (loading) return <Spinner />
                        if (error) return <p>Error: {error.message}</p>

                        //don't use data.user as a bool ☠️
                        var loggedIn = false
                        user ? (loggedIn = true) : (loggedIn = false)

                        return (
                            <PgWrapper>
                                {/* <Navigation loggedIn={loggedIn} /> */}

                                {/* <div className="page-wrapper">
                                    {this.props.children}
                                </div> */}
                                <div className="page-wrapper">
                                    {React.Children.map(this.props.children, child =>
                                        React.cloneElement(child, {
                                            loggedIn,
                                            user,
                                        })
                                    )}
                                </div>

                                <div className="push-down" style={{ borderBottom: '4px solid green' }}></div>
                                <Footer />
                            </PgWrapper>
                        )
                    }}
                </Query>
            </>
        )
    }
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageWrapper
export { CURRENT_USER_QUERY }

import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NavAdmin from '../components/NavAdmin'
import PageAdminSessions from '../components/PageAdminSessions'
import Spinner from '../components/lib/Spinner'

import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../lib/graphqlTags'

class Index extends React.Component {
    render() {
        return (
            <Query query={CURRENT_USER_QUERY}>
                {({ data: { user }, error, loading }) => {
                    if (loading) return <Spinner />
                    if (error) return <p>Error: {error.message}</p>
                    if (!user) Router.push('/')

                    return (
                        <>
                            <NavAdmin />
                            <PageAdminSessions />
                        </>
                    )
                }}
            </Query>
        )
    }
}

Index.propTypes = {
    user: PropTypes.object,
    loggedIn: PropTypes.bool,
}

export default Index

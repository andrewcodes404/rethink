import React from 'react'
import Router from 'next/router'
import NavAdmin from '../components/NavAdmin'
import PageAdminPartners from '../components/PageAdminPartners'
import Spinner from '../components/lib/Spinner'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../lib/graphqlTags'

class AdminPartners extends React.Component {
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
                            <PageAdminPartners />
                        </>
                    )
                }}
            </Query>
        )
    }
}

export default AdminPartners

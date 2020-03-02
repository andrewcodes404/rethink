import React from 'react'
import Router from 'next/router'
import NavAdmin from '../components/NavAdmin'
import PageAdminSponsors from '../components/PageAdminSponsors/Index'
import Spinner from '../components/lib/Spinner'

import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../lib/graphqlTags'

class AdminSponsors extends React.Component {
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
                            <PageAdminSponsors />
                        </>
                    )
                }}
            </Query>
        )
    }
}

export default AdminSponsors

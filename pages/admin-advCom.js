import React from 'react'
import NavAdmin from '../components/NavAdmin'
import PageAdvCom from '../components/PageAdvCom'
import Router from 'next/router'
import Spinner from '../components/lib/Spinner'

import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../lib/graphqlTags'

class AdvCom extends React.Component {
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
                            <PageAdvCom />
                        </>
                    )
                }}
            </Query>
        )
    }
}

export default AdvCom

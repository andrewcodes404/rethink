import React from 'react'
import UserLogin from '../components/user/UserLogin'
import Router from 'next/router'
import Spinner from '../components/lib/Spinner'

import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../lib/graphqlTags'

class Login extends React.Component {
    render() {
        return (
            <Query query={CURRENT_USER_QUERY}>
                {({ data: { user }, error, loading }) => {
                    if (loading) return <Spinner />
                    if (error) return <p>Error: {error.message}</p>
                    if (user) Router.push('/admin')

                    return <UserLogin />
                }}
            </Query>
        )
    }
}

export default Login

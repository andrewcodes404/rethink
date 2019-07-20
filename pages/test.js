import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY_ALL_USERS = gql`
    query QUERY_ALL_USERS {
        users {
            name
        }
    }
`

const User = props => {
    console.log('props = ', props)
    return <p key={props.user.id}>{props.user.name}</p>
}

class Test extends React.Component {
    render() {
        return (
            <Query query={QUERY_ALL_USERS}>
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    return (
                        <div>
                            {data.users.map(user => (
                                <User user={user} key={user.id} />
                            ))}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default Test

import React from 'react'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import { GET_SESSIONS_WHERE_ID, GET_SESSIONS_WHERE_TIME } from '../../lib/graphqlTags'
import UpdateSesssion from './UpdateSession'

class comp_name extends React.Component {
    render() {
        return (
            <Query query={GET_SESSIONS_WHERE_ID} variables={{ id: this.props.router.query.ref }}>
                {({ data, loading }) => {
                    if (loading) return <p>Loading...</p>
                    const { session } = data

                    return (
                        <div className="text-content">
                            <h2>Update Session</h2>
                            <UpdateSesssion session={session} />
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default withRouter(comp_name)

import React from 'react'
import dynamic from 'next/dynamic'
import { Query } from 'react-apollo'
import { GET_SESSIONS_WHERE_DAY_ORDER_TIME } from '../../lib/graphqlTags'
import Link from 'next/link'
import UpdateSession from '../PageAdminSessionUpdate/UpdateSession'
const UpdateSessionWithNoSSR = dynamic(() => import('../PageAdminSessionUpdate/UpdateSession'), {
    ssr: false,
})
// material ui
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle'

import styled from 'styled-components'

const SessionPickerStyle = styled.div`
    .session-title {
        display: flex;
        align-items: center;
    }

    .session-title-arrow {
        margin-left: 30px;
    }
`

class UpdateSessionPicker extends React.Component {
    constructor() {
        super()
        this.state = {
            showUpdateForm: '',
        }
    }

    handleTrianlgeClick = id => {
        if (this.state.showUpdateForm !== id) {
            this.setState({
                showUpdateForm: id,
            })
        } else
            this.setState({
                showUpdateForm: '',
            })
    }
    render() {
        return (
            <>
                <br></br>
                <h2>Update a session</h2>
                <Query
                    query={GET_SESSIONS_WHERE_DAY_ORDER_TIME}
                    variables={{
                        day: 'day1',
                    }}
                >
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>

                        return (
                            <SessionPickerStyle>
                                <h3>Day 1</h3>

                                {data.sessions.map((session, index) => {
                                    const { id, title, start, end } = session

                                    return (
                                        <div key={index}>
                                            <div className="session-title" key={index}>
                                                <Link href={`/admin-session-update?ref=${id}`}>
                                                    <a>
                                                        <p>
                                                            {start} - {end}: {title}
                                                        </p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </SessionPickerStyle>
                        )
                    }}
                </Query>

                <Query
                    query={GET_SESSIONS_WHERE_DAY_ORDER_TIME}
                    variables={{
                        day: 'day2',
                    }}
                >
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>

                        return (
                            <SessionPickerStyle>
                                <h3>Day 2</h3>

                                {data.sessions.map((session, index) => {
                                    const { id, title, start, end } = session

                                    return (
                                        <div key={index}>
                                            <div className="session-title" key={index}>
                                                <Link href={`/admin-session-update?ref=${id}`}>
                                                    <a>
                                                        <p>
                                                            {start} - {end}: {title}
                                                        </p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </SessionPickerStyle>
                        )
                    }}
                </Query>
            </>
        )
    }
}

export default UpdateSessionPicker

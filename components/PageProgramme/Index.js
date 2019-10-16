import React from 'react'
import { Query, withApollo } from 'react-apollo'
import { GET_SESSIONS, GET_PARTNER } from '../../lib/graphqlTags'
import NavSimple from '../PageHeadFooter/Nav/NavSimple'
class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="height-for-nav"></div>
                <NavSimple loggedIn={this.props.loggedIn} />

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">Timetable</h2>

                    <div className="text-content">
                        <Query query={GET_SESSIONS}>
                            {({ data, error, loading }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error: {error.message}</p>
                                console.log('data = ', data)
                                return (
                                    <div>
                                        {data.sessions.map((session, index) => {
                                            const {
                                                title,
                                                theme,
                                                start,
                                                end,
                                                host,
                                                speakers,
                                                overview,
                                                learnings,
                                                supporters,
                                                sponsors,
                                            } = session
                                            return (
                                                <div key={index}>
                                                    <p>
                                                        {theme}
                                                        an-image -{start}:{end}
                                                        {title}
                                                    </p>
                                                    <h3>Host</h3>
                                                    <p>{host}</p>
                                                    <h3>Speakers</h3>
                                                    these need an id
                                                    {speakers.map(
                                                        (el, index) => (
                                                            <span key={index}>
                                                                {el} -
                                                            </span>
                                                        )
                                                    )}
                                                    <h3>Overview</h3>
                                                    <p>{overview}</p>
                                                    <h3>{learnings}</h3>
                                                    {session.supporters.map(
                                                        (el, index) => {
                                                            return (
                                                                <Query
                                                                    query={
                                                                        GET_PARTNER
                                                                    }
                                                                    key={index}
                                                                    variables={{
                                                                        id: el,
                                                                    }}
                                                                >
                                                                    {({
                                                                        data,
                                                                        error,
                                                                        loading,
                                                                    }) => {
                                                                        if (
                                                                            loading
                                                                        )
                                                                            return null

                                                                        return (
                                                                            <h6>
                                                                                {
                                                                                    data
                                                                                        .partner
                                                                                        .name
                                                                                }
                                                                            </h6>
                                                                        )
                                                                    }}
                                                                </Query>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }}
                        </Query>
                    </div>
                </div>
            </div>
        )
    }
}

export default withApollo(Index)

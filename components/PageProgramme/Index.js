import React from 'react'
import PropTypes from 'prop-types'

import { Query, withApollo } from 'react-apollo'
import { GET_SESSIONS, GET_PARTNER } from '../../lib/graphqlTags'

import NavSimple from '../PageHeadFooter/Nav/NavSimple'
import { ProgrammeStyled } from './ProgrammeStyle'

// import { ttData } from './TimetableData'

import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle'

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            showSessions: [],
        }
    }

    handleTrianlgeClick = id => {
        if (this.state.showSessions.find(x => x === id)) {
            var array = [...this.state.showSessions]

            var index = array.indexOf(id)

            if (index !== -1) {
                array.splice(index, 1)
                this.setState({ showSessions: array })
            }
        } else {
            this.setState({
                showSessions: [...this.state.showSessions, id],
            })
        }
    }

    render() {
        return (
            <div>
                <div className="height-for-nav" />
                <NavSimple loggedIn={this.props.loggedIn} />

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">Programme</h2>

                    <h3>
                        Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor
                        volutpat.
                    </h3>

                    <Query query={GET_SESSIONS}>
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            console.log('data = ', data)
                            return (
                                <ProgrammeStyled>
                                    {data.sessions.map((session, index) => {
                                        const {
                                            id,
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
                                            <div className="session" key={index}>
                                                <div>
                                                    <div className="session-header">
                                                        <div className="session-header--item1">
                                                            <div className="theme-icon">
                                                                <img
                                                                    src={`static/session-themes/${theme}.png`}
                                                                    alt=""
                                                                    srcSet=""
                                                                />
                                                            </div>
                                                            <h3 className="theme-title">
                                                                {start}-{end} - {title}
                                                            </h3>
                                                        </div>
                                                        <div className="session-header--item2">
                                                            {theme !== 'break' && (
                                                                <ArrowDropDownCircle
                                                                    onClick={() => {
                                                                        this.handleTrianlgeClick(id)
                                                                    }}
                                                                    className={`disclosure-trangle ${this.state.showSessions.find(
                                                                        x => x === id
                                                                    ) === id && 'disclosure-triangle--down'}`}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={`session-content ${this.state.showSessions.find(
                                                            x => x === id
                                                        ) === id && 'show-session'}`}
                                                    >
                                                        {host && (
                                                            <div className="host text-section">
                                                                <p className="sub-title">Host</p>
                                                                <p>
                                                                    {host}
                                                                    {/* {host.name} - {host.title} - {host.org} */}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {speakers && (
                                                            <div className="speakers text-section">
                                                                <p className="sub-title">Speakers</p>

                                                                {/* {speakers.map((el, index) => (
                                                                    <div key={index} className="speaker">
                                                                        <p>
                                                                            {name} - {title} - {org}
                                                                        </p>
                                                                    </div>
                                                                ))} */}
                                                            </div>
                                                        )}
                                                        {overview && (
                                                            <div className="overview text-section">
                                                                <p className="sub-title">Overview</p>

                                                                <p className="text-small">{overview}</p>
                                                            </div>
                                                        )}

                                                        {learnings && (
                                                            <div className="learnings text-section">
                                                                <p className="sub-title">Learnings</p>

                                                                <p className="text-small">{learnings}</p>
                                                            </div>
                                                        )}
                                                        <div className="sponsors-and-supporters">
                                                            {sponsors && (
                                                                <div className="sponsors text-section">
                                                                    <p className="sub-title">
                                                                        Sponsor
                                                                        {sponsors.length > 1 && 's'}
                                                                    </p>
                                                                    <div className="logos">
                                                                        {/* {sponsors.map((el, index) => (
                                                                            <div className="logo" key={index}>
                                                                                <img src={el} />
                                                                            </div>
                                                                        ))} */}
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {supporters && (
                                                                <div className="supporters text-section">
                                                                    <p className="sub-title">
                                                                        Supporter
                                                                        {supporters.length > 1 && 's'}
                                                                    </p>
                                                                    <div className="logos">
                                                                        {supporters.map((el, index) => (
                                                                            <div className="logo" key={index}>
                                                                                <img src={el} />
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </ProgrammeStyled>
                            )
                        }}
                    </Query>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

// export default withApollo(Index)
export default Index

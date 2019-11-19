import React from 'react'
import PropTypes from 'prop-types'

import { Query } from 'react-apollo'
import {
    GET_SESSIONS_WHERE_TIME,
    GET_HOSTSPEAKER_WHERE_ID,
    GET_SPONSOR_WHERE_ID,
    GET_PARTNER_WHERE_ID,
} from '../../lib/graphqlTags'

import NavSimple from '../PageHeadFooter/Nav/NavSimple'

import ModalHostSpeaker from './ModalHostSpeaker'

import { ProgrammeStyled } from './programmeStyle'

// import { ttData } from './TimetableData'

import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle'

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            showSessions: [],
            showId: '',
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

    showModalHostSpeaker = host => {
        this.setState({
            showId: host.id,
        })
    }

    closeModal = () => {
        this.setState({ showId: '' })
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

                    <Query query={GET_SESSIONS_WHERE_TIME}>
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            // console.log('session data = ', data)
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
                                                            <div className="text-section">
                                                                <p className="sub-title">Host</p>

                                                                <Query
                                                                    query={GET_HOSTSPEAKER_WHERE_ID}
                                                                    variables={{ id: host }}
                                                                >
                                                                    {({ data, error, loading }) => {
                                                                        if (loading) return <p>Loading...</p>
                                                                        if (error) return <p>Error: {error.message}</p>

                                                                        const host = data.hostSpeaker

                                                                        // TODO: send host data to modal pop-up]
                                                                        return (
                                                                            <div>
                                                                                <div
                                                                                    className="hostSpeaker"
                                                                                    onClick={() => {
                                                                                        this.showModalHostSpeaker(host)
                                                                                    }}
                                                                                >
                                                                                    <span className="bold">
                                                                                        {host.name}
                                                                                    </span>
                                                                                    <span className="hostSpeaker--hyphen">
                                                                                        -
                                                                                    </span>
                                                                                    <span>{host.title}</span>
                                                                                    <span className="hostSpeaker--hyphen">
                                                                                        -
                                                                                    </span>
                                                                                    <span>{host.company}</span>
                                                                                </div>

                                                                                {this.state.showId == host.id && (
                                                                                    <ModalHostSpeaker
                                                                                        host={host}
                                                                                        closeModal={this.closeModal}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        )
                                                                    }}
                                                                </Query>
                                                            </div>
                                                        )}

                                                        {speakers && (
                                                            <div className="speakers text-section">
                                                                <p className="sub-title">Speakers</p>

                                                                {speakers.map((speakerId, index) => (
                                                                    <div key={index} className="speaker">
                                                                        <Query
                                                                            query={GET_HOSTSPEAKER_WHERE_ID}
                                                                            variables={{ id: speakerId }}
                                                                        >
                                                                            {({ data, error, loading }) => {
                                                                                if (loading) return <p>Loading...</p>
                                                                                if (error)
                                                                                    return <p>Error: {error.message}</p>
                                                                                // console.log('data = ', data)
                                                                                const speaker = data.hostSpeaker

                                                                                // TODO: send host data to modal pop-up]
                                                                                return (
                                                                                    <div className="hostSpeaker ">
                                                                                        <span className="bold">
                                                                                            {speaker.name}
                                                                                        </span>
                                                                                        <span className="hostSpeaker--hyphen">
                                                                                            -
                                                                                        </span>
                                                                                        <span>{speaker.title}</span>
                                                                                        <span className="hostSpeaker--hyphen">
                                                                                            -
                                                                                        </span>
                                                                                        <span>{speaker.company}</span>
                                                                                    </div>
                                                                                )
                                                                            }}
                                                                        </Query>
                                                                    </div>
                                                                ))}
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
                                                                        {sponsors.map((sponsorId, index) => (
                                                                            <Query
                                                                                key={index}
                                                                                query={GET_SPONSOR_WHERE_ID}
                                                                                variables={{ id: sponsorId }}
                                                                            >
                                                                                {({ data, error, loading }) => {
                                                                                    if (loading)
                                                                                        return <p>Loading...</p>
                                                                                    if (error)
                                                                                        return (
                                                                                            <p>
                                                                                                Error: {error.message}
                                                                                            </p>
                                                                                        )
                                                                                    // console.log('SPponsor data = ', data)
                                                                                    const sponsor = data.sponsor

                                                                                    // TODO: send host data to modal pop-up]
                                                                                    return (
                                                                                        <div className="logo">
                                                                                            <img
                                                                                                src={sponsor.logo}
                                                                                                alt={sponsor.name}
                                                                                            />
                                                                                        </div>
                                                                                    )
                                                                                }}
                                                                            </Query>
                                                                        ))}
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
                                                                        {supporters.map((partnerId, index) => (
                                                                            <Query
                                                                                key={index}
                                                                                query={GET_PARTNER_WHERE_ID}
                                                                                variables={{ id: partnerId }}
                                                                            >
                                                                                {({ data, error, loading }) => {
                                                                                    if (loading)
                                                                                        return <p>Loading...</p>
                                                                                    if (error)
                                                                                        return (
                                                                                            <p>
                                                                                                Error: {error.message}
                                                                                            </p>
                                                                                        )

                                                                                    const partner = data.partner

                                                                                    // TODO: send host data to modal pop-up]
                                                                                    return (
                                                                                        <div className="logo">
                                                                                            <img
                                                                                                src={partner.logo}
                                                                                                alt={partner.name}
                                                                                            />
                                                                                        </div>
                                                                                    )
                                                                                }}
                                                                            </Query>
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

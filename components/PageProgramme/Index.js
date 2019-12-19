import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { GET_SESSIONS_WHERE_TIME, GET_SESSIONS_WHERE_DAY_ORDER_TIME } from '../../lib/graphqlTags'

import Nav from '../Nav'

import Host from './Host'
import Sponsors from './Sponsors'
import Supporters from './Supporters'
import Speakers from './Speakers'

import { ProgrammeStyled, SponsorsAndSupportersWrapper, DayBtns } from './programmeStyle'
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle'

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            showSessions: [],
            showDay: 'one',
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
                <Nav />

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">Programme</h2>

                    <h3>
                        The two-day ReThink conference programme has been curated to offer insight and inspiration to
                        sustainability professionals and those that are now having to integrate sustainable strategies
                        and solutions.
                    </h3>

                    <DayBtns>
                        <div className={`btn ${this.state.showDay === 'one' && 'active'}`}>
                            <h2
                                onClick={() => {
                                    this.setState({
                                        showDay: 'one',
                                    })
                                }}
                                className={this.state.showDay === 'one' && 'active'}
                            >
                                Day 1
                            </h2>
                        </div>

                        <div className={`btn ${this.state.showDay === 'two' && 'active'}`}>
                            <h2
                                onClick={() => {
                                    this.setState({
                                        showDay: 'two',
                                    })
                                }}
                            >
                                Day 2
                            </h2>
                        </div>
                    </DayBtns>

                    {this.state.showDay === 'one' && (
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
                                                            {host && <Host hostId={host} />}

                                                            {speakers.length > 0 && <Speakers speakers={speakers} />}
                                                            {overview && (
                                                                <div className="overview text-section">
                                                                    <p className="sub-title">Overview</p>

                                                                    <div
                                                                        dangerouslySetInnerHTML={{ __html: overview }}
                                                                    ></div>
                                                                </div>
                                                            )}

                                                            {learnings && (
                                                                <div className="learnings text-section">
                                                                    <p className="sub-title">Learnings</p>

                                                                    <div
                                                                        dangerouslySetInnerHTML={{ __html: learnings }}
                                                                    ></div>
                                                                </div>
                                                            )}
                                                            <SponsorsAndSupportersWrapper>
                                                                {sponsors.length > 0 && (
                                                                    <Sponsors sponsors={sponsors} />
                                                                )}

                                                                {supporters.length > 0 && (
                                                                    <Supporters supporters={supporters} />
                                                                )}
                                                            </SponsorsAndSupportersWrapper>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </ProgrammeStyled>
                                )
                            }}
                        </Query>
                    )}
                    {this.state.showDay === 'two' && (
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
                                                            {host && <Host hostId={host} />}

                                                            {speakers.length > 0 && <Speakers speakers={speakers} />}
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
                                                            <SponsorsAndSupportersWrapper>
                                                                {sponsors.length > 0 && (
                                                                    <Sponsors sponsors={sponsors} />
                                                                )}

                                                                {supporters.length > 0 && (
                                                                    <Supporters supporters={supporters} />
                                                                )}
                                                            </SponsorsAndSupportersWrapper>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </ProgrammeStyled>
                                )
                            }}
                        </Query>
                    )}
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

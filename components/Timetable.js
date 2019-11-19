import React from 'react'
import PropTypes from 'prop-types'
import NavSimple from './PageHeadFooter/Nav/NavSimple'
import { TimetableStyled } from './TimetableStyle'

import { ttData } from './TimetableData'

import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle'

class Timetable extends React.Component {
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
                    <h2 data-aos="my-anim">Timetable</h2>

                    <h3>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.</h3>

                    <TimetableStyled>
                        {ttData.map((el, index) => {
                            return (
                                <div className="session" key={index}>
                                    <div>
                                        <div className="session-header">
                                            <div className="session-header--item1">
                                                <div className="theme-icon">
                                                    <img src={`static/session-themes/${el.theme}.png`} alt="" srcSet="" />
                                                </div>
                                                <h3 className="theme-title">
                                                    {el.timeStart}-{el.timeEnd} - {el.title}
                                                </h3>
                                            </div>
                                            <div className="session-header--item2">
                                                {el.theme !== 'break' && (
                                                    <ArrowDropDownCircle
                                                        onClick={() => {
                                                            this.handleTrianlgeClick(el.id)
                                                        }}
                                                        className={`disclosure-trangle ${this.state.showSessions.find(x => x === el.id) === el.id && 'disclosure-triangle--down'}`}
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <div className={`session-content ${this.state.showSessions.find(x => x === el.id) === el.id && 'show-session'}`}>
                                            {el.host && (
                                                <div className="host text-section">
                                                    <p className="sub-title">Host</p>
                                                    <p>
                                                        {el.host.name} - {el.host.title} - {el.host.org}
                                                    </p>
                                                </div>
                                            )}

                                            {el.speakers && (
                                                <div className="speakers text-section">
                                                    <p className="sub-title">Speakers</p>

                                                    {el.speakers.map((el, index) => (
                                                        <div key={index} className="speaker">
                                                            <p>
                                                                {el.name} - {el.title} - {el.org}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {el.overview && (
                                                <div className="overview text-section">
                                                    <p className="sub-title">Overview</p>

                                                    <p className="text-small">{el.overview}</p>
                                                </div>
                                            )}

                                            {el.learnings && (
                                                <div className="learnings text-section">
                                                    <p className="sub-title">Learnings</p>

                                                    <p className="text-small">{el.learnings}</p>
                                                </div>
                                            )}
                                            <div className="sponsors-and-supporters">
                                                {el.sponsors && (
                                                    <div className="sponsors text-section">
                                                        <p className="sub-title">
                                                            Sponsor
                                                            {el.sponsors.length > 1 && 's'}
                                                        </p>
                                                        <div className="logos">
                                                            {el.sponsors.map((el, index) => (
                                                                <div className="logo" key={index}>
                                                                    <img src={el} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {el.supporters && (
                                                    <div className="supporters text-section">
                                                        <p className="sub-title">
                                                            Supporter
                                                            {el.supporters.length > 1 && 's'}
                                                        </p>
                                                        <div className="logos">
                                                            {el.supporters.map((el, index) => (
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
                    </TimetableStyled>
                </div>
            </div>
        )
    }
}

Timetable.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Timetable

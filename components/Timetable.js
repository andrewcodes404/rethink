import React from 'react'
import PropTypes from 'prop-types'
import NavSimple from './PageHeadFooter/Nav/NavSimple'
import styled from 'styled-components'

const HeightForNav = styled.div`
    height: 100px;
`

const TimetableStyled = styled.div`
    span {
        /* border: 1px solid green; */
        font-size: 18px;
    }

    .session {
        margin-bottom: 50px;
        padding-bottom: 30px;
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid grey;
        h3 {
            margin: 0;
            line-height: 1;
        }

        p {
            margin: 0;
        }
    }

    .themeIcon {
        width: 60px;
        margin-right: 50px;
        /* border: 1px solid #000; */
    }

    .time-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 1px solid #000; */
    }

    .speakers {
        margin-bottom: 20px;
    }

    .sponsors,
    .supporters {
        display: flex;
    }
    .sponsor,
    .supporter {
        width: 60px;
        margin: 20px 20px 0 0;
    }
`
const ttData = [
    {
        timeStart: '09:00',
        timeEnd: '11:00',
        themeIcon: 'static/icons/case-studies.svg',
        title: 'Keynote',
        hostName: 'Erin Meezan',
        hostTitle: 'Director and global head of climate business ',
        hostOrg: 'Capitals Coalition',
        sponsors: [{ sponsorLogo: 'static/brands/5.png' }],

        supporters: [{ suportersLogo: 'static/brands/10.png' }],
        break: false,
    },
    {
        timeStart: '11:00',
        timeEnd: '12:15',
        themeIcon: 'static/icons/case-studies.svg',
        title: 'Emergency Response: Re-writing the action plan',
        hostName: 'Annika Ramsköld',
        hostTitle: 'Vice president corporate sustainability ',
        hostOrg: 'VATTENFALL AB',
        speakers: [
            { speakerOrg: 'IFC' },
            { speakerOrg: 'Pret A Manger' },
            {
                speakerOrg: 'Pernod Ricard India',
            },
        ],
        sponsors: [
            {
                sponsorName: 'Marks & Spencer',
                sponsorLogo: 'static/brands/10.png',
            },
        ],
        break: false,
    },
    {
        timeStart: '12:15',
        timeEnd: '12:30',
        themeIcon: 'static/icons/hamburger.svg',
        title: 'Break/Party Time 🥥 🌴 🍸 💃',
        break: true,
    },
    {
        timeStart: '1230',
        timeEnd: '1600',
        themeIcon: 'static/icons/topics.svg',
        title: 'The road to, and beyond, nut-zero',
        hostName: 'Schnitzel Von Crumb',
        hostTitle: '',
        hostOrg: '',
        sponsors: [
            { sponsorLogo: 'static/brands/18.png' },
            {
                sponsorLogo: 'static/brands/17.png',
            },
        ],
        supporters: [
            { suporterLogo: 'static/brands/10.png' },
            { suporterLogo: 'static/brands/19.png' },
        ],
        break: false,
    },
    // {
    //     timeStart: '',
    //     timeEnd: '',
    //     themeIcon: '',
    //     title: '',
    //     hostName: '',
    //     hostTitle: '',
    //     hostOrg: '',
    //     speakers: [{ speakerName: '', speakerOrg: '' }],
    //     sponsors: [{ sponsorName: '', sponsorLogo: '' }],
    // },
]

class Timetable extends React.Component {
    render() {
        return (
            <div>
                <HeightForNav />
                <NavSimple loggedIn={this.props.loggedIn} />

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">Timetable</h2>

                    <div className="text-content">
                        <h3>
                            Pellentesque in ipsum id orci porta dapibus. Nulla
                            porttitor accumsan tincidunt. Curabitur arcu erat,
                            accumsan id imperdiet et, porttitor at sem. Vivamus
                            suscipit tortor eget felis porttitor volutpat.
                        </h3>
                    </div>
                    <div className="text-content">
                        <TimetableStyled>
                            {ttData.map((el, index) => {
                                if (el.break) {
                                    return (
                                        <div className="session">
                                            <div className="themeIcon">
                                                <img
                                                    src={el.themeIcon}
                                                    alt=""
                                                    srcSet=""
                                                />
                                            </div>

                                            <h3>
                                                {el.timeStart} - {el.timeEnd}
                                                {'  : '}
                                                {el.title}
                                            </h3>
                                        </div>
                                    )
                                }

                                return (
                                    <div className="session" key={index}>
                                        <div className="themeIcon">
                                            <img
                                                src={el.themeIcon}
                                                alt=""
                                                srcSet=""
                                            />
                                        </div>

                                        <div>
                                            <h3 className="time-title">
                                                {el.timeStart}-{el.timeEnd} -{' '}
                                                {el.title}
                                            </h3>

                                            <br />

                                            <p>
                                                <span className="bold">
                                                    Host:{' '}
                                                </span>
                                                {el.hostName} - {el.hostTitle} -{' '}
                                                {el.hostOrg}
                                            </p>

                                            <br />

                                            {el.speakers && (
                                                <div className="speakers">
                                                    <p className="bold">
                                                        Speakers:{' '}
                                                    </p>
                                                    <br />
                                                    {el.speakers.map(
                                                        (el, index) => (
                                                            <div
                                                                key={index}
                                                                className="speaker"
                                                            >
                                                                <p>
                                                                    {
                                                                        el.speakerName
                                                                    }{' '}
                                                                    -{' '}
                                                                    {
                                                                        el.speakerOrg
                                                                    }
                                                                </p>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                            {el.sponsors && (
                                                <div>
                                                    <p className="bold">
                                                        Sponsors:{' '}
                                                    </p>

                                                    <div className="sponsors">
                                                        {el.sponsors.map(
                                                            (el, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="sponsor"
                                                                >
                                                                    <img
                                                                        src={
                                                                            el.sponsorLogo
                                                                        }
                                                                        alt=""
                                                                        srcSet=""
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {el.supporters && (
                                                <div>
                                                    <p className="bold">
                                                        Supporters:{' '}
                                                    </p>

                                                    <div className="supporters">
                                                        {el.supporters.map(
                                                            (el, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="supporter"
                                                                >
                                                                    <img
                                                                        src={
                                                                            el.suporterLogo
                                                                        }
                                                                        alt=""
                                                                        srcSet=""
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </TimetableStyled>
                    </div>
                </div>
            </div>
        )
    }
}

Timetable.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Timetable

import React from 'react'
import PropTypes from 'prop-types'

import Nav from '../Nav'
import { Query } from 'react-apollo'
import { GET_PARTNERS } from '../../lib/graphqlTags'
import { ModalCompanyCard } from '../style/globalComps'
import styled from 'styled-components'

import Close from '@material-ui/icons/Close'

const CardContainerWrapper = styled.div`
    .container-title {
        margin: 40px auto;

        @media (min-width: 746px) {
            margin: 60px 0;
        }
    }
    margin-bottom: 50px;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */

    .card-with-title {
        width: 90%;
        max-width: 400px;
        height: 300px;
        padding: 15px;
        margin: 15px;

        @media (min-width: 746px) {
            width: 45%;
            height: 400px;
        }

        h2 {
            margin-bottom: 15px;
        }
    }
    .card-with-title--card {
        width: 100%;
        margin: 0 auto 15px;
        padding: 15px;

        height: 80%;
        /* @media (min-width: 746px) {
            width: 45%;

            padding: 15px;
            margin: 15px;
        } */
    }

    .large {
        width: 45%;
        margin: 0 auto 15px;
        padding: 15px;
        @media (min-width: 746px) {
            width: 45%;

            padding: 15px;
            margin: 15px;
        }
    }
    .medium {
        width: 45%;
        margin: 0 auto 15px;
        padding: 15px;
        @media (min-width: 746px) {
            width: 23%;
            margin: 6px;
        }
    }
    .small {
        width: 30%;
        padding: 0 10px;
        margin: 5px;
        @media (min-width: 746px) {
            width: 19%;
        }
    }
`

const Card = styled.div`
    box-shadow: 8px 9px 18px -8px rgba(222, 222, 222, 1);
    cursor: pointer;
    border-top: 1px solid white;
    border-left: 1px solid white;
    transition: 0.3s;

    .img-wrapper-lrg {
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
        width: 80%;
        margin: auto;
        height: 100%;

        @media (min-width: 746px) {
            width: 80%;
            height: 100%;
            margin: 0 auto;
            text-align: center;
        }
    }

    .img-wrapper-lrg2 {
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
        @media (min-width: 746px) {
            width: 100%;
            height: 230px;
            margin: 0 auto;
            text-align: center;
        }
    }

    .img-wrapper-med {
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
        @media (min-width: 746px) {
            width: 100%;
            height: 180px;
            margin: 0 auto;
            text-align: center;
        }
    }

    .img-wrapper-sml {
        @media (min-width: 746px) {
            width: 100%;
            height: 180px;
            margin: 0 auto;
        }

        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
    }

    &:hover {
        box-shadow: 18px 23px 35px -10px rgba(194, 194, 194, 1);
        border-top: 1px solid #fafafa;
        border-left: 1px solid #fafafa;
        img {
            transform: scale(1.02);
        }
    }
`

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            type: '',
            ranking: '',
            index: '',
            name: '',
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            linkedIn: '',
        }
    }
    showModal = partner => {
        this.setState({
            showModal: true,
            type: partner.type,
            ranking: partner.ranking,
            index: partner.index,
            name: partner.name,
            logo: partner.logo,
            description: partner.description,
            website: partner.website,
            instagram: partner.instagram,
            facebook: partner.facebook,
            twitter: partner.twitter,
            linkedIn: partner.linkedIn,
            shareBtn: partner.shareBtn,
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        return (
            <div>
                <Nav />

                {this.state.showModal && (
                    <ModalCompanyCard
                        onClick={() => {
                            this.closeModal()
                        }}
                    >
                        <div className="card">
                            <div className="close-modal-button" onClick={this.closeModal}>
                                <Close />
                            </div>

                            <div className="logo">
                                <img src={this.state.logo} />
                            </div>

                            <div className="content">
                                <h2>{this.state.name}</h2>

                                <div dangerouslySetInnerHTML={{ __html: this.state.description }}></div>

                                <div className="social-wrapper">
                                    {this.state.linkedIn && (
                                        <div className="social-icon">
                                            <a href={this.state.linkedIn} target="_blank" rel="noopener noreferrer">
                                                <img src="./static/social/linkedin.png" alt="" srcSet="" />
                                            </a>
                                        </div>
                                    )}

                                    {this.state.instagram && (
                                        <div className="social-icon">
                                            <a
                                                href={`https://www.instagram.com/${this.state.instagram}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img src="./static/social/instagram.png" alt="" srcSet="" />
                                            </a>
                                        </div>
                                    )}

                                    {this.state.facebook && (
                                        <div className="social-icon">
                                            <a href={this.state.facebook} target="_blank" rel="noopener noreferrer">
                                                <img src="./static/social/facebook.png" alt="" srcSet="" />
                                            </a>
                                        </div>
                                    )}

                                    {this.state.twitter && (
                                        <div className="social-icon">
                                            <a
                                                href={`https://www.twitter.com/${this.state.twitter}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img src="./static/social/twitter.png" alt="" srcSet="" />
                                            </a>
                                        </div>
                                    )}

                                    <div className="some-height"></div>

                                    {this.state.website && (
                                        <div className="website">
                                            <a href={this.state.website} target="_blank" rel="noopener noreferrer">
                                                <p>{this.state.website}</p>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ModalCompanyCard>
                )}

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">Partners</h2>
                    <div className="text-content">
                        <h3>
                            ReThink welcomes collaboration with NGOs, charitable organisations, professional trade
                            associations, business chambers, action groups and media channels to form a cross-industry
                            line-up of partners.
                        </h3>
                        <p>
                            Event &amp; Community partners will be provided with a platform from which to interact and
                            connect with delegates; businesses and community stakeholders from across the ecosystem –
                            encouraging collaboration, streamlining of resources and collective messaging.
                        </p>

                        <p>
                            Contact the ReThink team to discuss the ways in which your organisation can be part of the
                            conversation and drive impact at ReThink.
                        </p>
                        <h3 className="link-green">
                            Want to become a partner?{' '}
                            <a href="https://forms.gle/cvuvpHGz4jcSyUCy8" target="_blank" rel="noopener noreferrer">
                                click here
                            </a>
                        </h3>
                    </div>

                    <Query query={GET_PARTNERS}>
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            if (!data) return <p>No Data</p>

                            let strategic = {}
                            let hostVenue = {}
                            let innovation = {}
                            let esg = {}
                            let largeCards = []
                            let charity = {}
                            let eventConf = {}
                            let mediaPartners = {}
                            let community = {}

                            const { partners } = data

                            // add ranking display text to single largeCard partners

                            const addRankingTitle = (objName, rankingValue, rankingDisplayText) => {
                                objName = partners.find(x => x.ranking === rankingValue)
                                if (objName) {
                                    objName.rankingTitle = rankingDisplayText
                                    largeCards.push(objName)
                                }
                            }

                            if (partners) {
                                addRankingTitle(strategic, 'strategic', 'Strategic')
                                addRankingTitle(hostVenue, 'hostVenue', 'Host Venue')

                                addRankingTitle(innovation, 'innovation', 'Innovation')

                                addRankingTitle(esg, 'esg', 'ESG')

                                // Filter partners by ranking type
                                charity = partners.filter(x => x.ranking === 'charity')

                                eventConf = partners.filter(x => x.ranking === 'eventConf')

                                mediaPartners = partners.filter(x => x.ranking === 'mediaPartners')

                                community = partners.filter(x => x.ranking === 'community')
                            }

                            return (
                                <CardContainerWrapper>
                                    <CardContainer>
                                        {largeCards.map((partner, i) => {
                                            return (
                                                <div className="card-with-title" key={i}>
                                                    <h2 data-aos="my-anim">
                                                        {partner.rankingTitle && partner.rankingTitle}
                                                    </h2>
                                                    <Card
                                                        onClick={() => {
                                                            this.showModal(partner)
                                                        }}
                                                        className="card-with-title--card"
                                                    >
                                                        <div className="img-wrapper-lrg">
                                                            <img src={partner.logo} />
                                                        </div>
                                                    </Card>
                                                </div>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2 data-aos="my-anim" className="container-title">
                                        Charity Partners
                                    </h2>

                                    <CardContainer>
                                        {charity.map((partner, i) => {
                                            return (
                                                <Card
                                                    key={i}
                                                    onClick={() => {
                                                        this.showModal(partner)
                                                    }}
                                                    className="large"
                                                >
                                                    <div className="img-wrapper-lrg2">
                                                        <img src={partner.logo} />
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2 data-aos="my-anim" className="container-title">
                                        Event &amp; Conference Partners
                                    </h2>

                                    <CardContainer>
                                        {eventConf.map((partner, i) => {
                                            return (
                                                <Card
                                                    key={i}
                                                    onClick={() => {
                                                        this.showModal(partner)
                                                    }}
                                                    className="medium"
                                                >
                                                    <div className="img-wrapper-med">
                                                        <img src={partner.logo} />
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2 data-aos="my-anim" className="container-title">
                                        Media Partners
                                    </h2>

                                    <CardContainer>
                                        {mediaPartners.map((partner, i) => {
                                            return (
                                                <Card
                                                    key={i}
                                                    onClick={() => {
                                                        this.showModal(partner)
                                                    }}
                                                    className="medium"
                                                >
                                                    <div className="img-wrapper-med">
                                                        <img src={partner.logo} />
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2 data-aos="my-anim" className="container-title">
                                        Community Partners
                                    </h2>

                                    <CardContainer>
                                        {community.map((partner, i) => {
                                            return (
                                                <Card
                                                    key={i}
                                                    onClick={() => {
                                                        this.showModal(partner)
                                                    }}
                                                    className="small"
                                                >
                                                    <div className="img-wrapper-sml">
                                                        <img src={partner.logo} />
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </CardContainer>
                                </CardContainerWrapper>
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
export default Index

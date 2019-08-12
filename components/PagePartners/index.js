import React from 'react'
import NavSimple from '../PageHeadFooter/Nav/NavSimple'
import { Query } from 'react-apollo'
import { GET_PARTNERS } from '../../lib/graphqlTags'

import styled from 'styled-components'
const HeightForNav = styled.div`
    height: 100px;
`

const CardContainerWrapper = styled.div`
    .container-title {
        margin: 60px 0;
    }
`

const CardContainer = styled.div`
    /* border: 1px solid #000; */

    display: flex;
    flex-wrap: wrap;

    .card-with-title {
        width: 45%;
        padding: 10px;
        padding: 15px;
        margin: 15px;

        h2 {
            margin-bottom: 15px;

            /* text-align: center; */
        }
    }

    .large {
        width: 45%;
        padding: 10px;
        padding: 15px;
        margin: 15px;
    }
    .medium {
        width: 23%;
        padding: 15px;
        margin: 6px;
    }
    .small {
        width: 19%;
        padding: 0 10px;
        margin: 5px;
    }
`

const Card = styled.div`
    .ranking-title {
        text-transform: capitalize;
        text-align: center;
    }

    box-shadow: 8px 9px 18px -8px rgba(222, 222, 222, 1);
    cursor: pointer;
    border-top: 1px solid white;
    border-left: 1px solid white;
    transition: 0.3s;

    .img-wrapper-lrg {
        width: 80%;
        height: 300px;
        margin: 0 auto;
        text-align: center;
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
    }

    .img-wrapper-lrg2 {
        width: 100%;
        height: 230px;
        margin: 0 auto;
        text-align: center;
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
    }

    .img-wrapper-med {
        width: 100%;
        height: 180px;
        margin: 0 auto;
        text-align: center;
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
    }

    .img-wrapper-sml {
        width: 100%;
        height: 180px;
        margin: 0 auto;

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

        /* padding: 14px; */
        img {
            /* transform: scale(1.02) skewX(-1deg) skewY(-1deg); */
            transform: scale(1.02);
        }
    }
`
const Modal = styled.div`
    transition: 1s;
    /* filter: opacity(0.2); */

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0) rotate(10deg);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0) rotate(-10deg);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0) rotate(10deg);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0) rotate(-10deg);
        }
    }

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card {
        width: 90%;
        max-width: 700px;
        background: white;
        /* display: flex; */
        padding: 20px;
    }

    .logo {
        width: 300px;
        height: 200px;
        margin: 0 auto;

        img {
            object-fit: contain;
            height: 100%;
        }
    }
    .content {
        width: 90%;
        margin: 20px auto 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            margin-bottom: 0;

            text-transform: capitalize;
        }
        .social-wrapper {
            max-width: 400px;
            margin: 0 auto;
            display: flex;

            justify-content: flex-start;
            align-items: center;
        }
        .social-icon {
            width: 40px;
            margin: 0 10px;
            &:hover {
                animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
                transform-origin: center;
            }
        }

        .website {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            p {
                margin: 0;
                line-height: 0;
            }
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
            shareBtn: '',
        }
    }
    showModal = sponsor => {
        this.setState({
            showModal: true,
            type: sponsor.type,
            ranking: sponsor.ranking,
            index: sponsor.index,
            name: sponsor.name,
            logo: sponsor.logo,
            description: sponsor.description,
            website: sponsor.website,
            instagram: sponsor.instagram,
            facebook: sponsor.facebook,
            twitter: sponsor.twitter,
            shareBtn: sponsor.shareBtn,
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
                <HeightForNav />
                <NavSimple />

                {this.state.showModal && (
                    <Modal
                        onClick={() => {
                            this.closeModal()
                        }}
                        // style={this.state.showModal && '{filter: opacity(1);}'}
                        // className={this.state.showModal && 'fade-in'}
                    >
                        <div className="card">
                            <div className="logo">
                                <img src={this.state.logo} />
                            </div>

                            <div className="content">
                                <h2>{this.state.name}</h2>
                                <p>{this.state.description}</p>

                                <div className="social-wrapper">
                                    {this.state.instagram && (
                                        <div className="social-icon">
                                            <a
                                                href={`https://www.instagram.com/${this.state.instagram}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="./static/social/instagram.png"
                                                    alt=""
                                                    srcSet=""
                                                />
                                            </a>
                                        </div>
                                    )}

                                    {this.state.facebook && (
                                        <div className="social-icon">
                                            <a
                                                href={this.state.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="./static/social/facebook.png"
                                                    alt=""
                                                    srcSet=""
                                                />
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
                                                <img
                                                    src="./static/social/twitter.png"
                                                    alt=""
                                                    srcSet=""
                                                />
                                            </a>
                                        </div>
                                    )}

                                    {this.state.website && (
                                        <div className="website">
                                            <a
                                                href={this.state.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <p>{this.state.website}</p>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}

                <div className="text-content-title-wrapper">
                    <div className="text-content">
                        <h2 data-aos="my-anim">Partners</h2>
                        <h3>
                            Probably a bit of text here, Vivamus suscipit tortor
                            eget felis porttitor volutpat. Donec rutrum congue
                            leo eget malesuada. Proin eget tortor risus.
                            Curabitur aliquet quam id dui posuere blandit.
                        </h3>
                        <h3 className="link-green">
                            Want to become a partner?{' '}
                            <a
                                href="https://forms.gle/cvuvpHGz4jcSyUCy8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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

                            const addRankingTitle = (
                                objName,
                                rankingValue,
                                rankingDisplayText
                            ) => {
                                objName = partners.find(
                                    x => x.ranking === rankingValue
                                )
                                if (objName) {
                                    objName.rankingTitle = rankingDisplayText
                                    largeCards.push(objName)
                                }
                            }

                            if (partners) {
                                addRankingTitle(
                                    strategic,
                                    'strategic',
                                    'Strategic'
                                )
                                addRankingTitle(
                                    hostVenue,
                                    'hostVenue',
                                    'Host Venue'
                                )

                                addRankingTitle(
                                    innovation,
                                    'innovation',
                                    'Innovation'
                                )

                                addRankingTitle(esg, 'esg', 'ESG')

                                // Filter partners by ranking type
                                charity = partners.filter(
                                    x => x.ranking === 'charity'
                                )

                                eventConf = partners.filter(
                                    x => x.ranking === 'eventConf'
                                )

                                mediaPartners = partners.filter(
                                    x => x.ranking === 'mediaPartners'
                                )

                                community = partners.filter(
                                    x => x.ranking === 'community'
                                )
                            }

                            return (
                                <CardContainerWrapper>
                                    <CardContainer>
                                        {largeCards.map((partner, i) => {
                                            return (
                                                <div
                                                    className="card-with-title"
                                                    key={i}
                                                >
                                                    <h2 data-aos="my-anim">
                                                        {partner.rankingTitle &&
                                                            partner.rankingTitle}
                                                    </h2>
                                                    <Card
                                                        onClick={() => {
                                                            this.showModal(
                                                                partner
                                                            )
                                                        }}
                                                    >
                                                        <div className="img-wrapper-lrg">
                                                            <img
                                                                src={
                                                                    partner.logo
                                                                }
                                                            />
                                                        </div>
                                                    </Card>
                                                </div>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2
                                        data-aos="my-anim"
                                        className="container-title"
                                    >
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
                                                        <img
                                                            src={partner.logo}
                                                        />
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2
                                        data-aos="my-anim"
                                        className="container-title"
                                    >
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
                                                        <img
                                                            src={partner.logo}
                                                        />
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2
                                        data-aos="my-anim"
                                        className="container-title"
                                    >
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
                                                        <img
                                                            src={partner.logo}
                                                        />
                                                    </div>
                                                </Card>
                                            )
                                        })}
                                    </CardContainer>

                                    <h2
                                        data-aos="my-anim"
                                        className="container-title"
                                    >
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
                                                        <img
                                                            src={partner.logo}
                                                        />
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

export default Index

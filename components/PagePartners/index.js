import React from 'react'
import Nav from '../Nav'
import { Query } from 'react-apollo'
import { GET_PARTNERS } from '../../lib/graphqlTags'
import ModalCompanyCard from '../lib/ModalCompanyCard'
import { CardContainerWrapper, CardContainer, Card } from '../style/globalComps'

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
                        closeModal={() => {
                            this.closeModal()
                        }}
                        type={this.state.type}
                        ranking={this.state.ranking}
                        index={this.state.index}
                        name={this.state.name}
                        logo={this.state.logo}
                        description={this.state.description}
                        website={this.state.website}
                        instagram={this.state.instagram}
                        facebook={this.state.facebook}
                        twitter={this.state.twitter}
                        linkedIn={this.state.linkedIn}
                        shareBtn={this.state.shareBtn}
                    />
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

export default Index

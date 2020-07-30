/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Query } from 'react-apollo'
import { GET_SPONSORS_WHERE_RANKING } from '../../lib/graphqlTags'
import ModalCompanyCard from '../lib/ModalCompanyCard'
import { GreenButton } from '../style/globalComps'
import ProfileBar from '../ProfileBar'

const profileDataSponsor = [
    {
        title: 'Sponsors',
        bkgImg: 'sponsor',
        icon: 'speaker',
        list: [
            'Consultancy Services',
            'Efficient Energy & Utilities',
            'Facilities Management',
            'Government Agencies',
            'GreenTech Applications',
            'IT & Back Office Solutions',
            'Recycling & Waste Management Technology',
            'Sourcing & Procurement Solutions',
            'Supply Chain Management & Logistics',
            'Sustainable Products; Suppliers & Distributors',
        ],
    },
]

const LogoContainerLg = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 80px;

    div {
        /* border: 1px solid grey; */
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);

        width: 80%;
        height: 200px;
        padding: 20px;
        margin: 20px auto;
        cursor: pointer;
        border-top: 1px solid white;
        border-left: 1px solid white;
        transition: 0.3s;

        @media (min-width: 768px) {
            height: 300px;
            width: 45%;
            margin: 20px;
        }

        img {
            object-fit: contain;
            height: 100%;
            transition: 0.4s;
        }

        @keyframes shake {
            10%,
            90% {
                transform: translate3d(-1px, 0, 0);
            }

            20%,
            80% {
                transform: translate3d(2px, 0, 0);
            }

            30%,
            50%,
            70% {
                transform: translate3d(-4px, 0, 0);
            }

            40%,
            60% {
                transform: translate3d(4px, 0, 0);
            }
        }

        &:hover {
            box-shadow: 18px 23px 39px -2px rgba(194, 194, 194, 1);
            border-top: 1px solid #fafafa;
            border-left: 1px solid #fafafa;

            img {
                transform: scale(1.02);
            }
        }
    }
`

const LogoContainerMd = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 80px;
    div {
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);

        width: 40%;
        height: 150px;
        padding: 15px;
        margin: 15px;

        cursor: pointer;
        border-top: 1px solid white;
        border-left: 1px solid white;
        transition: 0.3s;

        @media (min-width: 768px) {
            width: 22%;
            height: 150px;
            padding: 15px;
            margin: 15px;
        }

        img {
            object-fit: contain;
            height: 100%;
            transition: 0.4s;
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
    }
`

const LogoContainerSm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    margin: 0 auto 80px;
    div {
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);
        width: 40%;
        height: 150px;
        padding: 15px;
        margin: 15px;

        cursor: pointer;
        border-top: 1px solid white;
        border-left: 1px solid white;
        transition: 0.3s;

        @media (min-width: 768px) {
            width: 16%;
            height: 120px;
            padding: 15px;
            margin: 20px 10px;
        }

        img {
            object-fit: contain;
            height: 100%;
            transition: 0.2s;
        }
        &:hover {
            box-shadow: 18px 23px 35px -10px rgba(194, 194, 194, 1);

            border-top: 1px solid #fafafa;
            border-left: 1px solid #fafafa;

            img {
                transform: scale(1.02);
            }
        }
    }
`

class PageSponsors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            type: '',
            ranking: '',
            index: 999,
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

    showModal = sponsor => {
        const {
            type,
            ranking,
            index,
            name,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            linkedIn,
            shareBtn,
        } = sponsor
        this.setState({
            showModal: true,
            type,
            ranking,
            index,
            name,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            linkedIn,
            shareBtn,
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        return (
            <div style={{ positon: 'relative' }}>
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
                    <div className="text-content">
                        <h2 data-aos="my-anim">Sponsors</h2>

                        <Query
                            query={GET_SPONSORS_WHERE_RANKING}
                            variables={{
                                ranking: 'innovShow',
                            }}
                        >
                            {({ data, error, loading }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error: {error.message}</p>
                                if (!data) return <p>No Data</p>
                                const { sponsors } = data
                                return (
                                    <LogoContainerSm>
                                        {sponsors.map((sponsor, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    onClick={() => {
                                                        this.showModal(sponsor)
                                                    }}
                                                >
                                                    <img src={sponsor.logo} />
                                                </div>
                                            )
                                        })}
                                    </LogoContainerSm>
                                )
                            }}
                        </Query>

                        <GreenButton style={{ display: 'block', margin: '0 auto' }}>
                            {' '}
                            <a href="http://eepurl.com/g7u6R5" target="_blank" rel="noopener noreferrer">
                                Request details about Sponsorship or Solutions Showcase opportunities
                            </a>
                        </GreenButton>
                        <p>
                            ReThink is an event exclusively for sustainability professionals who will attend with their
                            colleagues from Finance, People, Operations and Procurement to achieve wider understanding
                            and deliver significant and purposeful change back into their organisation.
                        </p>

                        <p>
                            Use the power of this live event platform to interact with customers and stakeholders from
                            across the ecosystem; demonstrate your commitment to accelerating sustainable development in
                            Hong Kong, launch new solutions, host workshops, build partnerships and generate significant
                            brand awareness at the highest level.
                        </p>
                        <p>
                            Directly influence sustainability leaders, C-Suite decision makers and government
                            departments who will attend to source cutting edge technology, sustainable supply chain
                            solutions and innovative products that reflect the demands of their customers.
                        </p>

                        <p>
                            Showcasing at ReThink will put your innovations, services or solutions in front of
                            procurement teams, business owners and those responsible for meeting sustainability goals
                            and driving efficiencies across their organisation or across multi-site facilities.
                        </p>

                        <h3>The Innovation Showcase is open for suppliers and service providers, including:</h3>
                        <ProfileBar profileData={profileDataSponsor} profileMessage="sponsor" />

                        <br />
                        <br />
                        <br />
                        <h2>How We Deliver the Audience</h2>

                        <p>
                            We attract our audience using a comprehensive multi-channel marketing and recruitment
                            campaign that includes:
                        </p>

                        <ul>
                            <li>A delegate nomination and approval process to guarantee quality attendees*</li>
                            <li>Partnerships with business chambers, industry associations and professional groups</li>
                            <li>Collaboration with media channels and carefully selected forums, blogs and websites</li>
                            <li>Comprehensive PR campaign</li>
                            <li>Continuous social media engagement</li>
                        </ul>

                        <p>
                            The ReThink proposition is genuinely exciting and offers something different to other events
                            including:
                        </p>

                        <ul>
                            <li>Focussed conference with purposeful learnings that business can put into action</li>
                            <li>
                                Creative and varied conference formats to provide two-full-days of engaging debate and
                                discussions
                            </li>
                            <li>Workshop sessions to provide deeper insight into pan-industry challenges</li>
                            <li>Combined Conference &amp; Innovation Showcase</li>
                            <li>NGO &amp; Partnerships Lounge to facilitate collaboration</li>
                        </ul>

                        <p>
                            * All applications to attend are checked and upon confirmation delegates are required to
                            make a donation to the 2020 ReThink Beneficiary Fund - with all proceeds going to ReThink’s
                            Charity Partners.
                        </p>

                        <h3 className="link-green">
                            Want to be a ReThink sponsor?{' '}
                            <a href="https://forms.gle/2a96ETPE7vMDMioA7" target="_blank" rel="noopener noreferrer">
                                click here
                            </a>
                        </h3>
                    </div>

                    <h2 data-aos="my-anim">Headline Event Sponsor</h2>
                    <Query
                        query={GET_SPONSORS_WHERE_RANKING}
                        variables={{
                            ranking: 'headlineSponsor',
                        }}
                    >
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            if (!data) return <p>No Data</p>
                            const { sponsors } = data
                            return (
                                <LogoContainerLg>
                                    {sponsors.map((sponsor, i) => {
                                        return (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    this.showModal(sponsor)
                                                }}
                                            >
                                                <img src={sponsor.logo} />
                                            </div>
                                        )
                                    })}
                                </LogoContainerLg>
                            )
                        }}
                    </Query>
                    <h2 data-aos="my-anim">Sustainability Partners</h2>
                    <Query
                        query={GET_SPONSORS_WHERE_RANKING}
                        variables={{
                            ranking: 'susPartner',
                        }}
                    >
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            if (!data) return <p>No Data</p>
                            const { sponsors } = data
                            return (
                                <LogoContainerLg>
                                    {sponsors.map((sponsor, i) => {
                                        return (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    this.showModal(sponsor)
                                                }}
                                            >
                                                <img src={sponsor.logo} />
                                            </div>
                                        )
                                    })}
                                </LogoContainerLg>
                            )
                        }}
                    </Query>

                    <Query
                        query={GET_SPONSORS_WHERE_RANKING}
                        variables={{
                            ranking: 'eventSponsor',
                        }}
                    >
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            if (!data) return <p>No Data</p>
                            const { sponsors } = data
                            console.log('sponsors = ', sponsors)
                            return (
                                <>
                                    {sponsors.length !== 0 && (
                                        <div className="text-content">
                                            <h2 data-aos="my-anim">Event Sponsors</h2>
                                        </div>
                                    )}

                                    <LogoContainerMd>
                                        {sponsors.map((sponsor, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    onClick={() => {
                                                        this.showModal(sponsor)
                                                    }}
                                                >
                                                    <img src={sponsor.logo} />
                                                </div>
                                            )
                                        })}
                                    </LogoContainerMd>
                                </>
                            )
                        }}
                    </Query>

                    <div className="text-content">
                        <h2 data-aos="my-anim">Solutions Showcase</h2>
                    </div>

                    <GreenButton style={{ display: 'block', margin: '0 auto' }}>
                        {' '}
                        <a href="http://eepurl.com/g7u6R5" target="_blank" rel="noopener noreferrer">
                            Request details about Sponsorship or Solutions Showcase opportunities
                        </a>
                    </GreenButton>

                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

PageSponsors.propTypes = {
    loggedIn: PropTypes.bool,
}

export default PageSponsors

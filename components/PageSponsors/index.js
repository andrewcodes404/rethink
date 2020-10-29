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
                        <h2 data-aos="my-anim">Sponsors & Showcase</h2>
                        <p>
                            Enhance your presence at ReThink 2021 by positioning your business in front of change-makers
                            and business leaders as a potential partner, supplier or solutions provider that can help
                            organisations in Hong Kong achieve their carbon reduction, engagement, strategic or specific
                            sustainability goals.
                        </p>
                        <h3>
                            Ensure you maintain a competitive edge and make the most of sponsorship opportunities which
                            will enable you to:
                        </h3>
                        <ul>
                            <li>
                                Increase brand awareness - not just at the event but across the six-month ecosystem-wide
                                campaign{' '}
                            </li>
                            <li>Position yourself as a thought leader and share your best practice expertise </li>
                            <li>
                                Launch innovations, showcase products, services and solutions to a qualified audience of
                                corporate, specifiers, buyers and investors
                            </li>

                            <li>Generate new business enquiries and establish collaborative partnerships</li>
                        </ul>
                        <br />
                        <h3> ReThink 2020 Snapshot</h3>

                        <ul>
                            <li>1097 applications to attend</li>
                            <li>427 unique in person attendees (reduced due to social distancing) </li>
                            <li>361 additional online attendees </li>
                        </ul>

                        <p style={{ fontWeight: 'bold' }}>Environmental Impact </p>
                        <p>
                            788 trees planted by EcoMatcher in the Philippines to create a ReThink forest which will
                            result in 12,554 Kg of CO2 carbon sequestration in an attempt to make the event carbon
                            positive
                        </p>
                        <p>
                            {' '}
                            Supply 500 people in Hong Kong, for two months with free, high quality liquid soaps via
                            SoapCycling
                        </p>

                        <p style={{ fontWeight: 'bold' }}>Attendee Feedback</p>

                        <ul>
                            <li>
                                268 attendees made a personal pledge to start a new change conversation within their
                                organisation
                            </li>
                            <li>88%* of attendees surveyed onsite rated the event as very good or excellent</li>
                            <li>
                                94%* of attendees surveyed onsite said they would probably or definitely attend ReThink
                                2021 as an in-person event
                            </li>
                            <li>
                                73%* of attendees surveyed onsite said they would encourage additional colleagues to
                                attend ReThink 2021{' '}
                            </li>
                        </ul>

                        <h3 className="link-green">
                            <a
                                href="mailto:hello@rethink-event.com?subject=Please%20send%20me%20the%20ReThink
                            %202021%20Sponsorship%20Prospectus"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Please send me the ReThink 2021 Sponsorship Prospectus
                            </a>
                        </h3>
                        <h3>
                            ReThink has an extensive range of engagement tools that can be combined to help achieve
                            clients’ aims and objectives, and tailored to match most budgets.
                        </h3>
                        <p>
                            Whatever your goals, our experienced team will be able to design a cost-effective package of
                            exposure and activities to help your business or organisation become an impactful
                            stakeholder in the mission of driving sustainable development across Hong Kong’s ecosystem.
                        </p>
                        <p>
                            ReThink 2020 attracted over 750 unique attendees –{' '}
                            <a
                                style={{ textDecoration: 'underline' }}
                                href="mailto:hello@rethink-event.com?subject=Please%20send%20me%20the%20ReThink%202020%20delegate%20list"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                request the 2020 attendee list.
                            </a>
                        </p>
                        <p>
                            ReThink 2021 is being designed to host 2,000 professional attendees. Each delegate
                            application will be reviewed to ensure all delegates are true agents of change, empowered
                            and authorised to drive transformation, invest in new solutions and forge new relationships.{' '}
                        </p>
                        <h3>How can ReThink 2021 help? </h3>
                        <ul>
                            <li>Drive revenues through transparent ROI</li>
                            <li>Enhance ecosystem relationships</li>
                            <li>Extract audience insight</li>
                            <li>Increase market share over absent rivals</li>
                            <li>Direct access to ideal customer profile (ICP) data</li>
                            <li>Direct face time with multiple prospects</li>
                            <li>Lead generation</li>
                            <li>Stay engaged with existing customers</li>
                            <li>Boost social media/website traffic from a focused content strategy</li>
                            <li>Increased credibility as a brand that supports sustainability</li>
                            <li>Showcase new product or service offering</li>
                            <li>Instigate post-event qualified interactions</li>
                            <li>Brand building</li>
                            <li>Develop in-house knowledge and resources</li>
                        </ul>
                        <GreenButton style={{ display: 'block', margin: '0 auto' }}>
                            {' '}
                            <a
                                href="https://rethink-event.us20.list-manage.com/subscribe?u=689c9c9b54458f75cbd8a723f&id=cc903b4d8a"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request details about sponsorship and showcase opportunities at ReThink 2021
                            </a>
                        </GreenButton>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

PageSponsors.propTypes = {
    loggedIn: PropTypes.bool,
}

export default PageSponsors

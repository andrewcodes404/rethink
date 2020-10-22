import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'

import { ImageBanner, GreenButton, LinkIntext } from '../components/style/globalComps'

import ProfileBar from '../components/ProfileBar'
import CarouselSponsors from '../components/carousels/CarouselSponsors'

const profileDataDelegate = [
    {
        title: 'Delegates',
        bkgImg: 'delegate',
        icon: 'delegate',
        list: [
            'Brand Owners',
            'Construction & Infrastructure',
            'Festival & Event Organisers',
            'Financial Institutions',
            'Government Buildings',
            'Hotels & Hospitality',
            'High Street Retail',
            'Leisure & Entertainment Venues',
            'Logistics & Supply Chain',
            'NGOs/Charities ',
            'Real Estate/Property Management',
            'Schools & Universities',
            'Supermarkets',
        ],
    },
]

import styled from 'styled-components'

class Delegates extends React.Component {
    render() {
        return (
            <>
                <Nav />

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">New for 2021</h2>

                    <div className="text-content">
                        <h3>Start-up Showcase </h3>

                        <ul>
                            <li>Hong Kong registered PropTech, GreenTech &amp; CleanTech solutions </li>
                            <li>Incorporated no earlier than 01.06.2018</li>
                        </ul>

                        <h3>Innovation Pavilion </h3>

                        <ul>
                            <li>Solutions on display for the first time in Hong Kong</li>
                            <li>Deployable solutions seeking investment or corporate exposure </li>
                        </ul>

                        <h3>Marketplace </h3>

                        <ul>
                            <li>Hong Kong brands on display looking to meet buyers and resellers</li>
                            <li>
                                Eco-friendly, upcycled, organic, fair trade and recyclable – funky products destined for
                                the shop shelves and e-stores in 2021!{' '}
                            </li>
                        </ul>

                        <h3>International Showcases</h3>

                        <ul>
                            <li>Hosting tech and sustainable products, solutions, and innovation from overseas</li>
                            <li>Supported by international trade organisations and Chambers of commerce</li>
                        </ul>

                        <h2>Subsidies & Support</h2>
                        <h3>HKSAR Government Convention & Exhibition Industry Subsidy Scheme</h3>

                        <p>
                            To assist companies in exploring markets and business opportunities, the HKSAR Government
                            has launched a subsidy scheme to assist independent organisers to be passed on to exhibitors
                            – local or overseas, large or small, to participate in trade exhibitions.{' '}
                        </p>

                        <p>
                            Local companies, if eligible, may also apply for the Dedicated Fund on Branding, Upgrading
                            and Domestic Sales (BUD Fund) or the SME Export Marketing Fund (EMF) for funding on a
                            matching basis for exhibition-related expenses.
                        </p>
                        <br />
                        <br />
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
                        <br />

                        <h2>Sponsors</h2>

                        <div className="text-content">
                            <CarouselSponsors />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Delegates

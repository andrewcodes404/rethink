import React from 'react'
import Nav from '../components/Nav'
import { GreenButton } from '../components/style/globalComps'

import CarouselSponsors from '../components/carousels/CarouselSponsors'

class Delegates extends React.Component {
    render() {
        return (
            <>
                <Nav />

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">New content for 2021</h2>

                    <div className="text-content">
                        <h3>ReThink 2021 will see the introduction of exciting new partner-led content initiatives </h3>

                        <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Day 1 - 8th June 2021</p>
                        <ul>
                            <li>The Hong Kong Ocean Economy Summit, in partnership with O3C </li>
                            <li>Redefining Value Stage, in partnership with Dream Impact & Shared Value Project HK</li>
                        </ul>
                        <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Day 2 - 9th June 2021</p>
                        <ul>
                            <li>Beyond Plastics Live, in partnership with A Plastic Ocean Foundation </li>
                            <li> Future Working Lives Stage, in partnership with Community Business</li>
                        </ul>
                        <p>More to be announced soon! </p>

                        <h2>Solutions Showcase</h2>

                        <p style={{ fontWeight: '400' }}>
                            Low-cost showcase opportunities to display products, promote services and launch new
                            solutions:
                        </p>

                        <h3>Start-up Showcase </h3>
                        <ul>
                            <li>Hong Kong registered CleanTech, FinTech, GreenTech & PropTech solutions</li>
                            <li>Incorporated no earlier than 01.06.2018 (BRC required upon application) </li>
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

                        <p>
                            The zero-waste showcase booth arrangements will be produced, installed, dismantled and
                            recycled where the display materials cannot be reused by the contractor.{' '}
                        </p>
                        <br />

                        <h2>Subsidies & Support</h2>
                        <h3>HKSAR Government Convention & Exhibition Industry Subsidy Scheme</h3>
                        <p style={{ fontWeight: '400' }}>
                            To assist companies in exploring markets and business opportunities, the HKSAR Government
                            has launched a subsidy scheme to assist independent organisers to be passed on to exhibitors
                            – local or overseas, large or small, to participate in trade exhibitions.{' '}
                        </p>
                        <p style={{ fontWeight: '400' }}>
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
                        <h2>2020 Sponsors</h2>
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

import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'

import { ImageBanner, GreenButton, LinkIntext } from '../components/style/globalComps'

import ProfileBar from '../components/ProfileBar'

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

const DelegatesStyled = styled.div`
    /* margin: 100px 0; */

    .logos {
        display: flex;
        justify-content: space-around;
        max-width: 650px;
        margin: 0 auto;
    }

    .logo {
        width: 45%;
        padding: 30px;
        cursor: pointer;
        transition: 0.3s;
        border: 2px solid white;
        &:hover {
            /* background: gold; */
            border: 2px solid gold;
        }
    }
`

class Delegates extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <DelegatesStyled>
                    <div className="text-content-title-wrapper">
                        <h2 data-aos="my-anim">Delegates</h2>

                        <div className="text-content">
                            <p>
                                ReThink 2021 is designed for business leaders, sustainability practitioners and those
                                responsible for researching and resourcing new sustainable strategies across all
                                business functions; corporate affairs, finance, ICT, marketing and comms, operations,
                                people and procurement.
                            </p>

                            <h3>ReThink 2021 is proud to be supporting </h3>

                            <p style={{ textAlign: 'center' }}>
                                All delegate fees contribute to the ReThink beneficiary fund, as soon as you book the
                                impact starts.
                            </p>

                            <div className="logos">
                                <div className="logo">
                                    {' '}
                                    <a href="https://www.soapcycling.org/" target="_blank" rel="noopener noreferrer">
                                        <img src="static/graphics/soap-cycling.png" alt="" srcSet="" />
                                    </a>
                                </div>

                                <div className="logo">
                                    {' '}
                                    <a href="https://feedinghk.org/" target="_blank" rel="noopener noreferrer">
                                        <img src="static/graphics/feeding-hk.jpg" alt="" srcSet="" />{' '}
                                    </a>
                                </div>
                            </div>

                            <h3>Why Attend?</h3>

                            <p>
                                ReThink HK will unite businesses, investors, the public sector and NGO's, around a
                                common purpose: to share ideas and accelerate action along the path to a sustainable
                                future for Hong Kong.{' '}
                            </p>

                            <ul>
                                <li>Learn from recognised changemakers and business leaders</li>
                                <li>Build relationships with key stakeholders</li>
                                <li>Research new service providers </li>
                                <li>Source sustainable products and innovative solutions</li>
                                <li>Be part of the growing ambition for change in Hong Kong</li>
                                <li>
                                    Support an event that gives back to the community while investing profit back into
                                    the event
                                </li>
                            </ul>

                            <h3>Who should attend? </h3>

                            <ul>
                                <li>
                                    Anyone that is driven by, or challenged with, sustainability goals for their
                                    business or organisation{' '}
                                </li>
                                <li>Businesses leaders, from across all industries </li>
                                <li>Sustainability teams from corporates and MNCs</li>
                            </ul>

                            <h3>Corporate delegate packages</h3>

                            <p>
                                Group bookings are available for Business Environment Council member companies –
                                packages include extra event benefits, a CEO Roundtable invitation, easy booking and
                                split-day passes.{' '}
                            </p>

                            <GreenButton style={{ display: 'block', margin: '0 auto' }}>
                                {' '}
                                <a href="https://forms.gle/qENcRUphnaiuLhbz5" target="_blank" rel="noopener noreferrer">
                                    Click here to register your interest to attend and secure the early-bird rates when
                                    application opens in February 2021
                                </a>
                            </GreenButton>
                            <br />
                            <br />
                            <br />

                            {/* <p>
                                The event is designed for sustainability practitioners and those responsible for
                                implementing sustainable strategies across business functions; procurement, finance,
                                marketing, people and operations.
                            </p> */}

                            {/* <ProfileBar profileData={profileDataDelegate} profileMessage="delegate" /> */}
                            {/* 
                            <p>
                                ReThink is for professionals looking for inspiration on how to draw up realistic yet
                                meaningful sustainability goals for their business or organisations. They can access
                                advice from peers on how to encourage and nurture employee and stakeholder engagement
                                while networking to establish partnerships that will deliver greater social and
                                environmental impact.
                            </p> */}

                            {/* <p>
                                Experts will advise on how to effectively market the good that you’re doing, guide on
                                financing the change, compliance, certification and standards, as well as bring past
                                experiences to life in Q&amp;A sessions relevant to all businesses.
                            </p> */}

                            {/* <h3 style={{ textAlign: 'center' }}>
                                <a
                                    href="https://app.micepad.co/pages/#/prefill/ReThink2020"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Delegate places are limited each day <br></br>
                                    <span style={{ textDecoration: 'underline' }}>click here</span> to book your 1-day
                                    or 2-day pass
                                </a>
                            </h3> */}
                        </div>
                    </div>

                    {/* <ImageBanner height={'350px'} position={'center'}>
                        <div className="image-banner-bkg-img">
                            <img
                                src="./static/photos/talking-lrg.jpg"
                                srcSet="
          ./static/photos/talking-sml.jpg 700w,
          ./static/photos/talking-med.jpg 1000w,
          ./static/photos/talking-lrg.jpg 1800w"
                                alt="building with trees"
                            />
                        </div>
                    </ImageBanner> */}
                </DelegatesStyled>
            </>
        )
    }
}

export default Delegates

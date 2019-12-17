import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'

import { ImageBanner, LinkIntext } from '../components/style/globalComps'

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
`

class Delegates extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <div id="visitors">
                    <div className="text-content-title-wrapper">
                        <h2 data-aos="my-anim">Delegates</h2>

                        <div className="text-content">
                            <h3>
                                Anyone that is driven by, or challenged with, sustainability goals for their business or
                                organisation should attend ReThink.
                            </h3>

                            <h3>Who should attend?</h3>
                            <p>
                                The event is designed for sustainability practitioners and those responsible for
                                implementing sustainable strategies across business functions; procurement, finance,
                                marketing, people and operations.
                            </p>

                            <ProfileBar profileData={profileDataDelegate} profileMessage="delegate" />

                            <p>
                                ReThink is for professionals looking for inspiration on how to draw up realistic yet
                                meaningful sustainability goals for their business or organisations. They can access
                                advice from peers on how to encourage and nurture employee and stakeholder engagement
                                while networking to establish partnerships that will deliver greater social and
                                environmental impact.
                            </p>

                            <p>
                                Experts will advise on how to effectively market the good that you’re doing, guide on
                                financing the change, compliance, certification and standards, as well as bring past
                                experiences to life in Q&amp;A sessions relevant to all businesses.
                            </p>

                            <LinkIntext>
                                <p className="" data-aos="">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeF4V1J-jKBahE1DWwmTLXwSEmQ_dAAg4Zf1ogeoGCP1ZXbSA/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Delegate places are limited each day click here to register your interest in
                                        attending
                                    </a>
                                </p>
                            </LinkIntext>
                        </div>
                    </div>

                    <ImageBanner height={'350px'} position={'center'}>
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
                        {/*
        <div className="image-banner-text">
          <h2 className="no-highlight">Click here to become a delegate</h2>
        </div> */}
                    </ImageBanner>
                </div>
            </>
        )
    }
}

export default Delegates

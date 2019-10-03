import React from 'react'

import { ImageBanner, LinkIntext } from '../../style/globalComps'

import ProfileBar from '../ProfileBar/ProfileBar'

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

const Delegates = () => (
    <div id="visitors">
        <div className="text-content-title-wrapper">
            <h2 data-aos="my-anim">Delegates</h2>

            <div className="text-content">
                <h3>
                    Anyone that is driven by, or challenged with, sustainability
                    goals for their business or organisation should attend
                    ReThink.
                </h3>

                <ProfileBar
                    profileData={profileDataDelegate}
                    profileMessage="delegate"
                />

                <p>
                    ReThink is for professionals looking for inspiration on how
                    to draw up realistic yet meaningful sustainability goals for
                    their business or organisations. They can access advice from
                    peers on how to encourage and nurture employee and
                    stakeholder engagement while networking to establish
                    partnerships that will deliver greater social and
                    environmental impact.
                </p>

                <p>
                    Experts will advise on how to effectively promote your
                    “green credentials”, guide on ESG reporting, compliance,
                    certification and standards, as well as bring past
                    experiences to life in Q&amp;A sessions relevant to your
                    business.
                </p>

                <LinkIntext>
                    <p className="" data-aos="">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeF4V1J-jKBahE1DWwmTLXwSEmQ_dAAg4Zf1ogeoGCP1ZXbSA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Delegate places are limited each day click here to
                            register your interest in attending
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
)

export default Delegates

import React from 'react'

import { ImageBanner, LinkIntext } from '../style/globalComps'

import ProfileBar from '../ProfileBar/ProfileBar'

const profileDataVisitor = [
    {
        title: 'Visitors',
        bkgImg: 'visitor',
        icon: 'visitor',
        list: [
            'Brand Owners',
            'Cafes, Bars & Restaurants',
            'Festival & Event Organisers',
            'Financial Institutions',
            'Government Buildings',
            'Hotels',
            'High Street Retail',
            'Leisure & Entertainment Venues',
            'Property Management',
            'Schools & Universities',
            'Supermarkets',
        ],
    },
]

const Visitors = () => (
    <div id="visitors">
        <div className="text-content-title-wrapper">
            <h2 data-aos="my-anim">Visitors</h2>

            <div className="text-content">
                <h3>
                    Anyone that is driven by, or challenged with, sustainability
                    goals for their business or organisation should attend
                    ReThink.
                </h3>

                <ProfileBar
                    profileData={profileDataVisitor}
                    profileMessage="visitor"
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
                    experiences to life in Q&A sessions relevant to your
                    business.
                </p>

                <LinkIntext>
                    <p className="" data-aos="">
                        <a
                            href="https://forms.gle/cvuvpHGz4jcSyUCy8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Click here to register your interest in attending
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
          <h2 className="no-highlight">Click here to become a visitor</h2>
        </div> */}
        </ImageBanner>
    </div>
)

export default Visitors

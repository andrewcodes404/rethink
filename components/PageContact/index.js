import React from 'react'
import GoogleMapReact from 'google-map-react'

import { StyledContact } from './contactStyle'
import { BackgroundCoverImage, RegisterButton, LinkIntext } from '../style/globalComps'

import LinkedIn from '../../static/icons/linkedIn-green.svg'
import Facebook from '../../static/icons/facebook-green.svg'
import Instagram from '../../static/icons/instagram-green.svg'
import Twitter from '../../static/icons/twitter-green.svg'
import Mail from '../../static/icons/mail-green.svg'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Founder = () => (
    <StyledContact id="contact">
        <div className="text-content-title-wrapper" data-aos="fade-in">
            <div className="get-in-touch">
                <h2 data-aos="my-anim">Contact</h2>

                <p>
                    Say hello to the team at{' '}
                    <a href="mailto:hello@rethink-event.com?Subject=Hello" target="_blank" rel="noopener noreferrer">
                        {' '}
                        hello@rethink-event.com
                    </a>{' '}
                </p>

                <p>or...</p>
                <p className="full-details">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeF4V1J-jKBahE1DWwmTLXwSEmQ_dAAg4Zf1ogeoGCP1ZXbSA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Click here to receive full details on ReThink 2020
                    </a>
                </p>
            </div>

            <div className="social-wrapper">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/enviroeventshk/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.facebook.com/rethinkhongkong" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.instagram.com/rethink_event/" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://twitter.com/ReThink_HK" target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                </div>
            </div>

            <div className="info">
                <div className="location">
                    <h3>Location</h3>
                    <p>ReThink 2020</p>
                    <p>K11 ATELIER, King’s Road</p>
                    <p>Hong Kong</p>
                </div>

                <div className="event-times">
                    <h3>Event Times</h3>
                    <p>Tuesday 23 June - 09.00 – 18.00</p>
                    <p>Wednesday 24 June - 09.00 – 17.30</p>
                </div>
            </div>
        </div>

        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS }}
                defaultCenter={{
                    lat: 22.2943136,
                    lng: 114.1749903,
                }}
                defaultZoom={13}
            >
                <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
            </GoogleMapReact>
        </div>
        {/* <BackgroundCoverImage darker>
            <img
                src="./static/photos/land-med.jpg"
                srcSet="
          ./static/photos/land-sml.jpg 700w,
          ./static/photos/land-med.jpg 1000w,
          ./static/photos/land-lrg.jpg 2000w"
                alt="landscape"
            />
        </BackgroundCoverImage> */}

        <div className="text-content-title-wrapper" data-aos="fade-in">
            <h2 data-aos="my-anim">Meet the founder</h2>
            <br />
            <div className="text-content">
                <div className="founder-header">
                    <div className="founder-title">
                        <h2 className="no-highlight">Chris Brown</h2>

                        <div className="contact-btn">
                            <RegisterButton>
                                <a href="mailto:chris.b@rethink-event.com " target="_blank" rel="noopener noreferrer">
                                    email
                                </a>
                            </RegisterButton>
                        </div>
                        <div className="contact-btn">
                            <RegisterButton>
                                <a
                                    href="https://www.linkedin.com/in/enviroeventshk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    linkedIn
                                </a>
                            </RegisterButton>
                        </div>
                    </div>

                    <div className="founder-portrait-cont">
                        <div className="founder-portrait-img">
                            <img src="./static/photos/founder-portrait.jpg" alt="founder portrait" />
                        </div>
                    </div>
                </div>

                <p>
                    Chris is the Founder and Director of ReThink. Chris has a background in sales, marketing,
                    transformation and event organising spanning +16 years in the UK and Hong Kong.
                </p>

                <p>
                    He made hundreds of research calls to sustainability professionals and spoke face to face with over
                    50 businesses in Hong Kong before designing and launching ReThink. Chris came to the conclusion that
                    business stakeholders have many different definitions of and levels of engagement with
                    “sustainability” and some a strong emotional personal allegiances towards other organisations.
                </p>

                <p>
                    Chris launched ReThink seeing the need for a neutral, unifying, platform where corporations,
                    communities, and non-profits could all contribute to the conversation and collaborate on the
                    movement towards a circular economy and a more sustainable environment for Hong Kong.
                </p>
            </div>
        </div>
    </StyledContact>
)

export default Founder

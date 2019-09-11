import React from 'react'
import { StyledFounder } from './founderStyle'
import { BackgroundCoverImage, RegisterButton } from '../../style/globalComps'
const Founder = () => (
    <StyledFounder id="contact">
        <BackgroundCoverImage darker>
            <img
                src="./static/photos/land-med.jpg"
                srcSet="
          ./static/photos/land-sml.jpg 700w,
          ./static/photos/land-med.jpg 1000w,
          ./static/photos/land-lrg.jpg 2000w"
                alt="landscape"
            />
        </BackgroundCoverImage>

        <div className="text-content-title-wrapper" data-aos="fade-in">
            <h2 data-aos="my-anim">Meet the founder</h2>
            <br />
            <div className="text-content">
                <div className="founder-header">
                    <div className="founder-title">
                        <h2 className="no-highlight">Chris Brown</h2>

                        <div className="contact-btn">
                            <RegisterButton>
                                <a
                                    href="mailto:chris.b@rethink-event.com "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
                            <img
                                src="./static/photos/founder-portrait.jpg"
                                alt="founder portrait"
                            />
                        </div>
                    </div>
                </div>

                <p>
                    Chris is the Founder and Director of ReThink. Chris has a
                    background in sales, marketing, transformation and event
                    organising spanning +16 years in the UK and Hong Kong.
                </p>

                <p>
                    He made hundreds of research calls to sustainability
                    professionals and spoke face to face with over 50 businesses
                    in Hong Kong before designing and launching ReThink. Chris
                    came to the conclusion that business stakeholders have many
                    different definitions of and levels of engagement with
                    “sustainability” and some a strong emotional personal bias
                    towards other organisations.
                </p>

                <p>
                    Chris launched ReThink seeing the need for a neutral,
                    unifying, platform where corporations, communities, and
                    non-profits could all contribute to the conversation and
                    collaborate on the movement towards a circular economy and a
                    more sustainable environment for Hong Kong.
                </p>
            </div>
        </div>
    </StyledFounder>
)

export default Founder

import React from 'react'
import { StyledContact } from './contactStyle'
import { BackgroundCoverImage, RegisterButton } from '../style/globalComps'
const Founder = () => (
    <StyledContact id="contact">
        <div className="text-content-title-wrapper" data-aos="fade-in">
            <h2 data-aos="my-anim">Contact</h2>
            <br />
            <div className="text-content">
                <p>ReThink 2020</p>
                <p>23 &amp; 24 June </p>
                <p>K11 ATELIER, King’s Road</p>
                <p>Hong Kong</p>

                <h3>Event Times</h3>
                <p>Tuesday 23 June - 09.00 – 18.00</p>
                <p>Wednesday 24 June - 09.00 – 17.30</p>

                <h3>Get in touch </h3>
            </div>
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

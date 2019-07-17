import React from 'react'
import { StyledFounder } from './founderStyle'
import { BackgroundCoverImage, RegisterButton } from '../style/globalComps'
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
                                    href="mailto:hello@rethink-event.com?subject=I%20would%20like%20to%20be%20a%20sponsor%20at%20ReThink"
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
                                    href="https://www.linkedin.com/in/enviroeventshk/ "
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
                    With sixteen years’ experience of organising content-led
                    business events in the UK and Asia, Founder, Chris Brown,
                    excels in industry collaboration, uniting stakeholders and
                    encouraging communities to share insight, showcase
                    innovation and network at live events.
                </p>

                <p>
                    Chris has a high-level, strategic, understanding of how to
                    connect buyers and sellers, supported by a drive to bring
                    ecosystems together. He thrives on providing exceptional
                    events that have personality and deliver real benefits for
                    all those involved.
                </p>
            </div>
        </div>
    </StyledFounder>
)

export default Founder

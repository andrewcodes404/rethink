import React from 'react'
import { StyledConf, StyledActivtyCard } from './theConfStyle.js'
import { ImageBanner } from '../../style/globalComps'
import confData from './confData'

const TheConference = () => (
    <StyledConf id="conference">
        <div className="text-content-title-wrapper">
            <h2 data-aos="my-anim">The Conference</h2>

            <div className="text-content">
                <h3>
                    At the heart of ReThink is the Conference &amp; Workshop
                    programme, curated to offer case-study and visionary insight
                    from eco-trailblazers, leading brands and big businesses
                    with ambitious sustainability goals as well as highlighting
                    NGO initiatives and the latest solutions that are the key to
                    innovation.
                </h3>

                <p>
                    Discussion and debate from cross-industry operators will
                    examine the future infrastructure and investment
                    requirements for Hong Kong and present actionable strategies
                    that will enable Hong Kong’s society, environment and
                    economy to play it’s part in global decarbonisation,
                    emissions reductions and future sustainability.
                </p>

                <p>
                    Keynote presentations will shine a light on success stories
                    from across the region - paving the way for greater
                    understanding of the challenges, risks and opportunities
                    presented by sustainable change and development.
                </p>

                <div className="conf-activities">
                    {confData.map((el, index) => (
                        <StyledActivtyCard
                            key={index}
                            color={el.color}
                            data-aos="fade-down"
                        >
                            <div className="activity-icon">
                                <img
                                    src={`./static/icons/${el.icon}-white.svg`}
                                    alt=""
                                />
                            </div>

                            <div className="activity-title">
                                <h3>{el.title}</h3>
                            </div>

                            <div className="activity-list">
                                {el.list.map((el, index) => (
                                    <p key={index} className="list-item">
                                        {el}
                                    </p>
                                ))}
                            </div>
                        </StyledActivtyCard>
                    ))}
                </div>
            </div>
        </div>

        <ImageBanner height={'300px'}>
            <div className="image-banner-bkg-img">
                <img
                    src="./static/photos/building-lrg.jpg"
                    srcSet="
          ./static/photos/building-sml.jpg 700w,
          ./static/photos/building-med.jpg 1000w,
          ./static/photos/building-lrg.jpg 1800w"
                    alt="building with trees"
                />
            </div>
        </ImageBanner>
    </StyledConf>
)

export default TheConference

import React from 'react'
import { StyledConf, StyledActivtyCard } from './theConfStyle.js'
import { ImageBanner, LinkIntext } from '../style/globalComps'
import confData from './confData'
import Link from 'next/link'

const TheConference = () => (
    <StyledConf id="conference">
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

        <div className="text-content-title-wrapper">
            <h2 data-aos="my-anim">
                <Link href="/conference">
                    <a>The Conference</a>
                </Link>
            </h2>

            <div className="text-content">
                <p>
                    At the heart of ReThink is the Conference &amp; Workshop programme, curated to offer case-study and
                    visionary insight from eco-trailblazers, leading brands and big businesses with ambitious
                    sustainability goals as well as highlighting NGO initiatives and the latest solutions that are the
                    key to innovation.
                </p>

                <p>
                    Discussion and debate from cross-industry operators will examine the future infrastructure and
                    investment requirements for Hong Kong and present actionable strategies that will enable Hong Kong’s
                    society, environment and economy to play its part in global decarbonisation, emissions reductions
                    and future sustainability.
                </p>

                <p>
                    Keynote presentations will shine a light on success stories from across the region and engaging
                    panel sessions will pave the way for greater understanding of the challenges, risks and
                    opportunities presented by sustainable change and development.
                </p>

                {/* <LinkIntext>
                    <h3 className="" data-aos="">
                        <Link href="/programme">
                            <a>More details on the programme</a>
                        </Link>
                    </h3>
                </LinkIntext> */}

                <div className="conf-activities">
                    {confData.map((el, index) => (
                        <StyledActivtyCard key={index} color={el.color} data-aos="fade-down">
                            <div className="activity-icon">
                                <img src={`./static/icons/${el.icon}-white.svg`} alt="" />
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

                <h3 className="highlight">speaker carousel</h3>

                <h3 className="highlight">
                    {' '}
                    View the full conference schedule HIDDEN UNTIL READY – link to /programme
                </h3>
                <h3 className="highlight">View the speaker line-up HIDDEN UNTIL READY – Link to /speakers </h3>
                <h3 className="highlight">
                    Interested in speaking at ReThink 2020 – Contact the team - link to Googleform
                </h3>
            </div>
        </div>
    </StyledConf>
)

export default TheConference

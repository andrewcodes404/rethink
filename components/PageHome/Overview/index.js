import { LinkIntext } from '../../style/globalComps'
import React from 'react'

class Overview extends React.Component {
    render() {
        return (
            <div className="text-content-title-wrapper" id="overview">
                <h2 className="title" data-aos="my-anim">
                    {' '}
                    It&apos;s time to rethink
                </h2>

                <div className="text-content" data-aos="new-animation">
                    <h3>
                        {' '}
                        <span className="bold">Rethink /riːˈθɪŋk/ verb:</span> To think again about a plan, idea, or
                        system in order to change or improve it.
                    </h3>

                    <p>
                        The challenges that face our planet become more and more critical each and every day. In order
                        to hand future generations a realistic chance of saving this unique and fragile ecosystem, we
                        have an opportunity to stabilise the environment through collective change and shared
                        responsibility – but that opportunity is precious and must not be wasted.
                    </p>

                    <p>
                        ReThink is being designed specifically for professionals who are driven by, or challenged with,
                        sustainability goals for their business or organisation, and the 2020 event is focused on
                        answering one of the most crucial questions for companies in Hong Kong:
                    </p>

                    <h3>How can we help businesses accelerate change towards a more sustainable future?</h3>

                    <p>
                        Through inspiring speakers, action-focused discussions and real-life solutions, ReThink 2020
                        will provide answers to this question, through a carefully curated two-day conference and
                        workshop programme supported by an innovation showcase with the best in suppliers and service
                        providers.
                    </p>

                    <LinkIntext>
                        <h3 className="" data-aos="">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeF4V1J-jKBahE1DWwmTLXwSEmQ_dAAg4Zf1ogeoGCP1ZXbSA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click here to receive full details on ReThink 2020
                            </a>
                        </h3>
                    </LinkIntext>

                    <blockquote>
                        “…customers want sustainable products from sustainable companies. This includes everything from
                        labor practices to the environmental impact of their production.” <h3>Nielsen</h3>
                    </blockquote>

                    {/* <p>
                        Going beyond the Rs of Reduce, Reuse and Recycle; sustainability professionals and business
                        owners can access the very latest insight from experts and take away purposeful learnings from
                        real-life enterprise case studies that will stimulate collaboration and drive new strategies
                        through the avoidance of business risk and identifying new opportunities.
                    </p> */}

                    {/* <p>
                        ReThink provides a collaborative platform for businesses and not-for-profit organisations to
                        harness the power of collective change, inspiring sustainability stakeholders and bringing the
                        value chain together to create partnerships, foster a circular economy and secure a more
                        sustainable world.
                    </p> */}
                </div>
            </div>
        )
    }
}
export default Overview

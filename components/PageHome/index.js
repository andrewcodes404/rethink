import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { LinkIntext } from '../style/globalComps'

import Nav from '../Nav'
import Hero from './Hero'
import CarouselPartners from '../carousels/CarouselPartners'
import CarouselSponsors from '../carousels/CarouselSponsors'
import CarouselHostSpeakers from '../carousels/CarouselHostSpeakers'
import CarouselTank from '../carousels/CarouselTank'
import FirstVisit from '../FirstVisit'

class PageHome extends React.Component {
    render() {
        return (
            <div>
                <FirstVisit />
                <Nav />
                <Hero />

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
                            The challenges that face our planet become more and more critical each and every day. In
                            order to hand future generations a realistic chance of saving this unique and fragile
                            ecosystem, we have an opportunity to stabilise the environment through collective change and
                            shared responsibility – but that opportunity is precious and must not be wasted.
                        </p>

                        <p>
                            ReThink is being designed specifically for professionals who are driven by, or challenged
                            with, sustainability goals for their business or organisation, and the 2020 event is focused
                            on answering one of the most crucial questions for companies in Hong Kong:
                        </p>

                        <h3>How can we help businesses accelerate change towards a more sustainable future?</h3>

                        <p>
                            Through inspiring speakers, action-focused discussions and real-life solutions, ReThink 2020
                            will provide answers to this question, through a carefully curated two-day conference and
                            workshop programme supported by an innovation showcase with the best in suppliers and
                            service providers.
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
                            “…customers want sustainable products from sustainable companies. This includes everything
                            from labor practices to the environmental impact of their production.” <h3>Nielsen</h3>
                        </blockquote>
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/sponsors">
                            <a>Sponsors</a>
                        </Link>
                    </h2>
                    <div className="text-content">
                        <CarouselSponsors />
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/partners">
                            <a>Partners</a>
                        </Link>
                    </h2>
                    <div className="text-content">
                        <CarouselPartners />
                    </div>
                </div>

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">
                        <Link href="/conference">
                            <a>The Conference</a>
                        </Link>
                    </h2>

                    <div className="text-content">
                        <p>
                            At the heart of ReThink is the Conference & Workshop programme, curated to offer case-study
                            and visionary insight from eco-trailblazers, leading brands and big businesses with
                            ambitious sustainability goals as well as highlighting NGO initiatives and the latest
                            solutions that are the key to innovation.
                        </p>

                        <LinkIntext>
                            <h3 className="" data-aos="">
                                <Link href="/programme">
                                    <a>More details on the programme</a>
                                </Link>
                            </h3>
                        </LinkIntext>
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/programme">
                            <a>Speaker Highlights</a>
                        </Link>
                    </h2>
                    <br />

                    <CarouselHostSpeakers />
                </div>

                <CarouselTank />
                <div className="text-content-title-wrapper">
                    <div className="text-content">
                        <blockquote>
                            &quot; This planet is not terra firma. It is a delicate flower and it must be cared for.
                            It&apos;s lonely. It&apos;s small. It&apos;s isolated, and there is no resupply. And we are
                            mistreating it. Clearly, the highest loyalty we should have is not to our own country or our
                            own religion or our hometown or even to ourselves. It should be to the planet at large. This
                            is our home, and this is all we&apos;ve got.&quot;
                        </blockquote>
                        <p>Scott Carpenter, Mercury 7 astronaut. October 1992.</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}
PageHome.propTypes = {
    loggedIn: PropTypes.bool,
}
export default PageHome

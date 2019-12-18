import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { LinkIntext } from '../style/globalComps'

import Nav from '../Nav'
import Hero from './Hero'
import Overview from './Overview'

import CarouselPartners from '../carousels/CarouselPartners'
import CarouselSponsors from '../carousels/CarouselSponsors'
import CarouselHostSpeakers from '../carousels/CarouselHostSpeakers'

import Delegates from './Delegates'
import Audience from './Audience'
import Sponsors from './Sponsors'
import Partners from './Partners'
import AdvisoryCom from './AdvisoryCom'

import FirstVisit from '../FirstVisit'

class PageHome extends React.Component {
    render() {
        return (
            <div>
                <FirstVisit />
                <Nav />
                <Hero />
                <Overview />

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/sponsors">
                            <a>Sponsors</a>
                        </Link>
                    </h2>
                    <div className="text-content">
                        {/* <SponsorsCarousel /> */}
                        <CarouselSponsors />
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/sponsors">
                            <a>Partners</a>
                        </Link>
                    </h2>
                    <div className="text-content">
                        {/* <PartnersCarousel /> */}
                        <CarouselPartners />
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/sponsors">
                            <a>Hosts &amp; Speakers</a>
                        </Link>
                    </h2>
                    <div className="text-content">
                        {/* <PartnersCarousel /> */}
                        <CarouselHostSpeakers />
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

                {/* <Delegates /> */}
                {/* <Audience /> */}
                {/* <Sponsors /> */}
                {/* <Partners /> */}
                <AdvisoryCom />

                <div className="text-content">
                    <blockquote>
                        &quot; This planet is not terra firma. It is a delicate flower and it must be cared for.
                        It&apos;s lonely. It&apos;s small. It&apos;s isolated, and there is no resupply. And we are
                        mistreating it. Clearly, the highest loyalty we should have is not to our own country or our own
                        religion or our hometown or even to ourselves. It should be to the planet at large. This is our
                        home, and this is all we&apos;ve got.&quot;
                    </blockquote>
                    <p>Scott Carpenter, Mercury 7 astronaut. October 1992.</p>
                </div>
            </div>
        )
    }
}
PageHome.propTypes = {
    loggedIn: PropTypes.bool,
}
export default PageHome

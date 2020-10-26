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
                            The challenge of protecting and restoring global ecosystems becomes more and more critical
                            each and every day.
                        </p>

                        <p>However, there is hope. And, there is ambition.</p>
                        <p>
                            We want to hand future generations a realistic chance of sharing our planet in harmony with
                            nature.
                        </p>

                        <p>
                            By changing the way we use resources, stabilising the environment and improving the lives of
                            all through collective change and shared responsibility – we have an opportunity to show
                            what humans are really capable of, but that opportunity is precious and must not be wasted.
                        </p>

                        <p>
                            ReThink HK has been designed specifically for Hong Kong business leaders, sustainability
                            practitioners and those responsible for researching and resourcing new sustainable
                            strategies.
                        </p>
                        <p>
                            ReThink operates under license from the business and sustainability communities that it is
                            privileged to support – uniting stakeholders, amplifying the need for change and giving
                            value to sponsors, partners and those that help the team to develop the event.{' '}
                        </p>

                        <p>
                            All delegate fees contribute to a beneficiary fund that supports two incredible Hong Kong
                            charities.
                        </p>

                        <p>
                            The 2021 edition will expand on our founder’s ambition to curate a high-value business
                            ecosystem event which delivers immediate and measurable impact, facilitates collaboration
                            and that leads to real action towards a more equitable and climate smart future for Hong
                            Kong.
                        </p>

                        <h3>Event Themes</h3>

                        <div className="themes-img" data-aos="fade-in" data-aos-delay="500" data-aos-duration="500">
                            <img src="./static/2021/themes.jpg" alt="themes" />
                        </div>

                        <LinkIntext>
                            <h3 className="" data-aos="">
                                <a href="https://forms.gle/M6g99kuEfjXxoEF87" target="_blank" rel="noopener noreferrer">
                                    Click here to receive full details on ReThink 2021
                                </a>
                            </h3>
                        </LinkIntext>

                        <blockquote>
                            “Ultimately, purpose is the engine of long-term profitability.”{' '}
                            <h3>Larry Fink, January 2020</h3>
                        </blockquote>
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/sponsors">
                            <a>2020 Sponsors</a>
                        </Link>
                    </h2>
                    <div className="text-content">
                        <CarouselSponsors />
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/partners">
                            <a>2020 Partners</a>
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
                            ReThink 2021 provides an ambitious dialogue, insight and expertise across globally
                            recognised risk and opportunity topics, in a Hong Kong context.
                        </p>

                        <p>
                            The programme addresses the very specific societal and environmental sustainability
                            challenges faced by Hong Kong organisations operating in our unique city, and those
                            sourcing, trading or collaborating across borders.
                        </p>
                        <LinkIntext>
                            <h3 className="" data-aos="">
                                <a href="/programme" target="_blank" rel="noopener noreferrer">
                                    More details on the programme
                                </a>

                                <Link href="">
                                    <a></a>
                                </Link>
                            </h3>
                        </LinkIntext>
                    </div>
                </div>

                <div className="text-content-title-wrapper-small">
                    <h2 data-aos="my-anim">
                        <Link href="/programme">
                            <a>2020 Speaker Highlights</a>
                        </Link>
                    </h2>
                    <br />

                    <CarouselHostSpeakers />
                </div>

                <LinkIntext>
                    <h3 className="" data-aos="">
                        <a href="/speakers">See all 2020 Conference Speakers</a>

                        <Link href="">
                            <a></a>
                        </Link>
                    </h3>
                </LinkIntext>

                <CarouselTank />
                <div className="text-content-title-wrapper">
                    <div className="text-content">
                        <blockquote>
                            &quot; Many individuals are doing what they can. But real success can only come if there is
                            a change in our societies and in our economics and in our politics. &quot;
                        </blockquote>
                        <p>Sir David Attenborough, May 2019</p>
                    </div>
                </div>
            </div>
        )
    }
}
PageHome.propTypes = {
    loggedIn: PropTypes.bool,
}
export default PageHome

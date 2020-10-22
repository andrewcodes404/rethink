import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Nav from '../Nav'
import { GreenButton } from '../style/globalComps'
import CarouselHostSpeakers from '../carousels/CarouselHostSpeakers'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSessions: [],
            showDay: props.day ? props.day : 'one',
        }
    }

    handleTrianlgeClick = id => {
        if (this.state.showSessions.find(x => x === id)) {
            var array = [...this.state.showSessions]

            var index = array.indexOf(id)

            if (index !== -1) {
                array.splice(index, 1)
                this.setState({ showSessions: array })
            }
        } else {
            this.setState({
                showSessions: [...this.state.showSessions, id],
            })
        }
    }

    render() {
        return (
            <div>
                <Nav />

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">Programme</h2>

                    <h3>
                        ReThink 2021 provides insight and understanding across globally recognised risk and opportunity
                        topics, from a Hong Kong context.
                    </h3>

                    <p>
                        The programme addresses the very specific sustainability challenges faced by Hong Kong
                        organisations operating here, in our unique city and whilst sourcing, trading or collaborating
                        across borders.
                    </p>

                    <p>
                        Two unique days of keynotes, case studies, interviews, panels, workshops, and interactive
                        sessions will address the rapidly changing landscape of environmental and societal
                        sustainability whilst unpacking how business leaders and sustainability practitioners can
                        accelerate and amplify change across their complex internal and external stakeholder structures.{' '}
                    </p>

                    <h3 className="link-green link-underline">
                        <Link href="/programme2020">
                            <a>View the 2020 Conference programme </a>
                        </Link>
                    </h3>

                    <p>
                        The agenda is being expanded for ReThink HK 2021 across multiple conference theatres, workshops
                        and lounges hosting a dynamic matrix of content structured by topic, industry and function for
                        corporates, enterprise businesses and SMEs.
                    </p>

                    <p>
                        ReThink is Hong Kong’s unrivalled forum for discussing how businesses can “build back better” by
                        mitigating against climate change, investing in technology, using resources sustainably and
                        reducing inequality.{' '}
                    </p>

                    <p>
                        Through shared responsibility, collective change and a pivot in the way organisations measure
                        success, we are taking a moonshot by encouraging businesses to embrace innovation, work
                        together, respect and protect our waterways and biodiversity and improve the lives of all.{' '}
                    </p>

                    <p>Stay tuned, key speakers and the full agenda to be announced soon. </p>

                    <h2 data-aos="my-anim">2020 Speakers</h2>

                    <div className="text-content-title-wrapper-small">
                        <CarouselHostSpeakers />
                    </div>

                    <GreenButton style={{ display: 'block', margin: '0 auto' }}>
                        {' '}
                        <a href="https://forms.gle/WtpDmvuo9SqMY8L57" target="_blank" rel="noopener noreferrer">
                            Get in touch if you would like to be part of the ReThink HK conference programme
                        </a>
                    </GreenButton>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

// export default withApollo(Index)
export default Index

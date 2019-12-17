import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Nav'
import Hero from './Hero'
import Overview from './Overview'
import TheConference from './TheConference'
import Delegates from './Delegates'
import Audience from './Audience'
import Sponsors from './Sponsors'
import Partners from './Partners'
import AdvisoryCom from './AdvisoryCom'
import Founder from './Founder'
import FirstVisit from '../FirstVisit'

class PageHome extends React.Component {
    render() {
        return (
            <div>
                <FirstVisit />
                <Nav />
                <Hero />
                <Overview />
                <TheConference />
                <Delegates />
                <Audience />
                <Sponsors />
                <Partners />
                <AdvisoryCom />
                <Founder />
            </div>
        )
    }
}
PageHome.propTypes = {
    loggedIn: PropTypes.bool,
}
export default PageHome

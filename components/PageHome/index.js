import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../PageHeadFooter/Nav'
import Hero from './Hero'
// import IconBar from "./iconBar/IconBar";
import Overview from './Overview'
// import ProfileBar from "./profileBar/ProfileBar";

import TheConference from './TheConference'
import Visitors from './Visitors'
import Audience from './Audience'
import Sponsors from './Sponsors'
import Partners from './Partners'
import AdvisoryCom from './AdvisoryCom'
import Founder from './Founder'

import AOS from 'aos'
import 'aos/dist/aos.css'

class PageHome extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 600,
        })
    }

    render() {
        return (
            <div>
                <Nav loggedIn={this.props.loggedIn} />
                <Hero />
                <Overview />
                <TheConference />
                <Visitors />
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

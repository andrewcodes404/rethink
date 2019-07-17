import Nav from '../components/Nav'
import Hero from '../components/Hero'
// import IconBar from "../components/iconBar/IconBar";
import Overview from '../components/Overview'
// import ProfileBar from "../components/profileBar/ProfileBar";

import TheConference from '../components/TheConference'
import Visitors from '../components/Visitors'
import Audience from '../components/Audience'
import Sponsors from '../components/Sponsors'
import Partners from '../components/Partners'
import Founder from '../components/Founder'
import Footer from '../components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import React from 'react'

class Index extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 600,
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <Hero />
                <Overview />
                <TheConference />
                <Visitors />
                <Audience />
                <Sponsors />
                <Partners />
                <Founder />
                <Footer />
            </div>
        )
    }
}

export default Index

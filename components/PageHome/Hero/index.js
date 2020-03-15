import React from 'react'

import { StyledHero, StyledIconBar } from './heroStyle'
import { GreenButton, YellowButton } from '../../style/globalComps'

const iconData = [
    {
        text: '+800 attendees',
        img: 'delegate',
    },

    {
        text: '28 Conference Sessions',
        img: 'speaker',
    },

    {
        text: '15 Expert Panels',
        img: 'panels',
    },

    {
        text: '8 Workshops',
        img: 'workshops',
    },
    {
        text: '4 Keynote Presentations',
        img: 'case-studies',
    },
]

class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ssrDone: false,
            innerWidth: 0,
            //turn this on for video
            // renderHero: false,
            renderHero: true,
        }
    }

    componentDidMount() {
        this.setState({ ssrDone: true, innerWidth: window.innerWidth }, () => {
            console.log('no video')

            //this is the video fn
            // if (this.state.innerWidth > 450) {
            //     var v = document.getElementById('theVideo')
            //     // v.playbackRate = 0.75;
            //     v.addEventListener('playing', () => {
            //         // console.log("video is playing")
            //         this.setState({ renderHero: true })
            //     })
            // } else {
            //     this.setState({ renderHero: true })
            // }
        })
    }

    render() {
        return (
            <StyledHero id="top">
                {/* {this.state.innerWidth > 450 ? (
                    <div className={`bkg-img ${this.state.renderHero && 'fade-in'} `}>
                        <video id="theVideo" autoPlay loop muted>
                            <source src="./static/video/Beetle-Nut-Trees/MP4/Beetle-Nut-Trees.mp4" type="video/mp4" />
                            <source src="./static/video/Beetle-Nut-Trees/MP4/Beetle-Nut-Trees.webm" type="video/webm" />
                        </video>
                    </div>
                ) : (
                    <div className="bkg-img" data-aos="fade-in" data-aos-delay="500" data-aos-duration="500">
                        <img
                            src="./static/photos/land-med.jpg"
                            srcSet="
                  ./static/photos/land-sml.jpg 700w,
                  ./static/photos/land-med.jpg 1000w,
                  ./static/photos/land-lrg.jpg 2000w"
                            alt="landscape"
                        />
                    </div>
                )} */}

                <div className="bkg-img" data-aos="fade-in" data-aos-delay="500" data-aos-duration="500">
                    <img
                        src="./static/photos/land-med.jpg"
                        srcSet="
                  ./static/photos/land-sml.jpg 700w,
                  ./static/photos/land-med.jpg 1000w,
                  ./static/photos/land-lrg.jpg 2000w"
                        alt="landscape"
                    />
                </div>

                {this.state.renderHero && (
                    <div className="hero-content" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="1500">
                        <div className="hero-logo">
                            <img src="./static/graphics/hero-logo.svg" alt="" />
                        </div>

                        <h1>
                            23 &amp; 24 JUNE 2020 <br /> K11 ATELIER KING'S ROAD, HONG KONG
                        </h1>

                        <GreenButton data-aos="fade-in" data-aos-delay="500" data-aos-duration="2000">
                            <a
                                href="https://app.micepad.co/pages/#/prefill/ReThink2020 "
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Attend
                            </a>
                        </GreenButton>

                        <YellowButton data-aos="fade-in" data-aos-delay="500" data-aos-duration="2000">
                            {' '}
                            <a
                                href="https://mailchi.mp/rethink-event.com/newsletter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Newsletter
                            </a>
                        </YellowButton>

                        <GreenButton data-aos="fade-in" data-aos-delay="500" data-aos-duration="2000">
                            {' '}
                            <a href="https://forms.gle/2a96ETPE7vMDMioA7 " target="_blank" rel="noopener noreferrer">
                                Sponsor
                            </a>
                        </GreenButton>
                    </div>
                )}

                <StyledIconBar data-aos="new-animation">
                    <div className="icon-bar-content">
                        {iconData.map((el, index) => (
                            <div key={index} className="icon-card">
                                <div className="card-img">
                                    <img src={`./static/icons/${el.img}-white.svg`} alt="" />
                                </div>
                                <div className="card-text">
                                    <h4>{el.text}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </StyledIconBar>
                <div className="bkg-img-black" />
            </StyledHero>
        )
    }
}

export default Hero

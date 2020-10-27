import React from 'react'

import { StyledHero, StyledIconBar } from './heroStyle'
import { GreenButton, YellowButton } from '../../style/globalComps'

const iconData = [
    {
        text: '+2000 Attendees',
        img: 'delegate',
    },

    {
        text: '+100 Solutions',
        img: 'workshops',
    },

    {
        text: '32 Expert Workshops',
        img: 'panels',
    },

    {
        text: '6 Global Keynotes',
        img: 'speaker',
    },
    {
        text: '4 Themed Theatre',
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
                  ./static/2021/hero-bg-sml.jpg 700w,
                  ./static/2021/hero-bg-med.jpg 1000w,
                  ./static/2021/hero-bg-lrg.jpg 2000w"
                        alt="landscape"
                    />
                </div>

                {this.state.renderHero && (
                    <div className="hero-content" data-aos="fade-in" data-aos-delay="1500" data-aos-duration="1500">
                        <div className="hero-logo">
                            <img src="./static/2021/hero-logo-white.png" alt="" />
                        </div>

                        <h1>
                            08 - 09 JUNE 2021 <br /> Hall 1, HKCEC, WanChai, Hong Kong
                        </h1>

                        <GreenButton data-aos="fade-in" data-aos-delay="500" data-aos-duration="2000">
                            <a href="https://forms.gle/35b6xTmNWggW7Bfs5" target="_blank" rel="noopener noreferrer">
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
                            <a
                                href="https://rethink-event.us20.list-manage.com/subscribe?u=689c9c9b54458f75cbd8a723f&id=cc903b4d8a"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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

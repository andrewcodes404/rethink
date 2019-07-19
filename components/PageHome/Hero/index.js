import React from 'react'
import IconBar from '../IconBar/IconBar'
import { StyledHero } from './heroStyle'
import { RegisterButton, SponsorButton } from '../../style/globalComps'

class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ssrDone: false,
            innerWidth: 0,
            renderHero: false,
        }
    }

    componentDidMount() {
        this.setState({ ssrDone: true, innerWidth: window.innerWidth }, () => {
            if (this.state.innerWidth > 450) {
                var v = document.getElementById('theVideo')
                // v.playbackRate = 0.75;
                v.addEventListener('playing', () => {
                    // console.log("video is playing")
                    this.setState({ renderHero: true })
                })
            } else {
                this.setState({ renderHero: true })
            }
        })
    }

    render() {
        return (
            <StyledHero id="top">
                {this.state.innerWidth > 450 ? (
                    <div
                        className={`bkg-img ${this.state.renderHero &&
                            'fade-in'} `}
                    >
                        <video id="theVideo" autoPlay loop muted>
                            <source
                                src="./static/video/Beetle-Nut-Trees/MP4/Beetle-Nut-Trees.mp4"
                                type="video/mp4"
                            />
                            <source
                                src="./static/video/Beetle-Nut-Trees/MP4/Beetle-Nut-Trees.webm"
                                type="video/webm"
                            />
                        </video>
                    </div>
                ) : (
                    <div
                        className="bkg-img"
                        data-aos="fade-in"
                        data-aos-delay="500"
                        data-aos-duration="500"
                    >
                        <img
                            src="./static/photos/land-med.jpg"
                            srcSet="
                  ./static/photos/land-sml.jpg 700w,
                  ./static/photos/land-med.jpg 1000w,
                  ./static/photos/land-lrg.jpg 2000w"
                            alt="landscape"
                        />
                    </div>
                )}

                {this.state.renderHero && (
                    <div className="hero-content">
                        <div
                            className="hero-logo"
                            data-aos="fade-in"
                            data-aos-delay="1500"
                            data-aos-duration="1500"
                        >
                            <img
                                src="./static/graphics/logo_strap.svg"
                                alt=""
                            />
                        </div>

                        <RegisterButton
                            data-aos="fade-in"
                            data-aos-delay="2000"
                            data-aos-duration="2000"
                        >
                            <a
                                href="https://forms.gle/cvuvpHGz4jcSyUCy8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Register
                            </a>
                        </RegisterButton>

                        <SponsorButton
                            data-aos="fade-in"
                            data-aos-delay="2000"
                            data-aos-duration="2000"
                        >
                            {' '}
                            <a
                                href="https://forms.gle/cvuvpHGz4jcSyUCy8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sponsor
                            </a>
                        </SponsorButton>
                    </div>
                )}

                <IconBar />
                <div className="bkg-img-black" />
            </StyledHero>
        )
    }
}

export default Hero

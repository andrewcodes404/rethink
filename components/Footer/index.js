import React from 'react'
import { StyledFooter, SvgWrapper } from './footerStyle'
import Link from 'next/link'
import LinkedIn from '../../static/icons/linkedIn-green.svg'
import Facebook from '../../static/icons/facebook-green.svg'
import Instagram from '../../static/icons/instagram-green.svg'
import Twitter from '../../static/icons/twitter-green.svg'
import Mail from '../../static/icons/mail-green.svg'

const Footer = () => (
    <StyledFooter>
        <div className="footer-logo">
            <a href="/">
                <img src="/static/graphics/logo-green.svg" alt="rethink logo" />
            </a>
        </div>

        <div className="copyright">
            <small>Copyright © 2020 EnviroEvents Hong Kong Limited · All rights reserved.</small>
        </div>

        <SvgWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.62 20.93">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path
                            style={{
                                fill: 'none',
                                stroke: 'red',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: '1.25px',
                            }}
                            className="cls-1"
                            d="M8.3,16.12S4.5,19,1.1,18.62s12.5,5.9,19-3.6a16.66,16.66,0,0,0,2.8-8.5,1.85,1.85,0,0,1,.2-.7L25,3.12l-2.4.7L24.9.62l-2.7,1.2a1.5,1.5,0,0,1-1.3-.1,4.65,4.65,0,0,0-5.7-.1,6,6,0,0,0-2.7,3.9,1.2,1.2,0,0,1-1.5,1,16.15,16.15,0,0,1-7.4-3.4,1.19,1.19,0,0,0-2.1.7c0,1,.4,2.5,2.1,4.5l-2.1-1s-.4,3.2,3.8,5.1l-2.1.4"
                        />
                    </g>
                </g>
            </svg>
        </SvgWrapper>

        <div className="social-wrapper">
            <div className="privacy">
                <small>
                    <Link href="/privacy">
                        <a> privacy policy</a>
                    </Link>
                </small>
            </div>

            <div className="social-icon">
                <a href="https://www.linkedin.com/in/enviroeventshk/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </a>
            </div>

            <div className="social-icon">
                <a href="https://www.facebook.com/rethinkhongkong" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </a>
            </div>

            <div className="social-icon">
                <a href="https://www.instagram.com/rethink_event/" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
            </div>

            <div className="social-icon">
                <a href="https://twitter.com/ReThink_HK" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </a>
            </div>

            <a href="mailto:hello@rethink-event.com?subject=Hello" target="_blank" rel="noopener noreferrer">
                <div className="social-icon mail">
                    <Mail />
                </div>
            </a>
        </div>
    </StyledFooter>
)

export default Footer

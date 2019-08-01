import React from 'react'
import PropTypes from 'prop-types'
import { StyledNav } from './navStyle'
// import * as Scroll from "react-scroll";
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'
import Router from 'next/router'

class Nav extends React.Component {
    state = {
        dropActive: false,
    }

    handleDropBtnClick = () => {
        if (!this.state.dropActive) {
            this.setState({
                dropActive: true,
            })
        } else {
            this.setState({
                dropActive: false,
            })
        }
    }

    handleNavItemClick = () => {
        if (!this.state.dropActive) {
            this.setState({
                dropActive: true,
            })
        } else {
            this.setState({
                dropActive: false,
            })
        }
    }

    handleNavLogoClick = () => {
        this.state.dropActive &&
            this.setState({
                dropActive: false,
            })
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', function() {
            // console.log("begin", arguments);
        })

        Events.scrollEvent.register('end', function() {
            // console.log("end", arguments);
        })
    }

    scrollToTop() {
        scroll.scrollToTop()
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
    }

    render() {
        return (
            <StyledNav>
                <Link
                    activeClass="active-link"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onClick={this.handleNavLogoClick}
                >
                    <div className="header-logo-wrapper">
                        <div className="header-logo">
                            <img
                                src="/static/graphics/logo-green.svg"
                                alt="rethink logo"
                            />
                        </div>
                    </div>
                </Link>

                <div className="menu-btn-wrapper">
                    <div className="menu-btn" onClick={this.handleDropBtnClick}>
                        <svg viewBox="0 0 150 106.78">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <rect
                                        className="cls-1"
                                        width="150"
                                        height="100"
                                    />
                                    <rect
                                        className="cls-2"
                                        width="150"
                                        height="20"
                                    />
                                    <rect
                                        className={`cls-2 ${
                                            this.state.dropActive
                                                ? 'icon-rotate'
                                                : ''
                                        }`}
                                        y="85"
                                        width="150"
                                        height="20"
                                    />
                                    <rect
                                        className="cls-2"
                                        y="42.5"
                                        width="150"
                                        height="20"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

                <nav className={this.state.dropActive ? 'show-nav' : ''}>
                    <div>
                        {this.props.loggedIn && (
                            <div
                                className="admin-link"
                                style={{ color: 'white', cursor: 'pointer' }}
                                onClick={() => {
                                    Router.push('/admin')
                                }}
                            >
                                <span>admin</span>
                            </div>
                        )}
                        <Link
                            activeClass="active-link"
                            to="overview"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-70}
                            onClick={this.handleNavItemClick}
                        >
                            overview
                        </Link>

                        <Link
                            activeClass="active-link"
                            to="conference"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-70}
                            onClick={this.handleNavItemClick}
                        >
                            the conference
                        </Link>
                        <Link
                            activeClass="active-link"
                            to="visitors"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-70}
                            onClick={this.handleNavItemClick}
                        >
                            visitors
                        </Link>
                        <Link
                            activeClass="active-link"
                            to="sponsors"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-70}
                            onClick={this.handleNavItemClick}
                        >
                            sponsors
                        </Link>
                        <Link
                            activeClass="active-link"
                            to="partners"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-70}
                            onClick={this.handleNavItemClick}
                        >
                            partners
                        </Link>

                        <Link
                            activeClass="active-link"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-70}
                            onClick={this.handleNavItemClick}
                        >
                            contact
                        </Link>
                    </div>
                </nav>
            </StyledNav>
        )
    }
}
Nav.propTypes = {
    loggedIn: PropTypes.bool,
}
export default Nav

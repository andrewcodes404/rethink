import React from 'react'
import PropTypes from 'prop-types'
import { StyledNav, HeightForNav } from './navStyle'

import Link from 'next/link'

import { withRouter } from 'next/router'

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
    render() {
        const { pathname } = this.props.router

        return (
            <>
                <StyledNav>
                    <Link href="/">
                        <div className="header-logo-wrapper">
                            <div className="header-logo">
                                <img src="/static/graphics/logo-green.svg" alt="rethink logo" />
                            </div>
                        </div>
                    </Link>

                    <div className="menu-btn-wrapper">
                        <div className="menu-btn" onClick={this.handleDropBtnClick}>
                            <svg viewBox="0 0 150 106.78">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <rect className="cls-1" width="150" height="100" />
                                        <rect className="cls-2" width="150" height="20" />
                                        <rect
                                            className={`cls-2 ${this.state.dropActive ? 'icon-rotate' : ''}`}
                                            y="85"
                                            width="150"
                                            height="20"
                                        />
                                        <rect className="cls-2" y="42.5" width="150" height="20" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <nav className={this.state.dropActive ? 'show-nav' : ''}>
                        <div>
                            {/* {this.props.loggedIn && (
                            <div
                                className="admin-link"
                                style={{ color: 'white', cursor: 'pointer' }}
                                onClick={() => {
                                    Router.push('/admin')
                                }}
                            >
                                <span>admin</span>
                            </div>
                        )} */}

                            <Link href="/">
                                <a className={pathname === '/' ? 'active' : ''}>home</a>
                            </Link>

                            {/* <Link href="/conference">
                                <a className={pathname === '/conference' ? 'active' : ''}>the conference</a>
                            </Link> */}

                            <Link href="/programme">
                                <a className={pathname === '/programme' ? 'active' : ''}>programme</a>
                            </Link>

                            {/* <Link href="/speakers">
                                <a className={pathname === '/speakers' ? 'active' : ''}>speakers</a>
                            </Link> */}

                            <Link href="/delegates">
                                <a className={pathname === '/delegates' ? 'active' : ''}>delegates</a>
                            </Link>

                            <Link href="/partners">
                                <a className={pathname === '/partners' ? 'active' : ''}>partners </a>
                            </Link>

                            <Link href="/sponsors">
                                <a className={pathname === '/sponsors' ? 'active' : ''}>sponsors</a>
                            </Link>

                            <Link href="/new-for-2021">
                                <a
                                    style={{ fontWeight: 'bold' }}
                                    className={pathname === '/new-for-2021' ? 'active' : ''}
                                >
                                    NEW for 2021
                                </a>
                            </Link>

                            <Link href="contact">
                                <a className={pathname === '/contact' ? 'active' : ''}>contact</a>
                            </Link>
                        </div>
                    </nav>
                </StyledNav>

                <HeightForNav />
            </>
        )
    }
}
Nav.propTypes = {
    loggedIn: PropTypes.bool,
    router: PropTypes.object,
}
export default withRouter(Nav)

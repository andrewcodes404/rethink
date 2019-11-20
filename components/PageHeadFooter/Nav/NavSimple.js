import React from 'react'
import PropTypes from 'prop-types'
import { StyledNav } from './navStyle'
import Link from 'next/link'

import Router from 'next/router'
class NavSimple extends React.Component {
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
        return (
            <StyledNav>
                <div className="header-logo-wrapper">
                    <div className="header-logo" style={{ cursor: 'pointer' }}>
                        <Link href="/">
                            <a>
                                <img
                                    src="/static/graphics/logo-green.svg"
                                    alt="rethink logo"
                                />
                            </a>
                        </Link>
                    </div>
                </div>

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

                        <Link href={`/`}>home</Link>
                        <Link href={`/partners`}>partners</Link>
                        {/* <Link href={`/the_sponsors`}>sponsors</Link> */}
                    </div>
                </nav>
            </StyledNav>
        )
    }
}

NavSimple.propTypes = {
    loggedIn: PropTypes.bool,
}

export default NavSimple

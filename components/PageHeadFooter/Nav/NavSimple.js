import React from 'react'
import PropTypes from 'prop-types'
import { StyledNav } from './navStyle'
import Link from 'next/link'

import Router from 'next/router'
class NavSimple extends React.Component {
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

                <nav className="show-nav">
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
                        <Link href={`/the_sponsors`}>sponsors</Link>
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

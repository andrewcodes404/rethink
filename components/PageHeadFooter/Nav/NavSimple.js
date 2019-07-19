import React from 'react'
import { StyledNav } from './navStyle'
import Link from 'next/link'
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
            </StyledNav>
        )
    }
}

export default NavSimple

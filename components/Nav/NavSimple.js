import React from 'react'
import { StyledNav } from './navStyle'
import Link from 'next/link'
class NavSimple extends React.Component {
    render() {
        return (
            <StyledNav>
                <Link href="/">
                    <div className="header-logo-wrapper">
                        <div
                            className="header-logo"
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src="/static/graphics/logo-green.svg"
                                alt="rethink logo"
                            />
                        </div>
                    </div>
                </Link>
            </StyledNav>
        )
    }
}

export default NavSimple

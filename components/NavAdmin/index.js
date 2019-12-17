import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from '../../lib/graphqlTags'
import Router from 'next/router'

import styled from 'styled-components'

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        logout {
            message
        }
    }
`

const Nav = styled.div`
    background: black;
`

const Menu = styled.div`
    .push-out {
        flex: 1;
    }

    height: 70px;
    width: 95%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        justify-content: space-between;
    }
    align-items: center;
    margin: 0 auto 30px;

    .logo {
        width: 120px;
        cursor: pointer;
        margin-right: 5px;
        @media (min-width: 768px) {
            width: 145px;
            margin-right: 20px;
        }
    }

    .home,
    .logout {
        color: white;
        border: 1px solid white;
        padding: 4px 5px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
            color: white;
            background: green;
            border: unset;
        }

        span {
            margin-bottom: 0;
            line-height: 1;
            font-size: 13px;
        }

        @media (min-width: 768px) {
            padding: 7px;
            span {
                font-size: 18px;
            }
        }
    }
`

class NavAdmin extends React.Component {
    render() {
        return (
            <Nav>
                <Menu>
                    <div className="logo" onClick={() => Router.push('/')}>
                        <img src="/static/graphics/logo-green.svg" alt="rethink logo" />
                    </div>

                    <div className="home" onClick={() => Router.push('/admin')}>
                        <span>ADMIN PANEL</span>
                    </div>
                    <div className="push-out"></div>
                    <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
                        {logout => (
                            <div
                                className="logout"
                                onClick={async () => {
                                    // eslint-disable-next-line no-unused-vars
                                    const res = await logout()
                                    Router.push('/')
                                }}
                            >
                                <span>LOGOUT</span>
                            </div>
                        )}
                    </Mutation>
                </Menu>
            </Nav>
        )
    }
}

export default NavAdmin

import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from '../../PageWrapper'
import Router from 'next/router'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        logout {
            message
        }
    }
`

const Nav = styled.div`
    border-bottom: 3px dashed green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 95%;
    margin: 0 auto 30px;
    z-index: 1000;
    h3 {
        cursor: pointer;
    }
`

class NavSimple extends React.Component {
    redirectHome = () => {
        alert('it clikced')
    }
    render() {
        console.log('this.props = ', this.props)
        return (
            <Nav>
                {/* <Link href="/admin">
                    <a>ADMIN HOME</a>
                </Link> */}
                <h3 onClick={() => Router.push('/')}>RETHINK</h3>
                <h3 onClick={() => Router.push('/admin')}>ADMIN HOME</h3>

                <div>{<p>hello 👋 {this.props.userName}</p>}</div>

                {this.props.loggedIn && (
                    <div>
                        <Mutation
                            mutation={SIGN_OUT_MUTATION}
                            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                        >
                            {logout => (
                                <Button
                                    margin="normal"
                                    type="submit"
                                    variant="contained"
                                    color="default"
                                    size="small"
                                    className="submit-btn"
                                    onClick={async () => {
                                        const res = await logout()
                                        Router.push('/')
                                    }}
                                >
                                    Sign Out
                                </Button>
                            )}
                        </Mutation>
                    </div>
                )}
            </Nav>
        )
    }
}

export default NavSimple

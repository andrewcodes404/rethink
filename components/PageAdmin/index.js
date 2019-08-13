import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const AdminLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        text-decoration: underline;
        padding-bottom: 10px;
    }
`

const AdminLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;

    width: 200px;
    padding: 7px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: 0.4s;
    span {
        font-size: 24px;
    }

    &:hover {
        background: green;
        color: white;
        border: 1px solid green;
    }
`
class PageAdmin extends React.Component {
    render() {
        return (
            <div className="text-content-title-wrapper">
                <AdminLinks>
                    <h3>Admin Panel</h3>
                    <Link href="/admin-advCom">
                        <AdminLink>
                            <span>Adv-Com</span>
                        </AdminLink>
                    </Link>
                    <Link href="/admin-sponsors">
                        <AdminLink>
                            <span>Sponsors</span>
                        </AdminLink>
                    </Link>
                    <Link href="/admin-partners">
                        <AdminLink>
                            <span>Partners</span>
                        </AdminLink>
                    </Link>
                </AdminLinks>
            </div>
        )
    }
}

export default PageAdmin

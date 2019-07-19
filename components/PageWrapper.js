import React from 'react'
import Meta from './PageHeadFooter/Meta'
import PropTypes from 'prop-types'

import Footer from './PageHeadFooter/Footer'
import styled from 'styled-components'

const PgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .push-down {
        flex: 1;
    }
`
class PageWrapper extends React.Component {
    render() {
        return (
            <PgWrapper>
                <Meta />
                <div className="content-wrapper">{this.props.children}</div>
                <div
                    className="push-down"
                    style={{ borderBottom: '4px solid green' }}
                ></div>
                <Footer />
            </PgWrapper>
        )
    }
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageWrapper

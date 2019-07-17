import React from 'react'
import Meta from './Meta'
import PropTypes from 'prop-types'
class PageWrapper extends React.Component {
    render() {
        return (
            <div>
                <Meta />
                <div className="content-wrapper">{this.props.children}</div>
            </div>
        )
    }
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageWrapper

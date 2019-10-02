import React from 'react'
import PropTypes from 'prop-types'
import FirstVisit from '../components/FirstVisit'
class Index extends React.Component {
    render() {
        return (
            <div>
                <FirstVisit loggedIn={this.props.loggedIn} />
            </div>
        )
    }
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
}

export default Index

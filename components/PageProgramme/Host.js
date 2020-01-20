import React from 'react'
import { Query } from 'react-apollo'
import { GET_HOSTSPEAKER_WHERE_ID } from '../../lib/graphqlTags'
import ModalHostSpeaker from './ModalHostSpeaker'
import PropTypes from 'prop-types'
class Host extends React.Component {
    constructor() {
        super()
        this.state = {
            showHostId: '',
        }
    }
    render() {
        const { hostId } = this.props
        return (
            <div className="text-section">
                <p className="sub-title">Host</p>

                <Query query={GET_HOSTSPEAKER_WHERE_ID} variables={{ id: hostId }}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>

                        const host = data.hostSpeaker

                        return (
                            <div>
                                <div
                                    className="hostSpeaker"
                                    onClick={() => {
                                        this.setState({
                                            showHostId: hostId,
                                        })
                                    }}
                                >
                                    <span className="bold">{host.name}</span>
                                    <span className="hostSpeaker--hyphen">-</span>
                                    <span>{host.title}</span>
                                    <span className="hostSpeaker--hyphen">-</span>
                                    <span>{host.company}</span>
                                </div>

                                {this.state.showHostId == host.id && (
                                    <ModalHostSpeaker
                                        host={host}
                                        closeModal={() => {
                                            this.setState({
                                                showHostId: '',
                                            })
                                        }}
                                    />
                                )}
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

Host.propTypes = {
    hostId: PropTypes.string,
}

export default Host

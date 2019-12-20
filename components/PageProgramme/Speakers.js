import React from 'react'
import { Query } from 'react-apollo'
import { GET_HOSTSPEAKER_WHERE_ID } from '../../lib/graphqlTags'
import ModalHostSpeaker from './ModalHostSpeaker'
import PropTypes from 'prop-types'

class Speakers extends React.Component {
    constructor() {
        super()
        this.state = {
            // showSpeakerId: 'ck233w8x6005x0705x3zzss8b',
            showSpeakerId: '',
        }
    }

    render() {
        const { speakers } = this.props

        return (
            <div className="speakers text-section">
                <p className="sub-title">Speakers</p>

                {speakers.map((speakerId, index) => (
                    <div key={index} className="speaker">
                        <Query query={GET_HOSTSPEAKER_WHERE_ID} variables={{ id: speakerId }}>
                            {({ data, error, loading }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error: {error.message}</p>
                                const speaker = data.hostSpeaker

                                return (
                                    <>
                                        <div
                                            className="hostSpeaker"
                                            onClick={() => {
                                                this.setState({
                                                    showSpeakerId: speakerId,
                                                })
                                            }}
                                        >
                                            <span className="bold">{speaker.name}</span>
                                            <span className="hostSpeaker--hyphen">-</span>
                                            <span>{speaker.title}</span>
                                            <span className="hostSpeaker--hyphen">-</span>
                                            <span>{speaker.company}</span>
                                        </div>
                                        {this.state.showSpeakerId == speakerId && (
                                            <ModalHostSpeaker
                                                host={speaker}
                                                closeModal={() => {
                                                    this.setState({
                                                        showSpeakerId: '',
                                                    })
                                                }}
                                            />
                                        )}
                                    </>
                                )
                            }}
                        </Query>
                    </div>
                ))}
            </div>
        )
    }
}

Speakers.propTypes = {
    speakers: PropTypes.array,
}

export default Speakers

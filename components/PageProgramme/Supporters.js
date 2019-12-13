import React from 'react'
import { Query } from 'react-apollo'
import { GET_PARTNER_WHERE_ID } from '../../lib/graphqlTags'
import { SponsorsAndSupporters } from './programmeStyle'
import ModalSponsorSupporter from './ModalSponsorSupporter'

import PropTypes from 'prop-types'

class Supporters extends React.Component {
    constructor() {
        super()
        this.state = {
            showSupporterId: '',
        }
    }

    render() {
        const { supporters } = this.props
        return (
            <SponsorsAndSupporters>
                <p className="sub-title">Supported by</p>
                <div className="logos">
                    {supporters.map((partnerId, index) => (
                        <Query key={index} query={GET_PARTNER_WHERE_ID} variables={{ id: partnerId }}>
                            {({ data, error, loading }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error: {error.message}</p>

                                const supporter = data.partner

                                return (
                                    <>
                                        <div
                                            className="logo"
                                            onClick={() => {
                                                this.setState({
                                                    showSupporterId: supporter.id,
                                                })
                                            }}
                                        >
                                            <img src={supporter.logo} alt={supporter.name} />
                                        </div>

                                        {this.state.showSupporterId === supporter.id && (
                                            <ModalSponsorSupporter
                                                host={supporter}
                                                closeModal={() => {
                                                    this.setState({
                                                        showSupporterId: '',
                                                    })
                                                }}
                                            />
                                        )}
                                    </>
                                )
                            }}
                        </Query>
                    ))}
                </div>
            </SponsorsAndSupporters>
        )
    }
}

Supporters.propTypes = {
    supporters: PropTypes.array,
}

export default Supporters

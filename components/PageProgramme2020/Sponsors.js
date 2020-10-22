import React from 'react'
import { Query } from 'react-apollo'
import { GET_SPONSOR_WHERE_ID } from '../../lib/graphqlTags'
import { SponsorsAndSupporters } from './programmeStyle'
import ModalSponsorSupporter from './ModalSponsorSupporter'
import PropTypes from 'prop-types'
class Sponsors extends React.Component {
    constructor() {
        super()
        this.state = {
            showSponsorId: '',
        }
    }

    render() {
        const { sponsors } = this.props
        return (
            <SponsorsAndSupporters>
                <p className="sub-title">Sponsored by</p>
                <div className="logos">
                    {sponsors.map((sponsorId, index) => (
                        <Query key={index} query={GET_SPONSOR_WHERE_ID} variables={{ id: sponsorId }}>
                            {({ data, error, loading }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error: {error.message}</p>
                                const sponsor = data.sponsor
                                return (
                                    <>
                                        <div
                                            className="logo"
                                            onClick={() => {
                                                this.setState({
                                                    showSponsorId: sponsor.id,
                                                })
                                            }}
                                        >
                                            <img src={sponsor.logo} alt={sponsor.name} />
                                        </div>

                                        {this.state.showSponsorId === sponsor.id && (
                                            <ModalSponsorSupporter
                                                host={sponsor}
                                                closeModal={() => {
                                                    this.setState({
                                                        showSponsorId: '',
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

Sponsors.propTypes = {
    sponsors: PropTypes.array,
}

export default Sponsors

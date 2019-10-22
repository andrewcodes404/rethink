import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { DELETE_HOSTSPEAKER, GET_HOSTSPEAKERS } from '../../lib/graphqlTags'
import { DeleteModal } from './hostSpeakStyle'

class DeleteAdvCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDeleteModal: props.showDeleteModal,
        }
    }

    closeDeleteHostSpeaker = () => {
        this.setState({
            showDeleteModal: false,
        })
    }

    render() {
        const { name, id, ranking } = this.props

        return (
            <div>
                {this.state.showDeleteModal && (
                    <DeleteModal>
                        <div className="modal-card ">
                            <p>
                                Are you sure you want to delete <span style={{ fontWeight: 'bold' }}>{name}</span>?
                            </p>

                            <span
                                className="modal-btn-green"
                                onClick={() => {
                                    this.closeDeleteHostSpeaker()
                                }}
                            >
                                No way jose
                            </span>
                            <Mutation
                                mutation={DELETE_HOSTSPEAKER}
                                // passing the id to the mutation
                                variables={{ id }}
                                refetchQueries={[
                                    {
                                        query: GET_HOSTSPEAKERS,
                                    },
                                ]}
                            >
                                {(deleteHostSpeaker, { error }) => (
                                    <span
                                        className="modal-btn-red"
                                        onClick={() => {
                                            deleteHostSpeaker()
                                            this.closeDeleteHostSpeaker()
                                        }}
                                    >
                                        ☠️ Delete ☠️
                                    </span>
                                )}
                            </Mutation>
                        </div>
                    </DeleteModal>
                )}
            </div>
        )
    }
}

DeleteAdvCom.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    ranking: PropTypes.string,
    showDeleteModal: PropTypes.bool,
}
export default DeleteAdvCom

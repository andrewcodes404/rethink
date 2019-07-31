import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { DELETE_ADV_COM, GET_ADV_COMS } from '../../lib/graphqlTags'

import styled from 'styled-components'

const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .modal-card {
        background: white;
        padding: 40px;
        text-align: center;
        .content {
            p {
                margin-bottom: 0px;
            }
        }
    }

    .logo {
        width: 300px;
        height: 300px;
        margin: 0 auto 20px;
        border: 1px solid #000;
        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }

    .modal-btn {
        background: green;
        padding: 10px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }
`

class DeleteAdvCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDeleteAdvCom: props.showDeleteAdvCom,
        }
    }

    closeDeleteAdvCom = () => {
        this.setState({
            showDeleteAdvCom: false,
        })
    }

    render() {
        const { name, id, ranking } = this.props

        return (
            <div>
                {this.state.showDeleteAdvCom && (
                    <Modal>
                        <div className="modal-card ">
                            <p>
                                Are you sure you want to delete{' '}
                                <span style={{ fontWeight: 'bold' }}>
                                    {name}
                                </span>{' '}
                                ?
                            </p>

                            <span
                                className="modal-btn"
                                onClick={() => {
                                    this.closeDeleteAdvCom()
                                }}
                            >
                                No way jose
                            </span>
                            <Mutation
                                mutation={DELETE_ADV_COM}
                                // passing the id to the mutation
                                variables={{ id }}
                                refetchQueries={[
                                    {
                                        query: GET_ADV_COMS,
                                    },
                                ]}
                            >
                                {(deleteAdvCom, { error }) => (
                                    <span
                                        className="red-btn"
                                        onClick={() => {
                                            deleteAdvCom()
                                            this.closeDeleteAdvCom()
                                        }}
                                    >
                                        ☠️ Delete ☠️
                                    </span>
                                )}
                            </Mutation>
                        </div>
                    </Modal>
                )}
            </div>
        )
    }
}

DeleteAdvCom.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    ranking: PropTypes.string,
    showDeleteAdvCom: PropTypes.bool,
}
export default DeleteAdvCom

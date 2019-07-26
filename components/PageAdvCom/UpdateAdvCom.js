import React from 'react'
import { Query, Mutation } from 'react-apollo'
import {
    GET_ADV_COMS,
    UPDATE_ADV_COM,
    DELETE_ADV_COM,
} from '../../lib/graphqlTags'

import styled from 'styled-components'
const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);

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

    .headshot {
        width: 300px;
        height: 300px;
        margin: 0 auto 20px;
        border: 1px solid #000;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Members = styled.div`
    margin: 20px 0 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 1080px) {
        align-items: flex-start;
        justify-content: flex-start;
    }
    /* border: 1px solid #000; */
`
const Member = styled.div`
    /* width: 100%; */
    width: 260px;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1080px) {
        width: 25%;
    }

    margin-bottom: 40px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background: lightgrey;
    }
    .headshot {
        width: 80%;
        max-width: 200px;
        height: 200px;
        margin: 10px auto 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .text {
        width: 80%;
        margin: 0 auto 20px;
        p {
            margin: 0;
            line-height: 1.3;
            margin-bottom: 5px;
        }

        small {
            font-weight: 300;
            font-size: 16px;
            display: block;
            margin-bottom: 5px;
        }
    }
    .buttons {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
`

class UpdateAdvCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showUpdateModal: false,
            showDeleteModal: false,
        }
    }

    showUpdateModal = member => {
        const { id, headshot, name, jobTitle, company, index } = member
        this.setState({
            showUpdateModal: true,
            id,
            headshot,
            name,
            jobTitle,
            company,
            index,
        })
    }
    showDeleteModal = member => {
        const { id, headshot, name, jobTitle, company, index } = member
        this.setState({
            showDeleteModal: true,
            id,
            headshot,
            name,
            jobTitle,
            company,
            index,
        })
    }

    closeUpdateModal = () => {
        this.setState({
            showUpdateModal: false,
        })
    }

    closeDeleteModal = () => {
        this.setState({
            showDeleteModal: false,
        })
    }

    handleChange = e => {
        const { name, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: val })
    }

    render() {
        console.log('this.state.name = ', this.state.name)
        console.log('this.state.id = ', this.state.id)
        return (
            <div>
                <h3>Edit Advisory Committee Members</h3>

                {this.state.showUpdateModal && (
                    <Modal>
                        <div className="modal-card">
                            <div className="headshot">
                                <img src={this.state.headshot} />
                            </div>

                            <Mutation
                                mutation={UPDATE_ADV_COM}
                                refetchQueries={[{ query: GET_ADV_COMS }]}
                                variables={this.state}
                            >
                                {updateAdvCom => (
                                    <Form
                                        onSubmit={async e => {
                                            e.preventDefault()
                                            await updateAdvCom()
                                            this.closeUpdateModal()
                                        }}
                                    >
                                        <label htmlFor="name">
                                            name
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <label htmlFor="jobTitle">
                                            Job Title
                                            <input
                                                type="text"
                                                id="jobTitle"
                                                name="jobTitle"
                                                placeholder="jobTitle"
                                                required
                                                value={this.state.jobTitle}
                                                onChange={this.handleChange}
                                            />
                                        </label>

                                        <label htmlFor="company">
                                            Company
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                placeholder="company"
                                                required
                                                value={this.state.company}
                                                onChange={this.handleChange}
                                            />
                                        </label>

                                        <label htmlFor="company">
                                            Index
                                            <input
                                                type="number"
                                                id="index"
                                                name="index"
                                                required
                                                value={this.state.index}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <br />
                                        <br />

                                        <br />
                                        <br />

                                        <div>
                                            <button
                                                type="submit"
                                                className="green-btn"
                                            >
                                                Submit
                                            </button>

                                            <span
                                                className="red-btn"
                                                onClick={() => {
                                                    this.closeUpdateModal()
                                                }}
                                            >
                                                Close
                                            </span>
                                        </div>
                                    </Form>
                                )}
                            </Mutation>
                        </div>
                    </Modal>
                )}

                {this.state.showDeleteModal && (
                    <Modal>
                        <div className="modal-card ">
                            <p>Are you sure you want to delete?</p>

                            <span
                                className="modal-btn"
                                onClick={() => {
                                    this.closeDeleteModal()
                                }}
                            >
                                No way jose
                            </span>
                            <Mutation
                                mutation={DELETE_ADV_COM}
                                // passing the id to the mutation
                                variables={{ id: this.state.id }}
                                refetchQueries={[{ query: GET_ADV_COMS }]}
                            >
                                {(deleteAdvCom, { error }) => (
                                    <span
                                        className="red-btn"
                                        onClick={() => {
                                            deleteAdvCom()
                                            this.closeDeleteModal()
                                        }}
                                    >
                                        YES! Delete {this.state.name} ☠️
                                    </span>
                                )}
                            </Mutation>
                        </div>
                    </Modal>
                )}
                <Query query={GET_ADV_COMS}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        if (!data) return <p>No Data</p>

                        return (
                            <Members>
                                {data.advComs.map((member, i) => (
                                    <Member key={i}>
                                        <div className="headshot">
                                            <img
                                                src={member.headshot}
                                                alt={member.name}
                                            />
                                        </div>
                                        <div className="text">
                                            <p style={{ fontWeight: 'bold' }}>
                                                {member.name}
                                            </p>
                                            <small>
                                                Job Title : {member.jobTitle}
                                            </small>
                                            <small>
                                                Company: {member.company}
                                            </small>
                                            <p style={{ fontWeight: 'bold' }}>
                                                Index #{member.index}
                                            </p>

                                            <div className="buttons">
                                                <span
                                                    className="green-btn"
                                                    onClick={() => {
                                                        this.showUpdateModal(
                                                            member
                                                        )
                                                    }}
                                                >
                                                    update
                                                </span>
                                                <br />

                                                <span
                                                    className="red-btn"
                                                    onClick={() => {
                                                        this.showDeleteModal(
                                                            member
                                                        )
                                                    }}
                                                >
                                                    delete
                                                </span>
                                            </div>
                                        </div>
                                    </Member>
                                ))}
                            </Members>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default UpdateAdvCom
export { GET_ADV_COMS }

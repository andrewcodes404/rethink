import React from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import Error from '../lib/ErrorMessage'

import { CREATE_ADVCOM, GET_ADV_COMS } from '../../lib/graphqlTags'

const Form = styled.form`
    /* padding: 1rem; */
    margin-bottom: 60px;

    width: 600px;
    fieldset {
        display: flex;
        flex-direction: column;
        border-top-style: ridge;
        border-width: 6px;
    }

    label,
    textarea {
        padding: 10px;
    }

    label {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input {
        margin-left: 10px;
        padding: 5px;
        width: 300px;
    }

    .thumb {
        width: 100px;
    }
`

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
        p {
            margin-bottom: 50px;
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

const Spinner = styled.div`
    @keyframes spin {
        10%,
        90% {
            transform: rotate(25deg);
        }

        20%,
        80% {
            transform: rotate(-25deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(70deg);
        }

        40%,
        60% {
            transform: rotate(-70deg);
        }
    }

    width: 100px;
    height: 100px;
    padding: 10px;
    background: green;
    animation: spin 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
    transform-origin: center;
`

class CreateAdvCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: '',
            headshot: '',
            name: '',
            jobTitle: '',
            company: '',
            advComAdded: false,
            loading: false,
        }
    }
    resetState() {
        this.setState({
            index: '',
            headshot: '',
            name: '',
            jobTitle: '',
            company: '',
            advComAdded: true,
        })
    }

    handleChange = e => {
        const { name, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: val })
    }

    clearModal = () => {
        this.setState({
            advComAdded: false,
        })
    }

    uploadFile = async e => {
        // console.log('uploading file...')
        // sort that image data out
        const files = e.target.files

        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'rethink_advCom')

        this.setState({
            loading: true,
        })

        //hit up the cloudinary API
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dcqi9fn2y/image/upload',
            {
                //this is a config arg so we want POST our data we just created
                method: 'POST',
                body: data,
            }
        )
        //parse the returning file to json
        const file = await res.json()

        //put that response data into our state, ready to send with the mutation
        this.setState({
            headshot: file.secure_url,
            loading: false,
        })
    }

    render() {
        return (
            <div style={{ marginTop: '50px' }}>
                {this.state.loading && (
                    <Modal>
                        <h1>Uploading Image</h1>
                        <br />
                        <Spinner>
                            <img
                                src="./static/icons/topics-white.svg"
                                alt=""
                            ></img>
                        </Spinner>
                    </Modal>
                )}

                {this.state.advComAdded && (
                    <Modal
                        onClick={() => {
                            this.clearModal()
                        }}
                    >
                        <div className="modal-card">
                            <p>Advisory Committee Member Added</p>
                            <span
                                className="modal-btn"
                                onClick={() => {
                                    this.clearModal()
                                }}
                            >
                                close x
                            </span>
                        </div>
                    </Modal>
                )}

                <h3>Add a new Advisory Committe Member</h3>
                <Mutation
                    mutation={CREATE_ADVCOM}
                    variables={this.state}
                    refetchQueries={[{ query: GET_ADV_COMS }]}
                >
                    {(createProject, { loading, error }) => (
                        <Form
                            onSubmit={async e => {
                                e.preventDefault()
                                await createProject()
                                this.resetState()
                            }}
                        >
                            <Error error={error} />
                            <fieldset
                                disabled={loading}
                                araia-busy={loading.toString()}
                            >
                                <label htmlFor="file">
                                    Headshot<br></br> (min-width: 800px)
                                    <input
                                        type="file"
                                        id="file"
                                        name="headshot"
                                        placeholder="Upload an image"
                                        required
                                        onChange={this.uploadFile}
                                    />
                                    {this.state.headshot.length > 1 && (
                                        <img
                                            className="thumb"
                                            width="200"
                                            src={this.state.headshot}
                                            alt="Upload Preview"
                                        />
                                    )}
                                </label>

                                <label htmlFor="name">
                                    Name
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
                                <button type="submit">Submit</button>
                            </fieldset>
                        </Form>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default CreateAdvCom

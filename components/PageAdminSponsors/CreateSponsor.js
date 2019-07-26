import React from 'react'
import { Mutation } from 'react-apollo'

import styled from 'styled-components'

import Error from '../lib/ErrorMessage'
import { CREATE_SPONSOR, GET_SPONSORS } from '../../lib/graphqlTags'

const Form = styled.form`
    /* padding: 1rem; */
    margin-bottom: 60px;

    width: 700px;
    fieldset {
        display: flex;
        flex-direction: column;
        /* border-top-style: ridge; */
        border-width: 1px;
    }
    legend {
        background-color: #000;
        color: #fff;
        padding: 3px 6px;
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
        width: 350px;
    }
    .thumb {
        width: 100px;
    }

    .ranking {
        padding: 10px;
        margin-bottom: 30px;
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

class CreateSponsor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'A Testing Company',
            ranking: '',
            index: 1,
            logo:
                'https://res.cloudinary.com/dcqi9fn2y/image/upload/v1563909941/rethink/sponsors/as0guxuyfhfhwtp4cc1u.png',
            description:
                'Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            website: 'https://test',
            instagram: 'test',
            facebook: 'https://test',
            twitter: '@test',
            frontpage: false,
            loading: false,
            sponsorAdded: false,
        }
    }
    resetState() {
        this.setState({
            name: '',
            ranking: '',
            index: '',
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            frontpage: false,
            loading: false,
            // fontpage: false
            sponsorAdded: true,
        })

        // this.setState({
        //     name: 'A Testing Company',
        //     ranking: 'eventSponsor',
        //     index: 1,
        //     logo:
        //         'https://res.cloudinary.com/dcqi9fn2y/image/upload/v1563909941/rethink/sponsors/as0guxuyfhfhwtp4cc1u.png',
        //     description:
        //         'Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        //     website: 'https://test',
        //     instagram: 'test',
        //     facebook: 'https://test',
        //     twitter: '@test',
        //     frontpage: false,
        //     loading: false,
        //     sponsorAdded: true,
        // })
    }

    handleChange = e => {
        const { name, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: val })
    }

    handleRadioChange = e => {
        const { id } = e.target

        this.setState({ ranking: id })
    }

    handleChckboxChange = e => {
        const { checked } = e.target
        this.setState({ frontpage: checked })
    }

    clearModal = () => {
        this.setState({
            sponsorAdded: false,
        })
    }

    uploadFile = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'rethink_sponsor')

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
        // Add to state
        this.setState({
            logo: file.secure_url,
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

                {this.state.sponsorAdded && (
                    <Modal
                        onClick={() => {
                            this.clearModal()
                        }}
                    >
                        <div className="modal-card">
                            <p>Sponsor Added</p>
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

                <h3>Add a new Sponsor</h3>
                <Mutation
                    mutation={CREATE_SPONSOR}
                    variables={this.state}
                    refetchQueries={[{ query: GET_SPONSORS }]}
                >
                    {(createSponsor, { loading, error }) => (
                        <Form
                            onSubmit={async e => {
                                e.preventDefault()
                                await createSponsor()

                                this.resetState()
                            }}
                        >
                            <Error error={error} />
                            <fieldset
                                disabled={loading}
                                araia-busy={loading.toString()}
                            >
                                <label htmlFor="file">
                                    Logo<br></br> (min-width: 1000px)
                                    <input
                                        accept=".png,.jpg,.jpeg"
                                        type="file"
                                        id="file"
                                        name="logo"
                                        placeholder="Upload an image"
                                        // required
                                        onChange={this.uploadFile}
                                    />
                                    {this.state.logo.length > 1 && (
                                        <img
                                            className="thumb"
                                            width="200"
                                            src={this.state.logo}
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
                                {/* RANKING -- RANKING -- RANKING --  */}
                                {/* RANKING -- RANKING -- RANKING --  */}
                                {/* RANKING -- RANKING -- RANKING --  */}

                                <div className="ranking">
                                    <h5>Ranking</h5>
                                    <label htmlFor="susPartner">
                                        Sustainable Partners
                                        <input
                                            type="radio"
                                            id="susPartner"
                                            name="ranking"
                                            value={this.state.ranking}
                                            onChange={this.handleRadioChange}
                                            required
                                        />
                                    </label>

                                    <label htmlFor="eventSponsor">
                                        Event Sponsors
                                        <input
                                            type="radio"
                                            id="eventSponsor"
                                            name="ranking"
                                            value={this.state.ranking}
                                            onChange={this.handleRadioChange}
                                            required
                                        />
                                    </label>

                                    <label htmlFor="InnovShow">
                                        Innovation Showcase
                                        <input
                                            type="radio"
                                            id="innovShow"
                                            name="ranking"
                                            value={this.state.ranking}
                                            onChange={this.handleRadioChange}
                                            required
                                        />
                                    </label>
                                </div>
                                <label htmlFor="index">
                                    Index
                                    <input
                                        type="number"
                                        id="index"
                                        name="index"
                                        required
                                        value={this.state.index}
                                        placeholder="10"
                                        onChange={this.handleChange}
                                    />
                                </label>

                                <label htmlFor="description">
                                    Description
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="5"
                                        cols="35"
                                        required
                                        onChange={this.handleChange}
                                        value={this.state.description}
                                        placeholder="Company info goes here..."
                                    ></textarea>
                                </label>

                                <label htmlFor="website">
                                    Company Website URL
                                    <input
                                        type="url"
                                        name="website"
                                        id="website"
                                        pattern="https://.*"
                                        size="30"
                                        onChange={this.handleChange}
                                        value={this.state.website}
                                        placeholder="https://sponsors_website.com"
                                    />
                                </label>

                                <label htmlFor="facebook">
                                    Company Facebook URL
                                    <input
                                        type="url"
                                        name="facebook"
                                        id="facebook"
                                        pattern="https://.*"
                                        size="30"
                                        onChange={this.handleChange}
                                        value={this.state.facebook}
                                        placeholder="https://www.facebook.com/sponsor"
                                    />
                                </label>

                                <label htmlFor="instagram">
                                    Instagram like
                                    <input
                                        type="text"
                                        name="instagram"
                                        id="instgrama"
                                        onChange={this.handleChange}
                                        value={this.state.instagram}
                                        placeholder="instagram_name"
                                    />
                                </label>

                                <label htmlFor="twitter">
                                    Twitter Handle like
                                    <input
                                        type="text"
                                        name="twitter"
                                        id="twitter"
                                        pattern="@.*"
                                        onChange={this.handleChange}
                                        value={this.state.twitter}
                                        placeholder="@twitter_handle"
                                    />
                                </label>

                                <label htmlFor="frontpage">
                                    Show on frontpage
                                    <input
                                        name="frontpage"
                                        type="checkbox"
                                        id="frontpage"
                                        checked={this.state.frontpage}
                                        onChange={this.handleChckboxChange}
                                    />
                                </label>

                                <button type="submit">Submit</button>
                            </fieldset>
                        </Form>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default CreateSponsor

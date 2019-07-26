import React from 'react'
import { Query, Mutation } from 'react-apollo'
import Error from '../lib/ErrorMessage'
import {
    GET_SPONSORS_WHERE_RANKING,
    UPDATE_SPONSOR,
    DELETE_SPONSOR,
    // GET_SPONSOR,
} from '../../lib/graphqlTags'

import styled from 'styled-components'

const RankingBtns = styled.div`
    display: flex;

    .btn {
        padding: 10px;
        margin-right: 20px;
        background: pink;
        cursor: pointer;
    }
    .green {
        background: green;
        color: white;
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
    z-index: 2000;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    label {
        display: block;
    }
    .thumb {
        border: 1px solid #000;
        width: 200px;
    }
`

const Sponsors = styled.div`
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
const Sponsor = styled.div`
    /* width: 100%; */
    width: 260px;
    min-height: 300px;
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
    .logo {
        width: 80%;
        max-width: 200px;
        height: 200px;
        margin: 10px auto 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
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
            showRanking: 'susPartner',
        }
    }

    showUpdateModal = sponsor => {
        const {
            id,
            name,
            ranking,
            index,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            frontpage,
        } = sponsor
        this.setState({
            showUpdateModal: true,
            id,
            name,
            ranking,
            index,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            frontpage,
        })
    }
    showDeleteModal = sponsor => {
        const {
            id,
            name,
            ranking,
            index,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            frontpage,
        } = sponsor
        this.setState({
            showDeleteModal: true,
            id,
            name,
            ranking,
            index,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            frontpage,
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

    handleRadioChange = e => {
        const { id } = e.target
        this.setState({ ranking: id })
    }

    handleCheckboxChange = e => {
        const { checked } = e.target
        this.setState({ frontpage: checked })
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

    chooseRanking = rankingPref => {
        this.setState(
            {
                showRanking: rankingPref,
            },
            () => {
                console.log('this.state.showRanking = ', this.state.showRanking)
            }
        )
    }

    render() {
        console.log('this.state.name = ', this.state.name)
        console.log('this.state.id = ', this.state.id)
        return (
            <div>
                <h3>Edit Sponsors</h3>

                <RankingBtns>
                    <div
                        className={`btn ${this.state.showRanking ===
                            'susPartner' && 'green'}`}
                        onClick={() => {
                            this.chooseRanking('susPartner')
                        }}
                    >
                        Sustainable Partners
                    </div>
                    <div
                        className={`btn ${this.state.showRanking ===
                            'eventSponsor' && 'green'}`}
                        onClick={() => {
                            this.chooseRanking('eventSponsor')
                        }}
                    >
                        Event Sponsors
                    </div>

                    <div
                        className={`btn ${this.state.showRanking ===
                            'innovShow' && 'green'}`}
                        onClick={() => {
                            this.chooseRanking('innovShow')
                        }}
                    >
                        Innovation Showcase
                    </div>
                </RankingBtns>

                {this.state.showUpdateModal && (
                    <Modal>
                        <div className="modal-card">
                            {/* <div className="logo">
                                <img src={this.state.logo} />
                            </div> */}

                            <Mutation
                                mutation={UPDATE_SPONSOR}
                                refetchQueries={[
                                    {
                                        query: GET_SPONSORS_WHERE_RANKING,
                                        variables: {
                                            ranking: this.state.showRanking,
                                        },
                                    },
                                ]}
                                variables={this.state}
                            >
                                {(updateSponsor, { loading, error }) => (
                                    <Form
                                        onSubmit={async e => {
                                            e.preventDefault()
                                            await updateSponsor()
                                            this.closeUpdateModal()
                                        }}
                                    >
                                        {/* <Error error={error} /> */}
                                        <fieldset
                                            disabled={loading}
                                            araia-busy={loading.toString()}
                                        >
                                            <label htmlFor="file">
                                                Logo<br></br> (min-width:
                                                1000px)
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
                                                        value={
                                                            this.state.ranking
                                                        }
                                                        onChange={
                                                            this
                                                                .handleRadioChange
                                                        }
                                                        required
                                                        checked={
                                                            this.state
                                                                .ranking ==
                                                                'susPartner' &&
                                                            'checked'
                                                        }
                                                    />
                                                </label>

                                                <label htmlFor="eventSponsor">
                                                    Event Sponsors
                                                    <input
                                                        type="radio"
                                                        id="eventSponsor"
                                                        name="ranking"
                                                        value={
                                                            this.state.ranking
                                                        }
                                                        onChange={
                                                            this
                                                                .handleRadioChange
                                                        }
                                                        checked={
                                                            this.state
                                                                .ranking ==
                                                                'eventSponsor' &&
                                                            'checked'
                                                        }
                                                        required
                                                    />
                                                </label>

                                                <label htmlFor="InnovShow">
                                                    Innovation Showcase
                                                    <input
                                                        type="radio"
                                                        id="innovShow"
                                                        name="ranking"
                                                        value={
                                                            this.state.ranking
                                                        }
                                                        onChange={
                                                            this
                                                                .handleRadioChange
                                                        }
                                                        checked={
                                                            this.state
                                                                .ranking ==
                                                                'innovShow' &&
                                                            'checked'
                                                        }
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
                                                    value={
                                                        this.state.description
                                                    }
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
                                                    checked={
                                                        this.state.frontpage
                                                    }
                                                    onChange={
                                                        this
                                                            .handleCheckboxChange
                                                    }
                                                />
                                            </label>

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
                                        </fieldset>
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
                                mutation={DELETE_SPONSOR}
                                // passing the id to the mutation
                                variables={{ id: this.state.id }}
                                refetchQueries={[
                                    {
                                        query: GET_SPONSORS_WHERE_RANKING,
                                        variables: {
                                            ranking: this.state.showRanking,
                                        },
                                    },
                                ]}
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
                <Query
                    query={GET_SPONSORS_WHERE_RANKING}
                    variables={{
                        ranking: this.state.showRanking,
                    }}
                >
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        if (!data) return <p>No Data</p>

                        return (
                            <Sponsors>
                                {data.sponsors.map((sponsor, i) => (
                                    <Sponsor key={i}>
                                        <div className="logo">
                                            <img
                                                src={sponsor.logo}
                                                alt={sponsor.name}
                                            />
                                        </div>
                                        <div className="text">
                                            <p style={{ fontWeight: 'bold' }}>
                                                Index #{sponsor.index}
                                            </p>

                                            <div className="buttons">
                                                <span
                                                    className="green-btn"
                                                    onClick={() => {
                                                        this.showUpdateModal(
                                                            sponsor
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
                                                            sponsor
                                                        )
                                                    }}
                                                >
                                                    delete
                                                </span>
                                            </div>
                                        </div>
                                    </Sponsor>
                                ))}
                            </Sponsors>
                        )
                    }}
                </Query>

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
            </div>
        )
    }
}

export default UpdateAdvCom

import React from 'react'
import { Query } from 'react-apollo'
import { GET_SPONSORS } from '../../lib/graphqlTags'
import UpdateSponsorForm from './UpdateSponsorForm'
import DeleteSponsor from './DeleteSponsor'

import { sponsorRankingData } from '../../lib/data'

// material ui
import Button from '@material-ui/core/Button'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import styled from 'styled-components'

if (sponsorRankingData.length < 4) {
    sponsorRankingData.unshift({ text: 'All', tag: '' })
}

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0 0;

    h1 {
        margin-bottom: 10px;
    }

    .arrow {
        font-size: 50px;
        margin-bottom: 10px;
    }
`

const RankingBtns = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    margin: 0 auto 40px;

    /* justify-content: space-between; */
    .btn {
        margin: 5px;
    }
    .green {
        background: green;
        color: white;
    }
`

const Sponsors = styled.div`
    width: 910px;
    margin: 20px auto 50px;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1080px) {
        align-items: center;
        justify-content: flex-start;
    }

    min-height: 180px;
`
const Sponsor = styled.div`
    width: 150px;
    height: 170px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 0.3s;

    .logo {
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .buttons {
        display: none;
        /* display: flex; */
        width: 90%;
        margin: 0 auto;
        transition: 0.6s;
        justify-content: space-between;

        .btn-event {
            width: 45%;
            font-size: 14px;
            padding: 2px;
            text-transform: lowercase;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        20% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    &:hover {
        .buttons {
            animation: fadeIn 0.8s;
            display: flex;
        }
    }
`

class comp_name extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showUpdateModal: false,
            showDeleteSponsor: false,
            showRanking: '',
            triggerChange: true,
            showUpdateForm: false,
            triggerUpdateForm: 'vic',

            id: '',
            name: '',
            ranking: '',
            index: '',
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            frontpage: '',
        }
    }

    chooseRanking = rankingPref => {
        this.setState({
            showRanking: rankingPref,
        })
    }

    showDeleteSponsor = ({ name, id, ranking }) => {
        this.setState({
            triggerChange: !this.state.triggerChange,
            showDeleteSponsor: true,
            name,
            id,
            ranking,
        })
    }

    handleUpdateForm = sponsor => {
        if (this.state.triggerUpdateForm === 'vic') {
            this.setState({
                triggerUpdateForm: 'bob',
                showUpdateForm: true,
                id: sponsor.id,
                name: sponsor.name,
                ranking: sponsor.ranking,
                index: sponsor.index,
                logo: sponsor.logo,
                description: sponsor.description,
                website: sponsor.website,
                instagram: sponsor.instagram,
                facebook: sponsor.facebook,
                twitter: sponsor.twitter,
                frontpage: sponsor.frontpage,
            })
        } else
            this.setState({
                triggerUpdateForm: 'vic',
                showUpdateForm: true,

                id: sponsor.id,
                name: sponsor.name,
                ranking: sponsor.ranking,
                index: sponsor.index,
                logo: sponsor.logo,
                description: sponsor.description,
                website: sponsor.website,
                instagram: sponsor.instagram,
                facebook: sponsor.facebook,
                twitter: sponsor.twitter,
                frontpage: sponsor.frontpage,
            })
    }

    render() {
        return (
            <div>
                <Title>
                    <h1 style={{ color: 'black' }}>
                        Edit/Update Current Sponsors
                    </h1>
                    <ArrowDownward className="arrow" />
                </Title>
                <RankingBtns>
                    {sponsorRankingData.map((el, i) => (
                        <Button
                            variant="outlined"
                            size="small"
                            key={i}
                            className={`btn ${this.state.showRanking ===
                                el.tag && 'green'}`}
                            onClick={() => {
                                this.chooseRanking(el.tag)
                            }}
                        >
                            {el.text}
                        </Button>
                    ))}
                </RankingBtns>

                <Query query={GET_SPONSORS}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        if (!data) return <p>No Data</p>

                        let sponsors = data.sponsors
                        if (this.state.showRanking) {
                            sponsors = data.sponsors.filter(
                                x => x.ranking === this.state.showRanking
                            )
                        }

                        return (
                            <>
                                <DeleteSponsor
                                    key={this.state.triggerChange}
                                    name={this.state.name}
                                    id={this.state.id}
                                    ranking={this.state.showRanking}
                                    showDeleteSponsor={
                                        this.state.showDeleteSponsor
                                    }
                                />
                                <UpdateSponsorForm
                                    key={this.state.triggerUpdateForm}
                                    // name={this.state.name}
                                    // id={this.state.id}
                                    showUpdateForm={this.state.showUpdateForm}
                                    sponsor={this.state.sponsor}
                                    // showDeleteSponsor={this.state.showDeleteSponsor}

                                    id={this.state.id}
                                    name={this.state.name}
                                    ranking={this.state.ranking}
                                    index={this.state.index}
                                    logo={this.state.logo}
                                    description={this.state.description}
                                    website={this.state.website}
                                    instagram={this.state.instagram}
                                    facebook={this.state.facebook}
                                    twitter={this.state.twitter}
                                    frontpage={this.state.frontpage}
                                />
                                <Sponsors>
                                    {sponsors.map((sponsor, i) => (
                                        <Sponsor key={i}>
                                            <div className="logo">
                                                <img
                                                    src={sponsor.logo}
                                                    alt={sponsor.name}
                                                />
                                            </div>

                                            <div className="buttons">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="btn-event"
                                                    onClick={() => {
                                                        this.handleUpdateForm(
                                                            sponsor
                                                        )
                                                    }}
                                                    style={{ color: 'green' }}
                                                >
                                                    update
                                                </Button>
                                                <br />

                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="btn-event"
                                                    onClick={() => {
                                                        this.showDeleteSponsor(
                                                            sponsor
                                                        )
                                                    }}
                                                    style={{ color: 'tomato' }}
                                                >
                                                    delete
                                                </Button>
                                            </div>
                                        </Sponsor>
                                    ))}
                                </Sponsors>
                            </>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default comp_name

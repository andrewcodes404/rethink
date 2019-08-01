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

// style
import { Logos, Logo } from '../style/globalComps'

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
    width: 90%;
    margin: 0 auto 40px;

    justify-content: center;
    .btn {
        margin: 5px;
    }
    .green {
        background: green;
        color: white;
    }

    @media (min-width: 768px) {
        width: 600px;
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
                                <Logos>
                                    {sponsors.map((el, i) => (
                                        <Logo key={i}>
                                            <div className="logo">
                                                <img
                                                    src={el.logo}
                                                    alt={el.name}
                                                />
                                            </div>

                                            <div className="buttons">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="btn-event"
                                                    onClick={() => {
                                                        this.handleUpdateForm(
                                                            el
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
                                                            el
                                                        )
                                                    }}
                                                    style={{ color: 'tomato' }}
                                                >
                                                    delete
                                                </Button>
                                            </div>
                                        </Logo>
                                    ))}
                                </Logos>
                            </>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default comp_name

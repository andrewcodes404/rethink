import React from 'react'
import { Query } from 'react-apollo'
import { GET_PARTNERS_WHERE_RANKING, GET_PARTNERS } from '../../lib/graphqlTags'
import UpdatePartnerForm from './UpdatePartnerForm'
import DeletePartner from './DeletePartner'

import { rankingData } from '../../lib/data'

// material ui
import Button from '@material-ui/core/Button'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import styled from 'styled-components'

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
    width: 500px;
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

const Partners = styled.div`
    width: 920px;
    margin: 20px auto 50px;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1080px) {
        align-items: center;
        justify-content: flex-start;
    }

    min-height: 180px;
`
const Partner = styled.div`
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
            showDeletePartner: false,
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

    showDeletePartner = ({ name, id, ranking }) => {
        this.setState({
            triggerChange: !this.state.triggerChange,
            showDeletePartner: true,
            name,
            id,
            ranking,
        })
    }

    showUpdateForm = partner => {
        if (this.state.triggerUpdateForm === 'vic') {
            this.setState({
                triggerUpdateForm: 'bob',
                showUpdateForm: true,

                id: partner.id,
                name: partner.name,
                ranking: partner.ranking,
                index: partner.index,
                logo: partner.logo,
                description: partner.description,
                website: partner.website,
                instagram: partner.instagram,
                facebook: partner.facebook,
                twitter: partner.twitter,
                frontpage: partner.frontpage,
            })
        } else
            this.setState({
                triggerUpdateForm: 'vic',
                showUpdateForm: true,

                id: partner.id,
                name: partner.name,
                ranking: partner.ranking,
                index: partner.index,
                logo: partner.logo,
                description: partner.description,
                website: partner.website,
                instagram: partner.instagram,
                facebook: partner.facebook,
                twitter: partner.twitter,
                frontpage: partner.frontpage,
            })
    }

    render() {
        return (
            <div>
                <Title>
                    <h1 style={{ color: 'black' }}>
                        Edit/Update Current Partners
                    </h1>
                    <ArrowDownward className="arrow" />
                </Title>
                <RankingBtns>
                    {rankingData.map((el, i) => (
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

                <DeletePartner
                    key={this.state.triggerChange}
                    name={this.state.name}
                    id={this.state.id}
                    ranking={this.state.showRanking}
                    showDeletePartner={this.state.showDeletePartner}
                />

                <Query query={GET_PARTNERS}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        if (!data) return <p>No Data</p>

                        let partners = data.partners
                        if (this.state.showRanking) {
                            partners = data.partners.filter(
                                x => x.ranking === this.state.showRanking
                            )
                        }

                        return (
                            <>
                                {' '}
                                <UpdatePartnerForm
                                    key={this.state.triggerUpdateForm}
                                    // name={this.state.name}
                                    // id={this.state.id}
                                    showUpdateForm={this.state.showUpdateForm}
                                    partner={this.state.partner}
                                    // showDeletePartner={this.state.showDeletePartner}

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
                                <Partners>
                                    {partners.map((partner, i) => (
                                        <Partner key={i}>
                                            <div className="logo">
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                />
                                            </div>

                                            <div className="buttons">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="btn-event"
                                                    onClick={() => {
                                                        this.showUpdateForm(
                                                            partner
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
                                                        this.showDeletePartner(
                                                            partner
                                                        )
                                                    }}
                                                    style={{ color: 'tomato' }}
                                                >
                                                    delete
                                                </Button>
                                            </div>
                                        </Partner>
                                    ))}
                                </Partners>
                            </>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default comp_name

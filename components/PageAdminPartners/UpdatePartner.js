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

//style
import { Logos, Logo } from '../style/globalComps'

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
    width: 95%;
    max-width: 500px;
    justify-content: center;
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

    handleUpdateForm = partner => {
        console.log('screen 📺 = ', screen)
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
                                <Logos>
                                    {partners.map((el, i) => (
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
                                                        this.showDeletePartner(
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

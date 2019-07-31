import React from 'react'
import { Query } from 'react-apollo'
import { GET_ADV_COMS } from '../../lib/graphqlTags'
import UpdateAdvComForm from './UpdateAdvComForm'
import DeleteAdvCom from './DeleteAdvCom'

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

const AdvComs = styled.div`
    width: 890px;
    margin: 20px auto 50px;

    display: flex;

    flex-wrap: wrap;
    @media (min-width: 1080px) {
        /* align-items: center; */
        justify-content: flex-start;
    }

    min-height: 180px;
`
const Member = styled.div`
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    margin-bottom: 30px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s;

    .headshot {
        height: 200px;
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden; */
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .member-name {
        p {
            text-align: center;
            margin-bottom: 10px;
            line-height: 1;
            font-size: 16px;
        }
    }

    .buttons {
        /* display: none; */
        display: flex;
        opacity: 0;
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
            animation: fadeIn 0.8s forwards;
            display: flex;
        }
    }
`

class comp_name extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showUpdateModal: false,
            showDeleteAdvCom: false,
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

    handleDeleteAdvCom = ({ name, id, ranking }) => {
        this.setState({
            triggerChange: !this.state.triggerChange,
            showDeleteAdvCom: true,
            name,
            id,
            ranking,
        })
    }

    handleUpdateForm = member => {
        if (this.state.triggerUpdateForm === 'vic') {
            this.setState({
                triggerUpdateForm: 'bob',
                showUpdateForm: true,
                AdvComAdded: false,

                id: member.id,
                name: member.name,
                jobTitle: member.jobTitle,
                company: member.company,
                headshot: member.headshot,
                index: member.index,
            })
        } else
            this.setState({
                triggerUpdateForm: 'vic',
                showUpdateForm: true,
                AdvComAdded: false,

                id: member.id,
                name: member.name,
                jobTitle: member.jobTitle,
                company: member.company,
                headshot: member.headshot,
                index: member.index,
            })
    }

    render() {
        return (
            <div>
                <Title>
                    <h1 style={{ color: 'black' }}>
                        Edit/Update Current Memeber
                    </h1>
                    <ArrowDownward className="arrow" />
                </Title>

                <Query query={GET_ADV_COMS}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        if (!data) return <p>No Data</p>

                        const { advComs } = data

                        return (
                            <>
                                <DeleteAdvCom
                                    key={this.state.triggerChange}
                                    name={this.state.name}
                                    id={this.state.id}
                                    ranking={this.state.showRanking}
                                    showDeleteAdvCom={
                                        this.state.showDeleteAdvCom
                                    }
                                />
                                <UpdateAdvComForm
                                    key={this.state.triggerUpdateForm}
                                    showUpdateForm={this.state.showUpdateForm}
                                    id={this.state.id}
                                    name={this.state.name}
                                    jobTitle={this.state.jobTitle}
                                    company={this.state.company}
                                    headshot={this.state.headshot}
                                    index={this.state.index}
                                />
                                <AdvComs>
                                    {advComs.map((member, i) => (
                                        <Member key={i}>
                                            <div className="headshot">
                                                <img
                                                    src={member.headshot}
                                                    alt={member.name}
                                                />
                                            </div>

                                            <div className="member-name">
                                                <p>{member.name}</p>
                                            </div>

                                            <div className="buttons">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="btn-event"
                                                    onClick={() => {
                                                        this.handleUpdateForm(
                                                            member
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
                                                        this.handleDeleteAdvCom(
                                                            member
                                                        )
                                                    }}
                                                    style={{ color: 'tomato' }}
                                                >
                                                    delete
                                                </Button>
                                            </div>
                                        </Member>
                                    ))}
                                </AdvComs>
                            </>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default comp_name

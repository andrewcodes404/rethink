import React from 'react'
import { Query } from 'react-apollo'
import { GET_HOSTSPEAKERS } from '../../lib/graphqlTags'
import UpdateHostSpeakerForm from './UpdateHostSpeakerForm'
import DeleteHostSpeaker from './DeleteHostSpeaker'

// material ui
import Button from '@material-ui/core/Button'
import ArrowDownward from '@material-ui/icons/ArrowDownward'

import { Title, Members, Member } from './hostSpeakStyle'

class comp_name extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showUpdateModal: false,
            showDeleteModal: false,
            showRanking: '',
            triggerChange: true,
            showUpdateForm: false,
            triggerUpdateForm: 'vic',

            headshot: '',
            name: '',
            title: '',
            company: '',
            bio: '',
            linkedIn: '',
            insta: '',
            facebook: '',
            twitter: '',
            website: '',
        }
    }

    chooseRanking = rankingPref => {
        this.setState({
            showRanking: rankingPref,
        })
    }

    handleDeleteHostSpeaker = ({ name, id, ranking }) => {
        this.setState({
            triggerChange: !this.state.triggerChange,
            showDeleteModal: true,
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
                title: member.title,
                company: member.company,
                headshot: member.headshot,
                bio: member.bio,
                linkedIn: member.linkedIn,
                insta: member.insta,
                facebook: member.facebook,
                twitter: member.twitter,
                website: member.website,
            })
        } else
            this.setState({
                triggerUpdateForm: 'vic',
                showUpdateForm: true,
                AdvComAdded: false,

                id: member.id,
                name: member.name,
                title: member.title,
                company: member.company,
                headshot: member.headshot,
                bio: member.bio,
                linkedIn: member.linkedIn,
                insta: member.insta,
                facebook: member.facebook,
                twitter: member.twitter,
                website: member.website,
            })
    }

    render() {
        return (
            <div>
                <Title>
                    <h1 style={{ color: 'black' }}>Edit/Update Current Host-Speakers</h1>
                    <ArrowDownward className="arrow" />
                </Title>

                <Query query={GET_HOSTSPEAKERS}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        if (!data) return <p>No Data</p>

                        const { hostSpeakers } = data

                        return (
                            <>
                                <DeleteHostSpeaker
                                    key={this.state.triggerChange}
                                    name={this.state.name}
                                    id={this.state.id}
                                    showDeleteModal={this.state.showDeleteModal}
                                />

                                <UpdateHostSpeakerForm
                                    key={this.state.triggerUpdateForm}
                                    showUpdateForm={this.state.showUpdateForm}
                                    id={this.state.id}
                                    name={this.state.name}
                                    title={this.state.title}
                                    company={this.state.company}
                                    headshot={this.state.headshot}
                                    bio={this.state.bio}
                                    linkedIn={this.state.linkedIn}
                                    insta={this.state.insta}
                                    facebook={this.state.facebook}
                                    twitter={this.state.twitter}
                                    website={this.state.website}
                                />

                                <Members>
                                    {hostSpeakers.map((member, i) => (
                                        <Member key={i}>
                                            <div className="headshot">
                                                <img src={member.headshot} alt={member.name} />
                                            </div>

                                            <div className="member-name">
                                                <p>{member.name}</p>
                                            </div>

                                            <div className="buttons">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="btn"
                                                    onClick={() => {
                                                        this.handleUpdateForm(member)
                                                    }}
                                                    style={{ color: 'green' }}
                                                >
                                                    update
                                                </Button>
                                                <br />

                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    className="btn"
                                                    onClick={() => {
                                                        this.handleDeleteHostSpeaker(member)
                                                    }}
                                                    style={{ color: 'tomato' }}
                                                >
                                                    delete
                                                </Button>
                                            </div>
                                        </Member>
                                    ))}
                                </Members>
                            </>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default comp_name

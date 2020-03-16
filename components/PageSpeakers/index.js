import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { GET_HOSTSPEAKERS_ORDERBY_INDEX } from '../../lib/graphqlTags'
import ModalSpeakerCard from '../lib/ModalSpeakerCard'
import { GreenButton, YellowButton } from '../style/globalComps'
import { CardContainerWrapper, CardSpeakerContainer, CardSpeaker } from '../style/globalComps'
import Link from 'next/link'
const CardContWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
`

// id
// headshot
// name
// title
// company
// bio
// linkedIn
// insta
// facebook
// twitter
// website
// frontpage
// index
// logo

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            type: '',
            ranking: '',
            index: '',
            name: '',
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            linkedIn: '',

            headshot: '',
            bio: '',
            company: '',
        }
    }
    showModal = speaker => {
        this.setState({
            showModal: true,
            type: speaker.type,
            ranking: speaker.ranking,
            index: speaker.index,
            name: speaker.name,
            logo: speaker.logo,
            description: speaker.description,
            website: speaker.website,
            instagram: speaker.instagram,
            facebook: speaker.facebook,
            twitter: speaker.twitter,
            linkedIn: speaker.linkedIn,
            shareBtn: speaker.shareBtn,

            headshot: speaker.headshot,
            bio: speaker.bio,
            title: speaker.title,
            company: speaker.company,
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false,
        })
    }
    render() {
        return (
            <>
                {this.state.showModal && (
                    <ModalSpeakerCard
                        closeModal={() => {
                            this.closeModal()
                        }}
                        type={this.state.type}
                        ranking={this.state.ranking}
                        index={this.state.index}
                        name={this.state.name}
                        logo={this.state.logo}
                        description={this.state.description}
                        website={this.state.website}
                        instagram={this.state.instagram}
                        facebook={this.state.facebook}
                        twitter={this.state.twitter}
                        linkedIn={this.state.linkedIn}
                        shareBtn={this.state.shareBtn}
                        headshot={this.state.headshot}
                        bio={this.state.bio}
                        title={this.state.title}
                        company={this.state.company}
                    />
                )}

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">
                        <a>Speakers</a>
                    </h2>

                    <div className="text-content">
                        <p>
                            Some of sustainability’s best and brightest will be condensing their years of experience and
                            expertise into presentations and panel discussions; covering sourcing, finance, marketing,
                            culture, policy and supply chain amongst the +30 sessions over the two-day programme.
                        </p>
                    </div>

                    <GreenButton style={{ display: 'block', margin: '0 auto' }}>
                        {' '}
                        <Link href="./programme">
                            <a rel="noopener noreferrer">View the full conference schedule</a>
                        </Link>
                    </GreenButton>

                    <YellowButton style={{ display: 'block', margin: '30px auto' }}>
                        <a
                            href="https://app.micepad.co/pages/#/prefill/ReThink2020"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            REGISTER FOR YOUR PLACE AT RETHINK 2020
                        </a>
                    </YellowButton>

                    <Query query={GET_HOSTSPEAKERS_ORDERBY_INDEX}>
                        {({ data, loading }) => {
                            //  stop partners begin mapped before data arrives
                            if (loading) return null
                            const { hostSpeakers } = data

                            return (
                                <CardContWrapper>
                                    <CardSpeakerContainer>
                                        {hostSpeakers.map((speaker, i) => {
                                            return (
                                                <CardSpeaker
                                                    key={i}
                                                    onClick={() => {
                                                        this.showModal(speaker)
                                                    }}
                                                >
                                                    <div className="headshot-wrapper">
                                                        <img src={speaker.headshot} />
                                                    </div>
                                                    <p className="name">{speaker.name}</p>
                                                    {/* <p>{speaker.title}</p> */}
                                                    <p className="company">{speaker.company}</p>
                                                </CardSpeaker>
                                            )
                                        })}
                                    </CardSpeakerContainer>
                                </CardContWrapper>
                            )
                        }}
                    </Query>

                    <div className="text-content"></div>
                </div>
            </>
        )
    }
}

Index.propTypes = {
    // Prop Name: PropTypes.Prop Type,
}

export default Index

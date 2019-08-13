/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import NavSimple from '../PageHeadFooter/Nav/NavSimple'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { GET_SPONSORS_WHERE_RANKING } from '../../lib/graphqlTags'
import { ModalCompanyCard } from '../style/globalComps'
const HeightForNav = styled.div`
    height: 100px;
`

const LogoContainerLg = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 80px;
    div {
        /* border: 1px solid grey; */
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);

        width: 45%;
        height: 300px;
        padding: 20px;
        margin: 20px;
        cursor: pointer;
        border-top: 1px solid white;
        border-left: 1px solid white;
        transition: 0.3s;

        img {
            object-fit: contain;
            height: 100%;
            transition: 0.4s;
        }

        @keyframes shake {
            10%,
            90% {
                transform: translate3d(-1px, 0, 0);
            }

            20%,
            80% {
                transform: translate3d(2px, 0, 0);
            }

            30%,
            50%,
            70% {
                transform: translate3d(-4px, 0, 0);
            }

            40%,
            60% {
                transform: translate3d(4px, 0, 0);
            }
        }

        &:hover {
            box-shadow: 18px 23px 39px -2px rgba(194, 194, 194, 1);
            border-top: 1px solid #fafafa;
            border-left: 1px solid #fafafa;
            /* padding: 18px; */
            img {
                transform: scale(1.02);
                /* animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
                transform: translate3d(0, 0, 0); */
                /* backface-visibility: hidden;
                perspective: 1000px; */
            }
        }
    }
`

const LogoContainerMd = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 80px;
    div {
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);

        width: 22%;
        height: 150px;
        padding: 15px;
        margin: 15px;

        cursor: pointer;
        border-top: 1px solid white;
        border-left: 1px solid white;
        transition: 0.3s;

        img {
            object-fit: contain;
            height: 100%;
            transition: 0.4s;
        }
        &:hover {
            box-shadow: 18px 23px 35px -10px rgba(194, 194, 194, 1);

            border-top: 1px solid #fafafa;
            border-left: 1px solid #fafafa;

            /* padding: 14px; */
            img {
                /* transform: scale(1.02) skewX(-1deg) skewY(-1deg); */
                transform: scale(1.02);
            }
        }
    }
`

const LogoContainerSm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    margin: 0 auto 80px;
    div {
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);
        width: 16%;
        height: 120px;
        padding: 15px;
        margin: 20px 10px;

        cursor: pointer;
        border-top: 1px solid white;
        border-left: 1px solid white;
        transition: 0.3s;

        img {
            object-fit: contain;
            height: 100%;
            transition: 0.2s;
        }
        &:hover {
            box-shadow: 18px 23px 35px -10px rgba(194, 194, 194, 1);

            border-top: 1px solid #fafafa;
            border-left: 1px solid #fafafa;

            img {
                transform: scale(1.02);
            }
        }
    }
`

class PageSponsors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            type: '',
            ranking: '',
            index: 999,
            name: '',
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
        }
    }

    showModal = sponsor => {
        const {
            type,
            ranking,
            index,
            name,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            shareBtn,
        } = sponsor
        this.setState({
            showModal: true,
            type,
            ranking,
            index,
            name,
            logo,
            description,
            website,
            instagram,
            facebook,
            twitter,
            shareBtn,
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        // const platinum = sponsorData.filter(x => x.ranking === '1')
        // const pro = sponsorData.filter(x => x.ranking === '2')
        // const basic = sponsorData.filter(x => x.ranking === '3')

        return (
            <div style={{ positon: 'relative' }}>
                <HeightForNav />
                <NavSimple />
                {this.state.showModal && (
                    <ModalCompanyCard
                        onClick={() => {
                            this.closeModal()
                        }}
                        // style={this.state.showModal && '{filter: opacity(1);}'}
                        // className={this.state.showModal && 'fade-in'}
                    >
                        <div className="card">
                            <div className="logo">
                                <img src={this.state.logo} />
                            </div>

                            <div className="content">
                                <h2>{this.state.name}</h2>
                                <p>{this.state.description}</p>

                                <div className="social-wrapper">
                                    {this.state.instagram && (
                                        <div className="social-icon">
                                            <a
                                                href={`https://www.instagram.com/${this.state.instagram}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="./static/social/instagram.png"
                                                    alt=""
                                                    srcSet=""
                                                />
                                            </a>
                                        </div>
                                    )}

                                    {this.state.facebook && (
                                        <div className="social-icon">
                                            <a
                                                href={this.state.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="./static/social/facebook.png"
                                                    alt=""
                                                    srcSet=""
                                                />
                                            </a>
                                        </div>
                                    )}

                                    {this.state.twitter && (
                                        <div className="social-icon">
                                            <a
                                                href={`https://www.twitter.com/${this.state.twitter}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="./static/social/twitter.png"
                                                    alt=""
                                                    srcSet=""
                                                />
                                            </a>
                                        </div>
                                    )}
                                    <div className="some-height"></div>
                                    {this.state.website && (
                                        <div className="website">
                                            <a
                                                href={this.state.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <p>{this.state.website}</p>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ModalCompanyCard>
                )}
                <div className="text-content-title-wrapper">
                    <div className="text-content">
                        <h2 data-aos="my-anim">Sponsors</h2>
                        <p>
                            ReThink's sponsors are steering Hong Kong's
                            sustainability conversation - demonstrating their
                            commitment to driving change through thought
                            leadership, best practice, collaboration and
                            innovation.
                        </p>
                        <h3 className="link-green">
                            Want to be a ReThink sponsor?{' '}
                            <a
                                href="https://forms.gle/cvuvpHGz4jcSyUCy8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                click here
                            </a>
                        </h3>

                        <h2 data-aos="my-anim">Sustainability Partners</h2>
                    </div>

                    <Query
                        query={GET_SPONSORS_WHERE_RANKING}
                        variables={{
                            ranking: 'susPartner',
                        }}
                    >
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            if (!data) return <p>No Data</p>
                            const { sponsors } = data
                            return (
                                <LogoContainerLg>
                                    {sponsors.map((sponsor, i) => {
                                        return (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    this.showModal(sponsor)
                                                }}
                                            >
                                                <img src={sponsor.logo} />
                                            </div>
                                        )
                                    })}
                                </LogoContainerLg>
                            )
                        }}
                    </Query>

                    <div className="text-content">
                        <h2 data-aos="my-anim">Event Sponsors</h2>
                    </div>

                    <Query
                        query={GET_SPONSORS_WHERE_RANKING}
                        variables={{
                            ranking: 'eventSponsor',
                        }}
                    >
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            if (!data) return <p>No Data</p>
                            const { sponsors } = data
                            return (
                                <LogoContainerMd>
                                    {sponsors.map((sponsor, i) => {
                                        return (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    this.showModal(sponsor)
                                                }}
                                            >
                                                <img src={sponsor.logo} />
                                            </div>
                                        )
                                    })}
                                </LogoContainerMd>
                            )
                        }}
                    </Query>

                    <div className="text-content">
                        <h2 data-aos="my-anim">Innovation Showcase</h2>
                    </div>

                    <Query
                        query={GET_SPONSORS_WHERE_RANKING}
                        variables={{
                            ranking: 'innovShow',
                        }}
                    >
                        {({ data, error, loading }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error: {error.message}</p>
                            if (!data) return <p>No Data</p>
                            const { sponsors } = data
                            return (
                                <LogoContainerSm>
                                    {sponsors.map((sponsor, i) => {
                                        return (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    this.showModal(sponsor)
                                                }}
                                            >
                                                <img src={sponsor.logo} />
                                            </div>
                                        )
                                    })}
                                </LogoContainerSm>
                            )
                        }}
                    </Query>
                </div>
            </div>
        )
    }
}

export default PageSponsors

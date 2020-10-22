import React from 'react'
import Nav from '../Nav'
import ModalCompanyCard from '../lib/ModalCompanyCard'
import CarouselPartners from '../carousels/CarouselPartners'

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
        }
    }
    showModal = partner => {
        this.setState({
            showModal: true,
            type: partner.type,
            ranking: partner.ranking,
            index: partner.index,
            name: partner.name,
            logo: partner.logo,
            description: partner.description,
            website: partner.website,
            instagram: partner.instagram,
            facebook: partner.facebook,
            twitter: partner.twitter,
            linkedIn: partner.linkedIn,
            shareBtn: partner.shareBtn,
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        return (
            <div>
                <Nav />

                {this.state.showModal && (
                    <ModalCompanyCard
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
                    />
                )}

                <div className="text-content-title-wrapper">
                    <h2 data-aos="my-anim">Partners</h2>
                    <div className="text-content">
                        <p>
                            ReThink has established effective and collaborative partnerships with influential industry
                            organisations, Chambers of Commerce, NGOs, media platforms and Hong Kong charities.
                        </p>

                        <h3>Why Partner with ReThink? </h3>
                        <p>
                            Effective collaboration key for driving sustainable development. Partnering with ReThink
                            will amplify your initiatives and connect you to new business stakeholders, communities and
                            potential supporters.
                        </p>

                        <h3>Partnership opportunities?</h3>

                        <ul>
                            <li>
                                Environmental and/or social impact registered Section 88 charities are invited to join
                                the NGO Lounge (expanded for 2021)
                            </li>

                            <li>Co-host content across the event agenda; workshops, panels, fireside discussions</li>

                            <li>Offer discounted delegate passes to your members or official supporters </li>
                        </ul>

                        <h3 className="link-green">
                            <a href="https://forms.gle/cvuvpHGz4jcSyUCy8" target="_blank" rel="noopener noreferrer">
                                Request details on different partnership opportunities at ReThink 2021
                            </a>
                        </h3>

                        <div className="text-content">
                            <CarouselPartners />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index

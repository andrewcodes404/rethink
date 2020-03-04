import React from 'react'
import { ModalSpeakerCardStyle } from '../style/globalComps'
import PropTypes from 'prop-types'
import Close from '@material-ui/icons/Close'
import { ModalCloseBtn } from '../style/globalComps'

class ModalSpeakerCard extends React.Component {
    render() {
        const {
            company,
            title,
            bio,
            headshot,
            logo,
            name,
            description,
            linkedIn,
            instagram,
            facebook,
            twitter,
            website,
        } = this.props

        return (
            <ModalSpeakerCardStyle
                onClick={() => {
                    this.props.closeModal()
                }}
            >
                <div className="card">
                    <ModalCloseBtn onClick={this.closeModal}>
                        <Close />
                    </ModalCloseBtn>
                    <div className="logo">
                        <img src={headshot} />
                    </div>

                    <div className="content">
                        <h3>{name}</h3>
                        <p>
                            {title} - <span className="bold">{company}</span>
                        </p>
                        <p></p>
                        <div dangerouslySetInnerHTML={{ __html: bio }}></div>

                        <div className="social-wrapper">
                            {linkedIn && (
                                <div className="social-icon">
                                    <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                                        <img src="./static/social/linkedin.png" alt="" srcSet="" />
                                    </a>
                                </div>
                            )}

                            {instagram && (
                                <div className="social-icon">
                                    <a
                                        href={`https://www.instagram.com/${instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="./static/social/instagram.png" alt="" srcSet="" />
                                    </a>
                                </div>
                            )}

                            {facebook && (
                                <div className="social-icon">
                                    <a href={facebook} target="_blank" rel="noopener noreferrer">
                                        <img src="./static/social/facebook.png" alt="" srcSet="" />
                                    </a>
                                </div>
                            )}

                            {twitter && (
                                <div className="social-icon">
                                    <a
                                        href={`https://www.twitter.com/${twitter}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="./static/social/twitter.png" alt="" srcSet="" />
                                    </a>
                                </div>
                            )}
                            <div className="some-height"></div>
                            {website && (
                                <div className="website">
                                    <a href={website} target="_blank" rel="noopener noreferrer">
                                        <p>{website}</p>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ModalSpeakerCardStyle>
        )
    }
}

ModalSpeakerCard.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    linkedIn: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string,
    closeModal: PropTypes.func,
}

export default ModalSpeakerCard

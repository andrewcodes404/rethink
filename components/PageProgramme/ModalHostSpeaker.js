import React from 'react'
import PropTypes from 'prop-types'

import Close from '@material-ui/icons/Close'
import styled from 'styled-components'

const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(000, 000, 000, 0.5);
    min-height: 100vh;
    overflow: scroll;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 250px;
`

const ModalCard = styled.div`
    width: 90%;
    max-width: 800px;
    margin: 100px auto 100px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    position: relative;

    .top-content {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        width: 100%;
    }

    .headshot {
        width: 200px;
        height: 250px;
        img {
            object-fit: cover;
            height: 100%;
        }
    }

    .headlines {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        h2 {
            margin-bottom: 10px;
        }
    }

    .social-wrapper {
        display: flex;
        margin-top: 30px;
    }

    .social-icon {
        width: 35px;
        margin-right: 20px;
        &:hover {
            animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            transform-origin: center;
        }
    }

    transition: 1s;
    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0) rotate(10deg);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0) rotate(-10deg);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0) rotate(10deg);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0) rotate(-10deg);
        }
    }

    .close-modal-button {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        line-height: 0;
        border: 1px solid #000;
        /* padding: 5px; */
        border-radius: 10px;
        font-size: 15px;
        /* color: white;
        background: black; */
        transition: 0.4s;

        &:hover {
            transform: rotate(90deg);
            background: ${props => props.theme.green};
            color: white;
            border: unset;
        }
    }
`

class ModalHostSpeaker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            host: this.props.host,
        }
    }

    closeModal = () => {
        this.props.closeModal()
    }

    render() {
        const { bio, company, facebook, headshot, insta, linkedIn, name, title, twitter, website } = this.state.host

        return (
            <ModalStyled onClick={this.closeModal}>
                <ModalCard>
                    <div className="close-modal-button" onClick={this.closeModal}>
                        <Close />
                    </div>

                    <div className="top-content">
                        <div className="headshot">
                            <img src={headshot} alt={name} />
                        </div>

                        <div className="headlines">
                            <h2>{name}</h2>
                            <h3>{title}</h3>
                            <h3>{company}</h3>
                            {website && (
                                <div className="website">
                                    <a href={website} target="_blank" rel="noopener noreferrer">
                                        <p>{website}</p>
                                    </a>
                                </div>
                            )}

                            <div className="social-wrapper">
                                {insta && (
                                    <div className="social-icon">
                                        <a
                                            href={`https://www.instagram.com/${insta}`}
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

                                {linkedIn && (
                                    <div className="social-icon">
                                        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                                            <img src="./static/social/linkedin.png" alt="" srcSet="" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bio">
                        <div dangerouslySetInnerHTML={{ __html: bio }}></div>
                    </div>
                </ModalCard>
            </ModalStyled>
        )
    }
}

ModalHostSpeaker.propTypes = {
    host: PropTypes.object,
    closeModal: PropTypes.func,
}

export default ModalHostSpeaker

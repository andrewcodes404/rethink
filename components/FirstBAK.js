import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import Close from '@material-ui/icons/Close'

import styled from 'styled-components'

const Modal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding-top: 100px;
`

// const CustomForm = styled.div``

const StyledForm = styled.div`
    width: 90%;
    max-width: 550px;
    margin: 0 auto;

    .poster {
        position: relative;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        color: white;
        border: 1px solid black;
        cursor: pointer;
        transition: 0.4s;

        width: 30px;
        height: 30px;
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        background: rgba(0, 0, 0, 0.7);

        &:hover {
            /* color: yellow; */
            /* border: 2px solid yellow; */
            background: yellow;
            color: black;
        }
    }

    .poster--text {
        width: 60%;
    }

    .poster--bkg-img {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;

        img {
            object-fit: cover;
            height: 100%;
        }
    }

    .card {
        background: white;
        padding: 10px 20px 30px;
        h3 {
        }
    }

    .formInputs {
        div {
            /* border: 1px solid blue; */
            display: flex;
            flex-direction: column;

            input {
                margin: 0px 0 20px;
                font-size: 18px;
                padding: 5px;
            }

            button {
                background: green;
                color: white;
                padding: 10px;
                text-transform: uppercase;
            }
        }
    }
`

const url =
    'https://rethink-event.us20.list-manage.com/subscribe/post?u=689c9c9b54458f75cbd8a723f&amp;id=a9f50f027e'

const CustomForm = ({ status, message, onValidated }) => {
    let email
    const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
        })

    return (
        <form
            style={{
                background: '#efefef',
                borderRadius: 2,
                padding: 10,
                display: 'inline-block',
            }}
        >
            {status === 'sending' && (
                <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
                <div
                    style={{ color: 'red' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === 'success' && (
                <div
                    style={{ color: 'green' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            <br />
            <input
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
                required
            />
            <br />
            <button onClick={submit}>Submit</button>
        </form>
    )
}

class FirstVisit extends React.Component {
    constructor(props) {
        super(props)
        this.state = { viewPopup: false }
    }

    componentDidMount() {
        let visited = localStorage['alreadyVisited']
        if (visited) {
            this.setState({ viewPopup: true })
            //do not view Popup
        } else {
            //this is the first time
            localStorage['alreadyVisited'] = true
            this.setState({ viewPopup: true })
        }
    }

    handleCloseModal = () => {
        this.setState({ viewPopup: false })
    }

    render() {
        return (
            <div>
                <p>FirstVisit</p>

                {!this.state.viewPopup && <p>viewPopup is false</p>}

                {this.state.viewPopup && (
                    <Modal>
                        <StyledForm>
                            <div className="poster">
                                <div
                                    className="close-btn"
                                    onClick={this.handleCloseModal}
                                >
                                    <span>X</span>
                                </div>

                                <div className="poster--text">
                                    <img
                                        src="./static/graphics/logo_and_strap_white.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="poster--bkg-img">
                                    <img
                                        src="static/photos/building.jpg"
                                        alt=""
                                        srcSet=""
                                    />
                                </div>
                            </div>
                            <div className="card">
                                <h3>
                                    Newsletter sign-up for priority delegate
                                    passes, special offers and event updates
                                </h3>

                                <MailchimpSubscribe
                                    url={url}
                                    render={({
                                        subscribe,
                                        status,
                                        message,
                                    }) => {
                                        console.log('message = ', message)
                                        console.log('status = ', status)
                                        console.log('subscribe = ', subscribe)
                                        // status === 'success' &&
                                        //     this.handleCloseModal()
                                        return (
                                            <CustomForm
                                                status={status}
                                                message={message}
                                                onValidated={formData =>
                                                    subscribe(formData)
                                                }
                                            />
                                        )
                                    }}
                                />
                            </div>
                        </StyledForm>
                    </Modal>
                )}
            </div>
        )
    }
}

export default FirstVisit

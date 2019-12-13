import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import styled from 'styled-components'

const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    overflow: scroll;
    opacity: 0;

    @keyframes fadeMeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeMeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    ${props => {
        if (props.fadeModalIn) {
            return `animation: fadeMeIn 1s linear 2s forwards`
        }
    }}

    ${props => {
        if (props.fadeModalOut) {
            return `animation: fadeMeOut .5s linear 1.5s forwards`
        }
    }}
`

// const CustomForm = styled.div``

const StyledForm = styled.div`
    width: 90%;
    max-width: 550px;
    margin: 0 auto;

    .poster {
        position: relative;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 767px) {
            height: 260px;
        }
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
            border: 1px solid yellow;
        }
    }

    .poster--text {
        width: 80%;
        @media (min-width: 767px) {
            width: 60%;
        }
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
        padding: 10px 5% 20px;

        @media (min-width: 767px) {
            padding: 10px 20px 50px;
        }
        margin-bottom: 50px;
        h3 {
            text-align: left;
            margin-bottom: 0;
            @media (min-width: 767px) {
                text-align: center;
            }
        }
    }

    .formInputs {
        display: flex;
        flex-direction: column;
        /* width: 95%; */
        margin: 0 auto;

        @media (min-width: 767px) {
            width: 80%;
        }

        input {
            /* margin: 0px 0 20px; */
            font-size: 18px;
            padding: 5px;
            &:focus {
                outline: none !important;
                border: 1px solid green;
                box-shadow: unset;
            }
        }

        button {
            background: green;
            color: white;
            padding: 10px;
            text-transform: uppercase;
            cursor: pointer;
            transition: 0.4s;
            border: unset;
            &:hover {
                background: yellow;
                color: black;
            }
            &:focus {
                outline: none !important;
                box-shadow: unset;
            }
        }
    }

    .success-message {
        color: green;
    }
`

const url = 'https://rethink-event.us20.list-manage.com/subscribe/post?u=689c9c9b54458f75cbd8a723f&amp;id=a9f50f027e'

const CustomForm = ({ status, message, onValidated }) => {
    let email
    let lname
    let fname

    const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
            FNAME: fname.value,
            LNAME: lname.value,
        })

    const stopReRender = event => {
        event.preventDefault()
    }
    return (
        <form onSubmit={stopReRender}>
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}

            {status === 'success' && <h3 className="success-message"> Thankyou for subscribing</h3>}

            {status !== 'success' && (
                <div className="formInputs">
                    <br />

                    <input ref={node => (fname = node)} type="text" name="FNAME" placeholder="First Name" />
                    <br />

                    <input ref={node => (lname = node)} type="text" name="LNAME" placeholder="Last Name" />
                    <br />
                    <input ref={node => (email = node)} type="email" placeholder="Email" required />

                    <br />
                    <button onClick={submit}>Submit</button>
                </div>
            )}
        </form>
    )
}

class FirstVisit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewPopup: false,
            fadeModalIn: false,
        }
    }

    componentDidMount() {
        let visited = localStorage['alreadyVisitedRethink']
        // let visited = false
        if (visited) {
            //do not view Popup
            this.setState({
                viewPopup: false,
                fadeModalIn: false,
            })
        } else {
            //this is the first time
            localStorage['alreadyVisitedRethink'] = true

            setTimeout(() => {
                this.setState({
                    viewPopup: true,
                    fadeModalIn: true,
                })
            }, 100)
        }
    }

    handleCloseModal = () => {
        this.setState({ viewPopup: false })
    }

    render() {
        return (
            <div>
                {/* {!this.state.viewPopup && <p>viewPopup is false</p>} */}

                {this.state.viewPopup && (
                    <Modal fadeModalIn={this.state.fadeModalIn} fadeModalOut={this.state.fadeModalOut}>
                        <StyledForm>
                            <div className="poster">
                                <div className="close-btn" onClick={this.handleCloseModal}>
                                    <span>X</span>
                                </div>

                                <div className="poster--text">
                                    <img src="./static/graphics/logo_and_strap_white.svg" alt="" />
                                </div>
                                <div className="poster--bkg-img">
                                    <img src="static/photos/building.jpg" alt="" srcSet="" />
                                </div>
                            </div>
                            <div className="card">
                                <h3>
                                    Secure priority access to delegate passes, sustainability success stories and
                                    partner news
                                </h3>

                                <MailchimpSubscribe
                                    url={url}
                                    render={({ subscribe, status, message }) => {
                                        // if (status === 'success') {}
                                        return (
                                            <CustomForm
                                                status={status}
                                                message={message}
                                                onValidated={formData => subscribe(formData)}
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

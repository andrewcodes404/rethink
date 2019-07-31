import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { CREATE_ADVCOM, GET_ADV_COMS } from '../../lib/graphqlTags'

// material ui
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

// icons
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import FileCopy from '@material-ui/icons/FileCopy'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'
import Close from '@material-ui/icons/Close'

const FormModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    background: white;
    padding: 0px;
    display: flex;

    width: 550px;
    margin: 0 auto;
    padding: 25px;

    .flex-item1,
    .flex-item2 {
        display: flex;
        flex-direction: column;

        2border: 1px solid #000;
    }

    .flex-item1 {
        width: 50%;
    }
    .flex-item2 {
        width: 50%;
        justify-content: space-between;
        align-items: flex-end;
    }

    .icon {
        margin-left: 10px;
    }

    fieldset {
        border-radius: 0;
    }

    .img-upload-wrapper {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;

        padding-top: 15px;

        .upload-btn {
            background: green;
            color: white;
            margin-bottom: 10px;
            &:hover {
                color: black;
                background: gold;
            }
        }
    }

    .fake-headshot {
        width: 180px;
        height: 180px;
        background: lightgrey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .fake-icon {
            font-size: 60px;
            color: green;
        }
    }

    .thumb {
        width: 200px;
        max-height: 200px;
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);
        background: green;
        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }

    .input-number {
        width: 200px;
        input {
            width: 50px;
        }
    }
    .input-checkbox {
        /* font-size: 16px; */
        width: 200px;
    }
    .submit-wrapper {
        padding: 10px 0;

        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        width: 90%;
        /* margin: 0 auto; */
        .submit-btn {
            background: green;
            color: white;
            &:hover {
                color: black;
                background: gold;
            }
        }
    }
`
const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    .modal-card {
        background: white;
        padding: 40px;
        text-align: center;
        p {
            margin-bottom: 50px;
        }
    }
    .modal-btn {
        background: green;
        padding: 10px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }
`

const Spinner = styled.div`
    @keyframes spin {
        10%,
        90% {
            transform: rotate(25deg);
        }

        20%,
        80% {
            transform: rotate(-25deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(70deg);
        }

        40%,
        60% {
            transform: rotate(-70deg);
        }
    }

    width: 100px;
    height: 100px;
    padding: 10px;
    background: green;
    animation: spin 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
    transform-origin: center;
`

class CreateAdvComForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'XXXXX',
            jobTitle: 'CEO',
            company: 'Nike',
            index: 1,
            headshot:
                'https://res.cloudinary.com/dcqi9fn2y/image/upload/v1564569273/rethink/advCom/pierre-chatel-innocenti-o250-zxlElQ-unsplash_cbxoxp.jpg',

            loading: false,
            AdvComAdded: false,
            showForm: props.showForm,
        }
    }

    resetState() {
        this.setState({
            name: '',
            jobTitle: '',
            company: '',
            index: 99,
            headshot: '',
            loading: false,
            AdvComAdded: true,
            showForm: true,
        })
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value

        this.setState({ [id]: val }, () => {
            // console.log('this.state.id = ', this.state)
        })
    }

    handleRadioChange = e => {
        const { id } = e.target
        this.setState({ ranking: id }, () => {
            console.log('this.state.id = ', this.state.ranking)
        })
    }

    handleChckboxChange = e => {
        const { checked } = e.target
        this.setState({ frontpage: checked })
    }

    clearModal = () => {
        this.setState({
            AdvComAdded: false,
            showForm: false,
        })
    }

    uploadFile = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'rethink_AdvCom')

        this.setState({
            loading: true,
        })

        //hit up the cloudinary API
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dcqi9fn2y/image/upload',
            {
                //this is a config arg so we want POST our data we just created
                method: 'POST',
                body: data,
            }
        )
        //parse the returning file to json
        const file = await res.json()
        // Add to state
        this.setState({
            headshot: file.secure_url,
            loading: false,
        })
    }

    render() {
        return (
            <>
                {this.state.showForm && (
                    <FormModal>
                        <div
                            className="content-wrapper"
                            style={{ marginTop: '40px' }}
                        >
                            {this.state.loading && (
                                <Modal>
                                    <h1>Uploading Image</h1>
                                    <br />
                                    <Spinner>
                                        <img
                                            src="./static/icons/topics-white.svg"
                                            alt=""
                                        ></img>
                                    </Spinner>
                                </Modal>
                            )}

                            {this.state.AdvComAdded && (
                                <Modal
                                    onClick={() => {
                                        this.clearModal()
                                    }}
                                >
                                    <div className="modal-card">
                                        <p>Advisory Committee Member Added</p>
                                        <span
                                            className="modal-btn"
                                            onClick={() => {
                                                this.clearModal()
                                            }}
                                        >
                                            close x
                                        </span>
                                    </div>
                                </Modal>
                            )}

                            <Mutation
                                mutation={CREATE_ADVCOM}
                                variables={this.state}
                                refetchQueries={[{ query: GET_ADV_COMS }]}
                            >
                                {(createAdvCom, { loading, error }) => (
                                    <Form
                                        onSubmit={async e => {
                                            e.preventDefault()
                                            await createAdvCom()
                                            this.resetState()
                                        }}
                                    >
                                        <div className="flex-item1">
                                            <TextField
                                                type="text"
                                                id="name"
                                                label="name"
                                                className="textField"
                                                margin="normal"
                                                variant="outlined"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                                required
                                            />

                                            <TextField
                                                type="text"
                                                id="jobTitle"
                                                label="jobTitle"
                                                className="textField"
                                                margin="normal"
                                                variant="outlined"
                                                value={this.state.jobTitle}
                                                onChange={this.handleChange}
                                                required
                                            />

                                            <TextField
                                                type="text"
                                                id="company"
                                                label="company"
                                                className="textField"
                                                margin="normal"
                                                variant="outlined"
                                                value={this.state.company}
                                                onChange={this.handleChange}
                                                required
                                            />

                                            <TextField
                                                type="number"
                                                id="index"
                                                label="index position"
                                                className="input-number"
                                                margin="normal"
                                                variant="outlined"
                                                value={this.state.index}
                                                onChange={this.handleChange}
                                                required
                                                fullWidth={false}
                                                // helperText="a shifting dream a bittersweet philosophy"
                                            />
                                        </div>
                                        <div className="flex-item2">
                                            <div className="img-upload-wrapper">
                                                <input
                                                    accept=".png,.jpg,.jpeg"
                                                    // className={classes.input}
                                                    style={{ display: 'none' }}
                                                    id="file"
                                                    multiple
                                                    type="file"
                                                    onChange={this.uploadFile}
                                                />
                                                <label htmlFor="file">
                                                    <Button
                                                        variant="contained"
                                                        // variant="outlined"
                                                        component="span"
                                                        // color="secondary"
                                                        size="small"
                                                        className="upload-btn"
                                                    >
                                                        Upload headshot
                                                        <CloudUploadIcon className="icon" />
                                                    </Button>
                                                </label>

                                                {this.state.headshot.length <
                                                    1 && (
                                                    <div className="fake-headshot">
                                                        <PhotoLibrary className="fake-icon" />
                                                    </div>
                                                )}

                                                {this.state.headshot.length >
                                                    1 && (
                                                    <img
                                                        className="thumb"
                                                        width="200"
                                                        src={
                                                            this.state.headshot
                                                        }
                                                        alt="Upload Preview"
                                                    />
                                                )}
                                            </div>

                                            <div className="submit-wrapper">
                                                <Button
                                                    margin="normal"
                                                    type="submit"
                                                    variant="contained"
                                                    color="default"
                                                    size="small"
                                                    // className="submit-btn"
                                                    onClick={() => {
                                                        this.clearModal()
                                                    }}
                                                >
                                                    close{' '}
                                                    <Close className="icon" />
                                                </Button>

                                                <Button
                                                    margin="normal"
                                                    type="submit"
                                                    variant="contained"
                                                    color="default"
                                                    size="small"
                                                    className="submit-btn"
                                                >
                                                    Submit
                                                    <FileCopy className="icon" />
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Mutation>
                        </div>
                    </FormModal>
                )}
            </>
        )
    }
}

CreateAdvComForm.propTypes = {
    showForm: PropTypes.bool,
}

export default CreateAdvComForm

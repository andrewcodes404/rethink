import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { CREATE_HOSTSPEAKER, GET_HOSTSPEAKERS } from '../../lib/graphqlTags'

import { Editor } from '@tinymce/tinymce-react'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

// icons
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import FileCopy from '@material-ui/icons/FileCopy'
import Public from '@material-ui/icons/Public'
import Link from '@material-ui/icons/Link'
import Face from '@material-ui/icons/Face'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Phonelink from '@material-ui/icons/Phonelink'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'
import Close from '@material-ui/icons/Close'
import MUIRichTextEditor from 'mui-rte'

//style
import { Spinner } from '../style/globalComps'
import { FormModal, HostSpeakForm, Modal } from './hostSpeakStyle'

class CreateHostSpeakForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            HostSpeakAdded: false,
            showForm: props.showForm,

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

    resetState() {
        this.setState({
            loading: false,
            HostSpeakAdded: false,
            showForm: false,

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
        })
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value

        console.log('val = ', val)

        this.setState({ [id]: val }, () => {
            console.log('this.state.id = ', this.state)
        })
    }

    handleEditorChange = e => {
        console.log('Content was updated:', e.target.getContent())

        const id = e.target.id
        const value = e.target.getContent()

        this.setState({ [id]: value })
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
            HostSpeakAdded: false,
            showForm: false,
        })
    }

    uploadFile = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'rethink_hostSpeak')

        this.setState({
            loading: true,
        })

        //hit up the cloudinary API
        const res = await fetch('https://api.cloudinary.com/v1_1/dcqi9fn2y/image/upload', {
            //this is a config arg so we want POST our data we just created
            method: 'POST',
            body: data,
        })
        //parse the returning file to json
        const file = await res.json()
        // Add to state
        this.setState({
            headshot: file.secure_url,
            loading: false,
        })
    }

    handleBioChange = data => {
        console.log('data = ', data)
    }

    render() {
        return (
            <>
                {this.state.showForm && (
                    <FormModal>
                        <div className="content-wrapper" style={{ marginTop: '40px' }}>
                            {this.state.loading && (
                                <Modal>
                                    <h1>Uploading Image</h1>
                                    <br />
                                    <Spinner>
                                        <img src="./static/icons/topics-white.svg" alt=""></img>
                                    </Spinner>
                                </Modal>
                            )}

                            {this.state.HostSpeakAdded && (
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
                                mutation={CREATE_HOSTSPEAKER}
                                variables={this.state}
                                refetchQueries={[{ query: GET_HOSTSPEAKERS }]}
                            >
                                {(createHostSpeaker, { loading, error }) => (
                                    <HostSpeakForm
                                        onSubmit={async e => {
                                            console.log('this.state = ', this.state)
                                            e.preventDefault()
                                            await createHostSpeaker()
                                            this.resetState()
                                        }}
                                    >
                                        <h3>Host-Speaker Form</h3>
                                        <div className="img-upload-wrapper">
                                            <input
                                                accept=".png,.jpg,.jpeg"
                                                style={{ display: 'none' }}
                                                id="file"
                                                multiple
                                                type="file"
                                                onChange={this.uploadFile}
                                            />
                                            <label htmlFor="file">
                                                <Button
                                                    variant="contained"
                                                    component="span"
                                                    size="small"
                                                    className="upload-btn"
                                                >
                                                    Upload headshot
                                                    <CloudUploadIcon className="icon" />
                                                </Button>
                                            </label>

                                            {this.state.headshot.length < 1 && (
                                                <div className="fake-headshot">
                                                    <PhotoLibrary className="fake-icon" />
                                                </div>
                                            )}

                                            {this.state.headshot.length > 1 && (
                                                <img
                                                    className="thumb"
                                                    width="200"
                                                    src={this.state.headshot}
                                                    alt="Upload Preview"
                                                />
                                            )}
                                        </div>
                                        <TextField
                                            type="text"
                                            id="name"
                                            label="name"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            required
                                        />

                                        <TextField
                                            type="text"
                                            id="title"
                                            label="title"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                            required
                                        />

                                        <TextField
                                            type="text"
                                            id="company"
                                            label="company"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.company}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <br />
                                        <h3 style={{ textAlign: 'left' }}>Bio</h3>
                                        <br />
                                        <Editor
                                            id="bio"
                                            apiKey={process.env.TINY_MCE_API_KEY}
                                            initialValue={this.state.learnings}
                                            init={{
                                                height: 400,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount',
                                                ],
                                                toolbar:
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help',
                                            }}
                                            onChange={this.handleEditorChange}
                                        />
                                        <br />
                                        <br />

                                        <TextField
                                            type="text"
                                            id="website"
                                            label="https://website.com"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.website}
                                            onChange={this.handleChange}
                                            pattern="https://.*"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <Public />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <TextField
                                            type="text"
                                            id="linkedIn"
                                            label="https://linkedIn"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.linkedIn}
                                            onChange={this.handleChange}
                                            pattern="https://.*"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <Link />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <TextField
                                            type="text"
                                            id="facebook"
                                            label="https://facebook_url"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.facebook}
                                            onChange={this.handleChange}
                                            pattern="https://.*"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <Face />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <TextField
                                            type="text"
                                            id="insta"
                                            label="instagram_name"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.insta}
                                            onChange={this.handleChange}
                                            pattern="https://.*"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <PhotoCamera />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <TextField
                                            type="text"
                                            id="twitter"
                                            label="@twitter_handle"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.twitter}
                                            onChange={this.handleChange}
                                            pattern="@.*"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <Phonelink />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <div className="submit-wrapper">
                                            <Button
                                                margin="normal"
                                                type="submit"
                                                variant="contained"
                                                color="default"
                                                size="small"
                                                className="close-btn"
                                                onClick={() => {
                                                    this.clearModal()
                                                }}
                                            >
                                                close <Close className="icon" />
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
                                    </HostSpeakForm>
                                )}
                            </Mutation>
                        </div>
                    </FormModal>
                )}
            </>
        )
    }
}

CreateHostSpeakForm.propTypes = {
    showForm: PropTypes.bool,
}

export default CreateHostSpeakForm

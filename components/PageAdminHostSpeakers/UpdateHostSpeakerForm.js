import React from 'react'
import PropTypes from 'prop-types'

import { Mutation } from 'react-apollo'
import { UPDATE_HOSTSPEAKER, GET_HOSTSPEAKERS_ORDERBY_INDEX } from '../../lib/graphqlTags'

import { Editor } from '@tinymce/tinymce-react'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Checkbox from '@material-ui/core/Checkbox'

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

//style
import { Spinner } from '../style/globalComps'
import { FormModal, HostSpeakForm, Modal } from './hostSpeakStyle'

class UpdateHostSpeakerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            AdvComAdded: false,
            showUpdateForm: props.showUpdateForm,

            id: props.id,
            name: props.name,
            title: props.title,
            company: props.company,
            headshot: props.headshot,
            bio: props.bio,
            linkedIn: props.linkedIn,
            insta: props.insta,
            facebook: props.facebook,
            twitter: props.twitter,
            website: props.website,
            frontpage: props.frontpage || false,
            index: props.index,
            logo: props.logo,
        }
    }

    resetState() {
        this.setState({
            loading: false,
            showUpdateForm: false,
            id: '',
            name: '',
            title: '',
            company: '',
            headshot: '',
            bio: '',
            linkedIn: '',
            insta: '',
            facebook: '',
            twitter: '',
            website: '',
            frontpage: false,
            index: 99,
            logo: '',
        })
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value

        this.setState({ [id]: val }, () => {
            // console.log('this.state.id = ', this.state)
        })
    }

    handleEditorChange = e => {
        const id = e.target.id
        const value = e.target.getContent()
        this.setState({ [id]: value })
    }

    handleRadioChange = e => {
        const { id } = e.target
        this.setState({ ranking: id })
    }

    handleCheckboxChange = e => {
        const { checked } = e.target
        this.setState({ frontpage: checked })
    }

    clearModal = () => {
        this.setState({
            AdvComAdded: false,
            showUpdateForm: false,
        })
    }

    uploadHeadshot = async e => {
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

    uploadLogo = async e => {
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
            logo: file.secure_url,
            loading: false,
        })
    }

    render() {
        return (
            <>
                {this.state.showUpdateForm && (
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
                                mutation={UPDATE_HOSTSPEAKER}
                                variables={this.state}
                                refetchQueries={[{ query: GET_HOSTSPEAKERS_ORDERBY_INDEX }]}
                            >
                                {(updateHostSpeaker, { loading, error }) => (
                                    <HostSpeakForm
                                        onSubmit={async e => {
                                            console.log('this.state = ', this.state)
                                            e.preventDefault()
                                            await updateHostSpeaker()
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
                                                onChange={this.uploadHeadshot}
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
                                                <div className="thumb">
                                                    <img src={this.state.headshot} alt="Upload Preview" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="img-upload-wrapper">
                                            <input
                                                accept=".png,.jpg,.jpeg"
                                                style={{ display: 'none' }}
                                                id="logo"
                                                multiple
                                                type="file"
                                                onChange={this.uploadLogo}
                                                dest=""
                                            />
                                            <label htmlFor="logo">
                                                <Button
                                                    variant="contained"
                                                    component="span"
                                                    size="small"
                                                    className="upload-btn"
                                                >
                                                    Upload Logo
                                                    <CloudUploadIcon className="icon" />
                                                </Button>
                                            </label>

                                            {this.state.logo.length < 1 && (
                                                <div className="fake-headshot">
                                                    <PhotoLibrary className="fake-icon" />
                                                </div>
                                            )}

                                            {this.state.logo.length > 1 && (
                                                <div className="thumb">
                                                    <img src={this.state.logo} alt="Upload Preview" />
                                                </div>
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

                                        {/* <TextField
                                            fullWidth={false}
                                            multiline={true}
                                            rows={8}
                                            variant="outlined"
                                            label="bio"
                                            id="bio"
                                            value={this.state.bio}
                                            onChange={this.handleChange}
                                            className="text-area"
                                        /> */}
                                        <br />
                                        <h3 style={{ textAlign: 'left' }}>Bio</h3>
                                        <br />
                                        <Editor
                                            id="bio"
                                            apiKey={process.env.TINY_MCE_API_KEY}
                                            initialValue={this.state.bio}
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

                                        <div className="btm-wrapper">
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
                                            <label className="input-checkbox">
                                                Show in front page carousel
                                                <Checkbox
                                                    name="frontpage"
                                                    id="frontpage"
                                                    color="default"
                                                    checked={this.state.frontpage}
                                                    onChange={this.handleCheckboxChange}
                                                />
                                            </label>
                                        </div>

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

UpdateHostSpeakerForm.propTypes = {
    showUpdateForm: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    company: PropTypes.string,
    headshot: PropTypes.string,
    bio: PropTypes.string,
    linkedIn: PropTypes.string,
    insta: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string,
    frontpage: PropTypes.bool,
    index: PropTypes.number,
    logo: PropTypes.string,
}

export default UpdateHostSpeakerForm

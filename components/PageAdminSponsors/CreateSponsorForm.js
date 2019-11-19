import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { CREATE_SPONSOR, GET_SPONSORS } from '../../lib/graphqlTags'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
// icons
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import FileCopy from '@material-ui/icons/FileCopy'
import Public from '@material-ui/icons/Public'
import Face from '@material-ui/icons/Face'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Phonelink from '@material-ui/icons/Phonelink'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import Link from '@material-ui/icons/Link'
import Close from '@material-ui/icons/Close'

// style
import { Spinner, AlertModal } from '../style/globalComps'
import { FormModal, Form } from './sponsorFormStyle'

class CreateSponsorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            ranking: '',
            index: 99,
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            linkedIn: '',
            frontpage: false,
            loading: false,
            sponsorAdded: false,
            showForm: props.showForm,
        }
    }

    resetState() {
        this.setState({
            name: '',
            ranking: '',
            index: '',
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            linkedIn: '',
            frontpage: false,
            loading: false,
            sponsorAdded: true,
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
        this.setState({ ranking: id })
    }

    handleCheckboxChange = e => {
        const { checked } = e.target
        this.setState({ frontpage: checked })
    }

    clearModal = () => {
        this.setState({
            sponsorAdded: false,
            showForm: false,
        })
    }

    uploadFile = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'rethink_sponsor')

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

    radioBtnData = [
        { text: 'Sustainable Partners', tag: 'susPartner' },
        { text: 'Event Sponsors', tag: 'eventSponsor' },
        { text: 'Innovation Showcase', tag: 'innovShow' },
    ]

    render() {
        return (
            <>
                {this.state.showForm && (
                    <FormModal>
                        {this.state.loading && (
                            <AlertModal>
                                <h1>Uploading Image</h1>
                                <br />
                                <Spinner>
                                    <img src="./static/icons/topics-white.svg" alt=""></img>
                                </Spinner>
                            </AlertModal>
                        )}

                        {this.state.sponsorAdded && (
                            <AlertModal
                                onClick={() => {
                                    this.clearModal()
                                }}
                            >
                                <div className="modal-card">
                                    <p>Sponsor Added</p>
                                    <span
                                        className="modal-btn"
                                        onClick={() => {
                                            this.clearModal()
                                        }}
                                    >
                                        close x
                                    </span>
                                </div>
                            </AlertModal>
                        )}

                        <Mutation
                            mutation={CREATE_SPONSOR}
                            variables={this.state}
                            refetchQueries={[{ query: GET_SPONSORS }]}
                        >
                            {createSponsor => (
                                <Form
                                    onSubmit={async e => {
                                        e.preventDefault()
                                        await createSponsor()
                                        this.resetState()
                                    }}
                                >
                                    <h3>New Sponsor</h3>
                                    <div className="form-item-1">
                                        <TextField
                                            size="small"
                                            type="text"
                                            id="name"
                                            label="name"
                                            className="text-field"
                                            variant="outlined"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            required
                                            fullWidth={false}
                                        />

                                        <TextField
                                            fullWidth={false}
                                            multiline={true}
                                            rows={6}
                                            variant="outlined"
                                            label="Description"
                                            margin="normal"
                                            id="description"
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                            required
                                            className="text-area"
                                        />

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
                                            id="instagram"
                                            label="instagram_name"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.instagram}
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

                                        <TextField
                                            type="text"
                                            id="linkedIn"
                                            label="LinkedIn"
                                            className="text-field"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.linkedIn}
                                            onChange={this.handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <Link />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div>
                                    <div className="form-item-2">
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
                                                    Upload Logo
                                                    <CloudUploadIcon className="icon" />
                                                </Button>
                                            </label>

                                            {this.state.logo.length < 1 && (
                                                <div className="fake-logo">
                                                    <PhotoLibrary className="fake-icon" />
                                                </div>
                                            )}

                                            {this.state.logo.length > 1 && (
                                                <img
                                                    className="thumb"
                                                    width="200"
                                                    src={this.state.logo}
                                                    alt="Upload Preview"
                                                />
                                            )}
                                        </div>

                                        <div className="ranking-wrapper">
                                            <h5>Ranking</h5>

                                            <div className="radio-wrapper">
                                                {this.radioBtnData.map((el, i) => {
                                                    return (
                                                        <label key={i}>
                                                            {el.text}
                                                            <Radio
                                                                required
                                                                color="default"
                                                                checked={this.state.ranking === el.tag}
                                                                type="radio"
                                                                id={el.tag}
                                                                name="ranking"
                                                                value={el.tag}
                                                                onChange={this.handleRadioChange}
                                                                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                                                                checkedIcon={
                                                                    <RadioButtonCheckedIcon fontSize="small" />
                                                                }
                                                            />
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                        </div>
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
                                                size="large"
                                                // className="submit-btn"
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
                                                size="large"
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
                    </FormModal>
                )}
            </>
        )
    }
}

CreateSponsorForm.propTypes = {
    showForm: PropTypes.bool,
}

export default CreateSponsorForm

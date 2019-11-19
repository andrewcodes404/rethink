import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { CREATE_ADVCOM, GET_ADV_COMS } from '../../lib/graphqlTags'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

// icons
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import FileCopy from '@material-ui/icons/FileCopy'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'
import Close from '@material-ui/icons/Close'

//style
import { Spinner } from '../style/globalComps'
import { FormModal, AdvComForm, Modal } from './advComFormStyle'

class CreateAdvComForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            jobTitle: '',
            company: '',
            index: 99,
            headshot: '',
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

                            <Mutation mutation={CREATE_ADVCOM} variables={this.state} refetchQueries={[{ query: GET_ADV_COMS }]}>
                                {(createAdvCom, { loading, error }) => (
                                    <AdvComForm
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
                                                className="text-field"
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
                                                className="text-field"
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
                                                className="text-field"
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

                                                {this.state.headshot.length < 1 && (
                                                    <div className="fake-headshot">
                                                        <PhotoLibrary className="fake-icon" />
                                                    </div>
                                                )}

                                                {this.state.headshot.length > 1 && <img className="thumb" width="200" src={this.state.headshot} alt="Upload Preview" />}
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
                                                    close <Close className="icon" />
                                                </Button>

                                                <Button margin="normal" type="submit" variant="contained" color="default" size="small" className="submit-btn">
                                                    Submit
                                                    <FileCopy className="icon" />
                                                </Button>
                                            </div>
                                        </div>
                                    </AdvComForm>
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

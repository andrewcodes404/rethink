import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { CREATE_PARTNER, GET_PARTNERS } from '../../lib/graphqlTags'

// material ui
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
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
import Close from '@material-ui/icons/Close'
import { Spinner, AlertModal } from '../style/globalComps'
import { FormModal, Form } from '../PageAdminSponsors/sponsorFormStyle'
// const FormModal = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 2;
//     background: rgba(0, 0, 0, 0.7);

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `

// const Form = styled.form`
//     background: white;
//     padding: 0px;
//     display: flex;

//     width: 1000px;
//     margin: 50px auto 100px;

//     .form-item-1,
//     .form-item-2 {
//         display: flex;
//         flex-direction: column;
//         width: 50%;
//         margin: 20px;
//     }

//     .icon {
//         margin-left: 10px;
//     }

//     fieldset {
//         border-radius: 0;
//     }

//     .radio-wrapper {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-around;
//         margin: 0 0 20px;
//         label {
//             width: 200px;
//             text-align: center;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//         }
//     }

//     .img-upload-wrapper {
//         margin: 0;
//         display: flex;
//         align-items: center;
//         justify-content: space-around;

//         padding: 0;

//         .upload-btn {
//             background: green;
//             color: white;
//             &:hover {
//                 color: black;
//                 background: gold;
//             }
//         }
//     }

//     .fake-logo {
//         width: 180px;
//         height: 180px;
//         background: lightgrey;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         .fake-icon {
//             font-size: 60px;
//             color: green;
//         }
//     }

//     .thumb {
//         width: 200px;
//         max-height: 200px;
//         box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);
//         background: green;
//         img {
//             width: 100%;
//             height: 100%;
//             object-fit: scale-down;
//         }
//     }

//     .ranking-wrapper {
//         /* border-top: 1px solid lightgrey; */
//         margin-top: 30px;
//         padding: 10px 0 10px;
//         h5 {
//             text-decoration: underline;
//             padding-left: 15px;
//         }
//     }

//     .btm-wrapper {
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         /* border-top: 1px solid lightgrey; */
//         padding: 0px 0 20px;
//     }

//     .input-number {
//         width: 200px;
//         input {
//             width: 50px;
//         }
//     }
//     .input-checkbox {
//         /* font-size: 16px; */
//         width: 200px;
//     }
//     .submit-wrapper {
//         padding: 10px 0;

//         display: flex;
//         justify-content: space-between;
//         width: 65%;
//         margin: 0 auto;
//         .submit-btn {
//             background: green;
//             color: white;
//             &:hover {
//                 color: black;
//                 background: gold;
//             }
//         }
//     }
// `
// const FormModal = styled.div`
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background: rgba(0, 0, 0, 0.7);

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     z-index: 200;
//     .modal-card {
//         background: white;
//         padding: 40px;
//         text-align: center;
//         p {
//             margin-bottom: 50px;
//         }
//     }
//     .modal-btn {
//         background: green;
//         padding: 10px;
//         margin: 10px;
//         cursor: pointer;

//         &:hover {
//             color: white;
//         }
//     }
// `

// const Spinner = styled.div`
//     @keyframes spin {
//         10%,
//         90% {
//             transform: rotate(25deg);
//         }

//         20%,
//         80% {
//             transform: rotate(-25deg);
//         }

//         30%,
//         50%,
//         70% {
//             transform: rotate(70deg);
//         }

//         40%,
//         60% {
//             transform: rotate(-70deg);
//         }
//     }

//     width: 100px;
//     height: 100px;
//     padding: 10px;
//     background: green;
//     animation: spin 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
//     transform-origin: center;
// `

class CreatePartnerForm extends React.Component {
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
            frontpage: false,
            loading: false,
            partnerAdded: false,
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
            frontpage: false,
            loading: false,
            partnerAdded: true,
            showForm: true,
        })
    }

    clearModal = () => {
        this.setState({
            partnerAdded: false,
            showForm: false,
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

    handleChckboxChange = e => {
        const { checked } = e.target
        this.setState({ frontpage: checked })
    }

    clearModal = () => {
        this.setState({
            partnerAdded: false,
            showForm: false,
        })
    }

    uploadFile = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'rethink_partner')

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
            logo: file.secure_url,
            loading: false,
        })
    }

    radioBtnData = [
        { text: 'Strategic', tag: 'strategic' },
        { text: 'Host Venue', tag: 'hostVenue' },
        { text: 'Charity ', tag: 'charity' },
        { text: 'Innovation ', tag: 'innovation' },
        { text: 'ESG', tag: 'esg' },
        { text: 'Event & Conference', tag: 'eventConf' },
        { text: 'Community', tag: 'community' },
        { text: 'Media', tag: 'mediaPartners' },
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
                                    <img
                                        src="./static/icons/topics-white.svg"
                                        alt=""
                                    ></img>
                                </Spinner>
                            </AlertModal>
                        )}

                        {this.state.partnerrAdded && (
                            <AlertModal
                                onClick={() => {
                                    this.clearModal()
                                }}
                            >
                                <div className="modal-card">
                                    <p>Partner Added</p>
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
                            mutation={CREATE_PARTNER}
                            variables={this.state}
                            refetchQueries={[{ query: GET_PARTNERS }]}
                        >
                            {(createPartner, { loading, error }) => (
                                <Form
                                    onSubmit={async e => {
                                        e.preventDefault()
                                        await createPartner()
                                        this.resetState()
                                    }}
                                >
                                    <div className="form-item-1">
                                        <TextField
                                            size="small"
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
                                            label="https://facebook/fb_name.com"
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
                                                {this.radioBtnData.map(
                                                    (el, i) => {
                                                        return (
                                                            <label key={i}>
                                                                {el.text}
                                                                <Radio
                                                                    required
                                                                    color="default"
                                                                    checked={
                                                                        this
                                                                            .state
                                                                            .ranking ===
                                                                        el.tag
                                                                    }
                                                                    type="radio"
                                                                    id={el.tag}
                                                                    name="ranking"
                                                                    value={
                                                                        el.tag
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleRadioChange
                                                                    }
                                                                    icon={
                                                                        <RadioButtonUncheckedIcon fontSize="small" />
                                                                    }
                                                                    checkedIcon={
                                                                        <RadioButtonCheckedIcon fontSize="small" />
                                                                    }
                                                                />
                                                            </label>
                                                        )
                                                    }
                                                )}
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
                                                    value="checkedG"
                                                    onChange={
                                                        this.handleChckboxChange
                                                    }
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

CreatePartnerForm.propTypes = {
    showForm: PropTypes.bool,
}

export default CreatePartnerForm

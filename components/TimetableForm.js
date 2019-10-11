import React from 'react'
import PropTypes from 'prop-types'
import NavSimple from './PageHeadFooter/Nav/NavSimple'
import styled from 'styled-components'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from '@material-ui/core/Chip'
import Input from '@material-ui/core/Input'

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

const exampleData = {
    timeStart: '11:00',
    timeEnd: '12:15',
    themeIcon: 'static/icons/case-studies.svg',
    title: 'Emergency Response: Re-writing the action plan',
    hostName: 'Annika Ramsköld',
    hostTitle: 'Vice president corporate sustainability ',
    hostOrg: 'VATTENFALL AB',
    speakers: [
        { speakerOrg: 'IFC' },
        { speakerOrg: 'Pret A Manger' },
        {
            speakerOrg: 'Pernod Ricard India',
        },
    ],
    sponsors: [
        {
            sponsorName: 'Marks & Spencer',
            sponsorLogo: 'static/brands/10.png',
        },
    ],
    break: false,
}

const dataHosts = [
    { name: 'terry' },
    { name: 'tim' },
    { name: 'martin' },
    { name: 'judy' },
    { name: 'chloe' },
]

const dataSpeakers = [
    { name: 'bob' },
    { name: 'sam' },
    { name: 'jenny' },
    { name: 'mark' },
    { name: 'susan' },
]

const dataSponsors = [
    { name: 'bob' },
    { name: 'sam' },
    { name: 'jenny' },
    { name: 'mark' },
    { name: 'susan' },
]

const dataPartners = [
    { name: 'terry' },
    { name: 'tim' },
    { name: 'martin' },
    { name: 'judy' },
    { name: 'chloe' },
]

const HeightForNav = styled.div`
    height: 100px;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 700px;

    p {
        margin: 0;
    }

    h3 {
        margin: 20px 0;
    }

    .text-field {
        max-width: 400px;
    }

    .section-title {
        margin-bottom: 50px;
    }

    .section-theme {
        /* width: 100%; */
        /* border: 1px solid pink; */
        display: flex;
    }

    .section-theme--item1 {
        width: 400px;
        margin-right: 80px;
    }

    .section-theme--item2 {
    }

    .section-theme--select {
        margin-bottom: 50px;
    }

    .section-theme--time-pickers {
        display: flex;
    }

    .section-theme--time-picker {
        /* border: 1px solid #000; */
        margin-right: 50px;
        width: 100px;
    }

    .select-wrapper {
        margin-bottom: 50px;
    }

    .theme-logo {
        width: 120px;
        height: 120px;
        background: lightgrey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .theme-logo--false {
        display: flex;
    }
    .theme-logo--false-icon {
        font-size: 40px;
        color: green;
    }

    .theme-logo--true {
        img {
            width: 60%;
            margin: 0 auto;
        }
    }

    .session-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }

    .speakers {
        display: flex;
        justify-content: flex-start;
    }

    .speakers--chips {
        display: flex;
        flex-direction: column;

        /* align-items: center; */
        /* flex-wrap: wrap; */

        margin-left: 50px;
    }
    .speakers--chip {
        margin-bottom: 15px;
    }
    .img-upload-wrapper {
        /* border: 1px solid #000; */
        width: 50%;
        margin: 0px auto;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0;
        flex-direction: column-reverse;
        @media (min-width: 768px) {
            flex-direction: row;
            padding: 0;
        }
    }

    .upload-btn {
        background: green;
        color: white;
        margin-top: 20px;
        &:hover {
            color: black;
            background: gold;
        }

        @media (min-width: 768px) {
            margin: 0;
        }
    }
    .icon-cloud {
        margin-left: 10px;
    }

    .break-checkbox {
        font-size: 20px;
    }
`

class TimetableForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sessionTitle: 'baby-foot conference',
            sessionTheme: '',
            sessionStart: '10:00',
            sessionEnd: '11:00',

            host: '',
            hostName: '',
            hostTitle: '',
            hostOrg: '',
            speakers: ['pat', 'pete', 'pando'],

            sponsors: [],
            partners: [],
            supporters: [],
            overview: '',
            index: 99,
            logo: '',
            description: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
            frontpage: false,
            loading: false,
            sponsorAdded: false,
            showForm: props.showForm,
            break: true,
        }
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        console.log('id, type, value = ', id, type, value)
        console.log('e.target = ', e.target)
        this.setState({ [id]: val }, () => {
            console.log('this.state.id = ', this.state)
        })
    }

    handleSelectChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => {
            console.log('this.state.id = ', this.state)
        })
    }

    handleSpeakersChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => {
            console.log('this.state.id = ', this.state)
        })
    }

    handleRadioChange = e => {
        const { id } = e.target
        this.setState({ ranking: id })
    }

    handleCheckboxChange = e => {
        const { checked } = e.target
        this.setState({ break: checked })
    }
    showState = () => {
        console.log('this.state = ', this.state)
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

    render() {
        return (
            <div>
                <div>
                    <HeightForNav />
                    <NavSimple loggedIn={this.props.loggedIn} />

                    <div className="text-content-title-wrapper">
                        <h2 data-aos="my-anim">Timetable Form</h2>
                        <p onClick={this.showState}>show me this.state</p>

                        <div className="text-content">
                            <Form
                                onSubmit={async e => {
                                    e.preventDefault()
                                    // this 👇 is the mutation
                                    // await createSponsor()
                                    this.resetState()
                                }}
                            >
                                <h3>Create Session</h3>

                                <div className="section-title">
                                    <TextField
                                        type="text"
                                        id="sessionTitle"
                                        label="Session Title"
                                        className="text-field"
                                        variant="outlined"
                                        value={this.state.sessionTitle}
                                        onChange={this.handleChange}
                                        required
                                        fullWidth={true}
                                    />
                                </div>

                                <div className="section-theme">
                                    <div className="section-theme--item1">
                                        <FormControl
                                            className="section-theme--select"
                                            fullWidth={true}
                                        >
                                            <InputLabel htmlFor="session-theme">
                                                Session Theme
                                            </InputLabel>

                                            <Select
                                                value={this.state.sessionTheme}
                                                onChange={
                                                    this.handleSelectChange
                                                }
                                                inputProps={{
                                                    name: 'sessionTheme',
                                                    id: 'session-theme',
                                                }}
                                            >
                                                <MenuItem value={'sourceMan'}>
                                                    Sourcing &amp; Manufacturing
                                                </MenuItem>
                                                <MenuItem value={'wasteMan'}>
                                                    Waste &amp; Resource
                                                    Management
                                                </MenuItem>
                                                <MenuItem value={'peopleCult'}>
                                                    People &amp; Culture
                                                </MenuItem>
                                                <MenuItem value={'disMarks'}>
                                                    Distribution &amp; Changing
                                                    Markets
                                                </MenuItem>
                                                <MenuItem value={'break'}>
                                                    Break
                                                </MenuItem>
                                            </Select>
                                        </FormControl>

                                        <div className="section-theme--time-pickers">
                                            <TextField
                                                id="sessionStart"
                                                label="Starts"
                                                type="time"
                                                // defaultValue="10:30"
                                                value={this.state.sessionStart}
                                                className="section-theme--time-picker"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                                onChange={this.handleChange}
                                            />

                                            <TextField
                                                id="sessionEnd"
                                                label="Ends"
                                                type="time"
                                                // defaultValue="11:00"
                                                value={this.state.sessionEnd}
                                                className="section-theme--time-picker"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="section-theme--item2">
                                        {' '}
                                        {!this.state.sessionTheme && (
                                            <div className="theme-logo  theme-logo--false">
                                                <PhotoLibrary className="theme-logo--false-icon" />
                                            </div>
                                        )}
                                        {this.state.sessionTheme && (
                                            <div className="theme-logo theme-logo--true">
                                                <img
                                                    className="theme-logo--true theme-logo"
                                                    width="200"
                                                    src={`static/icons/${this.state.sessionTheme}.svg`}
                                                    alt="Upload Preview"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="section-theme">
                                    <div>
                                        <div className="session-row"></div>
                                    </div>
                                </div>

                                {/* <label className="input-checkbox, break-checkbox">
                                    Is this a break?
                                    <Checkbox
                                        title="break"
                                        id="break"
                                        color="default"
                                        checked={this.state.break}
                                        onChange={this.handleCheckboxChange}
                                    />
                                </label> */}

                                {!this.state.sessionTheme ||
                                    (this.state.sessionTheme !== 'break' && (
                                        <div>
                                            <div className="select-wrapper">
                                                <h3>Host</h3>

                                                <FormControl className="select">
                                                    <InputLabel htmlFor="host">
                                                        Host
                                                    </InputLabel>
                                                    <Select
                                                        value={this.state.host}
                                                        onChange={
                                                            this
                                                                .handleSelectChange
                                                        }
                                                        inputProps={{
                                                            name: 'host',
                                                            id: 'host',
                                                        }}
                                                    >
                                                        {dataHosts.map(
                                                            (el, index) => (
                                                                <MenuItem
                                                                    value={
                                                                        el.name
                                                                    }
                                                                    key={index}
                                                                >
                                                                    {el.name}
                                                                </MenuItem>
                                                            )
                                                        )}
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className="speakers">
                                                <div className="select-wrapper">
                                                    <h3>Speakers</h3>
                                                    <FormControl className="select">
                                                        <InputLabel htmlFor="speakers">
                                                            Speakers
                                                        </InputLabel>
                                                        <Select
                                                            multiple
                                                            value={
                                                                this.state
                                                                    .speakers
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleSelectChange
                                                            }
                                                            inputProps={{
                                                                name:
                                                                    'speakers',
                                                                id: 'speakers',
                                                            }}
                                                        >
                                                            {dataSpeakers.map(
                                                                (el, index) => (
                                                                    <MenuItem
                                                                        value={
                                                                            el.name
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {
                                                                            el.name
                                                                        }
                                                                    </MenuItem>
                                                                )
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                </div>

                                                <div className="speakers--chips">
                                                    {this.state.speakers.map(
                                                        (el, index) => (
                                                            <Chip
                                                                label={el}
                                                                key={index}
                                                                className="speakers--chip"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div className="sponsors">
                                                <div className="select-wrapper">
                                                    <h3>Sponsors</h3>
                                                    <FormControl className="select">
                                                        <InputLabel htmlFor="sponsors">
                                                            sponsors
                                                        </InputLabel>
                                                        <Select
                                                            multiple
                                                            value={
                                                                this.state
                                                                    .sponsors
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleSelectChange
                                                            }
                                                            inputProps={{
                                                                name:
                                                                    'sponsors',
                                                                id: 'sponsors',
                                                            }}
                                                        >
                                                            {dataSponsors.map(
                                                                (el, index) => (
                                                                    <MenuItem
                                                                        value={
                                                                            el.name
                                                                        }
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {
                                                                            el.name
                                                                        }
                                                                    </MenuItem>
                                                                )
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                </div>

                                                <div className="sponsors--chips">
                                                    {this.state.sponsors.map(
                                                        (el, index) => (
                                                            <Chip
                                                                label={el}
                                                                key={index}
                                                                className="sponsors--chip"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                {/* these are taken from the partners */}
                                <div className="partners">
                                    <div className="select-wrapper">
                                        <h3>Supporters(partners)</h3>
                                        <FormControl className="select">
                                            <InputLabel htmlFor="partners">
                                                partners
                                            </InputLabel>
                                            <Select
                                                multiple
                                                value={this.state.partners}
                                                onChange={
                                                    this.handleSelectChange
                                                }
                                                inputProps={{
                                                    name: 'partners',
                                                    id: 'partners',
                                                }}
                                            >
                                                {dataPartners.map(
                                                    (el, index) => (
                                                        <MenuItem
                                                            value={el.name}
                                                            key={index}
                                                        >
                                                            {el.name}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className="sponsors--chips">
                                        {this.state.partners.map(
                                            (el, index) => (
                                                <Chip
                                                    label={el}
                                                    key={index}
                                                    className="sponsors--chip"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                <h3>Overview</h3>
                                <TextField
                                    fullWidth={false}
                                    multiline={true}
                                    rows={6}
                                    variant="outlined"
                                    label="overview"
                                    margin="normal"
                                    id="overview"
                                    value={this.state.overview}
                                    onChange={this.handleChange}
                                    required
                                    className="text-area"
                                />
                                <h3>Learnings bullet points</h3>
                                <p>
                                    *** need to be able to add additonal bullet
                                    points
                                </p>

                                <TextField
                                    type="text"
                                    id="website"
                                    label="bullet point"
                                    className="text-field"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.website}
                                    onChange={this.handleChange}
                                />

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
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimetableForm

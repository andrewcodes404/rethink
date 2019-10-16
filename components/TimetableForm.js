import React from 'react'
import PropTypes from 'prop-types'
import NavSimple from './PageHeadFooter/Nav/NavSimple'
import styled from 'styled-components'
import { Query, Mutation, withApollo } from 'react-apollo'
import {
    GET_PARTNERS,
    GET_SPONSORS,
    CREATE_SESSION,
    GET_SPONSORS_WHERE_NAME,
    GET_PARTNERS_WHERE_NAME,
} from '../lib/graphqlTags'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

// icons
import FileCopy from '@material-ui/icons/FileCopy'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'

const dataHostsAndSpeakers = [
    { name: 'terry' },
    { name: 'tim' },
    { name: 'martin' },
    { name: 'judy' },
    { name: 'chloe' },
    { name: 'bob' },
    { name: 'sam' },
    { name: 'jenny' },
    { name: 'mark' },
    { name: 'susan' },
]

const HeightForNav = styled.div`
    height: 100px;
`

const Form = styled.form`
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
        /* border: 1px solid #000; */
    }

    .select {
        width: 450px;
        /* border: 1px solid red; */
    }

    .text-area {
        width: 700px;
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
        /* display: flex; */
        /* justify-content: flex-start; */
    }

    .speakers--list {
        display: flex;
    }
    .speaker {
        margin-right: 30px;
    }

    .logos {
        display: flex;
        margin-bottom: 30px;
    }

    .logo {
        margin-right: 20px;
        width: 70px;
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
            title: 'Spondoolics',
            theme: 'wasteMan',
            start: '10:00',
            end: '11:00',
            host: 'Greg',
            speakers: [],
            overview: '',
            learnings: '',
            supportersNames: ['aaaa', 'bbbb', 'cccc'],
            supporters: [],
            supportersLogos: [],
            sponsorsNames: ['Visa', 'Costa', 'Puma'],
            sponsors: [],
        }
    }

    resetState() {
        this.setState({
            title: '',
            theme: '',
            start: '10:00',
            end: '11:00',
            host: '',
            speakers: [],
            overview: '',
            learnings: '',
            supporters: [],
            sponsors: [],
        })
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

    handleSupportersSelectChange = e => {
        const { value } = e.target
        const newest = value.slice(-1)[0]
        //setstate for names for the materila select to use
        this.setState({ supportersNames: value })

        //use names to query for ids
        const getTheResult = async () => {
            const result = await this.props.client.query({
                query: GET_PARTNERS_WHERE_NAME,
                variables: { name: newest },
            })

            console.log('result = ', result)
            return result
        }
        //wait for promises then set them in state for the mutation
        getTheResult().then(value => {
            console.log('value = ', value)
            const id = value.data.partners[0].id
            const logo = value.data.partners[0].logo
            this.setState({
                supporters: [...this.state.supporters, id],
                supportersLogos: [...this.state.supportersLogos, logo],
            })
        })
    }

    handleSponsorSelectChange = e => {
        const { value } = e.target
        const newest = value.slice(-1)[0]
        //setstate for names for the materila select to use
        this.setState({ sponsorsNames: value })

        //use names to query for ids
        const getTheResult = async () => {
            const result = await this.props.client.query({
                query: GET_SPONSORS_WHERE_NAME,
                variables: { name: newest },
            })
            return result
        }
        //wait for promises then set them in state for the mutation
        getTheResult().then(value => {
            const id = value.data.sponsors[0].id
            this.setState({ sponsors: [...this.state.sponsors, id] })
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
                            <Mutation
                                mutation={CREATE_SESSION}
                                variables={this.state}
                                refetchQueries={[{ query: GET_PARTNERS }]}
                            >
                                {createPartner => (
                                    <Form
                                        id="timetable-form"
                                        onSubmit={async e => {
                                            console.log('it submitted')

                                            e.preventDefault()
                                            await createPartner()
                                            this.resetState()
                                        }}
                                    >
                                        <h3>Create Session</h3>

                                        <div className="section-title">
                                            <TextField
                                                type="text"
                                                id="title"
                                                label="Session Title"
                                                className="text-field"
                                                variant="outlined"
                                                value={this.state.title}
                                                onChange={this.handleChange}
                                                required
                                                fullWidth={true}
                                            />
                                        </div>

                                        {/* THEME --- THEME --- THEME ---  */}
                                        {/* THEME --- THEME --- THEME ---  */}

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
                                                        value={this.state.theme}
                                                        onChange={
                                                            this
                                                                .handleSelectChange
                                                        }
                                                        inputProps={{
                                                            name: 'theme',
                                                            id: 'session-theme',
                                                        }}
                                                    >
                                                        <MenuItem
                                                            value={'sourceMan'}
                                                        >
                                                            Sourcing &amp;
                                                            Manufacturing
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={'wasteMan'}
                                                        >
                                                            Waste &amp; Resource
                                                            Management
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={'peopleCult'}
                                                        >
                                                            People &amp; Culture
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={'disMarks'}
                                                        >
                                                            Distribution &amp;
                                                            Changing Markets
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={'break'}
                                                        >
                                                            Break
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>

                                                <div className="section-theme--time-pickers">
                                                    <TextField
                                                        id="start"
                                                        label="Starts"
                                                        type="time"
                                                        // defaultValue="10:30"
                                                        value={this.state.start}
                                                        className="section-theme--time-picker"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        inputProps={{
                                                            step: 300, // 5 min
                                                        }}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />

                                                    <TextField
                                                        id="end"
                                                        label="Ends"
                                                        type="time"
                                                        // defaultValue="11:00"
                                                        value={this.state.end}
                                                        className="section-theme--time-picker"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        inputProps={{
                                                            step: 300, // 5 min
                                                        }}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="section-theme--item2">
                                                {' '}
                                                {!this.state.theme && (
                                                    <div className="theme-logo  theme-logo--false">
                                                        <PhotoLibrary className="theme-logo--false-icon" />
                                                    </div>
                                                )}
                                                {this.state.theme && (
                                                    <div className="theme-logo theme-logo--true">
                                                        <img
                                                            className="theme-logo--true theme-logo"
                                                            width="200"
                                                            src={`static/icons/${this.state.theme}.svg`}
                                                            alt="Upload Preview"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* 👇 👇  IF THEME ISNT EMPTY OR 'BREAK' 👇 👇 */}
                                        {/* 👇 👇  IF THEME ISNT EMPTY OR 'BREAK' 👇 👇 */}

                                        {!this.state.theme ||
                                            (this.state.theme !== 'break' && (
                                                <div>
                                                    <div className="select-wrapper">
                                                        <h3>Host</h3>

                                                        <FormControl className="select">
                                                            {/* <InputLabel htmlFor="host">
                                                        Host
                                                    </InputLabel> */}
                                                            <Select
                                                                value={
                                                                    this.state
                                                                        .host
                                                                }
                                                                displayEmpty
                                                                onChange={
                                                                    this
                                                                        .handleSelectChange
                                                                }
                                                                inputProps={{
                                                                    name:
                                                                        'host',
                                                                    id: 'host',
                                                                }}
                                                            >
                                                                {dataHostsAndSpeakers.map(
                                                                    (
                                                                        el,
                                                                        index
                                                                    ) => (
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

                                                    <div className="speakers">
                                                        <div className="select-wrapper">
                                                            <h3>Speakers</h3>

                                                            <FormControl className="select">
                                                                {/* <InputLabel htmlFor="speakers">
                                                            Speakers
                                                        </InputLabel> */}
                                                                <Select
                                                                    multiple
                                                                    value={
                                                                        this
                                                                            .state
                                                                            .speakers
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleSelectChange
                                                                    }
                                                                    inputProps={{
                                                                        name:
                                                                            'speakers',
                                                                        id:
                                                                            'speakers',
                                                                    }}
                                                                >
                                                                    {dataHostsAndSpeakers.map(
                                                                        (
                                                                            el,
                                                                            index
                                                                        ) => (
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

                                                        <div className="speakers--list">
                                                            {this.state.speakers.map(
                                                                (el, index) => (
                                                                    <div
                                                                        className="speaker"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <p>
                                                                            {el}
                                                                        </p>
                                                                    </div>
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
                                                        // label="overview"
                                                        id="overview"
                                                        value={
                                                            this.state.overview
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                        className="text-area"
                                                    />
                                                    <h3>
                                                        Learnings bullet points
                                                    </h3>

                                                    <TextField
                                                        fullWidth={false}
                                                        multiline={true}
                                                        rows={6}
                                                        variant="outlined"
                                                        // label="overview"
                                                        margin="normal"
                                                        id="learnings"
                                                        value={
                                                            this.state.learnings
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                        className="text-area"
                                                    />

                                                    {/* these are taken from the list of partners */}

                                                    <Query query={GET_PARTNERS}>
                                                        {({
                                                            data,
                                                            loading,
                                                        }) => {
                                                            //  stop partners begin mapped before data arrives
                                                            if (loading)
                                                                return null
                                                            const {
                                                                partners,
                                                            } = data
                                                            return (
                                                                <div className="partners">
                                                                    <div className="select-wrapper">
                                                                        <h3>
                                                                            Supporters
                                                                        </h3>
                                                                        <FormControl className="select">
                                                                            <InputLabel htmlFor="supporters">
                                                                                Add
                                                                                Supporters
                                                                            </InputLabel>
                                                                            <Select
                                                                                multiple
                                                                                value={
                                                                                    this
                                                                                        .state
                                                                                        .supportersNames
                                                                                }
                                                                                onChange={
                                                                                    this
                                                                                        .handleSupportersSelectChange
                                                                                }
                                                                                inputProps={{
                                                                                    name:
                                                                                        'supporters',
                                                                                    id:
                                                                                        'supporters',
                                                                                }}
                                                                            >
                                                                                {partners.map(
                                                                                    (
                                                                                        el,
                                                                                        index
                                                                                    ) => (
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

                                                                    <div className="partners--logos logos">
                                                                        {this.state.supportersLogos.map(
                                                                            (
                                                                                el,
                                                                                index
                                                                            ) => (
                                                                                <div
                                                                                    className="partners--logo logo"
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <img
                                                                                        src={
                                                                                            el
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )
                                                        }}
                                                    </Query>

                                                    {/* these are taken from the list of sponsors */}

                                                    <Query query={GET_SPONSORS}>
                                                        {({
                                                            data,
                                                            error,
                                                            loading,
                                                        }) => {
                                                            //  stop sponsors begin mapped before data arrives
                                                            if (loading)
                                                                return null
                                                            const {
                                                                sponsors,
                                                            } = data
                                                            return (
                                                                <div className="sponsors">
                                                                    <div className="select-wrapper">
                                                                        <h3>
                                                                            Sponsors
                                                                        </h3>
                                                                        <FormControl className="select">
                                                                            <InputLabel htmlFor="sponsors">
                                                                                Add
                                                                                Sponsor
                                                                            </InputLabel>
                                                                            <Select
                                                                                multiple
                                                                                value={
                                                                                    this
                                                                                        .state
                                                                                        .sponsorsNames
                                                                                }
                                                                                onChange={
                                                                                    this
                                                                                        .handleSponsorSelectChange
                                                                                }
                                                                                inputProps={{
                                                                                    name:
                                                                                        'sponsors',
                                                                                    id:
                                                                                        'sponsors',
                                                                                }}
                                                                            >
                                                                                {sponsors.map(
                                                                                    (
                                                                                        el,
                                                                                        index
                                                                                    ) => (
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

                                                                    <div className="sponsors--logos logos">
                                                                        {this.state.sponsorsNames.map(
                                                                            (
                                                                                el,
                                                                                index
                                                                            ) => (
                                                                                <div
                                                                                    className="sponsors--logo logo"
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <p>
                                                                                        {
                                                                                            el
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )
                                                        }}
                                                    </Query>
                                                </div>
                                            ))}

                                        {/* 👆 👆  IF THEME ISNT EMPTY OR 'BREAK'👆 👆   */}
                                        {/* 👆 👆  IF THEME ISNT EMPTY OR 'BREAK'👆 👆   */}

                                        <div className="submit-wrapper">
                                            {/* <Button
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
                                            </Button> */}

                                            <Button
                                                margin="normal"
                                                type="submit"
                                                variant="contained"
                                                color="default"
                                                size="large"
                                                className="submit-btn"
                                                form="timetable-form"
                                            >
                                                Submit
                                                <FileCopy className="icon" />
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </Mutation>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withApollo(TimetableForm)

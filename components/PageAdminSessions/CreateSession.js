import React from 'react'
import PropTypes from 'prop-types'
import { Query, Mutation, withApollo } from 'react-apollo'
import {
    GET_HOSTSPEAKERS,
    GET_HOSTSPEAKER_WHERE_NAME,
    GET_PARTNERS,
    GET_SPONSORS,
    GET_SPONSORS_WHERE_NAME,
    GET_PARTNERS_WHERE_NAME,
    CREATE_SESSION,
} from '../../lib/graphqlTags'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Chip from '@material-ui/core/Chip'
// import FormHelperText from '@material-ui/core/FormHelperText '
// icons
import FileCopy from '@material-ui/icons/FileCopy'

import { Form, ModalSuccess } from './sessionsStyle'

class CreateSession extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSuccess: false,
            fadeSuccess: false,
            title: 'dud',
            theme: 'wasteMan',
            start: '10:00',
            end: '11:00',
            host: '',
            hostName: '',
            speakersNames: [],
            speakers: [],
            overview: '',
            learnings: '',
            supportersNames: [],
            supporters: [],
            supportersLogos: [],
            sponsorsNames: [],
            sponsors: [],
        }
    }

    resetState() {
        this.setState({
            showSuccess: false,
            fadeSuccess: false,
            title: '',
            theme: '',
            start: '10:00',
            end: '11:00',
            host: '',
            hostName: '',
            speakersNames: [],
            speakers: [],
            overview: '',
            learnings: '',
            supportersNames: [],
            supporters: [],
            supportersLogos: [],
            sponsorsNames: [],
            sponsors: [],
        })
    }

    showSuccess = () => {
        this.setState({ ...this.state, showSuccess: true }, () => {
            setTimeout(() => {
                this.setState({
                    // showSuccess: false,
                    fadeSuccess: true,
                })
            }, 2000),
                setTimeout(() => {
                    this.resetState()
                }, 3000)
        })
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [id]: val })
    }

    handleSelectChange = e => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    useNametoGetId = async (query, name) => {
        const result = await this.props.client.query({
            query: query,
            variables: { name: name },
        })
        return result
    }

    handleSelectHostChange = e => {
        const { value } = e.target
        this.setState({ hostName: value })
        this.useNametoGetId(GET_HOSTSPEAKER_WHERE_NAME, value).then(value => {
            const id = value.data.hostSpeakers[0].id
            this.setState(
                {
                    host: id,
                },
                () => {
                    console.log('this.state.host = ', this.state.host)
                }
            )
        })
    }

    handleSelectSpeakersChange = e => {
        const { value } = e.target
        this.setState({ speakersNames: value }, () => {
            const ids = this.state.speakersNames.map(el => el.id)
            this.setState({
                speakers: ids,
            })
        })
    }

    handleSupportersSelectChange = e => {
        const { value } = e.target
        this.setState({ supportersNames: value }, () => {
            const ids = this.state.supportersNames.map(el => el.id)
            this.setState({
                supporters: ids,
            })
        })
    }

    handleSponsorSelectChange = e => {
        const { value } = e.target
        this.setState({ sponsorsNames: value }, () => {
            const ids = this.state.sponsorsNames.map(el => el.id)
            this.setState({
                sponsors: ids,
            })
        })
    }

    getSponsorsIds = () => {
        this.state.sponsorsNames.map(el => {
            this.useNametoGetId(GET_SPONSORS_WHERE_NAME, el).then(value => {
                const id = value.data.sponsors[0].id
                this.setState(
                    {
                        sponsors: [...this.state.sponsors, id],
                    },
                    () => {
                        console.log('this.state.sponsors = ', this.state.sponsors)
                    }
                )
            })
        })
    }

    render() {
        return (
            <>
                {this.state.showSuccess && (
                    <ModalSuccess>
                        <div className={`modal-wrapper ${this.state.fadeSuccess && 'fade-out'} `}>
                            <div className="modal">
                                <p>Yes dude 🧀 session succesfully created 🎈</p>
                            </div>
                        </div>
                    </ModalSuccess>
                )}

                <Mutation mutation={CREATE_SESSION} variables={this.state} refetchQueries={[{ query: GET_PARTNERS }]}>
                    {createPartner => (
                        <Form
                            id="timetable-form"
                            onSubmit={async e => {
                                e.preventDefault()

                                // this.getSpeakerIds()
                                // this.getSupportersIds()
                                // this.getSponsorsIds()
                                await createPartner()

                                this.showSuccess()
                            }}
                        >
                            <h3 onClick={this.getSpeakerIds}>Speakers Fix Ids</h3>
                            <h3 onClick={this.getSupportersIds}> SupportersFix Ids</h3>
                            <h3 onClick={this.getSponsorsIds}> SponsorsFix Ids</h3>

                            {/* THEME --- THEME --- THEME ---  */}
                            {/* THEME --- THEME --- THEME ---  */}

                            <div className="section-theme">
                                <div className="section-title">
                                    <TextField
                                        type="text"
                                        id="title"
                                        label="TITLE"
                                        className="text-field"
                                        variant="outlined"
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                        required
                                        fullWidth={true}
                                    />
                                </div>

                                <FormControl className="section-theme--select" fullWidth={true}>
                                    <InputLabel htmlFor="session-theme">THEME</InputLabel>

                                    <Select
                                        className="select"
                                        value={this.state.theme}
                                        onChange={this.handleSelectChange}
                                        required
                                        inputProps={{
                                            name: 'theme',
                                            id: 'session-theme',
                                        }}
                                    >
                                        <MenuItem value={'sourceMan'}>Sourcing &amp; Manufacturing</MenuItem>
                                        <MenuItem value={'wasteMan'}>Waste &amp; Resource Management</MenuItem>
                                        <MenuItem value={'peopleCult'}>People &amp; Culture</MenuItem>
                                        <MenuItem value={'disMarks'}>Distribution &amp; Changing Markets</MenuItem>
                                        <MenuItem value={'break'}>Break</MenuItem>
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
                                        onChange={this.handleChange}
                                        required
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
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* 👇 👇  IF THEME ISNT EMPTY OR 'BREAK' 👇 👇 */}
                            {/* 👇 👇  IF THEME ISNT EMPTY OR 'BREAK' 👇 👇 */}

                            {!this.state.theme ||
                                (this.state.theme !== 'break' && (
                                    <div>
                                        <FormControl className="select">
                                            <InputLabel class="input-label" htmlFor="host">
                                                HOST
                                            </InputLabel>

                                            <Query query={GET_HOSTSPEAKERS}>
                                                {({ data, loading }) => {
                                                    //  stop partners begin mapped before data arrives
                                                    if (loading) return null
                                                    const { hostSpeakers } = data

                                                    return (
                                                        <Select
                                                            value={this.state.hostName}
                                                            onChange={this.handleSelectHostChange}
                                                            inputProps={{
                                                                name: 'host',
                                                                id: 'host',
                                                            }}
                                                        >
                                                            {hostSpeakers.map((el, index) => (
                                                                <MenuItem value={el.name} key={index}>
                                                                    {el.name}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    )
                                                }}
                                            </Query>
                                        </FormControl>
                                        <Query query={GET_HOSTSPEAKERS}>
                                            {({ data, loading }) => {
                                                //  stop partners begin mapped before data arrives
                                                if (loading) return null
                                                const { hostSpeakers } = data

                                                return (
                                                    <FormControl className="select">
                                                        <InputLabel class="input-label" htmlFor="speakers">
                                                            SPEAKERS
                                                        </InputLabel>

                                                        <Select
                                                            multiple
                                                            // variant="outlined"
                                                            value={this.state.speakersNames}
                                                            onChange={this.handleSelectSpeakersChange}
                                                            inputProps={{
                                                                name: 'speakers',
                                                                id: 'speakers',
                                                            }}
                                                            renderValue={selected => (
                                                                <div>
                                                                    {selected.map(value => (
                                                                        <Chip
                                                                            key={value.name}
                                                                            label={value.name}
                                                                            // className={classes.chip}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        >
                                                            {hostSpeakers.map((el, index) => (
                                                                <MenuItem value={el} key={index}>
                                                                    <ListItemText primary={el.name} />
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                        {/* <FormHelperText>Select one or more choices</FormHelperText> */}
                                                    </FormControl>
                                                )
                                            }}
                                        </Query>

                                        <TextField
                                            fullWidth={false}
                                            multiline={true}
                                            rows={6}
                                            variant="outlined"
                                            label="OVERVIEW"
                                            id="overview"
                                            value={this.state.overview}
                                            onChange={this.handleChange}
                                            className="text-area"
                                        />

                                        <TextField
                                            fullWidth={false}
                                            multiline={true}
                                            rows={6}
                                            variant="outlined"
                                            label="LEARNINGS"
                                            margin="normal"
                                            id="learnings"
                                            value={this.state.learnings}
                                            onChange={this.handleChange}
                                            className="text-area"
                                        />

                                        {/* these are taken from the list of partners */}

                                        <Query query={GET_PARTNERS}>
                                            {({ data, loading }) => {
                                                //  stop partners begin mapped before data arrives
                                                if (loading) return null
                                                const { partners } = data
                                                return (
                                                    <div className="partners">
                                                        <div className="select-wrapper">
                                                            <FormControl className="select">
                                                                <InputLabel htmlFor="supporters">SUPPORTERS</InputLabel>
                                                                <Select
                                                                    multiple
                                                                    value={this.state.supportersNames}
                                                                    onChange={this.handleSupportersSelectChange}
                                                                    inputProps={{
                                                                        name: 'supporters',
                                                                        id: 'supporters',
                                                                    }}
                                                                >
                                                                    {partners.map((el, index) => (
                                                                        <MenuItem value={el} key={index}>
                                                                            <ListItemText primary={el.name} />
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                )
                                            }}
                                        </Query>

                                        {/* these are taken from the list of sponsors */}

                                        <Query query={GET_SPONSORS}>
                                            {({ data, loading }) => {
                                                //  stop sponsors begin mapped before data arrives
                                                if (loading) return null
                                                const { sponsors } = data
                                                return (
                                                    <div className="sponsors">
                                                        <div className="select-wrapper">
                                                            <FormControl className="select">
                                                                <InputLabel htmlFor="sponsors">SPONSORS</InputLabel>
                                                                <Select
                                                                    multiple
                                                                    value={this.state.sponsorsNames}
                                                                    onChange={this.handleSponsorSelectChange}
                                                                    inputProps={{
                                                                        name: 'sponsors',
                                                                        id: 'sponsors',
                                                                    }}
                                                                >
                                                                    {sponsors.map((el, index) => (
                                                                        <MenuItem value={el} key={index}>
                                                                            <ListItemText primary={el.name} />
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
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
            </>
        )
    }
}
CreateSession.propTypes = {
    client: PropTypes.object,
}

export default withApollo(CreateSession)

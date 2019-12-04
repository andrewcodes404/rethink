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
    GET_SESSIONS_WHERE_DAY_ORDER_TIME,
    CREATE_SESSION,
} from '../../lib/graphqlTags'

import { Editor } from '@tinymce/tinymce-react'

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
import Radio from '@material-ui/core/Radio'
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
            title: '',
            theme: '',
            start: '10:00',
            end: '11:00',
            day: 'day1',
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
            day: '',
            host: '',
            hostName: '',
            speakersNames: [],
            speakers: [],
            overview: '',
            learnings: '',
            supportersNames: [],
            supporters: [],
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
                    // this.forceUpdate()
                }, 3000)
        })
    }

    handleChange = e => {
        const { id, type, value } = e.target
        const val = type === 'number' ? parseFloat(value) : value
        this.setState({ [id]: val })
    }

    handleEditorChange = e => {
        console.log('Content was updated:', e.target.getContent())

        const id = e.target.id
        const value = e.target.getContent()

        this.setState({ [id]: value })
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
                this.setState({
                    sponsors: [...this.state.sponsors, id],
                })
            })
        })
    }

    render() {
        console.log('this.state = ', this.state)
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

                <h2>Create a session</h2>

                <Mutation
                    mutation={CREATE_SESSION}
                    variables={this.state}
                    refetchQueries={[{ query: GET_PARTNERS }, { query: GET_SESSIONS_WHERE_DAY_ORDER_TIME }]}
                >
                    {createSession => (
                        <Form
                            id="timetable-form"
                            onSubmit={async e => {
                                console.log('submitted')
                                e.preventDefault()
                                await createSession()
                                this.showSuccess()
                            }}
                        >
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

                                    <div className="radios">
                                        <div className="radio">
                                            <p>Day 1 </p>{' '}
                                            <Radio
                                                id="day"
                                                checked={this.state.day === 'day1'}
                                                onChange={this.handleChange}
                                                value="day1"
                                                name="radio-button-demo"
                                            />
                                        </div>
                                        <div className="radio">
                                            <p>Day 2</p>{' '}
                                            <Radio
                                                id="day"
                                                checked={this.state.day === 'day2'}
                                                onChange={this.handleChange}
                                                value="day2"
                                                name="radio-button-demo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 👇 👇  IF THEME ISNT EMPTY OR 'BREAK' 👇 👇 */}
                            {/* 👇 👇  IF THEME ISNT EMPTY OR 'BREAK' 👇 👇 */}

                            {!this.state.theme ||
                                (this.state.theme !== 'break' && (
                                    <div>
                                        <FormControl className="select">
                                            <InputLabel className="input-label" htmlFor="host">
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
                                                        <InputLabel className="input-label" htmlFor="speakers">
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
                                                                            className="chip"
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

                                        <h3>Overview</h3>
                                        <Editor
                                            id="overview"
                                            apiKey={process.env.TINY_MCE_API_KEY}
                                            initialValue=""
                                            init={{
                                                height: 200,
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
                                        <h3>Learnings</h3>
                                        <Editor
                                            id="learnings"
                                            apiKey={process.env.TINY_MCE_API_KEY}
                                            initialValue=""
                                            init={{
                                                height: 200,
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

                                        {/* these are taken from the list of partners */}

                                        <Query query={GET_PARTNERS}>
                                            {({ data, loading }) => {
                                                //  stop partners begin mapped before data arrives
                                                if (loading) return null
                                                const { partners } = data
                                                return (
                                                    <FormControl className="select">
                                                        <InputLabel className="input-label" htmlFor="supporters">
                                                            SUPPORTERS
                                                        </InputLabel>

                                                        <Select
                                                            multiple
                                                            // variant="outlined"
                                                            value={this.state.supportersNames}
                                                            onChange={this.handleSupportersSelectChange}
                                                            inputProps={{
                                                                name: 'supporters',
                                                                id: 'supporters',
                                                            }}
                                                            renderValue={selected => (
                                                                <div>
                                                                    {selected.map(value => (
                                                                        <Chip
                                                                            key={value.name}
                                                                            label={value.name}
                                                                            className="chip"
                                                                        />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        >
                                                            {partners.map((el, index) => (
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

                                        {/* these are taken from the list of sponsors */}

                                        <Query query={GET_SPONSORS}>
                                            {({ data, loading }) => {
                                                //  stop sponsors begin mapped before data arrives
                                                if (loading) return null
                                                const { sponsors } = data
                                                return (
                                                    <FormControl className="select">
                                                        <InputLabel className="input-label" htmlFor="sponsors">
                                                            SPONSORS
                                                        </InputLabel>

                                                        <Select
                                                            multiple
                                                            // variant="outlined"
                                                            value={this.state.sponsorsNames}
                                                            onChange={this.handleSponsorSelectChange}
                                                            inputProps={{
                                                                name: 'sponsors',
                                                                id: 'sponsors',
                                                            }}
                                                            renderValue={selected => (
                                                                <div>
                                                                    {selected.map(value => (
                                                                        <Chip
                                                                            key={value.name}
                                                                            label={value.name}
                                                                            className="chip"
                                                                        />
                                                                    ))}
                                                                </div>
                                                            )}
                                                        >
                                                            {sponsors.map((el, index) => (
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

import React from 'react'
import PropTypes from 'prop-types'

import { Query, Mutation, withApollo } from 'react-apollo'
import {
    GET_HOSTSPEAKERS,
    GET_PARTNERS,
    GET_SPONSORS,
    UPDATE_SESSION,
    GET_SESSIONS_WHERE_ID,
} from '../../lib/graphqlTags'
import Link from 'next/link'

import { Editor } from '@tinymce/tinymce-react'

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'

import Chip from '@material-ui/core/Chip'
import Radio from '@material-ui/core/Radio'
// import FormHelperText from '@material-ui/core/FormHelperText '
// icons
import FileCopy from '@material-ui/icons/FileCopy'

import { Form, ModalSuccess } from '../PageAdminSessions/sessionsStyle'

class UpdateSession extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSuccess: false,

            id: props.session.id,
            title: props.session.title,
            theme: props.session.theme,
            start: props.session.start,
            end: props.session.end,
            day: props.session.day,
            host: '',
            hostId: '',
            speakers: [],
            speakersId: [],

            overview: props.session.overview,
            learnings: props.session.learnings,

            supporters: [],
            supportersId: [],
            sponsors: [],
            sponsorsId: [],
        }
    }

    componentDidMount = () => {
        this.props.client
            .query({
                query: GET_HOSTSPEAKERS,
            })
            .then(result => {
                const hostSpeakers = result.data.hostSpeakers

                // HOST --- HOST --- HOST --- HOST ---
                if (this.props.session.host) {
                    const host = hostSpeakers.find(x => x.id === this.props.session.host)

                    this.setState({
                        host: host,
                        hostId: host.id,
                    })
                }

                // SPEAKERS --- SPEAKERS --- SPEAKERS --- SPEAKERS ---

                if (this.props.session.speakers) {
                    const speakersFull = this.props.session.speakers.map(el => {
                        return hostSpeakers.find(x => x.id === el)
                    })

                    speakersFull.map(el => {
                        this.state.speakers.push(el)
                        this.state.speakersId.push(el.id)
                    })
                }

                this.forceUpdate()
            })

        this.props.client
            .query({
                query: GET_PARTNERS,
            })
            .then(result => {
                const supporters = result.data.partners

                if (this.props.session.supporters) {
                    const supportersFull = this.props.session.supporters.map(el => {
                        return supporters.find(x => x.id === el)
                    })

                    supportersFull.map(el => {
                        this.state.supporters.push(el)
                        this.state.supportersId.push(el.id)
                    })
                }

                this.forceUpdate()
            })

        this.props.client
            .query({
                query: GET_SPONSORS,
            })
            .then(result => {
                const sponsors = result.data.sponsors

                if (this.props.session.sponsors) {
                    const sponsorsFull = this.props.session.sponsors.map(el => {
                        return sponsors.find(x => x.id === el)
                    })

                    sponsorsFull.map(el => {
                        this.state.sponsors.push(el)
                        this.state.sponsorsId.push(el.id)
                    })
                }

                this.forceUpdate()
            })
    }

    showSuccess = () => {
        this.setState({ ...this.state, showSuccess: true })
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

    handleEditorChange = e => {
        const id = e.target.id
        const value = e.target.getContent()

        this.setState({ [id]: value })
    }

    handleSelectHostChange = e => {
        const { value } = e.target
        this.setState({ host: value, hostId: value.id })
    }

    handleSelectSpeakersChange = e => {
        const { value } = e.target

        let idArray = []
        value.map(el => {
            idArray.push(el.id)
        })

        this.setState({
            speakers: value,
            speakersId: idArray,
        })
    }

    handleSupportersSelectChange = e => {
        const { value } = e.target

        let idArray = []
        value.map(el => {
            idArray.push(el.id)
        })

        this.setState({
            supporters: value,
            supportersId: idArray,
        })
    }

    handleSponsorSelectChange = e => {
        const { value } = e.target

        let idArray = []
        value.map(el => {
            idArray.push(el.id)
        })
        this.setState({
            sponsors: value,
            sponsorsId: idArray,
        })
    }

    render() {
        return (
            <>
                {this.state.showSuccess && (
                    <ModalSuccess>
                        <div className={`modal-wrapper ${this.state.fadeSuccess && 'fade-out'} `}>
                            <div className="modal">
                                <p>Session succesfully updated 🏖️</p>
                                <Link href="/admin-sessions">
                                    <a>
                                        <p style={{ textDecoration: 'underline', textAlign: 'center' }}>
                                            Back to Session Admin
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </ModalSuccess>
                )}

                <Mutation
                    mutation={UPDATE_SESSION}
                    variables={{
                        id: this.state.id,
                        title: this.state.title,
                        theme: this.state.theme,
                        start: this.state.start,
                        end: this.state.end,
                        day: this.state.day,
                        host: this.state.hostId,
                        speakers: this.state.speakersId,
                        overview: this.state.overview,
                        learnings: this.state.learnings,
                        supporters: this.state.supportersId,
                        sponsors: this.state.sponsorsId,
                    }}
                    refetchQueries={[{ query: GET_SESSIONS_WHERE_ID, variables: { id: this.state.id } }]}
                >
                    {UpdateSession => (
                        <Form
                            id="updateSession"
                            onSubmit={async e => {
                                e.preventDefault()
                                await UpdateSession()
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
                                        required
                                        inputProps={{
                                            name: 'theme',
                                            id: 'session-theme',
                                        }}
                                    >
                                        <MenuItem value={'intro'}>Intro</MenuItem>
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
                                        value={this.state.start}
                                        className="section-theme--time-picker"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300,
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

                            {/* 👇 👇  IF THEME ISNT EMPTY OR  NOT 'BREAK' 👇 👇 */}
                            {/* 👇 👇  IF THEME ISNT EMPTY OR  NOT 'BREAK' 👇 👇 */}

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

                                                    // find current host in araay of all hostSpeakers and use as intial value
                                                    // const host = hostSpeakers.find(x => x.id === this.state.host)

                                                    return (
                                                        <Select
                                                            value={this.state.host}
                                                            onChange={this.handleSelectHostChange}
                                                            renderValue={value => {
                                                                return <p>{value.name}</p>
                                                            }}
                                                        >
                                                            {hostSpeakers.map((el, index) => (
                                                                <MenuItem value={el} key={index}>
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
                                                            value={this.state.speakers}
                                                            onChange={this.handleSelectSpeakersChange}
                                                            renderValue={selected => {
                                                                return (
                                                                    <div key={selected}>
                                                                        {selected.map(value => {
                                                                            return (
                                                                                <Chip
                                                                                    key={value.name}
                                                                                    label={value.name}
                                                                                    className="chip"
                                                                                />
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )
                                                            }}
                                                        >
                                                            {hostSpeakers.map((el, index) => (
                                                                <MenuItem value={el} key={index}>
                                                                    <ListItemText primary={el.name} />
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                )
                                            }}
                                        </Query>

                                        <h3>Overview</h3>
                                        <Editor
                                            id="overview"
                                            apiKey={process.env.TINY_MCE_API_KEY}
                                            initialValue={this.state.overview}
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

                                        <h3>Learnings</h3>
                                        <Editor
                                            id="learnings"
                                            apiKey={process.env.TINY_MCE_API_KEY}
                                            initialValue={this.state.learnings}
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
                                                            value={this.state.supporters}
                                                            onChange={this.handleSupportersSelectChange}
                                                            renderValue={selected => {
                                                                return (
                                                                    <div key={selected}>
                                                                        {selected.map(value => {
                                                                            return (
                                                                                <Chip
                                                                                    key={value.name}
                                                                                    label={value.name}
                                                                                    className="chip"
                                                                                />
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )
                                                            }}
                                                        >
                                                            {partners.map((el, index) => (
                                                                <MenuItem value={el} key={index}>
                                                                    <ListItemText primary={el.name} />
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                )
                                            }}
                                        </Query>

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
                                                            value={this.state.sponsors}
                                                            onChange={this.handleSponsorSelectChange}
                                                            renderValue={selected => {
                                                                return (
                                                                    <div key={selected}>
                                                                        {selected.map(value => {
                                                                            return (
                                                                                <Chip
                                                                                    key={value.name}
                                                                                    label={value.name}
                                                                                    className="chip"
                                                                                />
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )
                                                            }}
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

                            {/* 👆 👆  IF THEME ISNT EMPTY OR  NOT 'BREAK'👆 👆   */}
                            {/* 👆 👆  IF THEME ISNT EMPTY OR  NOT 'BREAK'👆 👆   */}

                            <div className="submit-wrapper">
                                <Button
                                    margin="normal"
                                    type="submit"
                                    variant="contained"
                                    color="default"
                                    size="large"
                                    className="submit-btn"
                                    form="updateSession"
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
UpdateSession.propTypes = {
    client: PropTypes.object,
    session: PropTypes.object,
}

export default withApollo(UpdateSession)

import React from 'react'
import CreateHostSpeakForm from './CreateHostSpeakForm'

// material ui
import Button from '@material-ui/core/Button'

// icons
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import styled from 'styled-components'

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    h1 {
        margin-bottom: 10px;
        text-align: center;
    }

    .arrow {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .icon {
        margin-left: 20px;
    }
`

class CreateHostSpeak extends React.Component {
    constructor() {
        super()
        this.state = {
            showForm: false,
            // showForm: true,
            triggerChange: false,
        }
    }

    showForm = () => {
        this.setState({
            triggerChange: !this.state.triggerChange,
            showForm: true,
        })
    }
    render() {
        return (
            <Styled>
                <h1 style={{ color: 'black' }}>Create a NEW Host/Speaker</h1>
                <ArrowDownward className="arrow" />
                <Button
                    variant="outlined"
                    size="large"
                    className="btn"
                    onClick={() => {
                        this.showForm()
                    }}
                >
                    NEW
                    <AssignmentInd className="icon" />
                </Button>

                <CreateHostSpeakForm key={this.state.triggerChange} showForm={this.state.showForm} />
            </Styled>
        )
    }
}

export default CreateHostSpeak

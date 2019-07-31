import React from 'react'
import CreateAdvComForm from './CreateAdvComForm'

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
    }

    .arrow {
        font-size: 50px;
        margin-bottom: 10px;
    }

    .icon {
        margin-left: 20px;
    }
`
class CreateAdvCom extends React.Component {
    constructor() {
        super()
        this.state = {
            showForm: false,
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
                <h1 style={{ color: 'black' }}>
                    Create a NEW Advisory Committee Member
                </h1>
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

                <CreateAdvComForm
                    key={this.state.triggerChange}
                    // name={this.state.name}
                    // id={this.state.id}
                    showForm={this.state.showForm}
                    // showDeleteModal={this.state.showDeleteModal}
                />
            </Styled>
        )
    }
}

export default CreateAdvCom

import React from 'react'
import NavAdmin from '../components/PageHeadFooter/Nav/NavAdmin'
import PageAdvCom from '../components/PageAdvCom'
import Router from 'next/router'
class AdvCom extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            Router.push('/error', '/')
        }
    }

    render() {
        return (
            <div>
                {!this.props.loggedIn ? (
                    <div>
                        <p>re-routing from advCom.js</p>
                    </div>
                ) : (
                    <div>
                        <NavAdmin
                            userName={this.props.user.name}
                            loggedIn={this.props.loggedIn}
                        />
                        <PageAdvCom />
                    </div>
                )}
            </div>
        )
    }
}

export default AdvCom

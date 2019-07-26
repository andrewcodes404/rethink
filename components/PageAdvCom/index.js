import React from 'react'
import CreateAdvCom from './CreateAdvCom'
import UpdateAdvCom from './UpdateAdvCom'
class PageAdvCom extends React.Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <CreateAdvCom />
                    <UpdateAdvCom />
                </div>
            </div>
        )
    }
}

export default PageAdvCom

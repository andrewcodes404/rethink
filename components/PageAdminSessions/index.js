import React from 'react'
import CreateSession from './CreateSession'

class PageAdminSessions extends React.Component {
    render() {
        return (
            <div className="text-content-title-wrapper">
                <h2 data-aos="my-anim">Sessions</h2>

                <div className="text-content">
                    <CreateSession />
                </div>
            </div>
        )
    }
}

export default PageAdminSessions

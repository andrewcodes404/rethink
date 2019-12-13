import React from 'react'
import CreateSession from './CreateSession'
import UpdateSessionPicker from './UpdateSessionPicker'
import Link from 'next/link'
class PageAdminSessions extends React.Component {
    render() {
        return (
            <div className="text-content-title-wrapper">
                <h2 data-aos="my-anim">Sessions</h2>

                <div className="text-content">
                    <CreateSession />
                </div>
                <div className="text-content">
                    <div className="text-content">
                        <UpdateSessionPicker />
                    </div>
                </div>
            </div>
        )
    }
}

export default PageAdminSessions

import React from 'react'

import Link from 'next/link'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

class PageAdmin extends React.Component {
    // componentDidMount() {
    //     AOS.init({
    //         duration: 600,
    //     })
    // }

    render() {
        return (
            <div>
                <div className="text-content-title-wrapper" id="overview">
                    <Link href="/admin-advCom">
                        <a>
                            <h2 data-aos="my-anim"> AdvCom +</h2>
                        </a>
                    </Link>

                    <Link href="/admin-sponsors">
                        <a>
                            <h2 data-aos="my-anim"> Sponsors +</h2>
                        </a>
                    </Link>

                    <Link href="/admin-partners">
                        <a>
                            <h2 data-aos="my-anim"> Partners +</h2>
                        </a>
                    </Link>

                    <div
                        className="text-content"
                        data-aos="new-animation"
                    ></div>
                </div>
            </div>
        )
    }
}

export default PageAdmin

import React from 'react'

import ProfileBar from '../../ProfileBar'
// import Link from 'next/link'

const profileDataSponsor = [
    {
        title: 'Sponsors',
        bkgImg: 'sponsor',
        icon: 'speaker',
        list: [
            'Consultancy Services',
            'Efficient Energy & Utilities',
            'Facilities Management',
            'Government Agencies',
            'GreenTech Applications',
            'IT & Back Office Solutions',
            'Recycling & Waste Management Technology',
            'Sourcing & Procurement Solutions',
            'Supply Chain Management & Logistics',
            'Sustainable Products; Suppliers & Distributors',
        ],
    },
]

const Sponsors = () => (
    <div id="sponsors">
        <div className="text-content-title-wrapper">
            <div className="text-title">
                <h2 data-aos="my-anim">Sponsors</h2>
                <div className="text-content">
                    <h3>
                        ReThink is an event exclusively for sustainability professionals who will attend with their
                        colleagues from Finance, People, Operations and Procurement to achieve wider understanding and
                        deliver significant and purposeful change back into their organisation.
                    </h3>

                    <p>
                        Showcasing at ReThink will put your innovations, services or solutions in front of procurement
                        teams, business owners and those responsible for meeting sustainability goals and driving
                        efficiencies across their organisation or across multi-site facilities.
                    </p>

                    <p>
                        Use the power of this live event platform to interact with customers and stakeholders from
                        across the ecosystem; launch new solutions, host workshops, build partnerships and generate
                        significant brand awareness at the highest level.
                    </p>

                    <p>
                        Directly influence sustainability leaders, C-Suite decision makers and government departments
                        who will attend to source cutting edge technology, sustainable supply chain solutions and
                        innovative products that reflect the demands of their customers.
                    </p>
                    <div className="text-center" />
                </div>
                <h3 className="bold">
                    The Innovation Showcase is open for suppliers and service providers, including:
                </h3>
                <ProfileBar profileData={profileDataSponsor} profileMessage="sponsor" />
                <br />
                <br />
                {/* <h3>
                    To see all sponsors{' '}
                    <Link href="/the_sponsors">
                        <span
                            className="link-green"
                            style={{ textDecoration: 'underline' }}
                        >
                            <a href="">click here</a>
                        </span>
                    </Link>
                </h3> */}
            </div>
        </div>
    </div>
)

export default Sponsors

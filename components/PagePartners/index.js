import React from 'react'
import NavSimple from '../PageHeadFooter/Nav/NavSimple'

import styled from 'styled-components'

const HeightForNav = styled.div`
    height: 100px;
`

class Index extends React.Component {
    render() {
        return (
            <div>
                <HeightForNav />
                <NavSimple />
                <div className="text-content-title-wrapper">
                    <div className="text-content">
                        <h2 data-aos="my-anim">Partners</h2>
                        <h3>
                            Probably a bit of text here, Vivamus suscipit tortor
                            eget felis porttitor volutpat. Donec rutrum congue
                            leo eget malesuada. Proin eget tortor risus.
                            Curabitur aliquet quam id dui posuere blandit.
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index

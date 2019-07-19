import React from 'react'
import styled from 'styled-components'

const IconCont = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const Icon = styled.div`
    width: 150px;
`

class PartnersCarousel extends React.Component {
    brands = ['6.png', '7.png', '8.png', '9.png', '10.png']
    render() {
        return (
            <IconCont>
                {this.brands.map((el, i) => (
                    <Icon key={i}>
                        <img src={`/static/brands/${el}`} alt="" srcSet="" />
                    </Icon>
                ))}
            </IconCont>
        )
    }
}

export default PartnersCarousel

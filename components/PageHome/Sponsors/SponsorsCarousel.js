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

class SponsorsCarousel extends React.Component {
    brands = ['1.png', '2.png', '3.png', '4.png', '5.png']
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

export default SponsorsCarousel

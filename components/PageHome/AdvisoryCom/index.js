import React from 'react'
// import PropTypes from 'prop-types'

import { Query } from 'react-apollo'
import { GET_ADV_COMS } from '../../../lib/graphqlTags'

import styled from 'styled-components'
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'

const CarouselWrapper = styled.div`
    position: relative;
    margin: 0 auto;

    @media (min-width: 767px) {
        max-width: unset;
    }

    @media (min-width: 1024px) {
    }
    .alice-carousel {
        max-width: 850px;
        margin: 0 auto;
    }

    .button-wrapper {
        margin: 0 auto;
        position: absolute;
        /* border: 1px solid green; */
        top: 25%;
        left: -40px;
        right: -40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 767px) {
            top: 40%;
        }

        .next-btn {
            line-height: 1;
            display: inline-block;
            border: none;
            /* padding: 5px 15px; */
            margin: 0 10px;
            /* background: blue; */
            color: lightgrey;
            font-size: 30px;
            cursor: pointer;
            text-align: center;
            transition: 0.4s;
            &:hover {
                color: green;
            }

            @media (min-width: 1024px) {
                font-size: 60px;
            }
        }
    }
`

const CarouselItem = styled.div`
    width: 300px;
    margin: 20px auto;
    @media (min-width: 1024px) {
        width: unset;
        padding: 7px;
    }

    .headshot {
        width: 200px;
        max-width: 200px;
        height: 200px;
        margin: 0 auto 20px;
        overflow: hidden;
        @media (min-width: 1024px) {
            width: unset;
        }

        img {
            object-fit: cover;
            height: 100%;
        }
    }
    .text {
        /* display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start; */
        /* background: pink; */
        color: black;
        width: 200px;
        margin: 0 auto;
        p {
            margin: 0 0 5px 0;
            color: black;
            padding: 0;
            line-height: 1;
        }
        h4 {
            margin: 0 0 5px 0;
            color: black;
        }
    }
`

class AdvisoryCom extends React.Component {
    responsive = {
        0: { items: 1 },
        500: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 },
    }

    state = {
        currentIndex: 0,
        // responsive: {  1024: { items: 3 } },
        // galleryItems: this.galleryItems(),
    }

    slideTo = i => this.setState({ currentIndex: i })

    onSlideChanged = e => this.setState({ currentIndex: e.item })

    slideNext = () =>
        this.setState({ currentIndex: this.state.currentIndex + 1 })

    slidePrev = () =>
        this.setState({ currentIndex: this.state.currentIndex - 1 })

    render() {
        // const handleOnDragStart = e => e.preventDefault()
        return (
            <div className="text-content-title-wrapper" id="partners">
                <h2 data-aos="my-anim">ReThinkTank</h2>

                <div className="text-content">
                    <h3>
                        ReThink is supported by a group of cross-sector
                        sustainability leaders who form the advisory panel and
                        provide key insight into how ReThink can best address
                        the needs of the Hong Kong ecosystem.
                    </h3>

                    <p>
                        Meeting as a group and individually, the ReThink 2020
                        Committee members have advised on current and future
                        trends, conference topics, potential speakers and
                        cutting-edge technology/suppliers for the Innovation
                        Showcase.
                    </p>
                </div>

                {/* <Query query={GET_ADV_COMS}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        if (!data) return <p>No Data</p>

                        return (
                            <div>
                                <CarouselWrapper>
                                    <AliceCarousel
                                        // onDragStart={handleOnDragStart}
                                        responsive={this.responsive}
                                        mouseDragEnabled
                                        autoPlayInterval={2500}
                                        // autoPlayDirection="rtl"
                                        autoPlay={true}
                                        fadeOutAnimation={true}
                                        // mouseDragEnabled={true}
                                        dotsDisabled={true}
                                        buttonsDisabled={true}
                                        slideToIndex={this.state.currentIndex}
                                        onSlideChanged={this.onSlideChanged}
                                    >
                                        {data.advComs.map((el, i) => {
                                            return (
                                                <CarouselItem key={i}>
                                                    <div className="headshot">
                                                        <img
                                                            src={el.headshot}
                                                            alt=""
                                                            srcSet=""
                                                        />
                                                    </div>

                                                    <div className="text">
                                                        <h4>{el.name}</h4>
                                                        <h4>{el.jobTitle}</h4>

                                                        <p>{el.company}</p>
                                                    </div>
                                                </CarouselItem>
                                            )
                                        })}
                                    </AliceCarousel>

                                    <div className="button-wrapper">
                                        <div
                                            className="next-btn"
                                            onClick={() => this.slidePrev()}
                                        >
                                            &lt;
                                        </div>
                                        <div
                                            className="next-btn"
                                            onClick={() => this.slideNext()}
                                        >
                                            &gt;
                                        </div>
                                    </div>
                                </CarouselWrapper>
                            </div>
                        )
                    }}
                </Query> */}
            </div>
        )
    }
}

export default AdvisoryCom

import React from 'react'
import PropTypes from 'prop-types'
import adcomData from './adComData'

import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

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
        767: { items: 3 },
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
                <h2 data-aos="my-anim">Advisory Committee</h2>

                <div className="text-content">
                    <h3>
                        You probably want dome text here? Vivamus magna justo,
                        lacinia eget consectetur sed, convallis at tellus. Sed
                        porttitor lectus nibh.
                    </h3>
                </div>

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
                        {adcomData.map((el, i) => {
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
    }
}

export default AdvisoryCom

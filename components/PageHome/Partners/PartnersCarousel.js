import React from 'react'
import { Query } from 'react-apollo'
import { GET_PARTNERS_WHERE_FRONTPAGE } from '../../../lib/graphqlTags'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from 'styled-components'
import Link from 'next/link'
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

    .logo {
        width: 200px;
        max-width: 200px;
        height: 200px;
        padding: 20px;
        margin: 0 auto 20px;
        overflow: hidden;
        @media (min-width: 1024px) {
            width: unset;
        }
        img {
            object-fit: scale-down;
            height: 100%;
        }
    }
`

class SponsorsCarousel extends React.Component {
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
        return (
            <Query query={GET_PARTNERS_WHERE_FRONTPAGE}>
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    if (!data) return <p>No Data</p>
                    const { partners } = data

                    return (
                        <div>
                            <h3>
                                To see all partners{' '}
                                <Link href="/partners">
                                    <span
                                        className="link-green"
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        <a href="">click here</a>
                                    </span>
                                </Link>
                            </h3>
                            <CarouselWrapper>
                                <AliceCarousel
                                    responsive={this.responsive}
                                    mouseDragEnabled
                                    autoPlayInterval={2500}
                                    autoPlay={true}
                                    fadeOutAnimation={true}
                                    dotsDisabled={true}
                                    buttonsDisabled={true}
                                    slideToIndex={this.state.currentIndex}
                                    onSlideChanged={this.onSlideChanged}
                                >
                                    {partners.map((partner, i) => {
                                        return (
                                            <CarouselItem key={i}>
                                                <div className="logo">
                                                    <img
                                                        src={partner.logo}
                                                        alt=""
                                                        srcSet=""
                                                    />
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
            </Query>
        )
    }
}

export default SponsorsCarousel

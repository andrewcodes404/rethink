import React from 'react'
import { Query } from 'react-apollo'
import { GET_ADV_COMS } from '../../lib/graphqlTags'
import { CarouselWrapper, CarouselItem } from '../style/globalComps'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class AdvisoryCom extends React.Component {
    responsive = {
        0: { items: 1 },
        500: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 },
    }

    state = {
        currentIndex: 0,
    }

    slideTo = i => this.setState({ currentIndex: i })

    onSlideChanged = e => this.setState({ currentIndex: e.item })

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

    render() {
        // const handleOnDragStart = e => e.preventDefault()
        return (
            <div className="text-content-title-wrapper" id="partners">
                <h2 data-aos="my-anim">ReThinkTank</h2>

                <div className="text-content">
                    <h3>
                        ReThink is supported by a group of cross-sector sustainability leaders who form the advisory
                        panel and provide key insight into how ReThink can best address the needs of the Hong Kong
                        ecosystem.
                    </h3>

                    <p>
                        Meeting as a group and individually, the ReThink 2021 Advisory Committee members have advised on
                        current and future trends, conference topics, potential speakers and cutting-edge
                        technology/suppliers for the Innovation Showcase.
                    </p>
                </div>

                <Query query={GET_ADV_COMS}>
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
                                                        <img src={el.headshot} alt="" srcSet="" />
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
                                        <div className="next-btn" onClick={() => this.slidePrev()}>
                                            &lt;
                                        </div>
                                        <div className="next-btn" onClick={() => this.slideNext()}>
                                            &gt;
                                        </div>
                                    </div>
                                </CarouselWrapper>
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default AdvisoryCom

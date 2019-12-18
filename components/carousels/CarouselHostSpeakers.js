import React from 'react'
import { Query } from 'react-apollo'
import { GET_HOSTSPEAKERS_WHERE_FRONTPAGE } from '../../lib/graphqlTags'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { CarouselWrapper, CarouselItem } from '../style/globalComps'

class hostSpeakersCarousel extends React.Component {
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

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

    render() {
        return (
            <Query query={GET_HOSTSPEAKERS_WHERE_FRONTPAGE}>
                {({ data, error, loading }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    if (!data) return <p>No Data</p>

                    const { hostSpeakers } = data

                    return (
                        <div>
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
                                    {hostSpeakers.map((hostSpeaker, i) => {
                                        return (
                                            <CarouselItem key={i}>
                                                <div className="headshot">
                                                    <img src={hostSpeaker.headshot} alt="" srcSet="" />
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
        )
    }
}

export default hostSpeakersCarousel
